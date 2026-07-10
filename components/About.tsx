"use client";

import Image from "next/image";
import Link from "next/link";
import Watermark from "./Watermark";

const skills = [
  { label: "React / Next.js",   pct: 90 },
  { label: "Node.js / Express", pct: 85 },
  { label: "React Native",      pct: 80 },
  { label: "MongoDB / SQL",     pct: 80 },
  { label: "TypeScript",        pct: 75 },
  { label: "PHP / Laravel",     pct: 70 },
];

const chips = [
  "Frontend Development","Backend Development","Mobile Apps",
  "Database Management","Problem Solving","Team Work","Time Management",
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div
        className="absolute -right-40 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
      />
      <Watermark />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-heading text-blue-light text-xs tracking-[4px] uppercase font-semibold">
            02 — About Me
          </span>
          <span className="h-px w-12 bg-blue-light/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decorative border offset */}
              <div className="absolute -top-5 -left-5 w-full h-full border border-blue-light/20 rounded-2xl" />
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-blue-light/8 rounded-2xl" />
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-ink-100">
                <Image
                  src="/page.jpeg"
                  alt="Hamzat Ajibola"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-50" />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 px-5 py-3.5 rounded-xl text-white shadow-blue"
                style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
              >
                <div className="font-display text-3xl leading-none">3+</div>
                <div className="font-heading text-xs tracking-wider uppercase text-blue-pale mt-0.5">Yrs Exp.</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2 order-1 lg:order-2">
            <h2
              className="font-display leading-none tracking-[2px] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Developer
              <br />
              <span className="text-blue-light">&amp; Engineer</span>
            </h2>

            <p className="font-body text-white/55 leading-relaxed mb-6 text-base">
              I am a Full-Stack Developer with a passion for building clean, scalable, and
              efficient solutions. From crafting interactive user experiences to ensuring secure
              server-side logic — I create responsive, end-to-end applications accessible on any
              device.
            </p>

            {/* Skill bars */}
            <div className="mb-8 space-y-3">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-heading text-white/60 text-xs tracking-wide">{s.label}</span>
                    <span className="font-heading text-blue-light text-xs">{s.pct}%</span>
                  </div>
                  <div className="h-1 w-full bg-ink-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${s.pct}%`,
                        background: "linear-gradient(90deg, #1d4ed8, #60a5fa)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:shadow-blue hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
            >
              Get in Touch
              <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
