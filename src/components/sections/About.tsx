"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Quote,
  GraduationCap,
  Heart,
  ShieldCheck,
  Leaf,
  Users,
  Star,
  ThumbsUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <SectionHeading
          label="Cerita Kami"
          title="Lebih dari Sekadar Pabrik Kopi"
          subtitle="Sebuah rumah tempat ilmu, filosofi, dan cita rasa bersatu — dipandu oleh sang maestro, H. Fahrudin"
        />

        {/* Hero Row: Image + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center mb-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white">
              {/* Main visual: H. Fahrudin portrait */}
              <Image
                src="/images/h-fahrudin.png"
                alt="H. Fahrudin - Maestro Kopi Klungkung, Pemilik Panca Perkasa"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee/40 to-coffee/20" />

              {/* Content on image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <p className="font-heading text-3xl sm:text-4xl font-bold mb-2 leading-tight">
                  H. Fahrudin
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-0.5 bg-amber" />
                  <span className="text-white/80 text-sm tracking-wider uppercase">
                    Maestro Kopi Klungkung
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  &ldquo;Kopi yang baik bukan hanya tentang rasa — tapi tentang
                  cerita di balik setiap tetesnya.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-2xl p-4 border border-amber/20 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <StarRating rating={5} size="sm" />
                </div>
                <p className="text-coffee/50 text-xs mt-0.5">
                  100% Bintang 5 • 24 Ulasan
                </p>
              </div>
            </motion.div>

            {/* Top-left accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl bg-amber/10 border border-amber/20 -z-10" />
          </motion.div>

          {/* Story Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            {/* Opening */}
            <div className="relative">
              <Quote className="w-8 h-8 text-amber/20 absolute -top-1 -left-1" />
              <p className="text-coffee/80 leading-relaxed text-base sm:text-lg pl-8">
                Di sebuah gang sederhana di Jalan Werkudara, Klungkung, berdiri
                pabrik kopi yang <strong className="text-coffee">tak biasa</strong>.
                Di sini, H. Fahrudin tidak hanya memanggang biji kopi — ia
                memanggang <strong className="text-coffee">semangat berbagi ilmu</strong>.
              </p>
            </div>

            <p className="text-coffee/70 leading-relaxed">
              Setiap tamu yang datang disambut seperti sahabat lama. Anda akan
              diajak menyelami dunia kopi: dari bagaimana biji dipilih dengan
              teliti, bagaimana api dan waktu bersahabat dalam proses roasting,
              hingga bagaimana secangkir kopi bisa menyatukan hati.
            </p>

            <p className="text-coffee/70 leading-relaxed">
              Tak heran, setiap pengunjung pulang membawa lebih dari sekadar
              kopi — mereka membawa <strong className="text-coffee">ilmu baru</strong>,
              perspektif segar, dan kenangan hangat yang sulit dilupakan.
            </p>

            {/* Inline testimonial card */}
            <div className="bg-cream rounded-2xl p-4 sm:p-5 border border-amber/10 flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users className="w-4 h-4 text-amber" />
              </div>
              <div>
                <p className="text-coffee/60 text-sm italic leading-relaxed">
                  &ldquo;Coffee lovers atau yang tertarik dengan kopi <strong className="text-coffee">wajib ke sini</strong>.
                  Pemiliknya baik banget, ramah, gak pelit ilmu, dan fasilitas
                  pabrik bersih rapi. Kualitas kopinya gak usah ditanya.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber fill-amber" />
                    ))}
                  </div>
                  <span className="text-coffee/40 text-xs">
                    Roulina Manik — Google Review
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: GraduationCap,
              title: "Filosofi Mendalam",
              desc: "Setiap proses roasting adalah pelajaran tentang kesabaran, ketelitian, dan seni.",
              color: "bg-amber/10 text-amber",
            },
            {
              icon: Heart,
              title: "Berbagi Tanpa Pamrih",
              desc: "Ilmu dibagikan dengan tulus — tidak ada yang disembunyikan, semua dijelaskan.",
              color: "bg-red-50 text-red-500",
            },
            {
              icon: ShieldCheck,
              title: "Kualitas Terjamin",
              desc: "Biji dipilih manual, dipanggang presisi — hasilnya diakui 24 pelanggan tanpa cela.",
              color: "bg-green-50 text-green-600",
            },
            {
              icon: Leaf,
              title: "Warisan Autentik Bali",
              desc: "Dari Klungkung untuk dunia — menjaga tradisi kopi Bali tetap hidup dan bermakna.",
              color: "bg-coffee/10 text-coffee",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="bg-cream rounded-2xl p-5 border border-amber/10 hover:border-amber/20 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.color}`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-semibold text-coffee-dark text-sm mb-2">
                {item.title}
              </h4>
              <p className="text-coffee/50 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
