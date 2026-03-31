"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
];

function AnimatedLogo() {
  const first = "HAMZAT";
  const last  = "AJIBOLA";
  const all   = [...first.split(""), "·", ...last.split("")];

  return (
    <Link href="/" className="group flex items-center gap-0.5 select-none" aria-label="Home">
      {all.map((l, i) => {
        const isSep   = l === "·";
        const isBlue  = i > first.length; // AJIBOLA letters
        const delay   = i * 120; // ms between each letter wave
        const dur     = 2000;    // full wave cycle

        return (
          <span
            key={i}
            className={`font-display inline-block ${
              isSep ? "mx-2 text-white/20" : isBlue ? "text-blue-light" : "text-white"
            }`}
            style={{
              fontSize: "1.55rem",
              letterSpacing: "3px",
              animation: `logoWave ${dur}ms ease-in-out ${delay}ms infinite`,
            }}
          >
            {l}
          </span>
        );
      })}

      <style jsx>{`
        @keyframes logoWave {
          0%   { transform: translateY(0);   opacity: 1; }
          20%  { transform: translateY(-5px); opacity: 0.7; }
          40%  { transform: translateY(0);   opacity: 1; }
          100% { transform: translateY(0);   opacity: 1; }
        }
      `}</style>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-ink-50/92 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <AnimatedLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href}
                className={`font-heading text-sm tracking-widest uppercase transition-colors duration-300 relative group ${
                  active ? "text-blue-light" : "text-white/60 hover:text-white"
                }`}>
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-blue-light transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
          <Link href="/contact"
            className="px-6 py-2.5 rounded-full font-heading text-sm font-semibold tracking-widest uppercase text-white border border-blue-light/40 hover:bg-blue-light/10 hover:border-blue-light hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] transition-all duration-300">
            Contact
          </Link>
        </nav>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {[0,1,2].map(i => (
            <span key={i} className={`block h-px w-6 bg-white transition-all duration-300 ${
              i === 0 && menuOpen ? "rotate-45 translate-y-2" :
              i === 1 && menuOpen ? "opacity-0 scale-x-0" :
              i === 2 && menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-ink-100/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className={`font-heading text-sm tracking-widest uppercase py-2 border-b border-white/5 transition-colors duration-300 ${
                pathname === l.href ? "text-blue-light" : "text-white/60"
              }`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 border border-blue-light/40 text-white text-sm font-heading font-semibold tracking-widest uppercase rounded-full text-center hover:bg-blue-light/10 transition-all">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
