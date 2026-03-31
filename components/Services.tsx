"use client";

import { useState } from "react";
import { services } from "@/lib/data";

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-ink-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 section-num select-none pointer-events-none pr-6 pt-4">01</div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-heading text-blue-light text-xs tracking-[4px] uppercase font-semibold">
            01 — Services
          </span>
          <span className="h-px w-12 bg-blue-light/30" />
        </div>
        <h2
          className="reveal font-display tracking-[2px] mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
        >
          What I <span className="text-blue-light">Offer</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="reveal glass rounded-2xl p-8 cursor-pointer group hover:border-blue-light/30 transition-all duration-500 flex flex-col"
              style={{ transitionDelay: `${idx * 0.12}s` }}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.08), transparent 70%)" }}
              />

              {/* Index */}
              <span
                className="absolute top-7 right-7 font-display text-4xl text-blue-light/10 group-hover:text-blue-light/20 transition-colors duration-300"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(96,165,250,0.2)" }}
              >
                <i className={`${svc.icon} text-blue-light text-xl`} />
              </div>

              <h5 className="font-heading text-white text-xl font-bold mb-3">{svc.title}</h5>
              <p className="font-body text-white/45 text-sm leading-relaxed flex-1">
                {svc.short}
                {open === idx && (
                  <span className="text-white/65 block mt-2">{svc.full}</span>
                )}
              </p>

              <button className="mt-6 flex items-center gap-2 text-blue-light font-heading text-xs tracking-widest uppercase group/btn">
                {open === idx ? "Read Less" : "Read More"}
                <i className={`fa-solid fa-arrow-right text-[10px] transition-transform duration-300 ${
                  open === idx ? "rotate-90" : "group-hover/btn:translate-x-1"
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
