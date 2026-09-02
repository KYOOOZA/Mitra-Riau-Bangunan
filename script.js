// =========================
// KERANJANG
// =========================

let cart = [];


// Tambahkan produk ke keranjang
function addToCart(name, price) {

    const existingProduct = cart.find(
        item => item.name === name
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " berhasil ditambahkan ke keranjang!");
}


// Update tampilan keranjang
function updateCart() {

    const cartCount = document.getElementById("cart-count");

    const cartItems = document.getElementById("cartItems");

    const cartTotal = document.getElementById("cartTotal");


    // Hitung jumlah barang
    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });


    cartCount.textContent = totalItems;


    // Kalau kosong
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Keranjang masih kosong.
            </p>
        `;

        cartTotal.textContent = "Rp0";

        return;
    }


    // Tampilkan produk
    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ${item.quantity} ×
                        ${formatRupiah(item.price)}
                    </p>

                </div>

                <div>

                    <strong>
                        ${formatRupiah(itemTotal)}
                    </strong>

                    <button
                        onclick="removeFromCart(${index})"
                    >
                        Hapus
                    </button>

                </div>

            </div>

        `;

    });


    cartTotal.textContent =
        formatRupiah(total);
}


// Hapus produk
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// Format Rupiah
function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


// =========================
// MODAL KERANJANG
// =========================

function openCart() {

    document.getElementById(
        "cartModal"
    ).style.display = "flex";

}


function closeCart() {

    document.getElementById(
        "cartModal"
    ).style.display = "none";

}


// Tutup modal ketika klik luar
window.onclick = function(event) {

    const modal =
        document.getElementById("cartModal");

    if (event.target === modal) {

        closeCart();

    }

};


// =========================
// SEARCH PRODUK
// =========================

function searchProduct() {

    const input =
        document.getElementById("searchInput");

    const keyword =
        input.value.toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();


        if (name.includes(keyword)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// =========================
// CHECKOUT
// =========================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Keranjang masih kosong."
        );

        return;
    }


    alert(
        "Checkout berhasil dibuat! " +
        "Fitur pembayaran akan kita tambahkan nanti."
    );

}