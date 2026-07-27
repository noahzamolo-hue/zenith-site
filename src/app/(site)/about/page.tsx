"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, FileCheck, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const values = [
  {
    Icon: Target,
    title: "Compliance first",
    body: "Every decision we make — from which products we use to how we schedule a clean — starts with the RACGP standard. It's not a checklist we consult occasionally; it's our operating manual.",
  },
  {
    Icon: FileCheck,
    title: "Documentation is the service",
    body: "Anyone can clean a room. The value we deliver is the evidence that it was cleaned correctly. Photo-documented checklists after every session mean you always have the record when you need it.",
  },
  {
    Icon: Users,
    title: "Consistency you can name",
    body: "We don't rotate anonymous contractors through your practice. You know the team. They know your rooms. That continuity is what makes a compliance program work in practice, not just on paper.",
  },
];

export default function AboutPage() {
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
            Our Story
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
            className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] max-w-3xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Adelaide-local.
            <br />
            <span style={{ color: "#2A7FBC" }}>Compliance-led.</span>
            <br />
            Built for GP practices.
          </motion.h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ duration: 0.455, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative h-96 lg:h-[520px] rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(13,31,60,0.08)" }}
            >
              {/* SWAP: Drop noah.jpg into zenith-site/public/ and this will render automatically */}
              <Image
                src="/noah.jpg"
                alt="Noah — Zenith Facility Management"
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,31,60,0.4) 0%, transparent 60%)",
                }}
              />
            </motion.div>

            {/* Copy */}
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
                style={{ color: "#2A7FBC" }}
              >
                Why we exist
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-bold leading-[1.1] mb-6"
                style={{
                  color: "#0D1F3C",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Practices were being
                <br />
                let down — we decided
                <br />
                to do something about it
              </motion.h2>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ delay: 0.06 }}
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "#6B7A8D" }}
              >
                <p>
                  I started Zenith because I kept seeing the same problem: medical
                  clinics weren&apos;t actually following compliance procedures, and most
                  weren&apos;t prepared for what happens when an audit arrives. They were
                  relying on general cleaning contractors who had no understanding of
                  what RACGP accreditation actually requires.
                </p>
                <p>
                  The gap wasn&apos;t just about cleanliness — it was about documentation.
                  When an auditor asks to see your cleaning records, &ldquo;we get cleaned
                  regularly&rdquo; isn&apos;t an answer. I wanted to build something that solved
                  that completely: reliable cleaners who follow the right procedures,
                  every time, with a checklist completed after every visit, photo
                  documentation on file, and a monthly compliance report sent
                  automatically so clinics have exactly what they need when the
                  auditor walks in.
                </p>
                <p>
                  That&apos;s Zenith. Compliance shouldn&apos;t be something you scramble for
                  — it should already be done.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#F7F9FC" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
              style={{ color: "#2A7FBC" }}
            >
              Our Values
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-bold leading-[1.1] max-w-2xl"
              style={{
                color: "#0D1F3C",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              How we think about what we do
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="bg-white rounded-2xl p-8"
                style={{
                  border: "1px solid rgba(13,31,60,0.07)",
                  boxShadow: "0 2px 16px rgba(13,31,60,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(42,127,188,0.1)" }}
                >
                  <Icon size={20} style={{ color: "#2A7FBC" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: "#0D1F3C",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A8D" }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adelaide angle */}
      <section
        className="py-24 md:py-28"
        style={{ backgroundColor: "#0D1F3C" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
                style={{ color: "#2A7FBC" }}
              >
                Adelaide-Based
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ delay: 0.08 }}
                className="text-white text-3xl md:text-4xl font-bold leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                We operate where
                our clients operate
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ delay: 0.06 }}
                className="text-white/55 text-base leading-relaxed"
              >
                Zenith is based in South Australia and serves Adelaide metropolitan
                GP practices exclusively. We&apos;re not a national franchise managing
                your account from a capital city call centre. When you call us, you
                speak to the people who clean your practice. That&apos;s a deliberate
                choice.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative h-80 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* SWAP: Drop adelaide.jpg into zenith-site/public/ and this will render automatically */}
              <Image
                src="/adelaide.jpg"
                alt="Adelaide South Australia"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(13,31,60,0.5) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              color: "#0D1F3C",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Meet the team — at your practice
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#6B7A8D" }}
          >
            The best way to understand what we do is to see us do it. Book your
            free compliance walkthrough and we&apos;ll be there in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#2A7FBC" }}
            >
              Book Free Walkthrough
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/capability-statement"
              className="inline-flex items-center justify-center gap-2.5 font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-80"
              style={{ color: "#0D1F3C", border: "1.5px solid rgba(13,31,60,0.2)" }}
            >
              View Capability Statement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
