"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle, FileX, Clock } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

const pains = [
  {
    Icon: XCircle,
    title: "Promises not kept",
    body: "Contractors say they clean to standard, but there's no documentation, no audit trail, and no accountability.",
  },
  {
    Icon: FileX,
    title: "Accreditation exposure",
    body: "RACGP, NSQHS, ADA or NATA — whichever standard governs your practice, a cleaning gap with no evidence puts your accreditation at risk.",
  },
  {
    Icon: AlertTriangle,
    title: "Inconsistent service",
    body: "Staff turnover in commercial cleaning is brutal. The person who showed up for the quote is rarely the one cleaning your rooms.",
  },
  {
    Icon: Clock,
    title: "No after-hours reliability",
    body: "Your clinic needs cleaning outside patient hours. Generic contractors treat evening and weekend cleans as optional.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — copy */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
              style={{ color: "#2A7FBC" }}
            >
              The Problem
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.1] mb-6"
              style={{
                color: "#0D1F3C",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Most cleaning contractors
              <br />
              weren&apos;t built for
              <span style={{ color: "#2A7FBC" }}> medical settings</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ delay: 0.06 }}
              className="text-base leading-relaxed mb-10"
              style={{ color: "#6B7A8D" }}
            >
              A general commercial cleaner might do a perfectly acceptable job in
              an office. But a healthcare practice isn't an office — it&apos;s a
              clinical environment with accreditation obligations, infection
              control protocols, and patients who depend on you getting it right.
              And every vertical — GP, dental, allied health, day surgery,
              pathology — answers to its own governing body.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-5">
              {pains.map(({ Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                  transition={{ delay: 0.04 * i }}
                  className="flex gap-4"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(13,31,60,0.05)" }}
                  >
                    <Icon size={16} style={{ color: "#0D1F3C" }} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "#0D1F3C" }}
                    >
                      {title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7A8D" }}>
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — stat callout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ delay: 0.06 }}
            className="lg:sticky lg:top-32"
          >
            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{ backgroundColor: "#F7F9FC", border: "1px solid rgba(13,31,60,0.06)" }}
            >
              {/* Decorative accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{ backgroundColor: "#2A7FBC" }}
              />

              <p
                className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
                style={{ color: "#2A7FBC" }}
              >
                It&apos;s not about clean — it&apos;s about evidence
              </p>

              <p
                className="text-2xl md:text-[28px] font-bold leading-[1.25] mb-4"
                style={{
                  color: "#0D1F3C",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                When your accreditor asks to see cleaning records, a verbal
                &quot;we clean regularly&quot; isn&apos;t enough.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7A8D" }}>
                A spotless practice with no documentation can still fail its
                infection-control criteria. The gap most contractors leave
                isn&apos;t dirt — it&apos;s the paper trail your review depends on.
              </p>

              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid rgba(13,31,60,0.06)" }}
              >
                <p
                  className="text-xs font-semibold tracking-wider uppercase mb-3"
                  style={{ color: "#1F7A5C" }}
                >
                  The Zenith difference
                </p>
                {[
                  "Photo-documented compliance checklist after every clean",
                  "Named contact — same team, every visit",
                  "Service schedule cross-referenced to your accreditation standard",
                ].map((point) => (
                  <div key={point} className="flex gap-2.5 items-start mb-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(31,122,92,0.12)" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#1F7A5C" }}
                      />
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#0D1F3C" }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
