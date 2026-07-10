"use client";

import { useState } from "react";
import { certificates } from "@/lib/data";
import Lightbox from "./Lightbox";

export default function Certificates() {
  const [lb, setLb] = useState<number | null>(null);
  const images = certificates.map((c) => c.image);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-heading text-blue-light text-xs tracking-[4px] uppercase font-semibold">
            Credentials
          </span>
          <span className="h-px w-12 bg-blue-light/30" />
        </div>
        <h2
          className="reveal font-display tracking-[2px] mb-14"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
        >
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((c, i) => (
            <div
              key={c.id}
              className="reveal glass rounded-2xl overflow-hidden hover:border-blue-light/30 transition-all duration-400 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="relative h-64 bg-ink-200 cursor-zoom-in overflow-hidden"
                onClick={() => setLb(i)}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h6 className="font-heading text-white font-bold text-sm leading-snug mb-1">
                  {c.title}
                </h6>
                <p className="font-body text-white/40 text-xs mb-3">
                  {c.issuer} — {c.date}
                </p>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-heading text-blue-light text-xs tracking-wide uppercase hover:text-white transition-colors"
                >
                  Verify
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lb !== null && (
        <Lightbox
          images={images}
          index={lb}
          onClose={() => setLb(null)}
          onNav={(d) => setLb((v) => (v === null ? null : (v + d + images.length) % images.length))}
        />
      )}
    </section>
  );
}
