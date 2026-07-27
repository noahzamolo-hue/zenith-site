"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle, FileText } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const includes = [
  "30-minute on-site walkthrough",
  "RACGP GP4.1 room-by-room assessment",
  "Written compliance gap report",
  "Zero cost, zero obligation",
];

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#F7F9FC" }}>
      {/* Page hero */}
      <section
        className="pt-36 pb-20"
        style={{
          backgroundColor: "#0D1F3C",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#2A7FBC" }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
            className="text-white text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] max-w-2xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Book your free RACGP
            <br />
            compliance walkthrough
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.06 }}
            className="mt-5 text-white/55 text-lg max-w-md leading-relaxed"
          >
            Fill in the form and we&apos;ll arrange a time to visit your practice.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Form — wider column */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10"
              style={{
                border: "1px solid rgba(13,31,60,0.07)",
                boxShadow: "0 4px 32px rgba(13,31,60,0.06)",
              }}
            >
              <h2
                className="text-2xl font-bold mb-2"
                style={{
                  color: "#0D1F3C",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Book the walkthrough
              </h2>
              <p className="text-sm mb-8" style={{ color: "#6B7A8D" }}>
                We&apos;ll visit your practice at a time that suits you — before,
                during, or after hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* What the walkthrough includes */}
              <div
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "#0D1F3C",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
                  style={{ color: "#2A7FBC" }}
                >
                  What&apos;s included
                </p>
                <ul className="space-y-3.5">
                  {includes.map((item) => (
                    <li key={item} className="flex gap-3 items-center">
                      <CheckCircle size={15} className="shrink-0" style={{ color: "#1F7A5C" }} />
                      <span className="text-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contact */}
              <div
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(13,31,60,0.07)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
                  style={{ color: "#6B7A8D" }}
                >
                  Direct contact
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#2A7FBC" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#0D1F3C" }}>
                      Adelaide, South Australia
                      <br />
                      <span style={{ color: "#6B7A8D" }}>
                        Serving the Adelaide metro area
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone size={15} className="shrink-0" style={{ color: "#2A7FBC" }} />
                    <span className="text-sm" style={{ color: "#0D1F3C" }}>
                      0412 496 757
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail size={15} className="shrink-0" style={{ color: "#2A7FBC" }} />
                    <span className="text-sm" style={{ color: "#0D1F3C" }}>
                      noah@zenithfacilitymanagement.com.au
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Clock size={15} className="mt-0.5 shrink-0" style={{ color: "#2A7FBC" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#0D1F3C" }}>
                      Mon–Fri 8am–6pm
                      <br />
                      <span style={{ color: "#6B7A8D" }}>
                        After-hours cleaning available
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Reassurance */}
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "rgba(31,122,92,0.06)",
                  border: "1px solid rgba(31,122,92,0.15)",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "#0D1F3C" }}>
                  <span
                    className="font-semibold"
                    style={{ color: "#1F7A5C" }}
                  >
                    No lock-in commitment.
                  </span>{" "}
                  The walkthrough and compliance report are genuinely free. You
                  choose what happens next — there&apos;s no pressure to sign up.
                </p>
              </div>

              {/* Capability statement link */}
              <Link
                href="/capability-statement"
                className="flex items-center gap-3 rounded-xl p-4 transition-colors duration-200 group"
                style={{ backgroundColor: "rgba(42,127,188,0.06)", border: "1px solid rgba(42,127,188,0.15)" }}
              >
                <FileText size={18} style={{ color: "#2A7FBC" }} className="shrink-0" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0D1F3C" }}>
                    Download our Capability Statement
                  </p>
                  <p className="text-xs" style={{ color: "#6B7A8D" }}>
                    Services, credentials, zone system & onboarding process
                  </p>
                </div>
                <span className="ml-auto text-xs font-semibold group-hover:translate-x-0.5 transition-transform" style={{ color: "#2A7FBC" }}>→</span>
              </Link>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
