"use client";

import Link from "next/link";

const socials = [
  { icon: "fa-brands fa-whatsapp",  href: "https://wa.me/+2347010146824",                         label: "WhatsApp" },
  { icon: "fa-brands fa-linkedin",  href: "https://www.linkedin.com/in/hamzat-ajibola-1a904a239", label: "LinkedIn" },
  { icon: "fa-brands fa-github",    href: "https://github.com/Jay-Bosco",                         label: "GitHub"   },
];

const nav = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

function FooterLogo() {
  const first = "HAMZAT";
  const last  = "AJIBOLA";
  const all   = [...first.split(""), "·", ...last.split("")];

  return (
    <div className="flex items-center gap-0.5 select-none mb-5">
      {all.map((l, i) => {
        const isSep  = l === "·";
        const isBlue = i > first.length;
        const delay  = i * 130;
        const dur    = 2200;

        return (
          <span
            key={i}
            className={`font-display inline-block ${
              isSep ? "mx-2 text-white/20" : isBlue ? "text-blue-light" : "text-white"
            }`}
            style={{
              fontSize: "1.8rem",
              letterSpacing: "3px",
              animation: `footerWave ${dur}ms ease-in-out ${delay}ms infinite`,
            }}
          >
            {l}
          </span>
        );
      })}

      <style jsx>{`
        @keyframes footerWave {
          0%   { transform: translateY(0);    opacity: 1; }
          20%  { transform: translateY(-6px); opacity: 0.65; }
          40%  { transform: translateY(0);    opacity: 1; }
          100% { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-50 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <FooterLogo />
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer building clean, scalable web &amp; mobile applications. Lagos, Nigeria.
            </p>
          </div>

          <div>
            <h6 className="font-heading text-white/25 text-xs tracking-[3px] uppercase mb-5">Navigation</h6>
            <ul className="space-y-3">
              {nav.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="font-body text-white/45 hover:text-blue-light text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-blue-light group-hover:w-4 transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-heading text-white/25 text-xs tracking-[3px] uppercase mb-5">Connect</h6>
            <div className="flex gap-3 flex-wrap mb-5">
              {socials.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-ink-200 border border-white/8 flex items-center justify-center text-white/40 hover:text-blue-light hover:border-blue-light/40 hover:bg-blue-light/8 transition-all duration-300">
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
            <p className="font-body text-white/30 text-xs">hamzatajibola401@gmail.com</p>
            <p className="font-body text-white/30 text-xs mt-1">+234 701 014 6824</p>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-white/20 text-xs tracking-widest">© {new Date().getFullYear()} Hamzat Ajibola. All rights reserved.</p>
          <p className="font-heading text-white/20 text-xs tracking-widest">Built with Next.js · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
