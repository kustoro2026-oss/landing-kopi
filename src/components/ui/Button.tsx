"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "whatsapp" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300";

  const variants = {
    primary:
      "bg-coffee text-white hover:bg-coffee-dark shadow-lg hover:shadow-xl",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1ea952] shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-amber bg-transparent text-amber hover:bg-amber hover:text-white",
    ghost:
      "bg-transparent text-coffee hover:bg-cream-dark",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </Link>
    </motion.div>
  );
}
