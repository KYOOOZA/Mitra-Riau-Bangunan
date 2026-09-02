// =========================
// DATA PRODUK
// =========================

const products = [
    // =========================
    // KERAMIK & GRANITE
    // =========================
    {
        id: 1,
        name: "Keramik 60x60",
        category: "Keramik & Granite",
        price: 125000,
        unit: "dus",
        icon: "▦",
        description: "Keramik lantai ukuran 60x60 cm."
    },
    {
        id: 2,
        name: "Keramik 40x40",
        category: "Keramik & Granite",
        price: 95000,
        unit: "dus",
        icon: "▦",
        description: "Keramik lantai ukuran 40x40 cm."
    },
    {
        id: 3,
        name: "Keramik 30x30",
        category: "Keramik & Granite",
        price: 75000,
        unit: "dus",
        icon: "▦",
        description: "Keramik lantai ukuran 30x30 cm."
    },
    {
        id: 4,
        name: "Granite Tile 60x60",
        category: "Keramik & Granite",
        price: 185000,
        unit: "dus",
        icon: "▦",
        description: "Granite tile premium ukuran 60x60 cm."
    },

    // =========================
    // PINTU, JENDELA & KUSEN
    // =========================
    {
        id: 5,
        name: "Pintu PVC",
        category: "Pintu, Jendela, & Kusen",
        price: 450000,
        unit: "unit",
        icon: "🚪",
        description: "Pintu PVC untuk kebutuhan rumah."
    },
    {
        id: 6,
        name: "Pintu Panel",
        category: "Pintu, Jendela, & Kusen",
        price: 750000,
        unit: "unit",
        icon: "🚪",
        description: "Pintu panel untuk rumah dan bangunan."
    },
    {
        id: 7,
        name: "Kusen Aluminium",
        category: "Pintu, Jendela, & Kusen",
        price: 350000,
        unit: "unit",
        icon: "▣",
        description: "Kusen aluminium berkualitas."
    },
    {
        id: 8,
        name: "Jendela Aluminium",
        category: "Pintu, Jendela, & Kusen",
        price: 550000,
        unit: "unit",
        icon: "▣",
        description: "Jendela aluminium untuk rumah."
    },

    // =========================
    // CAT & ALAT PELAPIS
    // =========================
    {
        id: 9,
        name: "Cat Tembok Interior",
        category: "Cat & Alat Pelapis",
        price: 125000,
        unit: "kaleng",
        icon: "🎨",
        description: "Cat tembok untuk penggunaan interior."
    },
    {
        id: 10,
        name: "Cat Tembok Eksterior",
        category: "Cat & Alat Pelapis",
        price: 145000,
        unit: "kaleng",
        icon: "🎨",
        description: "Cat eksterior tahan terhadap cuaca."
    },
    {
        id: 11,
        name: "Cat Kayu & Besi",
        category: "Cat & Alat Pelapis",
        price: 95000,
        unit: "kaleng",
        icon: "🎨",
        description: "Cat untuk permukaan kayu dan besi."
    },
    {
        id: 12,
        name: "Roller Cat",
        category: "Cat & Alat Pelapis",
        price: 35000,
        unit: "pcs",
        icon: "🖌️",
        description: "Roller untuk mengecat dinding."
    },

    // =========================
    // CLOSET, SHOWER & WATER HEATER
    // =========================
    {
        id: 13,
        name: "Closet Duduk",
        category: "Closet, Shower, & Water Heater",
        price: 1250000,
        unit: "unit",
        icon: "🚽",
        description: "Closet duduk untuk kamar mandi."
    },
    {
        id: 14,
        name: "Closet Jongkok",
        category: "Closet, Shower, & Water Heater",
        price: 350000,
        unit: "unit",
        icon: "🚽",
        description: "Closet jongkok berkualitas."
    },
    {
        id: 15,
        name: "Shower Kamar Mandi",
        category: "Closet, Shower, & Water Heater",
        price: 275000,
        unit: "unit",
        icon: "🚿",
        description: "Shower kamar mandi modern."
    },
    {
        id: 16,
        name: "Water Heater",
        category: "Closet, Shower, & Water Heater",
        price: 1850000,
        unit: "unit",
        icon: "♨️",
        description: "Pemanas air untuk kebutuhan rumah."
    },

    // =========================
    // PIPA & TOREN AIR
    // =========================
    {
        id: 17,
        name: "Pipa PVC 1/2 Inch",
        category: "Pipa & Toren Air",
        price: 25000,
        unit: "batang",
        icon: "🔵",
        description: "Pipa PVC untuk instalasi air."
    },
    {
        id: 18,
        name: "Pipa PVC 3/4 Inch",
        category: "Pipa & Toren Air",
        price: 32000,
        unit: "batang",
        icon: "🔵",
        description: "Pipa PVC ukuran 3/4 inch."
    },
    {
        id: 19,
        name: "Pipa PVC 1 Inch",
        category: "Pipa & Toren Air",
        price: 45000,
        unit: "batang",
        icon: "🔵",
        description: "Pipa PVC ukuran 1 inch."
    },
    {
        id: 20,
        name: "Toren Air 500 Liter",
        category: "Pipa & Toren Air",
        price: 1250000,
        unit: "unit",
        icon: "🛢️",
        description: "Toren air kapasitas 500 liter."
    },

    // =========================
    // BESI & BAJA RINGAN
    // =========================
    {
        id: 21,
        name: "Besi Beton 8mm",
        category: "Besi & Baja Ringan",
        price: 85000,
        unit: "batang",
        icon: "▰",
        description: "Besi beton ukuran 8 mm."
    },
    {
        id: 22,
        name: "Besi Beton 10mm",
        category: "Besi & Baja Ringan",
        price: 110000,
        unit: "batang",
        icon: "▰",
        description: "Besi beton ukuran 10 mm."
    },
    {
        id: 23,
        name: "Besi Beton 12mm",
        category: "Besi & Baja Ringan",
        price: 155000,
        unit: "batang",
        icon: "▰",
        description: "Besi beton ukuran 12 mm."
    },
    {
        id: 24,
        name: "Baja Ringan C75",
        category: "Besi & Baja Ringan",
        price: 95000,
        unit: "batang",
        icon: "▰",
        description: "Baja ringan profil C75."
    },

    // =========================
    // SEMEN & BAHAN BANGUNAN
    // =========================
    {
        id: 25,
        name: "Semen Tiga Roda",
        category: "Semen & Bahan Bangunan",
        price: 75000,
        unit: "sak",
        icon: "🧱",
        description: "Semen untuk berbagai kebutuhan konstruksi."
    },
    {
        id: 26,
        name: "Semen Padang",
        category: "Semen & Bahan Bangunan",
        price: 73000,
        unit: "sak",
        icon: "🧱",
        description: "Semen untuk pekerjaan bangunan."
    },
    {
        id: 27,
        name: "Pasir Bangunan",
        category: "Semen & Bahan Bangunan",
        price: 350000,
        unit: "m³",
        icon: "⛰️",
        description: "Pasir untuk campuran konstruksi."
    },
    {
        id: 28,
        name: "Batu Bata",
        category: "Semen & Bahan Bangunan",
        price: 1200,
        unit: "pcs",
        icon: "🧱",
        description: "Batu bata untuk dinding bangunan."
    },

    // =========================
    // PERKAKAS, BAUT & AKSESORIS
    // =========================
    {
        id: 29,
        name: "Paku Bangunan",
        category: "Perkakas, Baut & Aksesoris",
        price: 25000,
        unit: "kotak",
        icon: "🔩",
        description: "Paku untuk berbagai kebutuhan bangunan."
    },
    {
        id: 30,
        name: "Baut Besi",
        category: "Perkakas, Baut & Aksesoris",
        price: 30000,
        unit: "kotak",
        icon: "🔩",
        description: "Baut untuk kebutuhan konstruksi."
    },
    {
        id: 31,
        name: "Obeng Set",
        category: "Perkakas, Baut & Aksesoris",
        price: 75000,
        unit: "set",
        icon: "🪛",
        description: "Set obeng untuk pekerjaan rumah."
    },
    {
        id: 32,
        name: "Tang Kombinasi",
        category: "Perkakas, Baut & Aksesoris",
        price: 65000,
        unit: "pcs",
        icon: "🔧",
        description: "Tang kombinasi untuk berbagai pekerjaan."
    }
];


