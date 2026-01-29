export const BRAND = {
  name: "Kopi Desa",
  tagline: "Aroma Desa, Rasa Juara.",
  whatsappNumber: process.env.NEXT_PUBLIC_WA_NUMBER || "62812345xxxxx",
};

export const HERO_CONTENT = {
  headline: "Kopi Fresh 500gr yang Bikin Pagi Kamu Nyala.",
  subheadline:
    "Tiga karakter rasa: Original yang bold, Fruity yang segar, Aromatic yang wangi. Tinggal seduh—langsung kerasa bedanya.",
  ctaPrimary: "Order via WhatsApp",
  ctaSecondary: "Lihat Varian",
};

export const INTEREST_CONTENT = {
  title: "Kenapa Kopi Desa Berbeda?",
  bullets: [
    "Banyak kopi beredar sudah lama disimpan — aroma turun, rasa jadi flat.",
    "Kami fokus ke rasa yang 'bersih' dan aroma yang keluar sejak pertama diseduh.",
    "Cocok untuk tubruk sampai pour over.",
  ],
  steps: [
    { title: "Pilih karakter rasa", desc: "Original, Fruity, atau Aromatic" },
    { title: "Seduh sesuai alat", desc: "Tubruk, V60, atau Espresso" },
    { title: "Nikmati aroma & aftertaste", desc: "Pengalaman kopi desa yang otentik" },
  ],
};

export const BENEFITS_CONTENT = {
  title: "Yang Kamu Rasakan Saat Seduh Kopi Desa",
  items: [
    "Aroma lebih hidup (wangi keluar dari awal)",
    "Rasa tebal tapi tetap clean",
    "Aftertaste coklat / madu / buah (sesuai varian)",
    "Aman untuk kopi susu maupun hitam",
    "Cocok buat harian 500gr (lebih hemat)",
    "Konsisten seduhan (mudah diatur)",
  ],
};

export interface Product {
  id: string;
  name: string;
  profile: "Original" | "Fruity" | "Aromatic";
  notes: string;
  bestFor: string;
  desc: string;
  image: string; // New image field
  price: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "original-bold",
    name: "Kopi Desa Original Bold",
    profile: "Original",
    notes: "dark chocolate, roasted nuts",
    bestFor: "tubruk, moka pot, kopi susu",
    desc: "Rasa tebal dan pahit elegan dengan aftertaste coklat yang nempel.",
    image: "/images/original-bold.png",
    price: "Rp 85.000",
  },
  {
    id: "fruity-sunrise",
    name: "Kopi Desa Fruity Sunrise",
    profile: "Fruity",
    notes: "citrus, tropical, clean finish",
    bestFor: "V60, pour over, cold brew",
    desc: "Segar, sedikit asam-manis ringan, cocok buat yang suka kopi 'bersih'.",
    image: "/images/fruity-sunrise.png",
    price: "Rp 90.000",
  },
  {
    id: "aromatic-floral",
    name: "Kopi Desa Aromatic Floral",
    profile: "Aromatic",
    notes: "floral, honey, smooth",
    bestFor: "pour over, manual brew",
    desc: "Wangi floral lembut, terasa premium tanpa bikin eneg.",
    image: "/images/aromatic-floral.png",
    price: "Rp 95.000",
  },
  {
    id: "caramel-cocoa",
    name: "Kopi Desa Caramel Cocoa",
    profile: "Original",
    notes: "caramel, cocoa, smooth body",
    bestFor: "kopi susu, tubruk",
    desc: "Comfort coffee: manis natural, coklat lembut, gampang disukai.",
    image: "/images/caramel-cocoa.png",
    price: "Rp 88.000",
  },
  {
    id: "nutty-classic",
    name: "Kopi Desa Nutty Classic",
    profile: "Aromatic",
    notes: "nutty, biscuit, balanced",
    bestFor: "harian, kantor",
    desc: "Seimbang, nggak terlalu pahit/masam. Enak untuk daily.",
    image: "/images/nutty-classic.png",
    price: "Rp 85.000",
  },
  {
    id: "espresso-strong",
    name: "Kopi Desa Espresso Strong",
    profile: "Original",
    notes: "bold, thick crema, cocoa",
    bestFor: "espresso, mokapot, vietnam drip",
    desc: "Untuk yang suka 'nendang': body tebal dan pahit bersih.",
    image: "/images/espresso-strong.png",
    price: "Rp 85.000",
  },
  {
    id: "fruity-berry-wash",
    name: "Kopi Desa Fruity Berry Wash",
    profile: "Fruity",
    notes: "berry, juicy, sweet finish",
    bestFor: "V60, iced",
    desc: "Juicy dan unik, cocok buat yang bosan dengan kopi pahit biasa.",
    image: "/images/fruity-berry-wash.png",
    price: "Rp 92.000",
  },
  {
    id: "aromatic-honey",
    name: "Kopi Desa Aromatic Honey",
    profile: "Aromatic",
    notes: "honey, floral, soft sweet",
    bestFor: "pagi santai, sore",
    desc: "Wangi madu lembut, minum tanpa gula pun tetap nyaman.",
    image: "/images/aromatic-honey.png",
    price: "Rp 95.000",
  },
  {
    id: "cold-brew-special",
    name: "Kopi Desa Cold Brew Special",
    profile: "Fruity",
    notes: "clean, refreshing, low bitterness",
    bestFor: "cold brew",
    desc: "Diracik agar cold brew tetap clean dan tidak pahit berlebihan.",
    image: "/images/cold-brew-special.png",
    price: "Rp 88.000",
  },
  {
    id: "signature-trio-pack",
    name: "Kopi Desa Signature Trio Pack",
    profile: "Original",
    notes: "sampler",
    bestFor: "pemula/hadiah",
    desc: "Bingung pilih? Ambil paket signature untuk coba 3 karakter rasa.",
    image: "/images/trio-pack.png",
    price: "Rp 120.000",
  },
];

