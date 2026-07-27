"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { point: "Colour-coded zones so bathroom equipment never touches a treatment room", zenith: true, typical: false },
  { point: "TGA-approved hospital-grade disinfectants in clinical areas", zenith: true, typical: false },
  { point: "Photo-documented checklist after every single clean", zenith: true, typical: false },
  { point: "Monthly compliance report, ready for your accreditation file", zenith: true, typical: false },
  { point: "Cleaned to your standard — RACGP, NSQHS, ADA or NATA", zenith: true, typical: false },
  { point: "The same trained team every visit — no agency rotation", zenith: true, typical: false },
  { point: "After-hours scheduling around your patients", zenith: true, typical: "sometimes" },
  { point: "Floors mopped and bins emptied", zenith: true, typical: true },
];

export default function Comparison() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
            style={{ color: "#2A7FBC" }}
          >
            The Difference, Side by Side
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.1]"
            style={{ color: "#0D1F3C", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            A cleaner, or a compliance partner?
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(13,31,60,0.1)" }}
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_88px_88px] sm:grid-cols-[1fr_120px_120px]">
            <div className="p-4 sm:p-5" style={{ backgroundColor: "#F7F9FC" }} />
            <div
              className="p-4 sm:p-5 text-center flex items-center justify-center"
              style={{ backgroundColor: "#0D1F3C" }}
            >
              <span className="text-white font-bold text-xs sm:text-sm tracking-wide">Zenith</span>
            </div>
            <div
              className="p-4 sm:p-5 text-center flex items-center justify-center"
              style={{ backgroundColor: "#F7F9FC" }}
            >
              <span className="text-[11px] sm:text-xs font-semibold leading-tight" style={{ color: "#6B7A8D" }}>
                Typical<br />cleaner
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={r.point}
              className="grid grid-cols-[1fr_88px_88px] sm:grid-cols-[1fr_120px_120px] items-stretch"
              style={{ borderTop: "1px solid rgba(13,31,60,0.07)" }}
            >
              <div
                className="p-4 sm:p-5 text-[13px] sm:text-sm leading-snug flex items-center"
                style={{ color: "#0D1F3C", backgroundColor: i % 2 ? "#ffffff" : "rgba(247,249,252,0.5)" }}
              >
                {r.point}
              </div>
              <div
                className="p-4 sm:p-5 flex items-center justify-center"
                style={{ backgroundColor: "rgba(42,127,188,0.06)" }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#1F7A5C" }}
                >
                  <Check size={13} className="text-white" strokeWidth={3} />
                </span>
              </div>
              <div
                className="p-4 sm:p-5 flex items-center justify-center"
                style={{ backgroundColor: i % 2 ? "#ffffff" : "rgba(247,249,252,0.5)" }}
              >
                {r.typical === true ? (
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(13,31,60,0.12)" }}
                  >
                    <Check size={13} style={{ color: "#6B7A8D" }} strokeWidth={3} />
                  </span>
                ) : r.typical === "sometimes" ? (
                  <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#9CA3AF" }}>
                    Maybe
                  </span>
                ) : (
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(192,57,43,0.08)" }}
                  >
                    <X size={13} style={{ color: "#C0392B" }} strokeWidth={3} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-sm mt-6"
          style={{ color: "#9CA3AF" }}
        >
          Same price bracket as commercial cleaning. A different category of service.
        </motion.p>
      </div>
    </section>
  );
}
