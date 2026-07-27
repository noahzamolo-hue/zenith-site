"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  practice: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  practice: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameParts = form.name.trim().split(/\s+/);
    const payload = {
      timestamp: new Date().toISOString(),
      event_type: 'contact_form_submitted',
      campaign_name: 'Zenith Facility Management Campaigns',
      workspace: '',
      campaign_id: '',
      lead_email: form.email,
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      companyName: form.practice,
      website: '',
      phone: form.phone,
      step: 1,
      email_account: '',
      message: form.message,
    };

    try {
      await fetch(
        'https://services.leadconnectorhq.com/hooks/SLfn8Ix92WDxEmw7dvCR/webhook-trigger/522f2d40-524b-41f0-9f84-40509f83cc58',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
    } catch {
      // fire-and-forget — don't block the thank-you state
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'contact_form_submitted', {
        event_category: 'lead',
        event_label: 'walkthrough_request',
      })
    }
    setSubmitted(true);
  };

  const fieldStyle = (name: string) => ({
    backgroundColor: "white",
    border: `1px solid ${focused === name ? "#2A7FBC" : "rgba(13,31,60,0.12)"}`,
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "15px",
    color: "#0D1F3C",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(42,127,188,0.1)" : "none",
  });

  const labelStyle = {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    color: "#6B7A8D",
    marginBottom: "6px",
    display: "block",
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-64"
        style={{
          backgroundColor: "#F7F9FC",
          border: "1px solid rgba(13,31,60,0.07)",
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: "rgba(31,122,92,0.12)" }}
        >
          <Send size={22} style={{ color: "#1F7A5C" }} />
        </div>
        <h3
          className="text-xl font-bold mb-2"
          style={{
            color: "#0D1F3C",
            fontFamily: "var(--font-playfair), Georgia, serif",
          }}
        >
          Message received
        </h3>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6B7A8D" }}>
          We&apos;ll be in touch within one business day to confirm your
          walkthrough time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row: Name + Practice */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            style={fieldStyle("name")}
          />
        </div>
        <div>
          <label htmlFor="practice" style={labelStyle}>
            Practice Name
          </label>
          <input
            id="practice"
            name="practice"
            type="text"
            required
            placeholder="Adelaide Family Medical"
            value={form.practice}
            onChange={handleChange}
            onFocus={() => setFocused("practice")}
            onBlur={() => setFocused(null)}
            style={fieldStyle("practice")}
          />
        </div>
      </div>

      {/* Row: Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@yourpractice.com.au"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={fieldStyle("email")}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(08) XXXX XXXX"
            value={form.phone}
            onChange={handleChange}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            style={fieldStyle("phone")}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          Message <span style={{ color: "#6B7A8D", fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your practice — number of rooms, current cleaning setup, any specific concerns..."
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          style={{ ...fieldStyle("message"), resize: "vertical", lineHeight: "1.6" }}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2.5 text-white font-semibold py-4 rounded-xl text-base tracking-wide transition-all duration-200 hover:opacity-90 active:scale-98"
        style={{ backgroundColor: "#2A7FBC" }}
      >
        Book Free RACGP Walkthrough
        <Send size={16} />
      </button>

      <p className="text-xs text-center" style={{ color: "#6B7A8D" }}>
        We&apos;ll respond within one business day. No cost, no obligation.
      </p>
    </form>
  );
}
