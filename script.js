// =========================
// DATA PRODUK (LENGKAP DENGAN PROPERTI UKURAN, SURFACE & MEREK)
// =========================

const products = [
  // GRANITE VELLINO (Dibuat per motif dengan layout horizontal)
  { id: 101, brand: "VELLINO", name: "RIVIERA AZUL", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Riviera Azul.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 102, brand: "VELLINO", name: "CAVERNA BEIGE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Caverna Beige.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 103, brand: "VELLINO", name: "OKLAHOMA GRIS", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Oklahoma Gris.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 104, brand: "VELLINO", name: "ZAPADA GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Zapada Grey.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 105, brand: "VELLINO", name: "VERICA WHITE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Verica White.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 106, brand: "VELLINO", name: "ENVIRE WHITE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Envire White.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 107, brand: "VELLINO", name: "VALLA WHITE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Valla White.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 108, brand: "VELLINO", name: "YUKON GRIS", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Vellino/Yukon Gris.jpg", description: "60 x 60 cm • Glossy / Polished" },
  { id: 109, brand: "VELLINO", name: "FLORENTIN BONE", category: "Keramik & Granite", size: "60x60", surface: "anti slip", image: "Vellino/Florentin Bone.jpg", description: "60 x 60 cm • Anti-Slip" },

  // GRANITE MAGIA (Dibuat per motif dengan layout horizontal)
  { id: 2, brand: "MAGIA", name: "ARUNA WHITE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Aruna White.jpg", description: "60 x 60 cm • Glossy" },
  { id: 3, brand: "MAGIA", name: "CIVITA WHITE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Civita White.jpg", description: "60 x 60cm • Glossy" },
  { id: 4, brand: "MAGIA", name: "CRISTELA CREAM", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Cristela Cream.jpg", description: "60 x 60 cm • Glossy" },    
  { id: 5, brand: "MAGIA", name: "DANICA GOLD", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Danica Gold.jpg", description: "60 x 60 cm • Glossy" },
  { id: 6, brand: "MAGIA", name: "HORTENSIA CREAM", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Hortensia Cream.jpg", description: "60 x 60 cm • Glossy" },
  { id: 7, brand: "MAGIA", name: "LOMBARDI GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Lombardi Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 8, brand: "MAGIA", name: "MATT CASTILO GREY", category: "Keramik & Granite", size: "60x60", surface: "matt", image: "Magia/Matt Castilo Grey.jpg", description: "60 x 60 cm • Matt" },
  { id: 9, brand: "MAGIA", name: "MATT GRIGIO CHARCOAL", category: "Keramik & Granite", size: "60x60", surface: "matt", image: "Magia/Matt Grigio Charcoal.jpg", description: "60 x 60 cm • Matt" },
  { id: 10, brand: "MAGIA", name: "NONSLIP CAMILO GRIGIO", category: "Keramik & Granite", size: "60x60", surface: "matt (anti-slip)", image: "Magia/Nonslip Camilo Grigio.jpg", description: "60 x 60 cm • Matt (Anti-Slip)" },
  { id: 11, brand: "MAGIA", name: "Rhine Gris", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Rhine Gris.jpg", description: "60 x 60 cm • Glossy" },
  { id: 12, brand: "MAGIA", name: "RUSTIC NOMADEN SMOKE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Magia/Rustic Nomaden Smoke.jpg", description: "60 x 60 cm • Glossy" },

  // GRANITE SIGNATURE (Dibuat per motif dengan layout horizontal)
  { id: 13, brand: "SIGNATURE", name: "ALTIMA GREEN", category: "Keramik & Granite", size: "25x40", surface: "glossy", image: "Signature/Altima Green.jpg", description: "25 x 40 cm • Glossy" },
  { id: 14, brand: "SIGNATURE", name: "BORGHINI BEIGE", category: "Keramik & Granite", size: "40x40", surface: "matt", image: "Signature/Borghini Beige.jpg", description: "40 x 40 cm • Matt" },
  { id: 15, brand: "SIGNATURE", name: "GALACIA GREY", category: "Keramik & Granite", size: "40x40", surface: "matt", image: "Signature/Galacia Grey.jpg", description: "40 x 40 cm • Matt" },
  { id: 16, brand: "SIGNATURE", name: "GASTON MEDIUM GREY", category: "Keramik & Granite", size: "50x50", surface: "anti-slip", image: "Signature/Gaston Medium Grey.jpg", description: "50 x 50 cm • Anti-Slip" },
  { id: 17, brand: "SIGNATURE", name: "GASTON SILVER", category: "Keramik & Granite", size: "50x50", surface: "matt", image: "Signature/Gaston Silver.jpg", description: "50 x 50 cm • Matt" },
  { id: 18, brand: "SIGNATURE", name: "GENIO BEIGE", category: "Keramik & Granite", size: "40x40", surface: "matt", image: "Signature/Genio Beige.jpg", description: "40 x 40 cm • Matt" },
  { id: 19, brand: "SIGNATURE", name: "GHANA STONE", category: "Keramik & Granite", size: "50x50", surface: "anti-slip", image: "Signature/Ghana Stone.jpg", description: "50 x 50 cm • Anti-Slip" },
  { id: 20, brand: "SIGNATURE", name: "GRAN SASO BEIGE", category: "Keramik & Granite", size: "40x40", surface: "matt", image: "Signature/Gran Saso Beige.jpg", description: "40 x 40 cm • Matt" },
  { id: 21, brand: "SIGNATURE", name: "IONIC GREY", category: "Keramik & Granite", size: "40x40", surface: "matt", image: "Signature/Ionic Grey.jpg", description: "40 x 40 cm • Matt" },
  { id: 22, brand: "SIGNATURE", name: "MUSE GREY", category: "Keramik & Granite", size: "40x40", surface: "matt", image: "Signature/Muse Grey.jpg", description: "40 x 40 cm • Matt" },
  { id: 23, brand: "SIGNATURE", name: "Paulo GREY", category: "Keramik & Granite", size: "40x40", surface: "matt", image: "Signature/Paula Grey.jpg", description: "40 x 40 cm • Matt" },
  { id: 24, brand: "SIGNATURE", name: "REC GARCIA DARK GREY", category: "Keramik & Granite", size: "50x50", surface: "matt", image: "Signature/Rec Garcia Dark Grey.jpg", description: "50 x 50 cm • Matt" },
  { id: 25, brand: "SIGNATURE", name: "REC GRANT GREY", category: "Keramik & Granite", size: "50x50", surface: "matt", image: "Signature/Rec Grant Grey.jpg", description: "50 x 50 cm • Matt" },
  { id: 26, brand: "SIGNATURE", name: "SIGNORA BEIGE", category: "Keramik & Granite", size: "50x50", surface: "matt", image: "Signature/Signora Beige.jpg", description: "50 x 50 cm • Matt" },

  // KOBIN (Dibuat per motif dengan layout horizontal)
  { id: 27, brand: "KOBIN", name: "BORGHINI GRIGIO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Borghini Grigio.jpg", description: "60 x 60 cm • Glossy" },
  { id: 28, brand: "KOBIN", name: "CANNES NERO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Cannes Nero.jpg", description: "60 x 60 cm • Glossy" },
  { id: 29, brand: "KOBIN", name: "CARRARA GRIGIO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Carrara Grigio.jpg", description: "60 x 60 cm • Glossy" },
  { id: 30, brand: "KOBIN", name: "COSMIC NERO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Cosmic Nero.jpg", description: "60 x 60 cm • Glossy" },
  { id: 31, brand: "KOBIN", name: "GLAS GLOW GRIGIO CHIARO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Glas glow Grigio Chiaro.jpg", description: "60 x 60 cm • Glossy" },
  { id: 32, brand: "KOBIN", name: "GLAS GLOW GRIGIO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Glas glow Grigio.jpg", description: "60 x 60 cm • Glossy" },
  { id: 33, brand: "KOBIN", name: "MARQUINA NERO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Marquina Nero.jpg", description: "60 x 60 cm • Glossy" },
  { id: 34, brand: "KOBIN", name: "ROCCA GRIGIO CHIARO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Rocca Grigio Chiaro.jpg", description: "60 x 60 cm • glossy" },
  { id: 35, brand: "KOBIN", name: "ROCCA GRIGIO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Rocca Grigio.jpg", description: "60 x 60 cm • Glossy" },
  { id: 36, brand: "KOBIN", name: "VIENA GRIGIO CHIARO", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Kobin/Viena Grigio Chiaro.jpg", description: "60 x 60 cm • Glossy" },

  // INFINITI (Dibuat per motif dengan layout horizontal)
  { id: 37, brand: "INFINITI", name: "ALPINE NATURAL", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Alpine Natural.jpg", description: "60 x 60 cm • Glossy" },
  { id: 38, brand: "INFINITI", name: "BRAVO BLACK", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Bravo Black.jpg", description: "60 x 60 cm • Glossy" },
  { id: 39, brand: "INFINITI", name: "RAIHARA GOLD", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Raihara Gold.jpg", description: "60 x 60 cm • Glossy" },
  { id: 40, brand: "INFINITI", name: "RAMSEY CREAM", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Ramsey Cream.jpg", description: "60 x 60 cm • Glossy" },
  { id: 41, brand: "INFINITI", name: "REGGIO CREAM", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Reggio Cream.jpg", description: "60 x 60 cm • Glossy" },
  { id: 42, brand: "INFINITI", name: "REGGIO GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Reggio Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 43, brand: "INFINITI", name: "RENATO GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Renato Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 44, brand: "INFINITI", name: "REVOLVER GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Revolver Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 45, brand: "INFINITI", name: "REYNOSA CREAM", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Reynosa Cream.jpg", description: "60 x 60 cm • Glossy" },
  { id: 46, brand: "INFINITI", name: "ROMANIA GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Romania Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 47, brand: "INFINITI", name: "ROQUE CREAM", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Roque Cream.jpg", description: "60 x 60 cm • Glossy" },
  { id: 48, brand: "INFINITI", name: "ROQUE GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Roque Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 49, brand: "INFINITI", name: "ROTTERDAM GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Rotterdam Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 50, brand: "INFINITI", name: "RUSSEL CREAM", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Russel Cream.jpg", description: "60 x 60 cm • Glossy" },
  { id: 51, brand: "INFINITI", name: "TERRAZO GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Terrazo Grey.jpg", description: "60 x 60 cm • Glossy" },
  { id: 52, brand: "INFINITI", name: "TERRAZO VENICE GREY", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Infiniti/Terrazo Venice Grey.jpg", description: "60 x 60 cm • Glossy" },

  //PLATINUM (Dibuat per motif dengan layout horizontal)
  { id: 53, brand: "PLATINUM", name: "ALPINE WHITE", category: "Keramik & Granite", size: "60x60", surface: "glossy", image: "Platinum/Alpine White.jpg", description: "60 x 60 cm • Glossy" },
  
  // PINTU, JENDELA & KUSEN
  //{ id: 8, brand: "GENERAL", name: "Pintu UPVC Minimalis", category: "Pintu, Jendela, & Kusen", image: "images/placeholder.jpg", description："Pintu UPVC kokoh dan anti-rayap." },
  //{ id：9, brand："GENERAL"، name："Pintu PVC Kamar Mandi"، category："Pintu, Jendela, & Kusen"، image："images/placeholder.jpg"، description："Pintu PVC praktis tahan air." },
  //{ id：10, brand："UBUD"، name："Pintu Kayu Solid Panel"، category："Pintu, Jendela, & Kusen"، image："pintu/ubud..jpg"، description："Pintu panel kayu natural elegan." },
  //{ id：11, brand："GENERAL"، name："Kusen Aluminium Presisi"، category："Pintu, Jendela, & Kusen"، image："images/placeholder.jpg"، description："Kusen aluminium presisi dan tahan cuaca." },
  //{ id：12, brand："GENERAL"، name："Jendela Aluminium Minimalis"، category："Pintu, Jendela, & Kusen"، image："images/placeholder.jpg"، description："Jendela aluminium modern." },

  // CAT & ALAT PELAPIS
  { id: 13, brand: "KANSAI", name: "Cat Ftalit Kansai", category: "Cat & Alat Pelapis", image: "cat/Cat Ftalit Kansai.jpg", description: "Cat Minyak khusus kayu dan besi." },
  { id: 14, brand: "PERMATA", name: "Cat Tembok Permata", category: "Cat & Alat Pelapis", image: "cat/Cat Permata.jpg", description: "Dinding Kokoh, Bebas Jamur, Indah Sepanjang Masa." },
  { id: 15, brand: "GENERAL", name: "Cat Kayu & Besi Kilap", category: "Cat & Alat Pelapis", image: "cat/Cat Kayu & Besi Kilap.jpg", description: "Cat kilap pelindung kayu dan besi." },
  { id: 16, brand: "GENERAL", name: "Roller Cat Tembok", category: "Cat & Alat Pelapis", image: "cat/Roller Cat.jpg", description: "Roller kuas cat untuk aplikasi merata." },
  { id: 17, brand: "DITON", name: "Cat Semprot Diton / Pilox", category: "Cat & Alat Pelapis", image: "cat/diton.jpg", description: "Cat semprot aerosol praktis tanpa kuas.", color: ["Merah", "Biru", "Hitam", "Kuning", "Putih", "Coklat Muda"] },

  // CLOSET, SHOWER & WATER HEATER
  { id: 18, brand: "MAKARZ", name: "Hand Shower Set MAKARZ", category: "Closet, Shower, & Water Heater", image: "closet/shower mandi.jpg", description: "Hand shower fleksibel dengan semprotan nyaman.", color: ["Krom Stainless", "Hitam Matte"] },
  { id: 19, brand: "MAKARZ", name: "Jet Shower Bidet MAKARZ", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Semprotan kloset bidet anti-bocor.", color: ["Putih Standard", "Krom Stainless", "Hitam Modern"] },
  { id: 20, brand: "POLYTHERM", name: "Keran Mixer Shower POLYTHERM", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Keran pencampur air panas dingin untuk shower mandi." },
  { id: 21, brand: "GENERAL", name: "Keran Air Wastafel / Cuci Piring", category: "Closet, Shower, & Water Heater", image: "images/placeholder.jpg", description: "Keran fleksibel model angsa dan tancap.", sizes: ["Model Angsa Tembok", "Model Angsa Meja", "Keran Tancap 1/2 Inch"] },
  { id: 22, brand: "VOLK", name: "Closet Duduk Volk", category: "Closet, Shower, & Water Heater", image: "closet/Closet Duduk Volk.jpeg", description: "Closet duduk hemat air dan mudah dibersihkan." },
  { id: 23, brand: "TOTO", name: "Closet Duduk Toto", category: "Closet, Shower, & Water Heater", image: "closet/Closet Duduk Toto.jpg", description: "Closet duduk TOTO standar sanitari modern." },
  { id: 24, brand: "KIA", name: "Closet Jongkok Kia", category: "Closet, Shower, & Water Heater", image: "closet/Closet Jongkok Kia.jpeg", description: "Closet jongkok KIA porselen kuat." },
  { id: 25, brand: "GENERAL", name: "Water Heater Pemanas Air", category: "Closet, Shower, & Water Heater", image: "closet/water heater.png", description: "Pemanas air mandi aman dan hemat energi." },

  // PIPA & TOREN AIR
  { id: 26, brand: "PARALON", name: "Pipa PVC Paralon", category: "Pipa & Toren Air", image: "pipa/pipajpg.jpg", description: "Pipa PVC saluran air bersih & buangan.", sizes: ["1/2 Inch", "3/4 Inch", "1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 27, brand: "CHAMPION", name: "Pipa PVC Champion", category: "Pipa & Toren Air", image: "pipa/Pipa Champion.jpg", description: "Pipa PVC fleksibel untuk saluran air.", sizes: ["1/2 Inch", "3/4 Inch", "1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 28, brand: "PENGUIN", name: "Toren Air Penguin", category: "Pipa & Toren Air", image: "pipa/Toren Penguin.jpg", description: "Tangki air penampungan anti-lumut.", sizes: ["250 Liter", "500 Liter", "750 Liter", "1000 Liter", "2000 Liter"] },

  // BESI & BAJA RINGAN
  { id: 29, brand: "SNI", name: "Besi Beton Ulir", category: "Besi & Baja Ringan", image: "besi/Besi Beton Ulir.jpeg", description: "Besi beton ulir untuk cor & struktur.", sizes: ["8mm", "10mm", "12mm", "16mm", "19mm"] },
  { id: 30, brand: "SNI", name: "Besi Beton Polos", category: "Besi & Baja Ringan", image: "besi/Besi Beton Polos.jpeg", description: "Besi beton polos standar konstruksi.", sizes: ["8mm", "10mm", "12mm", "16mm", "19mm"] },
  { id: 31, brand: "TASOSO", name: "Baja Ringan C Canal", category: "Besi & Baja Ringan", image: "besi/Baja Ringan.jpg", description: "Rangka baja ringan anti-karat 75x75." },
  { id: 32, brand: "GALVALUM", name: "Atap Seng Gelombang / Spandek", category: "Besi & Baja Ringan", image: "besi/Atap Spandek.jpg", description: "Atap spandek galvalum tahan lama.", color: ["Merah", "Biru", "Hitam", "Silver"] },
  { id: 33, brand: "GENERAL", name: "Atap Kodian", category: "Besi & Baja Ringan", image: "besi/Atap Kodian.jpg", description: "Atap kodian berkualitas untuk pelindung rumah." },

  // SEMEN & BAHAN BANGUNAN
  { id: 34, brand: "CONCH", name: "Semen Conch", category: "Semen & Bahan Bangunan", image: "semen/Semen Conch.jpeg", description: "Semen serbaguna adukan cepat keras." },
  { id: 35, brand: "MERDEKA", name: "Semen Merdeka", category: "Semen & Bahan Bangunan", image: "semen/Semen Merdeka.jpeg", description: "Semen konstruksi bangunan tahan lama." },
  { id: 36, brand: "PADANG", name: "Semen Padang", category: "Semen & Bahan Bangunan", image: "semen/Semen Padang.jpg", description: "Semen Padang bermutu tinggi." },
  { id: 37, brand: "GENERAL", name: "Pasir Pasang", category: "Semen & Bahan Bangunan", image: "semen/Pasir Pasang.jpg", description: "Pasir pasang untuk adukan plesteran." },
  { id: 38, brand: "GENERAL", name: "Pasir Cor", category: "Semen & Bahan Bangunan", image: "semen/Pasir Cor.jpeg", description: "Pasir cor beton konstruksi." },
  { id: 39, brand: "GENERAL", name: "Kerikil / Batu Split", category: "Semen & Bahan Bangunan", image: "semen/Kerikil.jpg", description: "Kerikil cor beton struktur." },
  { id: 40, brand: "GENERAL", name: "Batu Bata Merah", category: "Semen & Bahan Bangunan", image: "semen/Batu Bata.jpeg", description: "Batu bata pres pembatas dinding." },
  { id: 41, brand: "EBOARD", name: "Gypsum Eboard 8mm", category: "Semen & Bahan Bangunan", image: "semen/Gypsum.jpeg", description: "Papan gypsum plafon dan partisi." },
  { id: 42, brand: "RJ", name: "Dempul RJ Wall Putty", category: "Semen & Bahan Bangunan", image: "semen/Dempul RJ Wall Putty.jpg", description: "Dempul penambal celah dinding halus.", sizes: ["0,5 Kg", "1 Kg", "5 Kg", "25 Kg"] },

  // PERKAKAS, BAUT & AKSESORIS
  { id: 43, brand: "GENERAL", name: "Paku Kayu", category: "Perkakas, Baut & Aksesoris", image: "baut/Paku Kayu.jpg", description: "Paku bangunan bahan besi kuat.", sizes: ["1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 44, brand: "GENERAL", name: "Baut Roofing / Baja Ringan", category: "Perkakas, Baut & Aksesoris", image: "baut/Baut Roofing.jpg", description: "Baut roofing karet anti-bocor.", sizes: ["1 Inch", "2 Inch", "3 Inch", "4 Inch"] },
  { id: 45, brand: "GENERAL", name: "Tang Kombinasi", category: "Perkakas, Baut & Aksesoris", image: "baut/Tang Kombinasi.jpg", description: "Tang kombinasi perkakas multifungsi." }
];

const ADMIN_WA = "6285376765758";

// =========================
// TAMPILKAN PRODUK (LAYOUT HORIZONTAL MODAL VELLINO)
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

    // Filter varian warna / ukuran
    const validColors = product.color ? product.color.filter(c => c.trim() !== "") : null;
    const variants = product.sizes || validColors;
    const labelTitle = validColors ? "Pilih Warna:" : "Pilih Ukuran / Tipe:";

    let variantSelectHTML = "";
    if (variants && variants.length > 0) {
      const options = variants.map(item => `<option value="${item}">${item}</option>`).join("");
      variantSelectHTML = `
        <div style="margin: 6px 0 10px 0;">
          <label style="display: block; font-size: 10px; font-weight: bold; color: #555; text-transform: uppercase;">${labelTitle}</label>
          <select id="variant-${product.id}" style="width: 100%; padding: 4px 6px; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; background-color: #fff; cursor: pointer;">
            ${options}
          </select>
        </div>
      `;
    }

    const brandName = product.brand || "MITRA RIAU";
    const dataSize = product.size || "all";
    const dataSurface = product.surface || "all";

    return `
      <div class="product-card-horizontal" data-category="${product.category}" data-ukuran="${dataSize}" data-surface="${dataSurface}">
        <div class="product-image">
          <img 
            src="${imagePath}" 
            alt="${product.name}" 
            onclick="openImageModal(this.src)" 
            title="Klik untuk memperbesar gambar" 
            onerror="this.onerror=null; this.src='https://via.placeholder.com/200?text=Gambar+Tidak+Tersedia';" 
            loading="lazy"
          >
        </div>
        <div class="product-details">
          <div>
            <span class="product-brand">${brandName}</span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-spec">${product.description}</p>
          </div>
          <div>
            ${variantSelectHTML}
            <a href="javascript:void(0)" onclick="askProduct(${product.id})" class="link-detail">Tanya Detail &rarr;</a>
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

  // Reset dropdown filter spesifikasi
  const ukEl = document.getElementById("filterUkuran");
  const surfEl = document.getElementById("filterSurface");
  if (ukEl) ukEl.value = "all";
  if (surfEl) surfEl.value = "all";

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
// FILTER SPESIFIKASI (UKURAN & SURFACE)
// =========================

function filterCatalogBySpec() {
  const selectedUkuran = document.getElementById('filterUkuran') ? document.getElementById('filterUkuran').value : 'all';
  const selectedSurface = document.getElementById('filterSurface') ? document.getElementById('filterSurface').value : 'all';

  const filtered = products.filter(product => {
    const matchUkuran = (selectedUkuran === 'all' || product.size === selectedUkuran);
    const matchSurface = (selectedSurface === 'all' || product.surface === selectedSurface);
    return matchUkuran && matchSurface;
  });

  displayProducts(filtered);
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
    const brandMatch = product.brand ? product.brand.toLowerCase().includes(keyword) : false;
    
    return (
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword) ||
      brandMatch ||
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