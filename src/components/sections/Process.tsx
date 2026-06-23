"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Flame, CogIcon, Package } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Pemilihan Biji",
    desc: "Biji kopi pilihan dari petani lokal Bali, diseleksi secara manual satu per satu. Hanya biji terbaik yang lolos ke tahap selanjutnya.",
  },
  {
    icon: Flame,
    number: "02",
    title: "Roasting",
    desc: "Dipanggang dengan teknik presisi — seni mengendalikan api dan waktu. Setiap tingkat roasting disesuaikan dengan karakter biji kopi.",
  },
  {
    icon: CogIcon,
    number: "03",
    title: "Grinding",
    desc: "Digiling sesuai kebutuhan dan permintaan — kasar untuk French Press, medium untuk V60, halus untuk Espresso, atau ekstra halus untuk kopi tubruk.",
  },
  {
    icon: Package,
    number: "04",
    title: "Pengemasan",
    desc: "Dikemas higienis dengan standar kualitas terjaga. Setiap kemasan disegel rapat untuk menjaga kesegaran dan aroma kopi.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream">
      <div className="section-container">
        <SectionHeading
          label="Proses Kami"
          title="Dari Biji ke Cangkir, Dari Ilmu ke Hati"
          subtitle="Perjalanan setiap biji kopi melalui tangan terampil dan penuh dedikasi"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-amber/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative z-10"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-dark h-full hover:shadow-xl hover:border-amber/20 transition-all duration-300 text-center group">
                  {/* Step number */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-coffee text-white font-heading font-bold flex items-center justify-center text-sm group-hover:bg-amber transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber/10 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-white transition-all duration-300">
                    <step.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-coffee-dark text-base mb-3">
                    {step.title}
                  </h3>
                  <p className="text-coffee/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20 text-amber/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-coffee/40 text-sm mt-12 font-heading italic"
        >
          &ldquo;Setiap langkah adalah doa, setiap proses adalah ibadah.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
