import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIButton from "@/components/AIButton";
import ScrollReveal from "@/components/ScrollReveal";
import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Hamzat Ajibola",
  description: "A full showcase of projects built by Hamzat Ajibola — web, mobile, and SaaS applications.",
};

const categories = ["All", "Web App", "Mobile", "Dashboard", "Marketplace"];

export default function ProjectsPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-[#030b18]/88" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 50% 30%, rgba(37,99,235,0.1) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-28"
          style={{ background: "linear-gradient(to top, #04080f, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-light/25 bg-blue-light/5 font-heading text-blue-light text-xs tracking-[3px] uppercase mb-8"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
            Portfolio
          </div>
          <h1
            className="font-display tracking-[3px] text-white max-w-4xl"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.92, animation: "fadeUp 0.8s ease 0.2s both" }}
          >
            ALL <span className="shimmer-text">PROJECTS</span>
          </h1>
          <p
            className="font-body text-white/45 text-lg mt-6 max-w-xl"
            style={{ animation: "fadeUp 0.8s ease 0.35s both" }}
          >
            Eight plus shipped products across web, mobile, and SaaS — each solving a real problem.
          </p>
        </div>
      </section>

      {/* ── All Projects Grid ── */}
      <Projects limit={undefined} showCta={false} />

      {/* ── Contact CTA strip ── */}
      <section className="py-24 bg-ink-50 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 reveal">
          <div
            className="glass rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-blue-light/20 hover:border-blue-light/35 transition-all duration-500"
          >
            <div>
              <h2
                className="font-display tracking-[2px] mb-3"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
              >
                Have a <span className="text-blue-light">Project?</span>
              </h2>
              <p className="font-body text-white/45 text-base max-w-md">
                I&apos;m available for freelance work and full-time opportunities. Let&apos;s build something great together.
              </p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 px-10 py-4 rounded-full font-heading font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:scale-105 whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
            >
              Start a Conversation
              <i className="fa-solid fa-arrow-right text-xs" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <AIButton />
    </>
  );
}
