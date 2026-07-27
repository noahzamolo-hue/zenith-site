"use client";

import { motion } from "framer-motion";

interface StarGlowProps {
  top: number;
  left: number;
  opacity?: number;
}

const GREEN = "rgba(31, 122, 92,";

export default function StarGlow({ top, left, opacity = 1 }: StarGlowProps) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top,
        left,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 20,
        width: 0,
        height: 0,
        opacity,
      }}
    >
      {/* Radial glow core */}
      <motion.div
        animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 44,
          height: 44,
          top: -22,
          left: -22,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${GREEN} 1) 0%, ${GREEN} 0.6) 30%, ${GREEN} 0) 70%)`,
        }}
      />

      {/* Horizontal ray */}
      <motion.div
        animate={{ scaleX: [0.2, 1.3, 0.2], opacity: [0, 0.8, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
        style={{
          position: "absolute",
          width: 48,
          height: 1.5,
          top: -0.75,
          left: -24,
          background: `linear-gradient(90deg, transparent 0%, ${GREEN} 0.9) 35%, ${GREEN} 1) 50%, ${GREEN} 0.9) 65%, transparent 100%)`,
        }}
      />

      {/* Vertical ray */}
      <motion.div
        animate={{ scaleY: [0.2, 1.3, 0.2], opacity: [0, 0.8, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
        style={{
          position: "absolute",
          width: 1.5,
          height: 48,
          top: -24,
          left: -0.75,
          background: `linear-gradient(180deg, transparent 0%, ${GREEN} 0.9) 35%, ${GREEN} 1) 50%, ${GREEN} 0.9) 65%, transparent 100%)`,
        }}
      />

      {/* Diagonal ray ↗ */}
      <motion.div
        animate={{ scale: [0.2, 1.1, 0.2], opacity: [0, 0.55, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
        style={{
          position: "absolute",
          width: 34,
          height: 1.5,
          top: -0.75,
          left: -17,
          transform: "rotate(45deg)",
          background: `linear-gradient(90deg, transparent 0%, ${GREEN} 0.8) 35%, ${GREEN} 0.95) 50%, ${GREEN} 0.8) 65%, transparent 100%)`,
        }}
      />

      {/* Diagonal ray ↘ */}
      <motion.div
        animate={{ scale: [0.2, 1.1, 0.2], opacity: [0, 0.55, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
        style={{
          position: "absolute",
          width: 34,
          height: 1.5,
          top: -0.75,
          left: -17,
          transform: "rotate(-45deg)",
          background: `linear-gradient(90deg, transparent 0%, ${GREEN} 0.8) 35%, ${GREEN} 0.95) 50%, ${GREEN} 0.8) 65%, transparent 100%)`,
        }}
      />
    </div>
  );
}
