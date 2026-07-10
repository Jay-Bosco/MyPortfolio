import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIButton from "@/components/AIButton";
import ScrollReveal from "@/components/ScrollReveal";
import Watermark from "@/components/Watermark";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Hamzat Ajibola",
  description: "Full-stack web development, backend engineering, and mobile app development services.",
};

const services = [
  {
    number: "01",
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    tagline: "Interfaces that feel alive",
    description:
      "I build pixel-perfect, performant UIs using React.js, Next.js, Angular, and Tailwind CSS. Every component is crafted with accessibility, responsiveness, and smooth animation in mind.",
    items: ["React.js / Next.js", "Angular", "Tailwind CSS / SCSS / Bootstrap", "Responsive & Mobile-First", "Framer Motion / CSS Animations", "SEO Optimisation"],
  },
  {
    number: "02",
    icon: "fa-solid fa-server",
    title: "Backend Development",
    tagline: "Robust infrastructure, zero compromise",
    description:
      "From RESTful APIs to real-time systems — I engineer server-side solutions that are secure, scalable, and maintainable using Node.js, Python, PHP, and more.",
    items: ["Node.js / Express.js", "PHP / Laravel", "Python / Django", "REST & GraphQL APIs", "Authentication & Security", "Third-party Integrations"],
  },
  {
    number: "03",
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile Development",
    tagline: "One codebase, every platform",
    description:
      "Cross-platform mobile applications built with React Native and Expo that feel native on both iOS and Android — fast, reliable, and user-friendly.",
    items: ["React Native", "Expo", "Firebase Integration", "Push Notifications", "Offline Support", "App Store Deployment"],
  },
  {
    number: "04",
    icon: "fa-solid fa-database",
    title: "Database & Cloud",
    tagline: "Data you can trust",
    description:
      "I design and manage both relational and non-relational databases, ensuring data integrity, performance, and security across your entire stack.",
    items: ["MongoDB / Mongoose", "PostgreSQL / MySQL", "Supabase", "Firebase Firestore", "Data Modelling", "Query Optimisation"],
  },
];

const process = [
  { step: "01", title: "Discovery",   desc: "Understanding your goals, users, and technical requirements through in-depth consultation." },
  { step: "02", title: "Planning",    desc: "Architecture design, tech stack selection, and project roadmap with clear milestones." },
  { step: "03", title: "Development", desc: "Iterative builds with regular check-ins, clean code, and thorough testing at every stage." },
  { step: "04", title: "Delivery",    desc: "Deployment, handover, documentation, and post-launch support to ensure a smooth launch." },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center 60%" }}
        />
        <div className="absolute inset-0 bg-[#030b18]/88" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 30%, rgba(37,99,235,0.1) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-28"
          style={{ background: "linear-gradient(to top, #04080f, transparent)" }}
        />
        <Watermark />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-light/25 bg-blue-light/5 font-heading text-blue-light text-xs tracking-[3px] uppercase mb-8"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
            What I Do
          </div>
          <h1
            className="font-display tracking-[3px] text-white max-w-4xl"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.92, animation: "fadeUp 0.8s ease 0.2s both" }}
          >
            MY <span className="shimmer-text">SERVICES</span>
          </h1>
          <p
            className="font-body text-white/45 text-lg mt-6 max-w-xl"
            style={{ animation: "fadeUp 0.8s ease 0.35s both" }}
          >
            End-to-end digital solutions — from design system to database schema.
          </p>
        </div>
      </section>

      {/* ── Service Cards — full detail ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="reveal glass rounded-3xl p-10 md:p-14 hover:border-blue-light/30 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(96,165,250,0.2)" }}
                    >
                      <i className={`${svc.icon} text-blue-light text-2xl`} />
                    </div>
                    <span
                      className="font-display text-6xl text-blue-light/10 group-hover:text-blue-light/20 transition-colors duration-300 leading-none"
                    >
                      {svc.number}
                    </span>
                  </div>
                  <h2
                    className="font-display tracking-[2px] mb-2"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1 }}
                  >
                    {svc.title}
                  </h2>
                  <p className="font-heading text-blue-light text-sm tracking-wide mb-5 italic">{svc.tagline}</p>
                  <p className="font-body text-white/50 text-base leading-relaxed">{svc.description}</p>
                </div>

                {/* Right — feature list */}
                <div>
                  <h6 className="font-heading text-white/25 text-xs tracking-[3px] uppercase mb-5">Includes</h6>
                  <ul className="space-y-3">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(96,165,250,0.2)" }}
                        >
                          <i className="fa-solid fa-check text-blue-light text-[9px]" />
                        </span>
                        <span className="font-body text-white/60 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 bg-ink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-light/25 bg-blue-light/5 font-heading text-blue-light text-xs tracking-[3px] uppercase mb-6">
              How I Work
            </div>
            <h2
              className="font-display tracking-[2px]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
            >
              My <span className="text-blue-light">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={i}
                className="reveal glass rounded-2xl p-8 group hover:border-blue-light/30 transition-all duration-400 relative overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-3 w-6 h-px bg-blue-light/20 z-10" />
                )}
                <span
                  className="font-display text-6xl text-blue-light/8 group-hover:text-blue-light/15 transition-colors duration-300 leading-none block mb-6"
                >
                  {p.step}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(96,165,250,0.2)" }}
                >
                  <i className={[
                    "fa-solid fa-magnifying-glass",
                    "fa-solid fa-pen-ruler",
                    "fa-solid fa-terminal",
                    "fa-solid fa-rocket",
                  ][i] + " text-blue-light text-sm"} />
                </div>
                <h3 className="font-heading text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)" }}
        />
        <Watermark />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal">
          <h2
            className="font-display tracking-[2px] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
          >
            Let&apos;s Build <span className="text-blue-light">Together</span>
          </h2>
          <p className="font-body text-white/45 text-base mb-10 max-w-md mx-auto">
            Have a project in mind? Let&apos;s talk about how I can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-heading font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
            >
              Start a Project
              <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-heading font-semibold text-sm tracking-widest uppercase text-white/60 border border-white/12 hover:border-blue-light/40 hover:text-white transition-all duration-300"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <AIButton />
    </>
  );
}
