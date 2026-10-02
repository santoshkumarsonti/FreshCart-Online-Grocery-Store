/* =========================================
   FRESHCART - COMPLETE JAVASCRIPT
   ONLINE GROCERY STORE
========================================= */


/* =========================================
   STORAGE
========================================= */

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveOrders(orders) {
    localStorage.setItem("orders", JSON.stringify(orders));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}


/* =========================================
   EMOJIS
========================================= */

function getProductEmoji(product) {

    const name =
        String(product.name || "").toLowerCase();

    const category =
        String(product.category || "").toLowerCase();

    if (name.includes("apple")) return "🍎";
    if (name.includes("banana")) return "🍌";
    if (name.includes("orange")) return "🍊";
    if (name.includes("mango")) return "🥭";
    if (name.includes("grape")) return "🍇";
    if (name.includes("watermelon")) return "🍉";
    if (name.includes("pineapple")) return "🍍";
    if (name.includes("strawberry")) return "🍓";

    if (name.includes("tomato")) return "🍅";
    if (name.includes("potato")) return "🥔";
    if (name.includes("carrot")) return "🥕";
    if (name.includes("onion")) return "🧅";
    if (name.includes("garlic")) return "🧄";
    if (name.includes("spinach")) return "🥬";

    if (name.includes("milk")) return "🥛";
    if (name.includes("cheese")) return "🧀";
    if (name.includes("curd")) return "🥣";

    if (name.includes("rice")) return "🍚";
    if (name.includes("bread")) return "🍞";
    if (name.includes("egg")) return "🥚";

    if (name.includes("chips")) return "🍟";
    if (name.includes("biscuit")) return "🍪";
    if (name.includes("chocolate")) return "🍫";
    if (name.includes("juice")) return "🧃";

    if (category === "fruits") return "🍎";
    if (category === "vegetables") return "🥬";
    if (category === "dairy") return "🥛";
    if (category === "snacks") return "🍪";
    if (category === "groceries") return "🛒";

    return "🛒";
}


/* =========================================
   SAFE HTML
========================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================
   DEFAULT ADMIN
========================================= */

function createDefaultAdmin() {

    let users = getUsers();

    const adminExists =
        users.some(
            user =>
                user.email ===
                "admin@freshcart.com"
        );

    if (!adminExists) {

        users.push({

            name: "FreshCart Admin",

            email: "admin@freshcart.com",

            password: "Admin@123",

            role: "admin"

        });

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
    }
}

createDefaultAdmin();


/* =========================================
   DEFAULT PRODUCTS
========================================= */

function createDefaultProducts() {

    let products = getProducts();

    if (products.length === 0) {

        products = [

            {
                id: 1,
                name: "Apple",
                price: 120,
                stock: 20,
                category: "Fruits"
            },

            {
                id: 2,
                name: "Banana",
                price: 60,
                stock: 30,
                category: "Fruits"
            },

            {
                id: 3,
                name: "Orange",
                price: 90,
                stock: 25,
                category: "Fruits"
            },

            {
                id: 4,
                name: "Mango",
                price: 100,
                stock: 20,
                category: "Fruits"
            },

            {
                id: 5,
                name: "Tomato",
                price: 40,
                stock: 30,
                category: "Vegetables"
            },

            {
                id: 6,
                name: "Potato",
                price: 35,
                stock: 25,
                category: "Vegetables"
            },

            {
                id: 7,
                name: "Carrot",
                price: 50,
                stock: 25,
                category: "Vegetables"
            },

            {
                id: 8,
                name: "Milk",
                price: 60,
                stock: 20,
                category: "Dairy"
            },

            {
                id: 9,
                name: "Cheese",
                price: 150,
                stock: 15,
                category: "Dairy"
            },

            {
                id: 10,
                name: "Curd",
                price: 50,
                stock: 20,
                category: "Dairy"
            },

            {
                id: 11,
                name: "Chips",
                price: 30,
                stock: 30,
                category: "Snacks"
            },

            {
                id: 12,
                name: "Biscuits",
                price: 40,
                stock: 30,
                category: "Snacks"
            },

            {
                id: 13,
                name: "Chocolate",
                price: 80,
                stock: 25,
                category: "Snacks"
            }

        ];

        saveProducts(products);
    }
}

