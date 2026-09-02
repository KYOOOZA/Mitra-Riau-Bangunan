// =========================
// DATA PRODUK
// =========================

const products = [
    // KERAMIK & GRANITE
    { id: 1, name: "Keramik 60x60", category: "Keramik & Granite", unit: "dus", icon: "▦", description: "Keramik lantai ukuran 60x60 cm." },
    { id: 2, name: "Keramik 40x40", category: "Keramik & Granite", unit: "dus", icon: "▦", description: "Keramik lantai ukuran 40x40 cm." },
    { id: 3, name: "Keramik 30x30", category: "Keramik & Granite", unit: "dus", icon: "▦", description: "Keramik lantai ukuran 30x30 cm." },
    { id: 4, name: "Granite Tile 60x60", category: "Keramik & Granite", unit: "dus", icon: "▦", description: "Granite tile premium ukuran 60x60 cm." },

    // PINTU, JENDELA & KUSEN
    { id: 5, name: "Pintu PVC", category: "Pintu, Jendela, & Kusen", unit: "unit", icon: "🚪", description: "Pintu PVC untuk kebutuhan rumah." },
    { id: 6, name: "Pintu Panel", category: "Pintu, Jendela, & Kusen", unit: "unit", icon: "🚪", description: "Pintu panel untuk rumah dan bangunan." },
    { id: 7, name: "Kusen Aluminium", category: "Pintu, Jendela, & Kusen", unit: "unit", icon: "▣", description: "Kusen aluminium berkualitas." },
    { id: 8, name: "Jendela Aluminium", category: "Pintu, Jendela, & Kusen", unit: "unit", icon: "▣", description: "Jendela aluminium untuk rumah." },

    // CAT & ALAT PELAPIS
    { id: 9, name: "Cat Tembok Interior", category: "Cat & Alat Pelapis", unit: "kaleng", icon: "🎨", description: "Cat tembok untuk penggunaan interior." },
    { id: 10, name: "Cat Tembok Eksterior", category: "Cat & Alat Pelapis", unit: "kaleng", icon: "🎨", description: "Cat eksterior tahan terhadap cuaca." },
    { id: 11, name: "Cat Kayu & Besi", category: "Cat & Alat Pelapis", unit: "kaleng", icon: "🎨", description: "Cat untuk permukaan kayu dan besi." },
    { id: 12, name: "Roller Cat", category: "Cat & Alat Pelapis", unit: "pcs", icon: "🖌️", description: "Roller untuk mengecat dinding." },

    // CLOSET, SHOWER & WATER HEATER
    { id: 13, name: "Closet Duduk", category: "Closet, Shower, & Water Heater", unit: "unit", icon: "🚽", description: "Closet duduk untuk kamar mandi." },
    { id: 14, name: "Closet Jongkok", category: "Closet, Shower, & Water Heater", unit: "unit", icon: "🚽", description: "Closet jongkok berkualitas." },
    { id: 15, name: "Shower Kamar Mandi", category: "Closet, Shower, & Water Heater", unit: "unit", icon: "🚿", description: "Shower kamar mandi modern." },
    { id: 16, name: "Water Heater", category: "Closet, Shower, & Water Heater", unit: "unit", icon: "♨️", description: "Pemanas air untuk kebutuhan rumah." },

    // PIPA & TOREN AIR
    { id: 17, name: "Pipa PVC 1/2 Inch", category: "Pipa & Toren Air", unit: "batang", icon: "🔵", description: "Pipa PVC untuk instalasi air." },
    { id: 18, name: "Pipa PVC 3/4 Inch", category: "Pipa & Toren Air", unit: "batang", icon: "🔵", description: "Pipa PVC ukuran 3/4 inch." },
    { id: 19, name: "Pipa PVC 1 Inch", category: "Pipa & Toren Air", unit: "batang", icon: "🔵", description: "Pipa PVC ukuran 1 inch." },
    { id: 20, name: "Toren Air 500 Liter", category: "Pipa & Toren Air", unit: "unit", icon: "🛢️", description: "Toren air kapasitas 500 liter." },

    // BESI & BAJA RINGAN
    { id: 21, name: "Besi Beton 8mm", category: "Besi & Baja Ringan", unit: "batang", icon: "▰", description: "Besi beton ukuran 8 mm." },
    { id: 22, name: "Besi Beton 10mm", category: "Besi & Baja Ringan", unit: "batang", icon: "▰", description: "Besi beton ukuran 10 mm." },
    { id: 23, name: "Besi Beton 12mm", category: "Besi & Baja Ringan", unit: "batang", icon: "▰", description: "Besi beton ukuran 12 mm." },
    { id: 24, name: "Baja Ringan C75", category: "Besi & Baja Ringan", unit: "batang", icon: "▰", description: "Baja ringan profil C75." },

    // SEMEN & BAHAN BANGUNAN
    { id: 25, name: "Semen Tiga Roda", category: "Semen & Bahan Bangunan", unit: "sak", icon: "🧱", description: "Semen untuk berbagai kebutuhan konstruksi." },
    { id: 26, name: "Semen Padang", category: "Semen & Bahan Bangunan", unit: "sak", icon: "🧱", description: "Semen untuk pekerjaan bangunan." },
    { id: 27, name: "Pasir Bangunan", category: "Semen & Bahan Bangunan", unit: "m³", icon: "⛰️", description: "Pasir untuk campuran konstruksi." },
    { id: 28, name: "Batu Bata", category: "Semen & Bahan Bangunan", unit: "pcs", icon: "🧱", description: "Batu bata untuk dinding bangunan." },

    // PERKAKAS, BAUT & AKSESORIS
    { id: 29, name: "Paku Bangunan", category: "Perkakas, Baut & Aksesoris", unit: "kotak", icon: "🔩", description: "Paku untuk berbagai kebutuhan bangunan." },
    { id: 30, name: "Baut Besi", category: "Perkakas, Baut & Aksesoris", unit: "kotak", icon: "🔩", description: "Baut untuk kebutuhan konstruksi." },
    { id: 31, name: "Obeng Set", category: "Perkakas, Baut & Aksesoris", unit: "set", icon: "🪛", description: "Set obeng untuk pekerjaan rumah." },
    { id: 32, name: "Tang Kombinasi", category: "Perkakas, Baut & Aksesoris", unit: "pcs", icon: "🔧", description: "Tang kombinasi untuk berbagai pekerjaan." }
];

// =========================
// TAMPILKAN PRODUK (KATALOG MURNI)
// =========================

function displayProducts(productList = products) {
    const productContainer = document.getElementById("productList");
    if (!productContainer) return;

    if (productList.length === 0) {
        productContainer.innerHTML = `
            <div class="empty-cart" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #777;">
                Produk tidak ditemukan.
            </div>
        `;
        return;
    }

    productContainer.innerHTML = productList.map(product => `
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
            </div>
        </div>
    `).join("");
}

// =========================
// FILTER KATEGORI
// =========================

function filterProducts(category) {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";

    let filteredProducts = category === "Semua" 
        ? products 
        : products.filter(product => product.category === category);

    displayProducts(filteredProducts);

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.classList.remove("active");
        if (button.textContent.trim().toLowerCase() === category.toLowerCase()) {
            button.classList.add("active");
        }
    });

    const productSection = document.getElementById("produk");
    if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
    }
}

// =========================
// SEARCH PRODUK
// =========================

function searchProduct() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const keyword = input.value.toLowerCase().trim();
    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        );
    });

    displayProducts(filteredProducts);
}

// =========================
// INISIALISASI
// =========================

document.addEventListener("DOMContentLoaded", function() {
    displayProducts();
});