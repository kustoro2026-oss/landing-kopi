"use client";

import { motion } from "framer-motion";
import { Coffee, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl, whatsappMessages } from "@/data/site";

export default function CTASection() {
  return (
    <section className="relative bg-coffee overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-amber blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber blur-3xl" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 section-pattern opacity-20" />

      <div className="relative section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-amber/20 flex items-center justify-center"
          >
            <Coffee className="w-10 h-10 text-amber" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight text-balance mb-6">
            Siap Merasakan{" "}
            <span className="text-amber">Kopi Terbaik</span> Klungkung?
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
            Kunjungi pabrik kami atau pesan langsung. Pak H. Fachrudin siap
            menyambut Anda — kapan saja, 24 jam setiap hari. Gratis konsultasi
            dan edukasi kopi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={getWhatsAppUrl(whatsappMessages.order)}
              variant="whatsapp"
              size="lg"
            >
              ☕ Pesan Sekarang
            </Button>
            <Button
              href={getWhatsAppUrl(whatsappMessages.visit)}
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-coffee"
            >
              Jadwalkan Kunjungan
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-white/60">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber fill-amber" />
                ))}
              </div>
              <span className="text-sm">5.0 • 24 Ulasan</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-white/60 text-sm">Buka 24 Jam</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-white/60 text-sm">Gratis Edukasi</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
