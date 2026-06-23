export interface Product {
  id: string;
  name: string;
  description: string;
  roastLevel: string;
  notes: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "arabica-bali",
    name: "Kopi Arabica Bali",
    description:
      "Single origin Arabica dari perkebunan Kintamani, Bali. Dipanggang medium untuk menonjolkan karakter buah dan keasaman yang seimbang.",
    roastLevel: "Medium Roast",
    notes: "Citrus, Coklat, Floral",
    price: "Hubungi untuk harga",
    image: "/images/arabica-bali.jpeg",
  },
  {
    id: "robusta-klungkung",
    name: "Kopi Robusta Klungkung",
    description:
      "Robusta lokal Bali dengan body penuh dan karakter kuat. Cocok untuk espresso blend atau penikmat kopi bold.",
    roastLevel: "Dark Roast",
    notes: "Dark Chocolate, Rempah, Bold",
    price: "Hubungi untuk harga",
    image: "/images/robusta-klungkung.jpeg",
  },
  {
    id: "special-blend",
    name: "Special Blend Panca Perkasa",
    description:
      "Racikan khas rumah — perpaduan Arabica dan Robusta pilihan dari Papua & Bali dengan formula rahasia yang diwariskan turun-temurun.",
    roastLevel: "Medium-Dark Roast",
    notes: "Karamel, Kacang, Smooth Finish",
    price: "Hubungi untuk harga",
    image: "/images/special-blend.jpeg",
  },
  {
    id: "custom-grind",
    name: "Kopi Bubuk Custom Grind",
    description:
      "Biji kopi pilihan digiling sesuai kebutuhan Anda — French Press, V60, Espresso, Tubruk. Kesegaran terjamin.",
    roastLevel: "Sesuai Permintaan",
    notes: "Custom, Fresh Ground",
    price: "Hubungi untuk harga",
    image: "/images/custom-grind.jpeg",
  },
];
