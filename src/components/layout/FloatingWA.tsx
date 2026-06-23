"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, whatsappMessages } from "@/data/site";

export default function FloatingWA() {
  return (
    <motion.a
      href={getWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 group"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
      <span className="font-medium hidden sm:inline group-hover:opacity-100">
        Chat WhatsApp
      </span>
    </motion.a>
  );
}
