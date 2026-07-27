import { Shield, CheckCircle, Award, Layers, MapPin } from "lucide-react";

const markers = [
  { Icon: Shield, label: "RACGP GP4.1 Compliant" },
  { Icon: CheckCircle, label: "TGA-Approved Products" },
  { Icon: Award, label: "$20M Public Liability" },
  { Icon: Layers, label: "Colour-Coded Zone System" },
  { Icon: MapPin, label: "Adelaide Local Team" },
];

export default function TrustStrip() {
  return (
    <section
      style={{
        backgroundColor: "#1A3257",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {markers.map(({ Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon size={14} style={{ color: "#2A7FBC" }} />
              <span className="text-white/65 text-sm font-medium tracking-wide whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
