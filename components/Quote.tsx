"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#04080f", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Radial blue glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(37,99,235,0.11) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/*
        Ghost background — "STAY POSITIVE"
        Desktop: single line  |  Mobile: two stacked lines
        Pinned to vertical centre of the section
      */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {/* On md+ screens show as one line; hide the split version */}
        <span
          className="hidden md:block font-display leading-none tracking-[6px] whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 18vw, 18rem)", color: "rgba(255,255,255,0.038)" }}
        >
          STAY POSITIVE
        </span>

        {/* On small screens show as two stacked lines */}
        <span
          className="md:hidden font-display leading-none tracking-[4px] text-center"
          style={{ fontSize: "clamp(4rem, 22vw, 10rem)", color: "rgba(255,255,255,0.038)" }}
        >
          STAY
        </span>
        <span
          className="md:hidden font-display leading-none tracking-[4px] text-center"
          style={{ fontSize: "clamp(4rem, 22vw, 10rem)", color: "rgba(255,255,255,0.038)" }}
        >
          POSITIVE
        </span>
      </div>

      {/* ── Foreground content ── */}
      <div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.85s ease, transform 0.85s ease",
        }}
      >
        {/* MANTRA label */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-10 h-px" style={{ background: "rgba(96,165,250,0.3)" }} />
          <span
            className="font-heading text-blue-light text-xs uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Mantra
          </span>
          <span className="w-10 h-px" style={{ background: "rgba(96,165,250,0.3)" }} />
        </div>

        {/* THE POWER OF */}
        <h2
          className="font-display text-white leading-none tracking-[4px] block mb-1"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
        >
          THE POWER OF
        </h2>

        {/* POSITIVITY shimmer */}
        <h2
          className="font-display shimmer-text leading-none tracking-[4px] block mb-14"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
        >
          POSITIVITY
        </h2>

        {/* Dove divider */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <span className="flex-1 max-w-[80px] h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-2xl leading-none select-none">🕊️</span>
          <span className="flex-1 max-w-[80px] h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Ire Lo Jasi */}
        <p
          className="font-heading text-white/50 font-semibold uppercase mb-14"
          style={{ fontSize: "0.9rem", letterSpacing: "7px" }}
        >
          🔥&nbsp; Ire Lo Jasi &nbsp;🔥
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group relative overflow-hidden px-10 py-4 rounded-full font-heading font-bold tracking-widest uppercase text-sm text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
              boxShadow: "0 0 0 rgba(37,99,235,0)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(37,99,235,0.5)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(37,99,235,0)")
            }
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="fa-solid fa-briefcase text-xs" />
              Let&apos;s Work Together
            </span>
          </Link>

          <a
            href="https://github.com/Jay-Bosco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-4 font-heading font-semibold tracking-widest uppercase text-sm rounded-full transition-all duration-300 hover:scale-105"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.4)";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
            }}
          >
            <i className="fa-brands fa-github text-base" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
