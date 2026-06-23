import { Coffee, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig, getWhatsAppUrl, whatsappMessages } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream">
      {/* Main Footer */}
      <div className="section-container !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber rounded-xl flex items-center justify-center">
                <Coffee className="w-5 h-5 text-coffee-dark" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm leading-tight">
                  Panca Perkasa
                </p>
                <p className="text-xs text-cream/60">Coffee Bean Roasting</p>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Lebih dari sekadar kopi — kami berbagi filosofi, ilmu, dan cita rasa autentik Bali.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-amber mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {["Tentang Kami", "Proses Produksi", "Produk", "Testimoni", "Lokasi", "FAQ"].map(
                (item, i) => {
                  const hrefs = ["#about", "#process", "#products", "#testimonials", "#location", "#faq"];
                  return (
                    <li key={i}>
                      <a
                        href={hrefs[i]}
                        className="text-cream/60 hover:text-amber transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-amber mb-4">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/60 hover:text-amber transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.village},{" "}
                  {siteConfig.address.district}, {siteConfig.address.province}{" "}
                  {siteConfig.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-semibold text-amber mb-4">
              Siap Mencoba?
            </h4>
            <p className="text-cream/60 text-sm mb-4">
              Kunjungi pabrik kami atau pesan langsung via WhatsApp. Pak Fahrudin siap menyambut Anda.
            </p>
            <a
              href={getWhatsAppUrl(whatsappMessages.order)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber text-coffee-dark px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-amber-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Penggilingan Kopi Panca Perkasa. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-cream/40 text-xs">
            <span>⭐ 5.0</span>
            <span className="text-cream/20">|</span>
            <span>24 Reviews</span>
            <span className="text-cream/20">|</span>
            <span>Klungkung, Bali</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