createDefaultProducts();


/* =========================================
   SIGNUP
========================================= */

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name")
                .value.trim();

            const email =
                document.getElementById("email")
                .value.trim()
                .toLowerCase();

            const password =
                document.getElementById("password")
                .value;

            const roleElement =
                document.getElementById("role");

            const role =
                roleElement
                    ? roleElement.value
                    : "user";

            let users = getUsers();

            const existingUser =
                users.find(
                    user =>
                        user.email === email
                );

            if (existingUser) {

                alert(
                    "Email already registered!"
                );

                return;
            }

            if (role !== "user") {

                alert(
                    "Please signup as a user."
                );

                return;
            }

            users.push({

                name: name,

                email: email,

                password: password,

                role: "user"

            });

            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );

            alert(
                "Signup successful!"
            );

            window.location.href =
                "login.html";
        }
    );
}


/* =========================================
   LOGIN
========================================= */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const email =
                document.getElementById(
                    "loginEmail"
                )
                .value
                .trim()
                .toLowerCase();

            const password =
                document.getElementById(
                    "loginPassword"
                )
                .value;

            const users = getUsers();

            const user =
                users.find(
                    user =>
                        user.email === email &&
                        user.password === password
                );

            if (!user) {

                alert(
                    "Invalid email or password!"
                );

                return;
            }

            localStorage.setItem(
                "currentUser",
                JSON.stringify({

                    name: user.name,

                    email: user.email,

                    role: user.role

                })
            );

            if (user.role === "admin") {

                window.location.href =
                    "admin.html";

            } else {

                window.location.href =
                    "user.html";
            }
        }
    );
}


/* =========================================
   AUTHENTICATION
========================================= */

function requireRole(role) {

    const currentUser =
        getCurrentUser();

    if (
        !currentUser ||
        currentUser.role !== role
    ) {

        alert(
            "Please login with the correct account."
        );

        window.location.href =
            "login.html";

        return false;
    }

    return true;
}


/* =========================================
   USER PAGE
========================================= */

const productContainer =
    document.getElementById(
        "productContainer"
    );

if (productContainer) {

    if (requireRole("user")) {

        displayProducts();

        updateCartDisplay();

        createUserOrderSection();

        displayMyOrders();
    }
}


/* =========================================
   CREATE USER ORDER SECTION
   AUTOMATICALLY
========================================= */

function createUserOrderSection() {

    let orderSection =
        document.getElementById(
            "myOrders"
        );

    if (orderSection) return;


    orderSection =
        document.createElement(
            "section"
        );

    orderSection.id =
        "myOrders";

    orderSection.innerHTML = `

        <div
            style="
                margin-top:40px;
                padding:25px;
                background:white;
                border-radius:15px;
                box-shadow:0 4px 15px
                rgba(0,0,0,0.10);
            "
        >

            <h2
                style="
                    margin-bottom:20px;
                "
            >
                📦 My Orders
            </h2>

            <div id="userOrderList">

            </div>

        </div>

    `;


    /*
       Put the order section after
       the main content.
    */

    const parent =
        productContainer.parentElement;

    if (parent) {

        parent.appendChild(
            orderSection
        );
    }
}


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(searchText = "") {

    const container =
        document.getElementById(
            "productContainer"
        );

    if (!container) return;

    const products =
        getProducts();

    const filteredProducts =
        products.filter(
            product =>
                product.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    )
        );

    container.innerHTML = "";

    if (filteredProducts.length === 0) {

        container.innerHTML =
            "<p>🔍 No products found.</p>";

        return;
    }

    filteredProducts.forEach(
        product => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "product-card";

            const emoji =
                getProductEmoji(product);

            card.innerHTML = `

                <div
                    style="
                        font-size:55px;
                        text-align:center;
                        margin:10px;
                    "
                >
                    ${emoji}
                </div>

                <h3>
                    ${escapeHTML(
                        product.name
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        product.category
                    )}
                </p>

                <p>
                    💰 ₹${product.price}
                </p>

                <p>
                    📦 Stock: ${product.stock}
                </p>

                <button
                    class="btn add-to-cart"
                    data-id="${product.id}"
                    ${
                        product.stock <= 0
                            ? "disabled"
                            : ""
                    }
                >
                    ${
                        product.stock <= 0
                            ? "❌ Out of Stock"
                            : "🛒 Add to Cart"
                    }
                </button>

            `;

            container.appendChild(card);
        }
    );
}


