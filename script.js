// =========================
// DATA PRODUK
// =========================

const products = [
  // KERAMIK & GRANITE
  { id: 1, name: "Granite Tile VELLINO", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Granite tile presisi tinggi untuk interior & eksterior.", sizes: ["60x60", "80x80", "60x120"] },
  { id: 2, name: "Granite Tile MAGIA Porcelain", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Granit porselen dengan kilap mewah tahan gores.", sizes: ["60x60", "60x120"] },
  { id: 3, name: "Keramik MULIA / ACCURA", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik berkualitas untuk lantai dan dinding.", sizes: ["20x20", "25x40", "40x40", "50x50"] },
  { id: 4, name: "Keramik KOIN / KOBE", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Pilihan keramik hemat dan tahan lama.", sizes: ["25x25", "30x30", "40x40"] },
  { id: 5, name: "Keramik ASIA TILE", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik lantai dan dinding interior modern.", sizes: ["20x20", "30x30", "40x40"] },
  { id: 6, name: "Keramik IKAD", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik dekoratif dinding dan lantai.", sizes: ["25x40", "30x60", "50x50"] },
  { id: 7, name: "Keramik KIA CERAMIC", category: "Keramik & Granite", image: "images/placeholder.jpg", description: "Keramik standar mutu tinggi tahan lama.", sizes: ["30x30", "40x40", "30x60"] },

  // PINTU, JENDELA & KUSEN
  { id: 8, name: "Pintu UPVC", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu UPVC kokoh dan anti-rayap." },
  { id: 9, name: "Pintu PVC Kamar Mandi", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Pintu PVC praktis tahan air." },
  { id: 10, name: "Pintu Kayu Solid Panel", category: "Pintu, Jendela, & Kusen", image: "pintu/ubud..jpg", description: "Pintu panel kayu natural elegan." },
  { id: 11, name: "Kusen Aluminium", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Kusen aluminium presisi dan tahan cuaca." },
  { id: 12, name: "Jendela Aluminium Minimalis", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description: "Jendela aluminium modern." },

  // CAT & ALAT PELAPIS
  { id: 13, name: "Cat Tembok Interior", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat tembok interior warna tahan lama." },
  { id: 14, name: "Cat Tembok Eksterior", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat eksterior pelindung cuaca ekstrem." },
  { id: 15, name: "Cat Kayu & Besi", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Cat kilap pelindung kayu dan besi." },
  { id: 16, name: "Roller Cat Tembok", category: "Cat & Alat Pelapis", image: "images/placeholder.jpg", description: "Roller kuas cat untuk aplikasi merata." },
  { id: 17, name: "Cat Semprot Diton / Pilox", category: "Cat & Alat Pelapis", image: "cat/diton.jpg", description: "Cat semprot aerosol praktis tanpa kuas.", color: ["Merah", "Biru", "Hitam", "Kuning", "Putih", "Coklat Muda"] },

  // CLOSET, SHOWER & WATER HEATER
  { id: 18, name: "Hand Shower Set MAKARZ", category: "Closet, Shower, & Water Heater", image: "closet/shower mandi.jpg", description: "Hand shower fleksibel dengan semprotan nyaman.", color: ["Krom Stainless", "Hitam Matte"] },
  { id: 19, name: "Jet Shower Bidet MAKARZ", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Semprotan kloset bidet anti-bocor.", color: ["Putih Standard", "Krom Stainless", "Hitam Modern"] },
  { id: 20, name: "Keran Mixer Shower POLYTHERM", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Keran pencampur air panas dingin untuk shower mandi." },
  { id: 21, name: "Keran Air Wastafel / Cuci Piring", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Keran fleksibel model angsa dan tancap.", sizes: ["Model Angsa Tembok", "Model Angsa Meja", "Keran Tancap 1/2 Inch"] },
  { id: 22, name: "Closet Duduk Volk", category: "Closet, Shower, & Water Heater", image: "closet/Closet Duduk Volk.jpeg", description: "Closet duduk hemat air dan mudah dibersihkan." },
  { id: 23, name: "Closet Duduk Toto", category: "Closet, Shower, & Water Heater", image: "closet/Closet Duduk Toto.jpg", description: "Closet duduk TOTO standar sanitari modern." },
  { id: 24, name: "Closet Jongkok Kia", category: "Closet, Shower, & Water Heater", image: "closet/Closet Jongkok Kia.jpeg", description: "Closet jongkok KIA porselen kuat." },
  { id: 25, name: "Water Heater Pemanas Air", category: "Closet, Shower, & Water Heater", image: "closet/water heater.png", description: "Pemanas air mandi aman dan hemat energi." },

  // PIPA & TOREN AIR
  { id: 26, name: "Pipa PVC Paralon", category: "Pipa & Toren Air", image: "pipa/pipajpg.jpg", description: "Pipa PVC saluran air bersih & buangan.", sizes: ["1/2 Inch", "3/4 Inch", "1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 27, name: "Toren Air Penguin", category: "Pipa & Toren Air", image: "pipa/Toren Penguin.jpg", description: "Tangki air penampungan anti-lumut.", sizes: ["250 Liter", "500 Liter", "750 Liter", "1000 Liter", "2000 Liter"] },

  // BESI & BAJA RINGAN
  { id: 28, name: "Besi Beton Ulir", category: "Besi & Baja Ringan", image: "besi/Besi Beton Ulir.jpeg", description: "Besi beton ulir untuk cor & struktur.", sizes: ["8mm", "10mm", "12mm", "16mm", "19mm"] },
  { id: 29, name: "Besi Beton Polos", category: "Besi & Baja Ringan", image: "besi/Besi Beton Polos.jpeg", description: "Besi beton polos standar konstruksi.", sizes: ["8mm", "10mm", "12mm", "16mm", "19mm"] },
  { id: 30, name: "Baja Ringan C Canal", category: "Besi & Baja Ringan", image: "besi/Baja Ringan.jpg", description: "Rangka baja ringan anti-karat 75x75." },
  { id: 31, name: "Atap Seng Gelombang / Spandek", category: "Besi & Baja Ringan", image: "besi/Atap Spandek.jpg", description: "Atap spandek galvalum tahan lama.", color: ["Merah", "Biru", "Hitam", "Silver"] },
  { id: 32, name: "Atap Kodian", category: "Besi & Baja Ringan", image: "besi/Atap Kodian.jpg", description: "Atap kodian berkualitas untuk pelindung rumah." },

  // SEMEN & BAHAN BANGUNAN
  { id: 33, name: "Semen Conch", category: "Semen & Bahan Bangunan", image: "semen/Semen Conch.jpeg", description: "Semen serbaguna adukan cepat keras." },
  { id: 34, name: "Semen Merdeka", category: "Semen & Bahan Bangunan", image: "semen/Semen Merdeka.jpeg", description: "Semen konstruksi bangunan tahan lama." },
  { id: 35, name: "Semen Padang", category: "Semen & Bahan Bangunan", image: "semen/Semen Padang.jpg", description: "Semen Padang bermutu tinggi." },
  { id: 36, name: "Pasir Pasang", category: "Semen & Bahan Bangunan", image: "semen/Pasir Pasang.jpg", description: "Pasir pasang untuk adukan plesteran." },
  { id: 37, name: "Pasir Cor", category: "Semen & Bahan Bangunan", image: "semen/Pasir Cor.jpeg", description: "Pasir cor beton konstruksi." },
  { id: 38, name: "Kerikil / Batu Split", category: "Semen & Bahan Bangunan", image: "semen/Kerikil.jpg", description: "Kerikil cor beton struktur." },
  { id: 39, name: "Batu Bata Merah", category: "Semen & Bahan Bangunan", image: "semen/Batu Bata.jpeg", description: "Batu bata pres pembatas dinding." },
  { id: 40, name: "Gypsum Eboard 8mm", category: "Semen & Bahan Bangunan", image: "semen/Gypsum.jpeg", description: "Papan gypsum plafon dan partisi." },
  { id: 41, name: "Dempul RJ Wall Putty", category: "Semen & Bahan Bangunan", image: "semen/Dempul RJ Wall Putty.jpg", description: "Dempul penambal celah dinding halus.", sizes: ["0,5 Kg", "1 Kg", "5 Kg", "25 Kg"] },

  // PERKAKAS, BAUT & AKSESORIS
  { id: 42, name: "Paku Kayu", category: "Perkakas, Baut & Aksesoris", image: "baut/Paku Kayu.jpg", description: "Paku bangunan bahan besi kuat.", sizes: ["1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 43, name: "Baut Roofing / Baja Ringan", category: "Perkakas, Baut & Aksesoris", image: "baut/Baut Roofing.jpg", description: "Baut roofing karet anti-bocor.", sizes: ["1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 44, name: "Obeng Set Multi", category: "Perkakas, Baut & Aksesoris", image: "baut/Obeng Set.jpg", description: "Set perkakas obeng presisi.", sizes: ["1 pcs", "5 pcs", "10 pcs"] },
  { id: 45, name: "Tang Kombinasi", category: "Perkakas, Baut & Aksesoris", image: "baut/Tang Kombinasi.jpg", description: "Tang kombinasi perkakas multifungsi." }
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

    // Filter varian warna yang tidak kosong string-nya
    const validColors = product.color ? product.color.filter(c => c.trim() !== "") : null;
    const variants = product.sizes || validColors;
    const labelTitle = validColors ? "Pilih Warna:" : "Pilih Ukuran / Tipe:";

    let variantSelectHTML = "";
    if (variants && variants.length > 0) {
      const options = variants.map(item => `<option value="${item}">${item}</option>`).join("");
      variantSelectHTML = `
        <div style="margin: 10px 0 15px 0;">
          <label style="display: block; font-size: 11px; font-weight: bold; color: #555; margin-bottom: 4px; text-transform: uppercase;">${labelTitle}</label>
          <select id="variant-${product.id}" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 13px; background-color: #fff; cursor: pointer;">
            ${options}
          </select>
        </div>
      `;
    }

    return `
      <div class="product-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div class="product-image">
          <img 
            src="${imagePath}" 
            alt="${product.name}" 
            onclick="openImageModal(this.src)" 
            style="cursor: pointer;" 
            title="Klik untuk memperbesar gambar" 
            onerror="this.onerror=null; this.src='https://dummyimage.com/400x300/e2e2e2/000000.png&text=Gambar+Tidak+Tersedia';" 
            loading="lazy"
          >
        </div>
        <div class="product-info" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between; padding: 15px;">
          <div>
            <div class="product-category" style="font-size: 11px; color: #1971c2; font-weight: bold; text-transform: uppercase;">
              ${product.category}
            </div>
            <h3 style="font-size: 16px; margin: 6px 0;">${product.name}</h3>
            <p class="product-description" style="font-size: 13px; color: #666; line-height: 1.4;">
              ${product.description}
            </p>
          </div>
          <div>
            ${variantSelectHTML}
            <button onclick="askProduct(${product.id})" style="display: block; width: 100%; text-align: center; padding: 10px; background-color: #25D366; color: white; border: none; border-radius: 6px; font-weight: bold; font-size: 13px; cursor: pointer; margin-top: 5px;">
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

  let variantInfo = "";
  const selectEl = document.getElementById(`variant-${productId}`);
  if (selectEl) {
    const label = (product.color && product.color.length > 0) ? "Warna" : "Ukuran/Tipe";
    variantInfo = ` (${label}: ${selectEl.value})`;
  }

  const textWA = encodeURIComponent(`Halo Mitra Riau Bangunan, saya mau tanya harga & stok untuk produk: *${product.name}*${variantInfo}`);
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
    const hasMatchingColor = product.color ? product.color.some(c => c.toLowerCase().includes(keyword)) : false;
    return (
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword) ||
      hasMatchingSize ||
      hasMatchingColor
    );
  });

  displayProducts(filteredProducts);
}

// =========================
// FUNGSI ZOOM GAMBAR (MODAL)
// =========================

function openImageModal(imgSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modal.style.display = "flex";
  }
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// =========================
// INISIALISASI
// =========================

document.addEventListener("DOMContentLoaded", function() {
  displayProducts();
});