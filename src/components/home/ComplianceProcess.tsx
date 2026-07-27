"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, Search, FileCheck } from "lucide-react";

const phases = [
  {
    number: "01",
    name: "Intake",
    tagline: "We visit your practice",
    Icon: ClipboardList,
    points: [
      "Free, no-obligation consultation",
      "Identify your RACGP accreditation cycle",
      "Review your current cleaning schedule",
    ],
  },
  {
    number: "02",
    name: "Walk",
    tagline: "Room-by-room assessment",
    Icon: Search,
    points: [
      "RACGP GP4.1 room-by-room walkthrough",
      "Zone classification for every space",
      "Document current risks and gaps",
    ],
  },
  {
    number: "03",
    name: "Wrap",
    tagline: "Your compliance plan",
    Icon: FileCheck,
    points: [
      "Written compliance report — yours to keep",
      "Fixed-price cleaning proposal",
      "First clean free, no lock-in contract",
    ],
  },
];

export default function ComplianceProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      className="py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0D1F3C" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
            style={{ color: "#2A7FBC" }}
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The free RACGP GP4.1
            <br />
            compliance walkthrough
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mt-4 text-white/55 text-base leading-relaxed max-w-lg"
          >
            Three focused phases. Thirty minutes. A clear picture of where your
            practice stands — and a written plan to fix any gaps.
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 px-6">
            <div
              className="relative mx-auto"
              style={{ maxWidth: "calc(100% - 160px)", left: "80px" }}
            >
              {/* Track */}
              <div
                className="h-px w-full"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              />
              {/* Animated fill */}
              <motion.div
                className="absolute inset-y-0 left-0 h-px"
                style={{ backgroundColor: "#2A7FBC", transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {phases.map(({ number, name, tagline, Icon, points }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div
                    className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "rgba(42,127,188,0.12)",
                      border: "1px solid rgba(42,127,188,0.3)",
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-[0.2em] mb-1"
                      style={{ color: "#2A7FBC" }}
                    >
                      PHASE
                    </span>
                    <span
                      className="text-3xl font-bold leading-none"
                      style={{
                        color: "white",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="flex-1 rounded-2xl p-7"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={18} style={{ color: "#2A7FBC" }} />
                    <div>
                      <p
                        className="text-xl font-bold leading-none text-white"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {name}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#2A7FBC" }}>
                        {tagline}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-5">
                    {points.map((pt) => (
                      <li key={pt} className="flex gap-3 items-start">
                        <div
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: "#2A7FBC" }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-14 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#2A7FBC" }}
          >
            Book Your Free Walkthrough
          </a>
        </motion.div>
      </div>
    </section>
  );
}
