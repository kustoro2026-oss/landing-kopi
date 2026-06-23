"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { testimonials, reviewStats } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="bg-cream">
      <div className="section-container">
        <SectionHeading
          label="Testimoni"
          title="Apa Kata Mereka Tentang Kami"
          subtitle="Suara tulus dari para pecinta kopi yang telah berkunjung"
        />

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12 p-6 bg-white rounded-2xl shadow-lg border border-cream-dark max-w-lg mx-auto"
        >
          <div className="text-center">
            <p className="text-4xl font-heading font-bold text-amber">5.0</p>
            <StarRating rating={reviewStats.average} size="sm" />
            <p className="text-coffee/40 text-xs mt-1">Rating Rata-rata</p>
          </div>
          <div className="w-px h-12 bg-cream-dark hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-heading font-bold text-coffee">
              {reviewStats.total}
            </p>
            <div className="flex justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber fill-amber" />
              ))}
            </div>
            <p className="text-coffee/40 text-xs mt-1">Total Ulasan</p>
          </div>
          <div className="w-px h-12 bg-cream-dark hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-heading font-bold text-green-600">100%</p>
            <p className="text-coffee/40 text-xs mt-1">Bintang Lima</p>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-cream-dark min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.4 }}
                className="p-8 sm:p-10 flex flex-col items-center text-center"
              >
                <Quote className="w-10 h-10 text-amber/20 mb-4" />
                <p className="text-coffee/70 leading-relaxed text-base sm:text-lg mb-6 italic">
                  &ldquo;{testimonials[current].review}&rdquo;
                </p>
                <StarRating rating={testimonials[current].rating} />
                <p className="font-heading font-semibold text-coffee mt-3">
                  {testimonials[current].name}
                </p>
                <p className="text-coffee/40 text-sm">
                  {testimonials[current].date}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-coffee hover:text-amber hover:shadow-xl transition-all z-10 border border-cream-dark"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-coffee hover:text-amber hover:shadow-xl transition-all z-10 border border-cream-dark"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-amber w-6"
                  : "bg-coffee/20 hover:bg-coffee/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
