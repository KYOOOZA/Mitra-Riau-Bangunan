// =========================
// DATA PRODUK
// =========================

const products = [
  // KERAMIK & GRANITE
  { id: 1, name: "Keramik Lantai", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik lantai.", sizes: ["25x25", "30x30", "40x40", "50x50", "60x60"] },
  { id: 2, name: "Granite Lantai", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Granite lantai.", sizes: ["25x25", "30x30", "40x40", "50x50", "60x60"] },

  // PINTU, JENDELA & KUSEN
  { id: 3, name: "Pintu UPVC", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu UPVC untuk kebutuhan rumah." },
  { id: 4, name: "Pintu PVC", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu PVC untuk kebutuhan rumah." },
  { id: 5, name: "Pintu Panel", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu panel untuk rumah dan bangunan." },
  { id: 6, name: "Kusen Aluminium", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Kusen aluminium berkualitas." },
  { id: 7, name: "Jendela Aluminium", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Jendela aluminium untuk rumah." },

  // CAT & ALAT PELAPIS
  { id: 8, name: "Cat Tembok Interior", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat tembok untuk penggunaan interior." },
  { id: 9, name: "Cat Tembok Eksterior", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat eksterior tahan terhadap cuaca." },
  { id: 10, name: "Cat Kayu & Besi", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat untuk permukaan kayu dan besi." },
  { id: 11, name: "Roller Cat", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Roller untuk mengecat dinding." },

  // CLOSET, SHOWER & WATER HEATER
  { id: 12, name: "Closet Duduk", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Closet duduk untuk kamar mandi." },
  { id: 13, name: "Closet Jongkok", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Closet jongkok berkualitas." },
  { id: 14, name: "Shower Kamar Mandi", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Shower kamar mandi modern." },
  { id: 15, name: "Water Heater", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Pemanas air untuk kebutuhan rumah." },

  // PIPA & TOREN AIR
  { id: 16, name: "Pipa PVC", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Pipa PVC untuk instalasi air.", sizes: ["1/2 Inch", "3/4 Inch", "1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 17, name: "Toren Air", category: "Pipa & Toren Air", image: "images/placeholder.jpg", description: "Toren air kapasitas.", sizes: ["250 Liter", "500 Liter", "750 Liter", "1000 Liter", "2000 Liter"] },

  // BESI & BAJA RINGAN
  { id: 31, name: "Besi Beton Ulir", category: "Besi & Baja Ringan", image: "besi/Besi Beton Ulir.jpeg", description: "Besi beton ulir untuk kebutuhan konstruksi.", sizes: ["8mm", "10mm", "12mm", "16mm", "19mm"] },
  { id: 32, name: "Besi Beton Polos", category: "Besi & Baja Ringan", image: "besi/Besi Beton Polos.jpeg", description: "Besi beton polos untuk kebutuhan konstruksi.", sizes: ["8mm", "10mm", "12mm", "16mm", "19mm"] },
  { id: 33, name: "Baja Ringan 75x75", category: "Besi & Baja Ringan", image: "besi/Baja Ringan.jpeg", description: "Baja ringan profil 75x75." },
  { id: 34, name: "Atap Spandek", category: "Besi & Baja Ringan", image: "besi/Atap Spandek.jpg", description: "Atap Spandek." },
  { id: 35, name: "Atap Kodian", category: "Besi & Baja Ringan", image: "besi/Atap Kodian.jpg", description: "Atap Kodian." },

  // SEMEN & BAHAN BANGUNAN
  { id: 36, name: "Semen Conch", category: "Semen & Bahan Bangunan", image: "semen/Semen Conch.jpeg", description: "Semen untuk berbagai kebutuhan konstruksi." },
  { id: 37, name: "Semen Merdeka", category: "Semen & Bahan Bangunan", image: "semen/Semen Merdeka.jpeg", description: "Semen untuk berbagai kebutuhan konstruksi." },
  { id: 38, name: "Semen Padang", category: "Semen & Bahan Bangunan", image: "semen/Semen Padang.jpg", description: "Semen untuk pekerjaan bangunan." },
  { id: 39, name: "Pasir Pasang", category: "Semen & Bahan Bangunan", image: "semen/Pasir Pasang.jpg", description: "Pasir Pasang untuk campuran konstruksi." },
  { id: 40, name: "Pasir Cor", category: "Semen & Bahan Bangunan", image: "semen/Pasir Cor.jpeg", description: "Pasir Cor untuk pekerjaan konstruksi." },
  { id: 41, name: "Kerikil", category: "Semen & Bahan Bangunan", image: "semen/Kerikil.jpg", description: "Kerikil untuk campuran beton." },
  { id: 42, name: "Batu Bata", category: "Semen & Bahan Bangunan", image: "semen/Batu Bata.jpeg", description: "Batu bata untuk dinding bangunan." },
  { id: 43, name: "Gypsum", category: "Semen & Bahan Bangunan", image: "semen/Gypsum.jpeg", description: "Gypsum untuk dinding bangunan." },

  // PERKAKAS, BAUT & AKSESORIS
  { id: 44, name: "Paku Bangunan", category: "Perkakas, Baut & Aksesoris", image: "perkakas/Paku Bangunan.jpg", description: "Paku untuk berbagai kebutuhan bangunan." },
  { id: 45, name: "Baut Besi", category: "Perkakas, Baut & Aksesoris", image: "perkakas/Baut Besi.jpg", description: "Baut untuk kebutuhan konstruksi." },
  { id: 46, name: "Obeng Set", category: "Perkakas, Baut & Aksesoris", image: "perkakas/Obeng Set.jpg", description: "Set obeng untuk pekerjaan rumah." },
  { id: 47, name: "Tang Kombinasi", category: "Perkakas, Baut & Aksesoris", image: "perkakas/Tang Kombinasi.jpg", description: "Tang kombinasi untuk berbagai pekerjaan." }
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

    // Generate Dropdown HTML jika produk memiliki array sizes
    let sizeSelectHTML = "";
    if (product.sizes && product.sizes.length > 0) {
      const options = product.sizes.map(size => `<option value="${size}">${size}</option>`).join("");
      sizeSelectHTML = `
        <div style="margin: 10px 0 15px 0;">
          <label style="display: block; font-size: 11px; font-weight: bold; color: #555; margin-bottom: 4px; text-transform: uppercase;">Pilih Ukuran / Tipe:</label>
          <select id="size-${product.id}" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 13px; background-color: #fff; cursor: pointer;">
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
            <button onclick="askProduct(${product.id})" style="display: block; width: 100%; text-align: center; padding: 10px; background-color: #25D366; color: white; border: none; border-radius: 6px; font-weight: bold; font-size: 13px; cursor: pointer;">
              💬 Tanya Produk Ini
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// =========================
// FUNGSI KHUSUS KIRIM KE WA
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