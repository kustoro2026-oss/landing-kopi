"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Bagaimana cara berkunjung ke pabrik?",
    a: "Langsung datang ke alamat kami di Jl. Werkudara Gg. 1a No.3, Klungkung. Tidak perlu janjian — kami buka 24 jam! Parkir tersedia dan lokasi kami mudah diakses. Gunakan Google Maps dengan Plus Code FC65+P3 untuk navigasi akurat.",
  },
  {
    q: "Apakah bisa beli kopi secara online?",
    a: "Ya! Saat ini pemesanan dapat dilakukan via WhatsApp di 0818-0550-6996. Kami akan membantu pengiriman ke seluruh Indonesia. Untuk pemesanan dalam jumlah besar (grosir/reseller), hubungi kami untuk penawaran khusus.",
  },
  {
    q: "Berapa harga kopi per kg?",
    a: "Harga bervariasi tergantung jenis kopi (Arabica, Robusta, Special Blend) dan volume pemesanan. Kami menawarkan harga bersahabat — hubungi kami via WhatsApp untuk informasi harga terbaru dan penawaran terbaik!",
  },
  {
    q: "Apakah ada tur atau kelas kopi?",
    a: "Ya, dan ini GRATIS! Setiap kunjungan ke pabrik kami adalah sesi edukasi. Pak H. Fahrudin secara personal akan menjelaskan filosofi kopi, proses pemilihan biji, teknik roasting, dan banyak lagi. Anda akan pulang dengan ilmu baru — dijamin!",
  },
  {
    q: "Bisa jadi reseller?",
    a: "Tentu! Kami membuka kerja sama reseller dan menyambut para pengusaha kopi. Hubungi via WhatsApp untuk informasi ketentuan reseller, harga grosir, dan minimal order. Kami siap mendukung bisnis kopi Anda.",
  },
  {
    q: "Apa yang membedakan kopi Panca Perkasa?",
    a: "Kami bukan sekadar roaster — kami adalah rumah edukasi kopi. Setiap biji dipilih manual, dipanggang dengan filosofi, dan setiap pelanggan pulang dengan ilmu. Ditambah rating sempurna 5.0 dari 24 ulasan Google — tanpa cela.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-cream">
      <div className="section-container">
        <SectionHeading
          label="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Semua yang perlu Anda ketahui sebelum berkunjung atau memesan"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <div className="bg-white rounded-2xl border border-cream-dark overflow-hidden hover:border-amber/20 transition-all">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                >
                  <span className="font-heading font-semibold text-coffee-dark text-base sm:text-lg pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        openIndex === i ? "text-amber" : "text-coffee/30"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-coffee/60 text-sm sm:text-base leading-relaxed border-t border-cream-dark pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
