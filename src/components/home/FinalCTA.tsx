"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-28" style={{ backgroundColor: "#0D1F3C" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
          style={{ color: "#2A7FBC" }}
        >
          No cost. No obligation.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Ready to switch to a
          <br />
          <span style={{ color: "#2A7FBC" }}>RACGP-compliant</span> cleaner?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Book a free 30-minute RACGP GP4.1 compliance walkthrough. We visit
          your practice, assess every room, and give you a written report —
          whether you become a client or not.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#2A7FBC" }}
          >
            Book Your Free Walkthrough
            <ArrowRight size={17} />
          </Link>
          <Link
            href="/about"
            className="text-white/55 font-medium px-6 py-4 text-sm transition-colors duration-200 hover:text-white"
          >
            Learn about how we work →
          </Link>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 text-xs"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          First clean free · 12-month fixed rate · 24-hour redo guarantee
        </motion.p>
      </div>
    </section>
  );
}
