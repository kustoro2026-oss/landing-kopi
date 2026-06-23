export const siteConfig = {
  name: "Penggilingan Kopi Panca Perkasa",
  tagline: "Coffee Bean Roasting — Klungkung Bali",
  description:
    "Produsen kopi roasting & grinding premium di Klungkung, Bali. Lebih dari sekadar kopi — kami berbagi filosofi, ilmu, dan cita rasa autentik Bali. Rating 5.0 bintang.",
  url: "https://pancaperkasa.com",
  ogImage: "/images/og-image.webp",
  phone: "6281805506996",
  phoneDisplay: "0818-0550-6996",
  address: {
    street: "Jl. Werkudara Gg. 1a No.3",
    village: "Semarapura Kelod Kangin",
    district: "Klungkung",
    regency: "Kabupaten Klungkung",
    province: "Bali",
    postalCode: "80716",
    plusCode: "FC65+P3",
  },
  hours: "24 Jam, 7 Hari Seminggu",
  mapsUrl:
    "https://www.google.com/maps/place/Penggilingan+Kopi+Panca+Perkasa/@-8.5381413,115.4076293,17z",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.123456789!2d115.4076293!3d-8.5381413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd211847c48e3cf%3A0x116edf9e9992af8f!2sPenggilingan%20Kopi%20Panca%20Perkasa!5e0!3m2!1sid!2sid!4v1700000000000",
  social: {
    // Add social links when available
  },
};

export const whatsappMessages = {
  order: `Halo Pak Fahrudin, saya tertarik dengan kopi Panca Perkasa dan ingin memesan. Mohon info jenis kopi yang tersedia dan harganya. Terima kasih! ☕`,
  visit: `Halo Pak Fahrudin, saya berencana berkunjung ke pabrik untuk melihat proses roasting. Apakah bisa hari ini? Terima kasih! 🙏`,
  reseller: `Halo Pak Fahrudin, saya tertarik menjadi reseller kopi Panca Perkasa. Mohon info ketentuan dan harga reseller. Terima kasih! 🤝`,
  general: `Halo Pak Fahrudin, saya ingin tahu lebih banyak tentang kopi Panca Perkasa. Terima kasih!`,
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}
