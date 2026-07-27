"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const types = [
  { slug: "gp-practice", name: "GP Practices", standard: "RACGP GP4.1", detail: "Accreditation-ready documentation for general practice" },
  { slug: "medical-centre", name: "Medical Centres", standard: "RACGP GP4.1", detail: "Multi-room zone mapping for high-volume centres" },
  { slug: "specialist-clinic", name: "Specialist Clinics", standard: "RACGP + specialist standards", detail: "Procedure-room grade disinfection" },
  { slug: "allied-health", name: "Allied Health", standard: "AHPRA aligned", detail: "Physio, chiro, psychology, OT, speech therapy" },
  { slug: "day-surgery", name: "Day Surgeries", standard: "NSQHS Standard 3", detail: "Theatre terminal cleaning, surveyor-ready records" },
  { slug: "dental-clinic", name: "Dental Clinics", standard: "ADA guidelines", detail: "Aerosol-aware protocols, surgery disinfection" },
  { slug: "pathology", name: "Pathology Centres", standard: "NATA aligned", detail: "Specimen-area safe, quality-system documentation" },
  { slug: "radiology", name: "Radiology & Imaging", standard: "Health facility guidelines", detail: "Equipment-safe cleaning, high patient throughput" },
  { slug: "aged-care", name: "Aged Care Facilities", standard: "ACQSC Standards", detail: "Outbreak-ready protocols, quality assessor documentation" },
  { slug: "pharmacy", name: "Pharmacies", standard: "QCPP aligned", detail: "Dispensary, consulting rooms and retail floor" },
  { slug: "veterinary", name: "Veterinary Clinics", standard: "ASAV / premises standards", detail: "Animal-safe products, isolation-aware protocols" },
];

export default function ClinicTypesGrid() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          className="text-xs font-bold tracking-[0.28em] uppercase mb-4"
          style={{ color: "#2A7FBC" }}
        >
          Your Vertical, Your Standard
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ delay: 0.08 }}
          className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.1] mb-4 max-w-2xl"
          style={{ color: "#0D1F3C", fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Every clinic type answers to a different standard.
          <span style={{ color: "#2A7FBC" }}> We clean to all of them.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 140px 0px" }}
          transition={{ delay: 0.06 }}
          className="text-base mb-12 max-w-xl leading-relaxed"
          style={{ color: "#6B7A8D" }}
        >
          Find your clinic type to see exactly what we do, which standard it
          maps to, and how the documentation works.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {types.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 140px 0px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link
                href={`/services/${t.slug}`}
                className="group flex flex-col h-full rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(13,31,60,0.08)",
                }}
              >
                <span
                  className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full w-fit mb-4"
                  style={{
                    backgroundColor: "rgba(42,127,188,0.1)",
                    color: "#2A7FBC",
                  }}
                >
                  {t.standard}
                </span>
                <span
                  className="text-base font-bold mb-2 group-hover:text-[#2A7FBC] transition-colors"
                  style={{ color: "#0D1F3C" }}
                >
                  {t.name}
                </span>
                <span className="text-xs leading-relaxed mb-4" style={{ color: "#9CA3AF" }}>
                  {t.detail}
                </span>
                <span
                  className="mt-auto text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: "#2A7FBC" }}
                >
                  See what&apos;s included <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
