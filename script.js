// =========================
// DATA PRODUK (Siap untuk Foto)
// =========================

const products = [
    // KERAMIK & GRANITE
    { id: 1, name: "Keramik 60x60", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik lantai ukuran 60x60 cm." },
    { id: 2, name: "Keramik 50x50", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik lantai ukuran 50x50 cm." },
    { id: 3, name: "Keramik 40x40", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik lantai ukuran 40x40 cm." },
    { id: 4, name: "Keramik 30x30", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik lantai ukuran 30x30 cm." },
    { id: 5, name: "Keramik 25x25", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik lantai ukuran 25x25 cm." },
    { id: 6, name: "Granite Tile 60x60", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Granite tile premium ukuran 60x60 cm." },
    { id: 7, name: "Granite Tile 80x80", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Granite tile premium ukuran 80x80 cm." },
    { id: 8, name: "Granite Tile 100x100", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Granite tile premium ukuran 100x100 cm." },
    { id: 9, name: "Granite Tile 60x120", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Granite tile premium ukuran 60x120 cm." },
    
    // PINTU, JENDELA & KUSEN
    { id: 10, name: "Pintu UPVC", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu UPVC untuk kebutuhan rumah." },
    { id: 11, name: "Pintu PVC", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu PVC untuk kebutuhan rumah." },
    { id: 12, name: "Pintu Panel", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu panel untuk rumah dan bangunan." },
    { id: 13, name: "Kusen Aluminium", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Kusen aluminium berkualitas." },
    { id: 14, name: "Jendela Aluminium", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Jendela aluminium untuk rumah." },

    // CAT & ALAT PELAPIS
    { id: 15, name: "Cat Tembok Interior", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat tembok untuk penggunaan interior." },
    { id: 16, name: "Cat Tembok Eksterior", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat eksterior tahan terhadap cuaca." },
    { id: 17, name: "Cat Kayu & Besi", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat untuk permukaan kayu dan besi." },
    { id: 18, name: "Roller Cat", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Roller untuk mengecat dinding." },

    // CLOSET, SHOWER & WATER HEATER
    { id: 19, name: "Closet Duduk", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Closet duduk untuk kamar mandi." },
    { id: 20, name: "Closet Jongkok", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Closet jongkok berkualitas." },
    { id: 21, name: "Shower Kamar Mandi", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Shower kamar mandi modern." },
    { id: 22, name: "Water Heater", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Pemanas air untuk kebutuhan rumah." },

    // PIPA & TOREN AIR
    { id: 23, name: "Pipa PVC 1/2 Inch", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Pipa PVC untuk instalasi air." },
    { id: 24, name: "Pipa PVC 3/4 Inch", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Pipa PVC ukuran 3/4 inch." },
    { id: 25, name: "Pipa PVC 1 Inch", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Pipa PVC ukuran 1 inch." },
    { id: 26, name: "Toren Air 250 Liter", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Toren air kapasitas 250 liter." },
    { id: 27, name: "Toren Air 500 Liter", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Toren air kapasitas 500 liter." },
    { id: 28, name: "Toren Air 750 Liter", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Toren air kapasitas 750 liter." },
    { id: 29, name: "Toren Air 1000 Liter", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Toren air kapasitas 1000 liter." },
    { id: 30, name: "Toren Air 2000 Liter", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Toren air kapasitas 2000 liter." },

    // BESI & BAJA RINGAN
    { id: 30, name: "Besi Beton 8mm", category: "Besi & Baja Ringan", image: "images/placeholder.jpg", description: "Besi beton ukuran 8 mm." },
    { id: 31, name: "Besi Beton 10mm", category: "Besi & Baja Ringan", image: "images/placeholder.jpg", description: "Besi beton ukuran 10 mm." },
    { id: 32, name: "Besi Beton 12mm", category: "Besi & Baja Ringan", image: "images/placeholder.jpg", description: "Besi beton ukuran 12 mm." },
    { id: 33, name: "Baja Ringan 75x75", category: "Besi & Baja Ringan", image: "images/placeholder.jpg", description: "Baja ringan profil 75x75." },
    { id: 34, name: "Atap Spandek", category: "Besi & Baja Ringan", image: "images/placeholder.jpg", description: "Atap Spandek." },
    { id: 35, name: "Atap Kodian", category: "Besi & Baja Ringan", image: "images/placeholder.jpg", description: "Atap Kodian." },

    // SEMEN & BAHAN BANGUNAN
    { id: 30, name: "Semen Conch", category: "Semen & Bahan Bangunan", image: "/Semen & Bahan Bangunan/Semen Conch.jpeg", description: "Semen untuk berbagai kebutuhan konstruksi." },
    { id: 31, name: "Semen Merdeka", category: "Semen & Bahan Bangunan", image: "/Semen & Bahan Bangunan/Semen Merdeka.jpeg", description: "Semen untuk berbagai kebutuhan konstruksi." },
    { id: 32, name: "Semen Padang", category: "Semen & Bahan Bangunan", image: "/Semen & Bahan Bangunan/Semen Padang.jpg", description: "Semen untuk pekerjaan bangunan." },
    { id: 33, name: "Pasir Bangunan", category: "Semen & Bahan Bangunan", image: "/Semen & Bahan Bangunan/Pasir Bangunan.jpg", description: "Pasir untuk campuran konstruksi." },
    { id: 34, name: "Batu Bata", category: "Semen & Bahan Bangunan", image: "/Semen & Bahan Bangunan/Batu Bata.jpg", description: "Batu bata untuk dinding bangunan." },

    // PERKAKAS, BAUT & AKSESORIS
    { id: 35, name: "Paku Bangunan", category: "Perkakas, Baut & Aksesoris", image: "images/placeholder.jpg", description: "Paku untuk berbagai kebutuhan bangunan." },
    { id: 36, name: "Baut Besi", category: "Perkakas, Baut & Aksesoris", image: "images/placeholder.jpg", description: "Baut untuk kebutuhan konstruksi." },
    { id: 37, name: "Obeng Set", category: "Perkakas, Baut & Aksesoris", image: "images/placeholder.jpg", description: "Set obeng untuk pekerjaan rumah." },
    { id: 38, name: "Tang Kombinasi", category: "Perkakas, Baut & Aksesoris", image: "images/placeholder.jpg", description: "Tang kombinasi untuk berbagai pekerjaan." }
];

const ADMIN_WA = "6285376765758";

// =========================
// TAMPILKAN PRODUK DENGAN TOMBOL WA OTOMATIS
// =========================

function displayProducts(productList = products) {
    const productContainer = document.getElementById("productList");
    if (!productContainer) return;

    if (productList.length === 0) {
        productContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #777;">
                Produk tidak ditemukan.
            </div>
        `;
        return;
    }

    productContainer.innerHTML = productList.map(product => {
        // Pesan otomatis yang akan terisi di WA pelanggan
        const textWA = encodeURIComponent(`Halo Mitra Riau Bangunan, saya mau tanya harga & stok untuk produk: *${product.name}*`);
        const linkWA = `https://wa.me/${ADMIN_WA}?text=${textWA}`;

        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200?text=Foto+Produk'" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="product-info">
                    <div class="product-category">
                        ${product.category}
                    </div>
                    <h3>${product.name}</h3>
                    <p class="product-description">
                        ${product.description}
                    </p>
                    <a href="${linkWA}" target="_blank" style="display: block; width: 100%; text-align: center; padding: 10px; margin-top: 10px; background-color: #25D366; color: white; border-radius: 6px; font-weight: bold; text-decoration: none; font-size: 13px;">
                        💬 Tanya Produk Ini
                    </a>
                </div>
            </div>
        `;
    }).join("");
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