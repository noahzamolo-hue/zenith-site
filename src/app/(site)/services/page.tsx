"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeartPulse,
  ClipboardCheck,
  CalendarClock,
  ArrowRight,
  Check,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// Colour-coded zone data
// Colours follow the RACGP GP4.1 colour-coded zone system exactly.
const zones = [
  {
    colour: "#DC2626",
    label: "Red Zone",
    name: "Bathrooms & Toilets",
    areas: ["Patient toilets", "Staff bathrooms", "Sluice rooms", "Clinical waste storage"],
    note: "Highest contamination risk. Dedicated red-coded mops, cloths and buckets only — never used in any other zone.",
  },
  {
    colour: "#CA8A04",
    label: "Yellow Zone",
    name: "Consultation & Treatment",
    areas: ["Consultation rooms", "Treatment rooms", "Procedure rooms", "Examination areas"],
    note: "Clinical-grade disinfection to RACGP GP4.1 standard. Yellow-coded equipment dedicated to clinical spaces.",
  },
  {
    colour: "#2A7FBC",
    label: "Blue Zone",
    name: "General & Admin Areas",
    areas: ["Reception & waiting room", "Admin desks", "Corridors", "Staff rooms"],
    note: "General clean with TGA-approved surface disinfection. Blue-coded equipment never enters clinical or bathroom zones.",
  },
  {
    colour: "#1F7A5C",
    label: "Green Zone",
    name: "Kitchen & Food Areas",
    areas: ["Staff kitchen", "Tea points", "Food preparation surfaces"],
    note: "Food-safe cleaning products only. Green-coded equipment isolated from all clinical and bathroom areas.",
  },
];

const services = [
  {
    id: "medical-cleaning",
    Icon: HeartPulse,
    title: "Medical Clinic Cleaning",
    subtitle: "For GP practices, medical centres, and specialist clinics",
    description:
      "Our core service is regular, documented cleaning for medical environments. Every clean follows the RACGP GP4.1 colour-coded zone system, uses TGA-approved disinfectants, and is accompanied by a photo-documented compliance checklist.",
    included: [
      "Colour-coded zone cleaning (see zone system below)",
      "TGA-approved surface disinfection in all clinical areas",
      "Photo-documented compliance checklist after every clean",
      "Dedicated team — same people every visit",
      "Clinical waste bin management and replacement",
      "After-hours scheduling — no disruption to patient care",
      "Monthly service report ready for your accreditation file",
    ],
    racgp: "Directly supports RACGP GP4.1 Standard C7.1 — Infection prevention and control.",
  },
  {
    id: "compliance-audits",
    Icon: ClipboardCheck,
    title: "RACGP Compliance Audits",
    subtitle: "Free for all Adelaide GP practices — no strings attached",
    description:
      "Before we quote a single dollar, we visit your practice and walk every room against the RACGP GP4.1 standard. You receive a written report — whether or not you become a client. Most practices find at least one issue they weren't aware of.",
    included: [
      "30-minute on-site walkthrough with your Practice Manager",
      "RACGP GP4.1 room-by-room assessment",
      "Zone classification for every space in your practice",
      "Written compliance gap report — yours to keep",
      "Specific recommendations for each identified risk",
      "No sales pressure — you choose what happens next",
    ],
    racgp: "The walkthrough maps directly to RACGP GP4.1 Criterion C7.1 audit requirements.",
  },
  {
    id: "ongoing-maintenance",
    Icon: CalendarClock,
    title: "Ongoing Maintenance Program",
    subtitle: "Set-and-forget cleaning with complete audit documentation",
    description:
      "Once engaged, we handle your cleaning schedule end-to-end. You get consistent service from the same team, a structured schedule aligned to your patient hours, and a monthly documentation file that makes your next RACGP review straightforward.",
    included: [
      "Flexible schedule: daily, 3×/week, or 5×/week",
      "Saturday deep-clean available",
      "Photo-documented checklist after every session",
      "Monthly compliance file emailed to you",
      "Scheduled deep-clean quarterly",
      "12-month fixed rate — no price hikes",
      "24-hour redo guarantee if anything is missed",
    ],
    racgp: "Continuous documentation supports ongoing RACGP accreditation across all cleaning-related standards.",
  },
];

