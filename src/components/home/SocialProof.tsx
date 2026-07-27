"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    // SWAP: Replace with real testimonial from a Practice Manager
    quote:
      "We'd been with our previous cleaner for three years and assumed everything was fine. Zenith's walkthrough found four areas that would have flagged in our RACGP review. The switch was easy, and the documentation they provide is exactly what our accreditor wants to see.",
    // SWAP: Replace with real name and clinic
    author: "Practice Manager",
    practice: "GP Practice, Adelaide CBD",
  },
  {
    // SWAP: Replace with real testimonial from a Practice Manager
    quote:
      "What sold me was the photo-documented checklist after every clean. I can actually show our accreditation team evidence, not just tell them we get cleaned regularly. That's a real shift from what we had before.",
    // SWAP: Replace with real name and clinic
    author: "Practice Manager",
    practice: "Medical Centre, Adelaide Hills",
  },
];


export default function SocialProof() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
            style={{ color: "#2A7FBC" }}
          >
            Practice Managers Trust Zenith
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{
              color: "#0D1F3C",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Heard from the people
            <br />
            who matter most
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map(({ quote, author, practice }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                backgroundColor: "#F7F9FC",
                border: "1px solid rgba(13,31,60,0.06)",
              }}
            >
              <Quote
                size={28}
                className="mb-6 shrink-0"
                style={{ color: "#2A7FBC", opacity: 0.5 }}
              />
              <p
                className="text-base leading-[1.75] flex-1 mb-8"
                style={{ color: "#0D1F3C" }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div
                className="pt-5 flex items-center gap-4"
                style={{ borderTop: "1px solid rgba(13,31,60,0.07)" }}
              >
                {/* SWAP: Replace with photo of the practice manager */}
                <div
                  className="w-10 h-10 rounded-full shrink-0"
                  style={{ backgroundColor: "rgba(42,127,188,0.15)" }}
                />
                <div>
                  <p
                    className="text-sm font-semibold leading-none mb-1"
                    style={{ color: "#0D1F3C" }}
                  >
                    {author}
                  </p>
                  <p className="text-xs" style={{ color: "#6B7A8D" }}>
                    {practice}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