export const TESTIMONIALS = [
  { text: "Wanginya beneran keluar banget...", author: "Customer A" },
  { text: "Kopi susu jadi lebih enak...", author: "Customer B" },
  { text: "Fruity-nya segar, nggak lebay...", author: "Customer C" },
  { text: "Rasa originalnya pas buat pagi.", author: "Customer D" },
  { text: "Pengiriman cepat, packing aman.", author: "Customer E" },
  { text: "Suka banget sama yang Aromatic.", author: "Customer F" },
];

export const OFFERS = [
  { title: "Best Seller: Original Bold", productStart: "original-bold", tag: "Best Seller" },
  { title: "Fresh & Segar: Fruity Sunrise", productStart: "fruity-sunrise", tag: "Fresh" },
  { title: "Premium Aroma: Aromatic Floral", productStart: "aromatic-floral", tag: "Premium" },
];

export const FAQS = [
  { q: "500gr itu berapa cangkir?", a: "Sekitar 30-40 cangkir tergantung takaran." },
  { q: "Cocok untuk pemula?", a: "Sangat cocok! Ada panduan seduh di kemasan." },
  { q: "Lebih enak kopi hitam atau susu?", a: "Tergantung selera. Original enak buat susu, Fruity enak hitam." },
  { q: "Rekomendasi grind size?", a: "Halus untuk tubruk/espresso, kasau untuk V60/French Press." },
  { q: "Bisa request giling/biji?", a: "Bisa! Tulis di catatan saat order." },
  { q: "Pengiriman dari mana?", a: "Kami kirim dari sentra gudang kami di Jawa Barat." },
  { q: "Berapa lama sampai?", a: "Jabodetabek 1-2 hari, luar kota 3-5 hari." },
  { q: "Cara order di WhatsApp?", a: "Klik tombol order, kirim pesan yang sudah terisi otomatis." },
];

export const createWhatsappLink = (productName: string, qty: number, profile: string) => {
  const phone = BRAND.whatsappNumber;
  const message = `Halo Admin Kopi Desa 👋\nSaya mau order:\n- Produk: ${productName}\n- Jumlah: ${qty} bungkus (500gr)\n- Varian: ${profile}\n- Alamat pengiriman: ...\nTerima kasih.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
