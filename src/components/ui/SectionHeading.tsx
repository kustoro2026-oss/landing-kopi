"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {label && (
        <span className="inline-block text-amber font-medium text-sm tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance ${
          light ? "text-white" : "text-coffee-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } text-base sm:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-coffee/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
