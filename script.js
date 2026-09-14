// =========================
// DATA PRODUK
// =========================

const products = [
    // KERAMIK & GRANITE
    { 
        id: 1, 
        name: "Keramik Lantai", 
        category: "Keramik & Granite", 
        image: "images/placeholder.jpg", 
        description: "Keramik lantai berkualitas untuk interior rumah.",
        sizes: ["25x25 cm", "30x30 cm", "40x40 cm", "50x50 cm", "60x60 cm"]
    },
    { 
        id: 2, 
        name: "Granite Tile Premium", 
        category: "Keramik & Granite", 
        image: "images/placeholder.jpg", 
        description: "Granite tile premium pilihan untuk kesan mewah.",
        sizes: ["60x60 cm", "80x80 cm", "100x100 cm", "60x120 cm"]
    },
    
    // PINTU, JENDELA & KUSEN
    { id: 3, name: "Pintu UPVC", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu UPVC tahan air untuk kebutuhan rumah." },
    { id: 4, name: "Pintu PVC", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu PVC kokoh untuk kamar mandi." },
    { id: 5, name: "Pintu Panel", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu panel elegan untuk rumah dan bangunan." },
    { id: 6, name: "Kusen Aluminium", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Kusen aluminium anti rayap dan tahan lama." },
    { id: 7, name: "Jendela Aluminium", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Jendela aluminium modern untuk rumah." },

    // CAT & ALAT PELAPIS
    { 
        id: 8, 
        name: "Cat Tembok Interior", 
        category: "Cat & Alat Pelapis", 
        image: "images/placeholder.jpg", 
        description: "Cat tembok halus untuk penggunaan interior.",
        sizes: ["5 kg", "25 kg"]
    },
    { 
        id: 9, 
        name: "Cat Tembok Eksterior", 
        category: "Cat & Alat Pelapis", 
        image: "images/placeholder.jpg", 
        description: "Cat eksterior tahan cuaca ekstrem dan anti jamur.",
        sizes: ["5 kg", "25 kg"]
    },

    // PIPA & TOREN AIR
    { 
        id: 16, 
        name: "Pipa PVC", 
        category: "Pipa & Toren Air", 
        image: "images/placeholder.jpg", 
        description: "Pipa PVC standar saluran air rumah dan bangunan.",
        sizes: ["1/2 Inch", "3/4 Inch", "1 Inch", "2 Inch", "3 Inch", "4 Inch"]
    },
    { 
        id: 17, 
        name: "Toren Air / Tangki Air", 
        category: "Pipa & Toren Air", 
        image: "images/placeholder.jpg", 
        description: "Toren air penampungan anti lumut.",
        sizes: ["250 Liter", "500 Liter", "750 Liter", "1000 Liter", "2000 Liter"]
    },

    // BESI & BAJA RINGAN
    { 
        id: 18, 
        name: "Besi Beton Ulir", 
        category: "Besi & Baja Ringan", 
        image: "besi/Besi Beton Ulir.jpeg", 
        description: "Besi beton ulir SNI untuk struktur pondasi konstruksi.",
        sizes: ["6 mm", "8 mm", "10 mm", "12 mm", "16 mm"]
    },
    { 
        id: 19, 
        name: "Besi Beton Polos", 
        category: "Besi & Baja Ringan", 
        image: "besi/Besi Beton Polos.jpeg", 
        description: "Besi beton polos SNI untuk kebutuhan cor dan konstruksi.",
        sizes: ["6 mm", "8 mm", "10 mm", "12 mm", "16 mm"]
    },

    // PERKAKAS, BAUT & AKSESORIS
    { 
        id: 31, 
        name: "Paku Bangunan", 
        category: "Perkakas, Baut & Aksesoris", 
        image: "perkakas/Paku Bangunan.jpg", 
        description: "Paku besi kuat untuk berbagai kebutuhan bangunan.",
        sizes: ["1 Inci", "2 Inci", "3 Inci", "4 Inci", "5 Inci"]
    }
];

const ADMIN_WA = "6285376765758";

// =========================
// TAMPILKAN PRODUK
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
        const imagePath = encodeURI(product.image);

        // Buat elemen Dropdown jika produk memiliki properti sizes
        let sizeSelectHTML = "";
        if (product.sizes && product.sizes.length > 0) {
            const options = product.sizes.map(size => `<option value="${size}">${size}</option>`).join("");
            sizeSelectHTML = `
                <div style="margin: 10px 0 15px 0; background-color: #f8f9fa; padding: 8px 10px; border-radius: 6px; border: 1px solid #e9ecef;">
                    <label style="display: block; font-size: 11px; font-weight: bold; color: #495057; margin-bottom: 4px; text-transform: uppercase;">Pilih Ukuran / Tipe:</label>
                    <select id="size-${product.id}" style="width: 100%; padding: 8px 10px; border: 1px solid #ced4da; border-radius: 5px; font-size: 13px; color: #212529; background-color: #ffffff; cursor: pointer;">
                        ${options}
                    </select>
                </div>
            `;
        }

        return `
            <div class="product-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div class="product-image">
                    <img src="${imagePath}" alt="${product.name}" onerror="this.onerror=null; this.src='https://dummyimage.com/400x300/e2e2e2/000000.png&text=Gambar+Tidak+Tersedia';" loading="lazy">
                </div>
                <div class="product-info" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                    <div>
                        <div class="product-category">
                            ${product.category}
                        </div>
                        <h3>${product.name}</h3>
                        <p class="product-description">
                            ${product.description}
                        </p>
                    </div>

                    <div>
                        ${sizeSelectHTML}

                        <button onclick="askProduct(${product.id})" style="display: block; width: 100%; text-align: center; padding: 10px; background-color: #25D366; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 13px;">
                            💬 Tanya Produk Ini
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// =========================
// FUNGSI TANYA KE WHATSAPP
// =========================

function askProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let sizeInfo = "";
    const selectEl = document.getElementById(`size-${productId}`);
    if (selectEl) {
        sizeInfo = ` (Ukuran: ${selectEl.value})`;
    }

    const textWA = encodeURIComponent(`Halo Mitra Riau Bangunan, saya mau tanya harga & stok untuk produk: *${product.name}*${sizeInfo}`);
    const linkWA = `https://wa.me/${ADMIN_WA}?text=${textWA}`;

    window.open(linkWA, "_blank");
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
        const hasMatchingSize = product.sizes ? product.sizes.some(s => s.toLowerCase().includes(keyword)) : false;
        return (
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword) ||
            hasMatchingSize
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