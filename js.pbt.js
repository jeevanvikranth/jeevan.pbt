let loginEl = document.getElementById("login");
let registerEl = document.getElementById("register");
let containerEl = document.getElementById("container");
let sec2El = document.getElementById("section2");
let imageEl = document.getElementById("image");
let searchconEl = document.getElementById("search-con");
let searchEl = document.getElementById("search");
let bottomEl = document.getElementById("bottom");
let oneconEl = document.getElementById("one-container");
let newconEl = document.getElementById("new-container");

let conEl = document.createElement("div");
conEl.classList.add("new-container");
document.body.appendChild(conEl);
conEl.classList.add("remove1");

let regconEl = document.createElement("div");
regconEl.classList.add("new-container");
document.body.appendChild(regconEl);
regconEl.classList.add("remove1");

searchEl.addEventListener("keydown", function(event) {
    let finalCon = document.querySelector(".final-con");

    if (finalCon) {
        finalCon.remove();
    }

    finalCon = document.createElement("div");
    finalCon.classList.add("final-con");
    containerEl.appendChild(finalCon);

    const products = [{
            name: "Watch",
            imageSrc: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2023/04/Baume-and-Mercier-Riviera-1.jpg?tr=q-70",
        },
        {
            name: "Mobile",
            imageSrc: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
        },
        {
            name: "Television",
            imageSrc: "https://i.rtings.com/assets/products/j0LOzkOQ/samsung-qn90b-qled/design-small.jpg",
        },
        {
            name: "Men's clothing",
            imageSrc: "https://i.rtings.com/assets/products/j0LOzkOQ/samsung-qn90b-qled/design-small.jpg",
        },
        {
            name: "Sunglass",
            imageSrc: "https://cdn.shopify.com/s/files/1/0352/4571/9597/products/River_Black_Front_S_close-up.jpg?v=1670428447",
        },
        {
            name: "Footwear",
            imageSrc: "https://static3.azafashions.com/tr:w-575,dpr-2,e-sharpen/uploads/product/1-0094230001679323775.jpg",
        },
        {
            name: "Backpack",
            imageSrc: "https://safaribags.com/cdn/shop/products/Expand-9_BP_N_Red-02_1024x.jpg?v=1677749957",
        },
        {
            name: "Kitchen Appliance",
            imageSrc: "https://assets.macysassets.com/dyn_img/creativepages/101-heroQ7100006.jpg",
        },
        {
            name: "Kid's Wear",
            imageSrc: "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/21604555004027.jpg",
        },
        {
            name: "Grocery",
            imageSrc: "https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg",
        },
    ];

    if (event.key === "Enter") {
        sec2El.classList.remove("section-2");
        const searchValue = searchEl.value.toLowerCase();
        let foundProduct = null;

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            if (searchValue === product.name.toLowerCase()) {
                foundProduct = product;
                sec2El.classList.add("section-2");
                break;
            }
        }

        if (foundProduct) {
            for (let j = 0; j < 6; j++) {
                let card = document.createElement("div");
                card.classList.add("card");

                let img = document.createElement("img");
                img.src = foundProduct.imageSrc;
                img.classList.add("product-image");

                let name = document.createElement("h3");
                name.textContent = foundProduct.name + " " + (j + 1);

                card.appendChild(img);
                card.appendChild(name);
                finalCon.appendChild(card);
            }
        }
    }
});




function storeRegistrationDetails(fullName, email, password, mobileNumber) {
    let storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (storedUserDetails) {
        storedUserDetails.fullName = fullName || storedUserDetails.fullName;
        storedUserDetails.email = email || storedUserDetails.email;
        storedUserDetails.password = password || storedUserDetails.password;
        storedUserDetails.mobileNumber = mobileNumber || storedUserDetails.mobileNumber;
    } else {
        storedUserDetails = {
            fullName: fullName,
            email: email,
            password: password,
            mobileNumber: mobileNumber,
        };
    }

    localStorage.setItem("userDetails", JSON.stringify(storedUserDetails));
}


