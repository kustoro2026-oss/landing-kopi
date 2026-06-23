"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig, getWhatsAppUrl, whatsappMessages } from "@/data/site";

export default function Location() {
  return (
    <section id="location" className="bg-white">
      <div className="section-container">
        <SectionHeading
          label="Lokasi"
          title="Kunjungi Pabrik Kami di Klungkung"
          subtitle="Datang langsung dan rasakan pengalaman kopi autentik bersama H. Fachrudin"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Address Card */}
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark hover:border-amber/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-coffee-dark mb-2">
                    Alamat
                  </h3>
                  <p className="text-coffee/60 text-sm leading-relaxed">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.village}, {siteConfig.address.district}
                    <br />
                    {siteConfig.address.regency}, {siteConfig.address.province}{" "}
                    {siteConfig.address.postalCode}
                  </p>
                  <p className="text-amber text-sm font-medium mt-2">
                    Plus Code: {siteConfig.address.plusCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark hover:border-amber/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-coffee-dark mb-2">
                    Jam Operasional
                  </h3>
                  <div className="space-y-1">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                      Buka 24 Jam
                    </span>
                    <p className="text-coffee/60 text-sm mt-2">
                      Setiap hari — Senin s/d Minggu
                    </p>
                    <p className="text-coffee/40 text-xs">
                      Tidak perlu janji temu. Datang kapan saja!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href={getWhatsAppUrl(whatsappMessages.visit)}
                variant="whatsapp"
                size="md"
                className="flex-1"
              >
                <Phone className="w-4 h-4" />
                Konfirmasi Kunjungan
              </Button>
              <Button
                href={siteConfig.mapsUrl}
                variant="outline"
                size="md"
                className="flex-1"
              >
                <Navigation className="w-4 h-4" />
                Buka Google Maps
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-cream-dark h-[400px] lg:h-auto"
          >
            <iframe
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Penggilingan Kopi Panca Perkasa"
              className="min-h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
