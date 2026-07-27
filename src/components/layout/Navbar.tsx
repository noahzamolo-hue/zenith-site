"use client";

import Link from "next/link";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import StarGlow from "@/components/ui/StarGlow";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/guides" },
  { label: "Get an Estimate", href: "/estimate" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isLightPage = pathname !== "/";
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(isLightPage);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(isLightPage || y > 60));

  return (
    <header
      className="fixed inset-x-0 top-0 z-[150] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#0D1F3C" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.28)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-2">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image
            src="/logo.png"
            alt="Zenith Facility Management"
            width={96}
            height={105}
            priority
            className="object-contain"
          />
          <StarGlow top={15} left={48} opacity={0.5} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/65 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#2A7FBC" }}
          >
            Book Free Walkthrough
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 pb-8 flex flex-col gap-1"
          style={{
            backgroundColor: "#0D1F3C",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/80 py-3 text-base font-medium"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 text-white text-sm font-semibold px-5 py-3.5 rounded-lg text-center"
            style={{ backgroundColor: "#2A7FBC" }}
            onClick={() => setOpen(false)}
          >
            Book Free Walkthrough
          </Link>
        </div>
      )}
    </header>
  );
}
