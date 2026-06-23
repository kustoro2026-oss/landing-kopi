export interface Testimonial {
  id: string;
  name: string;
  date: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Roulina Manik",
    date: "1 tahun lalu",
    rating: 5,
    review:
      "Coffee lovers atau yang tertarik dengan kopi wajib ke sini 🤩. Saya berkunjung kemarin — pemiliknya baik banget, ramah, gak pelit ilmu, dan fasilitas pabrik bersih rapi. Kualitas kopinya gak usah ditanya — saya coba langsung dan rasanya top banget. Wajib coba kopi ini ✨",
  },
  {
    id: "t2",
    name: "Ica Klarisa",
    date: "2 tahun lalu",
    rating: 5,
    review:
      "Kunjungan ke sini keren banget. Penjelasan yang diberikan — dari filosofi kopi, cara membuat, dan lainnya — sangat jelas dan mudah dipahami. Gak pelit ilmu. Sukses selalu pak, barakallah.",
  },
  {
    id: "t3",
    name: "Dipa Hari Mahatma",
    date: "2 tahun lalu",
    rating: 5,
    review:
      "Saat berkunjung ke pabrik ini saya mendapat banyak ilmu bermanfaat tentang science, art, dan philosophy pengolahan kopi. Ilmu yang dibagikan disampaikan dengan bahasa sederhana sehingga mudah dipahami.",
  },
  {
    id: "t4",
    name: "Clarissa Cessar",
    date: "1 tahun lalu",
    rating: 5,
    review:
      "Kalau ke Bali harus coba kopi ini. Bisa sekalian lihat fasilitas produksinya karena pemiliknya menyambut dengan ramah.",
  },
  {
    id: "t5",
    name: "Andira Padmarini",
    date: "2 tahun lalu",
    rating: 5,
    review:
      "Penjelasannya sangat baik. Pemiliknya ramah. Wajib dikunjungi.",
  },
  {
    id: "t6",
    name: "David",
    date: "2 tahun lalu",
    rating: 5,
    review:
      "Pemiliknya ramah banget dengan penjelasan yang sangat mudah dipahami.",
  },
  {
    id: "t7",
    name: "Dahan Kusamba",
    date: "1 tahun lalu",
    rating: 5,
    review:
      "Kopi Panca Perkasa asuhan H. Fachrudin benar-benar autentik Bali... rasanya mantap dan nikmat.",
  },
];

export const reviewStats = {
  average: 5.0,
  total: 24,
  allFiveStar: true,
};