/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            displayProducts(
                searchInput.value
            );

        }
    );
}


/* =========================================
   ADD TO CART
========================================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.classList.contains(
                "add-to-cart"
            )
        ) {
            return;
        }

        const productId =
            Number(
                event.target.dataset.id
            );

        const products =
            getProducts();

        const product =
            products.find(
                item =>
                    Number(item.id) ===
                    productId
            );

        if (!product) return;

        if (product.stock <= 0) {

            alert(
                "Product is out of stock!"
            );

            return;
        }

        let cart =
            getCart();

        const existingItem =
            cart.find(
                item =>
                    Number(item.id) ===
                    productId
            );

        if (existingItem) {

            if (
                existingItem.quantity >=
                product.stock
            ) {

                alert(
                    "Maximum available stock reached!"
                );

                return;
            }

            existingItem.quantity++;

        } else {

            cart.push({

                id: product.id,

                name: product.name,

                price: product.price,

                quantity: 1

            });
        }

        saveCart(cart);

        updateCartDisplay();

        alert(
            getProductEmoji(product) +
            " " +
            product.name +
            " added to cart!"
        );
    }
);


/* =========================================
   CART DISPLAY
========================================= */

function updateCartDisplay() {

    const cartContainer =
        document.getElementById(
            "cartContainer"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );

    if (!cartContainer) return;

    const cart =
        getCart();

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML =
            "<p>🛒 Your cart is empty.</p>";

        if (cartTotal) {

            cartTotal.textContent =
                "0";
        }

        return;
    }

    let total = 0;

    cart.forEach(
        item => {

            total +=
                Number(item.price) *
                Number(item.quantity);

            const product =
                getProducts().find(
                    p =>
                        Number(p.id) ===
                        Number(item.id)
                );

            const emoji =
                product
                    ? getProductEmoji(product)
                    : "🛒";

            const cartItem =
                document.createElement(
                    "div"
                );

            cartItem.className =
                "cart-item";

            cartItem.innerHTML = `

                <div>

                    <strong>
                        ${emoji}
                        ${escapeHTML(
                            item.name
                        )}
                    </strong>

                    <p>
                        ₹${item.price}
                        ×
                        ${item.quantity}
                    </p>

                </div>

                <div>

                    <button
                        class="decrease-btn"
                        data-id="${item.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="increase-btn"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                    <button
                        class="remove-btn"
                        data-id="${item.id}"
                    >
                        🗑️ Remove
                    </button>

                </div>

            `;

            cartContainer.appendChild(
                cartItem
            );
        }
    );

    if (cartTotal) {

        cartTotal.textContent =
            total.toFixed(2);
    }
}


/* =========================================
   CART CONTROLS
========================================= */

document.addEventListener(
    "click",
    function(event) {

        const id =
            Number(
                event.target.dataset.id
            );

        if (!id) return;

        let cart =
            getCart();


        if (
            event.target.classList.contains(
                "increase-btn"
            )
        ) {

            const item =
                cart.find(
                    item =>
                        Number(item.id) === id
                );

            const product =
                getProducts().find(
                    product =>
                        Number(product.id) === id
                );

            if (
                item &&
                product &&
                item.quantity <
                product.stock
            ) {

                item.quantity++;

            } else {

                alert(
                    "Maximum stock reached."
                );
            }
        }


        if (
            event.target.classList.contains(
                "decrease-btn"
            )
        ) {

            const item =
                cart.find(
                    item =>
                        Number(item.id) === id
                );

            if (item) {

                item.quantity--;

                if (
                    item.quantity <= 0
                ) {

                    cart =
                        cart.filter(
                            item =>
                                Number(item.id) !== id
                        );
                }
            }
        }


        if (
            event.target.classList.contains(
                "remove-btn"
            )
        ) {

            cart =
                cart.filter(
                    item =>
                        Number(item.id) !== id
                );
        }


        saveCart(cart);

        updateCartDisplay();
    }
);


