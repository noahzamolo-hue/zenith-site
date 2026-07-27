"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartPulse, ClipboardCheck, CalendarClock, ArrowRight } from "lucide-react";

const services = [
  {
    Icon: HeartPulse,
    title: "Medical Clinic Cleaning",
    description:
      "Regular, documented cleaning tailored to GP practices and medical centres — colour-coded zones, TGA-approved products, RACGP-aligned schedules.",
    href: "/services#medical-cleaning",
  },
  {
    Icon: ClipboardCheck,
    title: "RACGP Compliance Audits",
    description:
      "A free, no-obligation walkthrough of your practice assessed against RACGP GP4.1 standards. You receive a written report — regardless of whether you engage us.",
    href: "/services#compliance-audits",
  },
  {
    Icon: CalendarClock,
    title: "Ongoing Maintenance",
    description:
      "Scheduled cleaning programs with full photo documentation after every session — ready for your next accreditation review without lifting a finger.",
    href: "/services#ongoing-maintenance",
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
            style={{ color: "#2A7FBC" }}
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.1]"
            style={{
              color: "#0D1F3C",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Specialist services built
            <br />
            for medical environments
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl p-8 flex flex-col"
              style={{
                border: "1px solid rgba(13,31,60,0.07)",
                boxShadow: "0 2px 16px rgba(13,31,60,0.05)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(42,127,188,0.1)" }}
              >
                <s.Icon size={22} style={{ color: "#2A7FBC" }} />
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{
                  color: "#0D1F3C",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#6B7A8D" }}
              >
                {s.description}
              </p>

              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold transition-colors duration-200 group-hover:gap-2.5"
                style={{ color: "#2A7FBC" }}
              >
                Learn more
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
