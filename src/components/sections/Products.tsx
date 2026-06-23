"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";
import { getWhatsAppUrl, whatsappMessages } from "@/data/site";

export default function Products() {
  return (
    <section id="products" className="bg-white">
      <div className="section-container">
        <SectionHeading
          label="Produk Kami"
          title="Racikan Istimewa dari Klungkung"
          subtitle="Setiap varian diracik dengan cinta dan ketelitian — siap memanjakan lidah Anda"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-cream rounded-2xl overflow-hidden border border-cream-dark hover:border-amber/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-coffee-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                    {product.roastLevel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-coffee-dark text-lg mb-2 mt-1">
                  {product.name}
                </h3>

                <p className="text-coffee/60 text-sm leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* Flavor notes */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.notes.split(", ").map((note) => (
                    <span
                      key={note}
                      className="text-xs bg-amber/10 text-amber px-2.5 py-1 rounded-full font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <p className="text-coffee font-heading font-bold text-lg mb-4">
                  {product.price}
                </p>

                <Button
                  href={getWhatsAppUrl(whatsappMessages.order)}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Pesan via WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-coffee/40 text-sm mt-8"
        >
          Harga bersahabat — hubungi kami untuk penawaran terbaik dan pemesanan grosir.
        </motion.p>
      </div>
    </section>
  );
}