/* =========================================
   DELIVERY FORM
========================================= */

function showDeliveryForm() {

    let modal =
        document.getElementById(
            "deliveryModal"
        );


    if (!modal) {

        modal =
            document.createElement(
                "div"
            );

        modal.id =
            "deliveryModal";

        modal.innerHTML = `

            <div
                style="
                    background:white;
                    padding:30px;
                    border-radius:15px;
                    width:420px;
                    max-width:90%;
                "
            >

                <h2>
                    🚚 Delivery Details
                </h2>

                <label>
                    📍 Delivery Address
                </label>

                <textarea
                    id="deliveryAddress"
                    rows="4"
                    placeholder="Enter full delivery address"
                    style="
                        width:100%;
                        margin-top:8px;
                        padding:10px;
                    "
                ></textarea>

                <br><br>

                <label>
                    📅 Delivery Date
                </label>

                <input
                    type="date"
                    id="deliveryDate"
                    style="
                        width:100%;
                        padding:10px;
                    "
                >

                <br><br>

                <label>
                    🕐 Delivery Time
                </label>

                <select
                    id="deliveryTime"
                    style="
                        width:100%;
                        padding:10px;
                    "
                >

                    <option value="">
                        Select delivery time
                    </option>

                    <option>
                        8:00 AM - 11:00 AM
                    </option>

                    <option>
                        11:00 AM - 2:00 PM
                    </option>

                    <option>
                        2:00 PM - 5:00 PM
                    </option>

                    <option>
                        5:00 PM - 8:00 PM
                    </option>

                </select>

                <br><br>

                <button
                    id="confirmDeliveryBtn"
                    class="btn"
                >
                    ✅ Place Order
                </button>

                <button
                    id="cancelDeliveryBtn"
                    class="btn"
                >
                    ❌ Cancel
                </button>

            </div>

        `;

        document.body.appendChild(
            modal
        );


        modal.style.cssText = `

            position:fixed;

            inset:0;

            background:
                rgba(0,0,0,0.65);

            display:flex;

            align-items:center;

            justify-content:center;

            z-index:9999;

        `;
    }


    modal.style.display =
        "flex";


    const dateInput =
        document.getElementById(
            "deliveryDate"
        );


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    dateInput.min =
        today;

    dateInput.value =
        today;


    document.getElementById(
        "confirmDeliveryBtn"
    ).onclick =
        function() {

            const address =
                document.getElementById(
                    "deliveryAddress"
                )
                .value
                .trim();

            const date =
                document.getElementById(
                    "deliveryDate"
                ).value;

            const time =
                document.getElementById(
                    "deliveryTime"
                ).value;


            if (!address) {

                alert(
                    "Please enter your delivery address."
                );

                return;
            }


            if (!date) {

                alert(
                    "Please select delivery date."
                );

                return;
            }


            if (!time) {

                alert(
                    "Please select delivery time."
                );

                return;
            }


            placeOrder(
                address,
                date,
                time
            );


            modal.style.display =
                "none";
        };


    document.getElementById(
        "cancelDeliveryBtn"
    ).onclick =
        function() {

            modal.style.display =
                "none";
        };
}


/* =========================================
   CHECKOUT
========================================= */

