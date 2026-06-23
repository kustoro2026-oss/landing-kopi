"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { getWhatsAppUrl, whatsappMessages } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/85 via-coffee/65 to-cream z-10" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 z-10 section-pattern" />
        {/* Placeholder bg fallback */}
        <div className="absolute inset-0 bg-[#3C2415] -z-10" />
        {/* Decorative coffee bean shapes */}
        <div className="absolute inset-0 z-10 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-amber blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 section-container !py-0 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/30"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber fill-amber" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">
              5.0 • 24 Ulasan
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight text-balance mb-6">
            Lebih dari Sekadar{" "}
            <span className="text-amber">Kopi</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Rasakan filosofi, ilmu, dan cita rasa autentik Bali. Dari pabrik kami
            di Klungkung, H. Fahrudin membagikan ilmu pengolahan kopi kepada setiap
            tamu — tanpa pamrih.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={getWhatsAppUrl(whatsappMessages.order)}
              variant="whatsapp"
              size="lg"
            >
              ☕ Pesan Sekarang via WhatsApp
            </Button>
            <Button
              href="#about"
              variant="ghost"
              size="lg"
              className="!text-white/80 hover:!text-white"
            >
              Jelajahi Cerita Kami
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            delay: 1.5,
            opacity: { duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
