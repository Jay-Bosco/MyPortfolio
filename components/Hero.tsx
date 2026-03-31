"use client";

import Link from "next/link";

const socials = [
  { icon: "fa-brands fa-whatsapp",  href: "https://wa.me/+2347010146824",                         label: "WhatsApp" },
  { icon: "fa-brands fa-linkedin",  href: "https://www.linkedin.com/in/hamzat-ajibola-1a904a239", label: "LinkedIn" },
  { icon: "fa-brands fa-github",    href: "https://github.com/Jay-Bosco",                         label: "GitHub"   },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#030b18]/70" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(37,99,235,0.13) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #04080f, transparent)" }} />

      {/* Vertical social rail — left edge */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-5 z-20">
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-blue-light/40 to-transparent" />
        {socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-blue-light hover:border-blue-light/50 hover:bg-blue-light/10 transition-all duration-300 text-sm">
            <i className={s.icon} />
          </a>
        ))}
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-blue-light/40 to-transparent" />
      </div>

      {/* ── Centred content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-light/25 bg-blue-light/5 font-heading text-blue-light text-xs tracking-[3px] uppercase mb-10"
          style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
          Full-Stack Developer · Nigeria
        </div>

        {/* Big name */}
        <div style={{ animation: "fadeUp 0.85s ease 0.22s both" }}>
          <h1 className="font-display leading-none tracking-[3px] text-white select-none"
            style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}>
            HAMZAT
          </h1>
          <h1 className="font-display leading-none tracking-[3px] shimmer-text select-none"
            style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}>
            AJIBOLA
          </h1>
        </div>

        {/* Tagline */}
        <p className="font-body italic text-white/35 text-lg mt-6 mb-4 tracking-wide"
          style={{ animation: "fadeUp 0.8s ease 0.4s both" }}>
          Building the future, one commit at a time
        </p>

        {/* Description */}
        <p className="font-body text-white/52 text-base leading-relaxed max-w-lg mb-10"
          style={{ animation: "fadeUp 0.8s ease 0.5s both" }}>
          I craft <span className="text-blue-pale font-medium">end-to-end digital products</span> — from
          pixel-perfect interfaces to robust server architecture — that scale with your ambitions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16"
          style={{ animation: "fadeUp 0.8s ease 0.6s both" }}>
          <Link href="/contact"
            className="group relative overflow-hidden px-9 py-4 rounded-full font-heading font-semibold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}>
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 bg-blue-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link href="/projects"
            className="px-9 py-4 rounded-full font-heading font-semibold text-sm tracking-widest uppercase text-white/70 border border-white/15 hover:border-blue-light/50 hover:text-white hover:bg-blue-light/5 transition-all duration-300 hover:scale-105">
            View Projects
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-12 justify-center"
          style={{ animation: "fadeUp 0.8s ease 0.7s both" }}>
          {[
            { value: "8+",   label: "Projects Shipped" },
            { value: "3+",   label: "Years Experience"  },
            { value: "MERN", label: "Primary Stack"     },
            { value: "∞",    label: "Curiosity"         },
          ].map((s) => (
            <div key={s.label} className="group cursor-default text-center">
              <div className="font-display text-4xl text-blue-light leading-none tracking-wide group-hover:text-white transition-colors duration-300">
                {s.value}
              </div>
              <div className="font-heading text-white/30 text-xs tracking-[2px] uppercase mt-1 group-hover:text-white/50 transition-colors duration-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ animation: "fadeIn 1s ease 1.3s both" }}>
        <span className="font-heading text-white/25 text-[10px] tracking-[4px] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-light/40 to-transparent" />
      </div>
    </section>
  );
}