const checkoutBtn =
    document.getElementById(
        "checkoutBtn"
    );

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        function() {

            const cart =
                getCart();

            if (cart.length === 0) {

                alert(
                    "Your cart is empty!"
                );

                return;
            }

            showDeliveryForm();
        }
    );
}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder(
    address,
    deliveryDate,
    deliveryTime
) {

    const cart =
        getCart();

    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;
    }


    let products =
        getProducts();


    /* CHECK STOCK */

    for (
        const cartItem of cart
    ) {

        const product =
            products.find(
                p =>
                    Number(p.id) ===
                    Number(cartItem.id)
            );

        if (
            !product ||
            Number(cartItem.quantity) >
            Number(product.stock)
        ) {

            alert(
                "Some products have insufficient stock."
            );

            return;
        }
    }


    /* COPY PRODUCTS INTO ORDER */

    const orderItems =
        cart.map(
            item => ({

                id: item.id,

                name: item.name,

                price:
                    Number(item.price),

                quantity:
                    Number(item.quantity)

            })
        );


    /* TOTAL */

    let total = 0;

    orderItems.forEach(
        item => {

            total +=
                item.price *
                item.quantity;

        }
    );


    /* REDUCE STOCK */

    orderItems.forEach(
        item => {

            const product =
                products.find(
                    p =>
                        Number(p.id) ===
                        Number(item.id)
                );

            if (product) {

                product.stock -=
                    item.quantity;
            }
        }
    );


    saveProducts(
        products
    );


    const currentUser =
        getCurrentUser();


    let orders =
        getOrders();


    const newOrder = {

        id:
            Date.now(),

        userName:
            currentUser
                ? currentUser.name
                : "Unknown",

        userEmail:
            currentUser
                ? currentUser.email
                : "Unknown",

        items:
            orderItems,

        total:
            total,

        status:
            "Placed",

        address:
            address,

        deliveryDate:
            deliveryDate,

        deliveryTime:
            deliveryTime,

        date:
            new Date().toLocaleString()
    };


    orders.push(
        newOrder
    );


    saveOrders(
        orders
    );


    localStorage.removeItem(
        "cart"
    );


    alert(
        "✅ Order placed successfully!\n\n" +
        "💰 Total: ₹" +
        total.toFixed(2)
    );


    updateCartDisplay();

    displayProducts();

    displayMyOrders();
}


/* =========================================
   USER ORDER LIST
========================================= */

function displayMyOrders() {

    let container =
        document.getElementById(
            "userOrderList"
        );


    /*
       If userOrderList doesn't exist,
       create it.
    */

    if (!container) {

        createUserOrderSection();

        container =
            document.getElementById(
                "userOrderList"
            );
    }


    if (!container) return;


    const currentUser =
        getCurrentUser();


    if (!currentUser) return;


    const orders =
        getOrders().filter(
            order =>
                order.userEmail ===
                currentUser.email
        );


    container.innerHTML = "";


    if (orders.length === 0) {

        container.innerHTML = `

            <div
                style="
                    padding:20px;
                    text-align:center;
                    border:1px dashed #ccc;
                    border-radius:10px;
                "
            >

                <h3>
                    📭 No Orders Yet
                </h3>

                <p>
                    Your placed orders
                    will appear here.
                </p>

            </div>

        `;

        return;
    }


    /*
       Newest order first
    */

    orders
        .slice()
        .reverse()
        .forEach(
            order => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "user-order-card";


                card.style.cssText = `

                    padding:20px;

                    margin-bottom:20px;

                    border:
                        1px solid #ddd;

                    border-radius:12px;

                    background:#fafafa;

                `;


                let productsHTML =
                    "";


                if (
                    order.items &&
                    order.items.length > 0
                ) {

                    order.items.forEach(
                        item => {

                            const emoji =
                                getProductEmoji(
                                    {
                                        name:
                                            item.name,
                                        category:
                                            ""
                                    }
                                );


                            const quantity =
                                Number(
                                    item.quantity
                                );


                            const price =
                                Number(
                                    item.price
                                );


                            const itemTotal =
                                price *
                                quantity;


                            productsHTML += `

                                <div
                                    style="
                                        display:flex;
                                        justify-content:space-between;
                                        align-items:center;
                                        padding:10px;
                                        margin:6px 0;
                                        background:white;
                                        border-radius:8px;
                                    "
                                >

                                    <div>

                                        <strong>

                                            ${emoji}

                                            ${escapeHTML(
                                                item.name
                                            )}

                                        </strong>

                                        <br>

                                        <small>

                                            ₹${price}
                                            ×
                                            ${quantity}

                                        </small>

                                    </div>


                                    <strong>

                                        ₹${itemTotal.toFixed(2)}

                                    </strong>

                                </div>

                            `;
                        }
                    );

                } else {

                    productsHTML =
                        "<p>❌ Product details unavailable.</p>";
                }


                /* STATUS STYLE */

                let statusEmoji =
                    "📦";


                if (
                    order.status ===
                    "Packed"
                ) {

                    statusEmoji =
                        "📦";

                } else if (
                    order.status ===
                    "Shipped"
                ) {

                    statusEmoji =
                        "🚚";

                } else if (
                    order.status ===
                    "Out for Delivery"
                ) {

                    statusEmoji =
                        "🛵";

                } else if (
                    order.status ===
                    "Delivered"
                ) {

                    statusEmoji =
                        "✅";

                } else if (
                    order.status ===
                    "Cancelled"
                ) {

                    statusEmoji =
                        "❌";
                }


                card.innerHTML = `

                    <div
                        style="
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            margin-bottom:15px;
                        "
                    >

                        <h3>

                            📦 Order #${order.id}

                        </h3>


                        <strong>

                            ${statusEmoji}

                            ${escapeHTML(
                                order.status ||
                                "Placed"
                            )}

                        </strong>

                    </div>


                    <h4>
                        🛍️ Products
                    </h4>


                    ${productsHTML}


                    <hr>


                    <p>

                        💰
                        <strong>
                            Total:
                        </strong>

                        ₹${Number(
                            order.total
                        ).toFixed(2)}

                    </p>


                    <p>

                        📍
                        <strong>
                            Delivery Address:
                        </strong>

                        <br>

                        ${escapeHTML(
                            order.address ||
                            "Not provided"
                        )}

                    </p>


                    <p>

                        📅
                        <strong>
                            Delivery Date:
                        </strong>

                        ${escapeHTML(
                            order.deliveryDate ||
                            "Not selected"
                        )}

                    </p>


                    <p>

                        🕐
                        <strong>
                            Delivery Time:
                        </strong>

                        ${escapeHTML(
                            order.deliveryTime ||
                            "Not selected"
                        )}

                    </p>


                    <p>

                        📝
                        <strong>
                            Ordered On:
                        </strong>

                        ${escapeHTML(
                            order.date ||
                            ""
                        )}

                    </p>

                `;


                container.appendChild(
                    card
                );
            }
        );
}


