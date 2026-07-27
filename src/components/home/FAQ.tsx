'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/lib/faqs'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-14 lg:gap-20 items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-32">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#2A7FBC' }}
            >
              Common Questions
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-[1.1] mb-5"
              style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Questions practice managers ask us
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7A8D' }}>
              Everything you need to know before booking a walkthrough. Don't see your question?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: '#2A7FBC' }}
            >
              Ask us directly →
            </a>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 140px 0px" }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#ffffff',
                  border: `1px solid ${open === i ? 'rgba(42,127,188,0.25)' : 'rgba(13,31,60,0.07)'}`,
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="text-sm font-semibold leading-snug"
                    style={{ color: '#0D1F3C' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: open === i ? 'rgba(42,127,188,0.12)' : 'rgba(13,31,60,0.06)',
                    }}
                  >
                    {open === i
                      ? <Minus size={13} style={{ color: '#2A7FBC' }} />
                      : <Plus size={13} style={{ color: '#6B7A8D' }} />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="px-6 pb-5 text-sm leading-relaxed"
                        style={{ color: '#6B7A8D' }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