export default function ServicesPage() {
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
            What We Offer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
            className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] max-w-3xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Services built for
            <br />
            <span style={{ color: "#2A7FBC" }}>medical-grade</span> environments
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.06 }}
            className="mt-5 text-white/55 text-lg max-w-xl leading-relaxed"
          >
            Three core services — all RACGP-aligned, all documentation-led, all
            delivered by the same team every time.
          </motion.p>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((s, si) => (
        <section
          key={s.id}
          id={s.id}
          className="py-20 md:py-28"
          style={{ backgroundColor: si % 2 === 0 ? "#ffffff" : "#F7F9FC" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
              {/* Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(42,127,188,0.1)" }}
                >
                  <s.Icon size={26} style={{ color: "#2A7FBC" }} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                  transition={{ duration: 0.4, delay: 0.06 }}
                  className="text-3xl md:text-4xl font-bold leading-[1.1] mb-2"
                  style={{
                    color: "#0D1F3C",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {s.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-sm font-medium mb-5"
                  style={{ color: "#2A7FBC" }}
                >
                  {s.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                  transition={{ duration: 0.4, delay: 0.14 }}
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "#6B7A8D" }}
                >
                  {s.description}
                </motion.p>

                {/* RACGP badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-xl p-4 flex gap-3 items-start"
                  style={{
                    backgroundColor: "rgba(31,122,92,0.07)",
                    border: "1px solid rgba(31,122,92,0.18)",
                  }}
                >
                  <div
                    className="w-1 h-full min-h-[2.5rem] rounded-full shrink-0"
                    style={{ backgroundColor: "#1F7A5C" }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold tracking-wider uppercase mb-1"
                      style={{ color: "#1F7A5C" }}
                    >
                      RACGP Relevance
                    </p>
                    <p className="text-sm" style={{ color: "#0D1F3C" }}>
                      {s.racgp}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right — included list */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "#F7F9FC",
                  border: "1px solid rgba(13,31,60,0.07)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-[0.22em] uppercase mb-6"
                  style={{ color: "#6B7A8D" }}
                >
                  What&apos;s included
                </p>
                <ul className="space-y-4">
                  {s.included.map((point) => (
                    <li key={point} className="flex gap-3 items-start">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(42,127,188,0.12)" }}
                      >
                        <Check size={11} style={{ color: "#2A7FBC" }} />
                      </div>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "#0D1F3C" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Zone cleaning infographic */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0D1F3C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
              style={{ color: "#2A7FBC" }}
            >
              RACGP GP4.1 Compliance
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-bold leading-[1.1] text-white max-w-2xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Colour-coded zone cleaning — why it matters
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ delay: 0.06 }}
              className="mt-4 max-w-xl text-white/55 text-base leading-relaxed"
            >
              Every room in your practice carries a different infection risk. The
              colour-coded system prevents cross-contamination by ensuring
              equipment from one zone never enters another.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map(({ colour, label, name, areas, note }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${colour}`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: colour }}
                  />
                  <span
                    className="text-[11px] font-bold tracking-wider uppercase"
                    style={{ color: colour }}
                  >
                    {label}
                  </span>
                </div>
                <p
                  className="text-white font-semibold text-sm mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {name}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {areas.map((a) => (
                    <li key={a} className="flex gap-2 items-center">
                      <div
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: colour, opacity: 0.7 }}
                      />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  className="text-[11px] leading-relaxed mt-auto"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic types grid */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
            style={{ color: "#2A7FBC" }}
          >
            Clinic-Specific Cleaning
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4 max-w-2xl"
            style={{ color: "#0D1F3C", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            We clean every type of Adelaide medical facility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 140px 0px" }}
            transition={{ delay: 0.06 }}
            className="text-base text-[#6B7A8D] mb-12 max-w-xl leading-relaxed"
          >
            Every clinic type has different compliance requirements. Click yours to see exactly what we do and how we document it.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: "gp-practice", name: "GP Practices", icon: "🏥", detail: "RACGP GP4.1 — full accreditation documentation" },
              { slug: "medical-centre", name: "Medical Centres", icon: "🏢", detail: "Multi-room, high-volume compliance cleaning" },
              { slug: "specialist-clinic", name: "Specialist Clinics", icon: "🔬", detail: "Dermatology, cardiology, ENT, ophthalmology & more" },
              { slug: "allied-health", name: "Allied Health", icon: "💪", detail: "Physio, chiro, psychology, OT, speech therapy" },
              { slug: "day-surgery", name: "Day Surgeries", icon: "⚕️", detail: "Theatre terminal cleaning, NSQHS documentation" },
              { slug: "dental-clinic", name: "Dental Clinics", icon: "🦷", detail: "ADA infection control, aerosol-aware protocols" },
              { slug: "pathology", name: "Pathology Centres", icon: "🧪", detail: "NATA-aligned, specimen-area safe cleaning" },
              { slug: "radiology", name: "Radiology & Imaging", icon: "📡", detail: "Equipment-safe, high patient-throughput cleaning" },
              { slug: "aged-care", name: "Aged Care Facilities", icon: "🏡", detail: "ACQSC standards, outbreak-ready protocols" },
              { slug: "pharmacy", name: "Pharmacies", icon: "💊", detail: "QCPP aligned — dispensary to retail floor" },
              { slug: "veterinary", name: "Veterinary Clinics", icon: "🐾", detail: "Animal-safe products, isolation-aware cleaning" },
            ].map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex flex-col h-full rounded-xl p-6 transition-all duration-200"
                  style={{
                    backgroundColor: "#F7F9FC",
                    border: "1px solid rgba(13,31,60,0.08)",
                  }}
                >
                  <span className="text-2xl mb-3">{item.icon}</span>
                  <span
                    className="text-sm font-bold mb-2 group-hover:text-[#2A7FBC] transition-colors"
                    style={{ color: "#0D1F3C" }}
                  >
                    {item.name}
                  </span>
                  <span className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>
                    {item.detail}
                  </span>
                  <span
                    className="mt-4 text-xs font-semibold group-hover:gap-2 flex items-center gap-1 transition-all"
                    style={{ color: "#2A7FBC" }}
                  >
                    See details <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#F7F9FC" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              color: "#0D1F3C",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Ready to see how your practice measures up?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7A8D" }}>
            Book your free RACGP GP4.1 compliance walkthrough. No cost, no
            obligation — just a clear picture of where you stand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#2A7FBC" }}
          >
            Book Free Walkthrough
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