/* =========================================
   USER LOGOUT
========================================= */

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function() {

            localStorage.removeItem(
                "currentUser"
            );

            window.location.href =
                "login.html";

        }
    );
}


/* =========================================
   ADMIN PAGE
========================================= */

const adminProductList =
    document.getElementById(
        "adminProductList"
    );


if (adminProductList) {

    if (requireRole("admin")) {

        displayAdminProducts();

        updateAdminDashboard();

        displayAdminOrders();
    }
}


/* =========================================
   ADMIN DASHBOARD
========================================= */

function updateAdminDashboard() {

    const totalProducts =
        document.getElementById(
            "totalProducts"
        );

    const totalOrders =
        document.getElementById(
            "totalOrders"
        );

    const totalUsers =
        document.getElementById(
            "totalUsers"
        );


    if (totalProducts) {

        totalProducts.textContent =
            getProducts().length;
    }


    if (totalOrders) {

        totalOrders.textContent =
            getOrders().length;
    }


    if (totalUsers) {

        totalUsers.textContent =
            getUsers().filter(
                user =>
                    user.role === "user"
            ).length;
    }
}


/* =========================================
   ADMIN ADD PRODUCT
========================================= */

const productForm =
    document.getElementById(
        "productForm"
    );


if (productForm) {

    productForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            if (!requireRole("admin"))
                return;


            const name =
                document.getElementById(
                    "productName"
                )
                .value
                .trim();


            const price =
                Number(
                    document.getElementById(
                        "productPrice"
                    ).value
                );


            const stock =
                Number(
                    document.getElementById(
                        "productStock"
                    ).value
                );


            const category =
                document.getElementById(
                    "productCategory"
                ).value;


            if (
                !name ||
                price < 0 ||
                stock < 0 ||
                !category
            ) {

                alert(
                    "Please enter valid product details."
                );

                return;
            }


            let products =
                getProducts();


            products.push({

                id:
                    Date.now(),

                name:
                    name,

                price:
                    price,

                stock:
                    stock,

                category:
                    category

            });


            saveProducts(
                products
            );


            alert(
                "✅ Product added successfully!"
            );


            productForm.reset();


            displayAdminProducts();

            updateAdminDashboard();

        }
    );
}


/* =========================================
   ADMIN PRODUCT LIST
========================================= */