// =========================
// KERANJANG
// =========================

let cart = [];


// =========================
// TAMPILKAN PRODUK
// =========================

function displayProducts(productList = products) {

    const productContainer =
        document.getElementById("productList");

    if (!productContainer) return;

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <div class="empty-cart">
                Produk tidak ditemukan.
            </div>
        `;

        return;
    }

    productContainer.innerHTML = productList.map(product => {

        return `
            <div class="product-card">

                <div class="product-image">
                    ${product.icon}
                </div>

                <div class="product-info">

                    <div class="product-category">
                        ${product.category}
                    </div>

                    <h3>${product.name}</h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <div class="product-bottom">

                        <div>
                            <div class="price">
                                ${formatRupiah(product.price)}
                            </div>

                            <small>
                                / ${product.unit}
                            </small>
                        </div>

                        <button
                            class="add-cart"
                            onclick="addToCart('${product.name}', ${product.price})"
                            title="Tambah ke keranjang"
                        >
                            +
                        </button>

                    </div>

                </div>

            </div>
        `;

    }).join("");
}


// =========================
// FILTER KATEGORI
// =========================

function filterProducts(category) {

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {
        searchInput.value = "";
    }


    let filteredProducts;


    if (category === "Semua") {

        filteredProducts = products;

    } else {

        filteredProducts = products.filter(product =>
            product.category === category
        );

    }


    displayProducts(filteredProducts);

    // =========================
    // UPDATE TOMBOL FILTER
    // =========================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.textContent.trim() === category
        ) {
            button.classList.add("active");
        }

    });


    // =========================
    // SCROLL KE PRODUK
    // =========================

    const productSection =
        document.getElementById("produk");

    if (productSection) {

        productSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}

// =========================
// SEARCH PRODUK
// =========================

function searchProduct() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const keyword =
        input.value.toLowerCase().trim();

    const filteredProducts = products.filter(product => {

        return (
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        );

    });

    displayProducts(filteredProducts);
}


// =========================
// TAMBAHKAN KE KERANJANG
// =========================

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

    alert(
        name + " berhasil ditambahkan ke keranjang!"
    );
}


// =========================
// UPDATE KERANJANG
// =========================

function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartCount || !cartItems || !cartTotal) {
        return;
    }

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


// =========================
// HAPUS PRODUK DARI KERANJANG
// =========================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// =========================
// FORMAT RUPIAH
// =========================

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

    const modal =
        document.getElementById("cartModal");

    if (modal) {
        modal.style.display = "flex";
    }

    updateCart();
}


function closeCart() {

    const modal =
        document.getElementById("cartModal");

    if (modal) {
        modal.style.display = "none";
    }
}


// =========================
// TUTUP MODAL KETIKA KLIK LUAR
// =========================

window.onclick = function(event) {

    const modal =
        document.getElementById("cartModal");

    if (event.target === modal) {
        closeCart();
    }

};


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


// =========================
// JALANKAN SAAT HALAMAN DIBUKA
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts();

        updateCart();

    }
);

// =========================
// FILTER KATEGORI (UPDATED)
// =========================

function filterProducts(category) {

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.value = "";
    }

    let filteredProducts;

    if (category === "Semua") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product =>
            product.category === category
        );
    }

    displayProducts(filteredProducts);

    // =========================
    // UPDATE TOMBOL FILTER
    // =========================

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {
        button.classList.remove("active");

        // Perbaikan: gunakan .includes() agar perbandingan nama kategori presisi
        if (button.textContent.trim().toLowerCase() === category.toLowerCase()) {
            button.classList.add("active");
        }
    });

    // =========================
    // SCROLL KE PRODUK
    // =========================

    const productSection = document.getElementById("produk");

    if (productSection) {
        productSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// =========================
// CHECKOUT VIA TRANSFER BANK
// =========================

//function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong.");
        return;
    }

    // Nomor WA Admin Mitra Riau Bangunan
    const adminWA = "6285376765758"; 

    // Hitung total dan susun rincian barang
    let total = 0;
    let pesan = "Halo Mitra Riau Bangunan, saya ingin konfirmasi pembayaran transfer untuk pesanan berikut:\n\n";

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        pesan += `${index + 1}. ${item.name} (${item.quantity} ${item.unit || 'pcs'}) = ${formatRupiah(itemTotal)}\n`;
    });

    pesan += `\n*Total Transfer: ${formatRupiah(total)}*`;
    pesan += "\n\nBerikut saya lampirkan bukti transfernya. Mohon diproses, terima kasih!";

    // Link ke WhatsApp
    const urlWA = `https://wa.me/${adminWA}?text=${encodeURIComponent(pesan)}`;
    
    // Buka WhatsApp di tab baru
    window.open(urlWA, "_blank");
//}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong.");
        return;
    }

    const adminWA = "6285376765758"; // Ganti no WA toko

    let total = 0;
    let pesan = "Halo Mitra Riau Bangunan, saya mau konfirmasi pembayaran pesanan berikut:\n\n";

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        pesan += `${index + 1}. ${item.name} (${item.quantity} ${item.unit || 'pcs'}) = ${formatRupiah(itemTotal)}\n`;
    });

    pesan += `\n*Total Bayar: ${formatRupiah(total)}*`;
    pesan += "\n\nMetode Bayar: (QRIS / DANA / ShopeePay / Bank Transfer)";
    pesan += "\nBerikut saya sertakan bukti pembayarannya. Mohon diproses ya!";

    const urlWA = `https://wa.me/${adminWA}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWA, "_blank");
}