"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* SWAP: Replace with real clinical interior photography — a clean, modern GP reception or clinic corridor */}
      <Image
        src="/adelaide-clinic.jpg"
        alt="Clean modern medical clinic interior"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient overlay — navy from left fading to subtle right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(13,31,60,0.96) 0%, rgba(13,31,60,0.88) 55%, rgba(13,31,60,0.72) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 mb-7"
          >
            <div className="h-px w-8" style={{ backgroundColor: "#2A7FBC" }} />
            <span
              className="text-[11px] font-bold tracking-[0.3em] uppercase"
              style={{ color: "#2A7FBC" }}
            >
              RACGP · NSQHS · ADA · NATA Aligned
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "#2A7FBC" }} />
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.06] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Clinical-grade cleaning for
            <br />
            <span style={{ color: "#2A7FBC" }}>Adelaide&apos;s</span> healthcare sector
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={item}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            GP practices, dental, allied health, specialists, day surgeries and
            more — every vertical answers to a different accreditation body, and
            we clean to yours. TGA-approved products, colour-coded zones, and
            audit-ready documentation on every visit.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#2A7FBC" }}
            >
              Book Free Compliance Walkthrough
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 text-white/75 font-medium px-8 py-4 rounded-lg text-base transition-all duration-200 hover:text-white hover:border-white/40"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Get a free estimate
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.45 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
