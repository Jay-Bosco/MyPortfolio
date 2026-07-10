import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIButton from "@/components/AIButton";
import ScrollReveal from "@/components/ScrollReveal";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Hobbies from "@/components/Hobbies";
import Watermark from "@/components/Watermark";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Hamzat Ajibola",
  description: "Learn more about Hamzat Ajibola, a Full-Stack Developer based in Lagos, Nigeria.",
};

const timeline = [
  {
    year: "2020",
    title: "Started Learning to Code",
    desc: "Began learning web development fundamentals — HTML, CSS, and JavaScript — through freeCodeCamp and Udemy, laying the foundation for a career in software engineering.",
  },
  {
    year: "2021",
    title: "Still Learning",
    desc: "Kept deepening my skills through freeCodeCamp and Udemy courses, moving from fundamentals into JavaScript frameworks and backend basics.",
  },
  {
    year: "2022",
    title: "Started Career as an Intern",
    desc: "Landed my first internship, working on real client projects and REST APIs while sharpening my full-stack skills.",
  },
  {
    year: "2023",
    title: "Full-Stack Expansion",
    desc: "Expanded into mobile development with React Native and Expo. Shipped multiple cross-platform apps.",
  },
  {
    year: "2024",
    title: "Bidoro & Alphatrol Projects",
    desc: "Led frontend and backend development for Bidoro marketplace and Alphatrol's suite of SaaS products.",
  },
  {
    year: "2025–",
    title: "Scaling & Growing",
    desc: "Continuously pushing the envelope — deeper TypeScript, cloud infrastructure, and system design.",
  },
];

const techStack = [
  { label: "Frontend",  items: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap", "SCSS"] },
  { label: "Backend",   items: ["Node.js", "Express", "PHP", "Laravel", "Python", "ASP.NET"] },
  { label: "Mobile",    items: ["React Native", "Expo", "Flutter", "Dart"] },
  { label: "Database",  items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"] },
  { label: "Tools",     items: ["Git", "GitHub", "VS Code", "Figma", "Postman"] },
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Starry bg partial */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-[#030b18]/85" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(37,99,235,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, #04080f, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-light/25 bg-blue-light/5 font-heading text-blue-light text-xs tracking-[3px] uppercase mb-8"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
            About Me
          </div>
          <h1
            className="font-display tracking-[3px] text-white"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.92, animation: "fadeUp 0.8s ease 0.2s both" }}
          >
            THE <span className="shimmer-text">DEVELOPER</span>
            <br />BEHIND THE CODE
          </h1>
        </div>
      </section>

      {/* ── About component (image + bio + skills) ── */}
      <About />

      {/* ── Tech Stack Grid ── */}
      <section className="py-24 bg-ink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex items-center gap-4 mb-4">
            <span className="font-heading text-blue-light text-xs tracking-[4px] uppercase font-semibold">
              Tech Stack
            </span>
            <span className="h-px w-12 bg-blue-light/30" />
          </div>
          <h2
            className="reveal font-display tracking-[2px] mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
          >
            Tools I <span className="text-blue-light">Work With</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {techStack.map((cat, i) => (
              <div
                key={cat.label}
                className="reveal glass rounded-2xl p-6 hover:border-blue-light/30 transition-all duration-400"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h6 className="font-heading text-blue-light text-xs tracking-[3px] uppercase mb-4">
                  {cat.label}
                </h6>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-light/60 flex-shrink-0" />
                      <span className="font-body text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <Certificates />

      {/* ── Timeline ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex items-center gap-4 mb-4">
            <span className="font-heading text-blue-light text-xs tracking-[4px] uppercase font-semibold">
              Journey
            </span>
            <span className="h-px w-12 bg-blue-light/30" />
          </div>
          <h2
            className="reveal font-display tracking-[2px] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
          >
            My <span className="text-blue-light">Timeline</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-light/40 via-blue-light/20 to-transparent hidden md:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="reveal flex gap-8 items-start"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  {/* Dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 border border-blue-light/30"
                      style={{ background: "linear-gradient(135deg, #0b1525, #0f1e35)" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-light" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-7 flex-1 hover:border-blue-light/30 transition-all duration-400 group">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <span className="font-display text-4xl text-blue-light/30 group-hover:text-blue-light/60 transition-colors duration-300 leading-none">
                          {item.year}
                        </span>
                        <h3 className="font-heading text-white font-bold text-lg mt-1">{item.title}</h3>
                      </div>
                    </div>
                    <p className="font-body text-white/45 text-sm leading-relaxed mt-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Hobbies & Priorities ── */}
      <Hobbies />

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
        />
        <Watermark />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal">
          <h2
            className="font-display tracking-[2px] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
          >
            Ready to <span className="text-blue-light">Collaborate?</span>
          </h2>
          <p className="font-body text-white/45 text-base mb-10">
            I&apos;m always open to new projects, ideas, and conversations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-heading font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
          >
            Get in Touch
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>
      </section>

      <Footer />
      <AIButton />
    </>
  );
}
