import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Lock } from "lucide-react";
import StarGlow from "@/components/ui/StarGlow";
import { locations } from "@/lib/locations";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
  { label: "Book Free Walkthrough", href: "/contact" },
];

const badges = ["RACGP GP4.1", "TGA-Approved", "$20M Insured", "Adelaide Local"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D1F3C" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="relative mb-5 w-fit">
            <Image
              src="/logo.png"
              alt="Zenith Facility Management"
              width={96}
              height={105}
              className="object-contain"
            />
            <StarGlow top={15} left={48} opacity={0.5} />
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Clinical-grade commercial cleaning for Adelaide GP practices and
            medical centres. RACGP GP4.1 compliant, Adelaide-local, and
            documentation-led from day one.
          </p>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(42,127,188,0.12)",
                  color: "#2A7FBC",
                  border: "1px solid rgba(42,127,188,0.25)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-white/35 text-xs font-semibold tracking-[0.22em] uppercase mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-white/55 hover:text-white text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h4 className="text-white/35 text-xs font-semibold tracking-[0.22em] uppercase mb-5">
            Areas We Service
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="text-white/55 hover:text-white text-[13px] transition-colors duration-200"
                >
                  {l.suburb}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/35 text-xs font-semibold tracking-[0.22em] uppercase mb-5">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin
                size={14}
                className="mt-0.5 shrink-0"
                style={{ color: "#2A7FBC" }}
              />
              <span className="text-white/55 text-sm">
                Adelaide, South Australia
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={14} className="shrink-0" style={{ color: "#2A7FBC" }} />
              <span className="text-white/55 text-sm">0412 496 757</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={14} className="shrink-0" style={{ color: "#2A7FBC" }} />
              <span className="text-white/55 text-sm">
                noah@zenithfacilitymanagement.com.au
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-white/25 text-xs">
          © 2026 Zenith Facility Management Pty Ltd. All rights reserved. ABN 55 839 625 234
        </p>
        <div className="flex items-center gap-4">
          <p className="text-white/20 text-xs">
            Clinical-Grade Cleaning · Adelaide SA
          </p>
          <Link href="/privacy" className="text-white/20 hover:text-white/50 text-xs transition-colors">
            Privacy Policy
          </Link>
          <Link
            href="/portal/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full transition-colors"
            style={{
              color: "#2A7FBC",
              backgroundColor: "rgba(42,127,188,0.12)",
              border: "1px solid rgba(42,127,188,0.30)",
            }}
            title="Internal staff access only"
          >
            <Lock size={12} /> Team Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
