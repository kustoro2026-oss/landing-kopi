"use client";

import { motion } from "framer-motion";
import { GraduationCap, Star, Clock, MapPin } from "lucide-react";

const uspItems = [
  {
    icon: GraduationCap,
    title: "Edukasi Kopi Gratis",
    desc: "Belajar langsung dari H. Fachrudin — filosofi, seni, dan ilmu kopi",
    color: "bg-amber/10 text-amber",
  },
  {
    icon: Star,
    title: "Rating 5.0 Sempurna",
    desc: "24 ulasan — 100% bintang lima tanpa cela",
    color: "bg-coffee/10 text-coffee",
  },
  {
    icon: Clock,
    title: "Buka 24 Jam",
    desc: "Siap melayani kapan saja — setiap hari, setiap saat",
    color: "bg-amber/10 text-amber",
  },
  {
    icon: MapPin,
    title: "Kopi Asli Bali",
    desc: "Diproses langsung di Klungkung dengan teknik warisan",
    color: "bg-coffee/10 text-coffee",
  },
];

export default function USPBanner() {
  return (
    <section className="relative -mt-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {uspItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center gap-3 border border-cream-dark hover:border-amber/30 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-coffee-dark text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-coffee/60 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