function displayAdminProducts() {

    const container =
        document.getElementById(
            "adminProductList"
        );


    if (!container) return;


    const products =
        getProducts();


    container.innerHTML =
        "<h3>📦 Product List</h3>";


    if (products.length === 0) {

        container.innerHTML +=
            "<p>No products available.</p>";

        return;
    }


    products.forEach(
        product => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "cart-item";


            const emoji =
                getProductEmoji(
                    product
                );


            item.innerHTML = `

                <div>

                    <strong>

                        ${emoji}

                        ${escapeHTML(
                            product.name
                        )}

                    </strong>

                    <p>

                        📂 Category:
                        ${escapeHTML(
                            product.category
                        )}

                        <br>

                        💰 Price:
                        ₹${product.price}

                        <br>

                        📦 Stock:
                        ${product.stock}

                    </p>

                </div>


                <div>

                    <button
                        class="admin-edit-btn"
                        data-id="${product.id}"
                    >
                        ✏️ Edit
                    </button>


                    <button
                        class="admin-delete-btn"
                        data-id="${product.id}"
                    >
                        🗑️ Delete
                    </button>

                </div>

            `;


            container.appendChild(
                item
            );
        }
    );
}


/* =========================================
   ADMIN EDIT / DELETE
========================================= */

document.addEventListener(
    "click",
    function(event) {


        if (
            event.target.classList.contains(
                "admin-delete-btn"
            )
        ) {

            if (!requireRole("admin"))
                return;


            const id =
                Number(
                    event.target.dataset.id
                );


            let products =
                getProducts();


            products =
                products.filter(
                    product =>
                        Number(product.id) !==
                        id
                );


            saveProducts(
                products
            );


            displayAdminProducts();

            updateAdminDashboard();


            alert(
                "🗑️ Product deleted."
            );
        }


        if (
            event.target.classList.contains(
                "admin-edit-btn"
            )
        ) {

            if (!requireRole("admin"))
                return;


            const id =
                Number(
                    event.target.dataset.id
                );


            let products =
                getProducts();


            const product =
                products.find(
                    product =>
                        Number(product.id) ===
                        id
                );


            if (!product) return;


            const newName =
                prompt(
                    "Enter new product name:",
                    product.name
                );


            if (
                newName === null ||
                !newName.trim()
            )
                return;


            const newPrice =
                prompt(
                    "Enter new price:",
                    product.price
                );


            const newStock =
                prompt(
                    "Enter new stock:",
                    product.stock
                );


            const price =
                Number(newPrice);


            const stock =
                Number(newStock);


            if (
                !Number.isFinite(price) ||
                !Number.isFinite(stock) ||
                price < 0 ||
                stock < 0
            ) {

                alert(
                    "Invalid price or stock."
                );

                return;
            }


            product.name =
                newName.trim();


            product.price =
                price;


            product.stock =
                stock;


            saveProducts(
                products
            );


            displayAdminProducts();

            updateAdminDashboard();


            alert(
                "✅ Product updated."
            );
        }

    }
);


/* =========================================
   ADMIN ORDER LIST
========================================= */