function login() {
    sec2El.classList.add("section-2");
    searchEl.classList.add("remove-search");
    containerEl.classList.remove("bg-container");
    document.body.removeChild(regconEl);
    conEl.classList.remove("remove1");
    searchconEl.classList.add("logo");
    oneconEl.classList.add("three");
    newconEl.classList.add("four");

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container");
    conEl.appendChild(labelContainer);

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", "inputId");
    labelEl.id = "labelId";
    labelEl.textContent = "Username (Email)";
    labelContainer.appendChild(labelEl);

    let inputEl = document.createElement("input");
    inputEl.type = "email";
    inputEl.id = "inputId";
    inputEl.classList.add("user");
    labelContainer.appendChild(inputEl);

    let labelEl1 = document.createElement("label");
    labelEl1.setAttribute("for", "inputId1");
    labelEl1.id = "labelId1";
    labelEl1.textContent = "Password";
    labelContainer.appendChild(labelEl1);

    let inputEl1 = document.createElement("input");
    inputEl1.type = "password";
    inputEl1.id = "inputId1";
    inputEl1.classList.add("user");
    labelContainer.appendChild(inputEl1);

    let btnEl = document.createElement("button");
    btnEl.textContent = "Login";
    btnEl.classList.add("btn");
    labelContainer.appendChild(btnEl);

    btnEl.addEventListener("click", function() {
        const email = inputEl.value;
        const password = inputEl1.value;

        const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

        if (
            storedUserDetails &&
            email === storedUserDetails.email &&
            password === storedUserDetails.password
        ) {

            alert("Login successful!");

        } else {

            alert("Invalid username or password!");
        }
    });
}

function register() {
    sec2El.classList.add("section-2");
    searchEl.classList.add("remove-search");
    containerEl.classList.remove("bg-container");
    document.body.removeChild(conEl);
    regconEl.classList.remove("remove1");
    searchconEl.classList.add("logo");

    let namelabelContainer = document.createElement("div");
    namelabelContainer.classList.add("name-label");
    regconEl.appendChild(namelabelContainer);

    let nameEl = document.createElement("label");
    nameEl.setAttribute("for", "reginputId");
    nameEl.id = "reglabelId";
    nameEl.classList.add("name-font");
    nameEl.textContent = "Full Name";
    namelabelContainer.appendChild(nameEl);

    let nameinputEl = document.createElement("input");
    nameinputEl.type = "text";
    nameinputEl.id = "nameinputId";
    nameinputEl.classList.add("name");
    namelabelContainer.appendChild(nameinputEl);

    let emailEl = document.createElement("label");
    emailEl.setAttribute("for", "nameinputId1");
    emailEl.id = "namelabelId1";
    emailEl.classList.add("name-font");
    emailEl.textContent = "E-mail";
    namelabelContainer.appendChild(emailEl);

    let nameinputEl1 = document.createElement("input");
    nameinputEl1.type = "email";
    nameinputEl1.id = "nameinputId1";
    nameinputEl1.classList.add("name");
    namelabelContainer.appendChild(nameinputEl1);

    let passEl = document.createElement("label");
    passEl.setAttribute("for", "nameinputId2");
    passEl.id = "namelabelId2";
    passEl.classList.add("name-font");
    passEl.textContent = "New Password";
    namelabelContainer.appendChild(passEl);

    let nameinputEl2 = document.createElement("input");
    nameinputEl2.type = "password";
    nameinputEl2.id = "nameinputId2";
    nameinputEl2.classList.add("name");
    namelabelContainer.appendChild(nameinputEl2);

    let repassEl = document.createElement("label");
    repassEl.setAttribute("for", "nameinputId3");
    repassEl.id = "namelabelId3";
    repassEl.classList.add("name-font");
    repassEl.textContent = "Re-enter Password";
    namelabelContainer.appendChild(repassEl);

    let nameinputEl3 = document.createElement("input");
    nameinputEl3.type = "password";
    nameinputEl3.id = "nameinputId3";
    nameinputEl3.classList.add("name");
    namelabelContainer.appendChild(nameinputEl3);

    let mblEl = document.createElement("label");
    mblEl.setAttribute("for", "nameinputId4");
    mblEl.id = "namelabelId4";
    mblEl.classList.add("name-font");
    mblEl.textContent = "Mobile Number";
    namelabelContainer.appendChild(mblEl);

    let nameinputEl4 = document.createElement("input");
    nameinputEl4.type = "text";
    nameinputEl4.id = "nameinputId4";
    nameinputEl4.classList.add("name");
    namelabelContainer.appendChild(nameinputEl4);

    let buttonEl = document.createElement("button");
    buttonEl.textContent = "Register";
    buttonEl.classList.add("btn");
    namelabelContainer.appendChild(buttonEl);

    buttonEl.addEventListener("click", function() {
        const fullName = nameinputEl.value;
        const email = nameinputEl1.value;
        const password = nameinputEl2.value;
        const reenterPassword = nameinputEl3.value;
        const mobileNumber = nameinputEl4.value;

        if (
            fullName === "" ||
            email === "" ||
            password === "" ||
            reenterPassword === "" ||
            mobileNumber === ""
        ) {
            alert("Please enter all the details.");
        } else if (password !== reenterPassword) {
            alert("Passwords do not match.");
        } else {
            alert("Registration successful!");
            storeRegistrationDetails(fullName, email, password, mobileNumber);
        }
    });
}