function displayAdminOrders() {

    let container =
        document.getElementById(
            "adminOrders"
        );


    if (!container) {

        container =
            document.getElementById(
                "orderList"
            );
    }


    if (!container) return;


    const orders =
        getOrders();


    container.innerHTML =
        "<h3>📋 Customer Orders</h3>";


    if (orders.length === 0) {

        container.innerHTML +=
            "<p>📭 No orders available.</p>";

        return;
    }


    orders
        .slice()
        .reverse()
        .forEach(
            order => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "cart-item";


                let productsHTML =
                    "";


                order.items.forEach(
                    orderItem => {

                        const emoji =
                            getProductEmoji(
                                {
                                    name:
                                        orderItem.name
                                }
                            );


                        const itemTotal =
                            Number(
                                orderItem.price
                            ) *
                            Number(
                                orderItem.quantity
                            );


                        productsHTML += `

                            <div
                                style="
                                    padding:10px;
                                    margin:5px 0;
                                    background:#fafafa;
                                    border-radius:8px;
                                    display:flex;
                                    justify-content:space-between;
                                "
                            >

                                <span>

                                    ${emoji}

                                    ${escapeHTML(
                                        orderItem.name
                                    )}

                                    ×
                                    ${orderItem.quantity}

                                </span>


                                <strong>

                                    ₹${itemTotal.toFixed(2)}

                                </strong>

                            </div>

                        `;
                    }
                );


                item.innerHTML = `

                    <div
                        style="
                            width:100%;
                        "
                    >

                        <h3>
                            📦 Order #${order.id}
                        </h3>


                        <p>

                            👤
                            <strong>
                                Customer:
                            </strong>

                            ${escapeHTML(
                                order.userName ||
                                "Unknown"
                            )}

                        </p>


                        <p>

                            📧
                            <strong>
                                Email:
                            </strong>

                            ${escapeHTML(
                                order.userEmail
                            )}

                        </p>


                        <hr>


                        <h4>
                            🛍️ Ordered Products
                        </h4>


                        ${productsHTML}


                        <hr>


                        <p>

                            💰
                            <strong>
                                Total:
                            </strong>

                            ₹${Number(
                                order.total
                            ).toFixed(2)}

                        </p>


                        <p>

                            📍
                            <strong>
                                Address:
                            </strong>

                            <br>

                            ${escapeHTML(
                                order.address
                            )}

                        </p>


                        <p>

                            📅
                            <strong>
                                Delivery Date:
                            </strong>

                            ${escapeHTML(
                                order.deliveryDate
                            )}

                        </p>


                        <p>

                            🕐
                            <strong>
                                Delivery Time:
                            </strong>

                            ${escapeHTML(
                                order.deliveryTime
                            )}

                        </p>


                        <p>

                            📊
                            <strong>
                                Status:
                            </strong>

                            ${escapeHTML(
                                order.status
                            )}

                        </p>


                        <button
                            class="admin-status-btn"
                            data-id="${order.id}"
                        >

                            🔄 Update Status

                        </button>

                    </div>

                `;


                container.appendChild(
                    item
                );
            }
        );
}


/* =========================================
   UPDATE ORDER STATUS
========================================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.classList.contains(
                "admin-status-btn"
            )
        ) {
            return;
        }


        if (!requireRole("admin"))
            return;


        const id =
            Number(
                event.target.dataset.id
            );


        let orders =
            getOrders();


        const order =
            orders.find(
                order =>
                    Number(order.id) ===
                    id
            );


        if (!order) return;


        const newStatus =
            prompt(

                "Enter status:\n\n" +

                "Placed\n" +
                "Packed\n" +
                "Shipped\n" +
                "Out for Delivery\n" +
                "Delivered\n" +
                "Cancelled",

                order.status

            );


        if (
            !newStatus ||
            !newStatus.trim()
        )
            return;


        order.status =
            newStatus.trim();


        saveOrders(
            orders
        );


        displayAdminOrders();


        alert(
            "✅ Order status updated."
        );
    }
);


/* =========================================
   ADMIN LOGOUT
========================================= */

const adminLogoutBtn =
    document.getElementById(
        "adminLogoutBtn"
    );


if (adminLogoutBtn) {

    adminLogoutBtn.addEventListener(
        "click",
        function() {

            localStorage.removeItem(
                "currentUser"
            );

            window.location.href =
                "login.html";

        }
    );
}


/* =========================================
   DISPLAY USER NAME
========================================= */

function displayUserName() {

    const currentUser =
        getCurrentUser();

    if (!currentUser) return;


    const elements =
        document.querySelectorAll(
            ".user-name"
        );


    elements.forEach(
        element => {

            element.textContent =
                currentUser.name;

        }
    );
}


displayUserName();


/* =========================================
   FINAL INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const currentUser =
            getCurrentUser();


        if (
            currentUser &&
            currentUser.role === "user"
        ) {

            if (
                document.getElementById(
                    "productContainer"
                )
            ) {

                createUserOrderSection();

                displayMyOrders();
            }
        }


        if (
            currentUser &&
            currentUser.role === "admin"
        ) {

            if (
                document.getElementById(
                    "adminOrders"
                )
            ) {

                displayAdminOrders();
            }
        }

    }
);