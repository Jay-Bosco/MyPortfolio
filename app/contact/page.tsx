"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIButton from "@/components/AIButton";
import ScrollReveal from "@/components/ScrollReveal";

const contactDetails = [
  { icon: "fa-solid fa-phone",        label: "Phone",    value: "+234 701 014 6824",              href: "tel:+2347010146824" },
  { icon: "fa-solid fa-envelope",     label: "Email",    value: "hamzatajibola401@gmail.com",     href: "mailto:hamzatajibola401@gmail.com" },
  { icon: "fa-solid fa-location-dot", label: "Location", value: "Lagos, Nigeria",                 href: "#" },
];

const socials = [
  { icon: "fa-brands fa-whatsapp",  href: "https://wa.me/+2347010146824",                         label: "WhatsApp" },
  { icon: "fa-brands fa-linkedin",  href: "https://www.linkedin.com/in/hamzat-ajibola-1a904a239", label: "LinkedIn" },
  { icon: "fa-brands fa-github",    href: "https://github.com/Jay-Bosco",                         label: "GitHub"   },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formsubmit.co/ajax/hamzatajibola401@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center 70%" }}
        />
        <div className="absolute inset-0 bg-[#030b18]/88" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 30%, rgba(37,99,235,0.1) 0%, transparent 65%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, #04080f, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-light/25 bg-blue-light/5 font-heading text-blue-light text-xs tracking-[3px] uppercase mb-8"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
            Get in Touch
          </div>
          <h1 className="font-display tracking-[3px] text-white max-w-4xl"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.92, animation: "fadeUp 0.8s ease 0.2s both" }}>
            LET&apos;S <span className="shimmer-text">TALK</span>
          </h1>
          <p className="font-body text-white/45 text-lg mt-6 max-w-xl"
            style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
            Have a project, idea, or just want to say hello? My inbox is always open.
          </p>
        </div>
      </section>

      {/* ── Main Contact Section ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Left panel: info ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <div className="reveal glass rounded-2xl p-8 hover:border-blue-light/30 transition-all duration-400">
                <h3 className="font-display tracking-[2px] text-2xl mb-8">
                  Contact <span className="text-blue-light">Info</span>
                </h3>
                <ul className="space-y-6">
                  {contactDetails.map((d) => (
                    <li key={d.label} className="flex items-start gap-4 group">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(96,165,250,0.2)" }}
                      >
                        <i className={`${d.icon} text-blue-light text-sm`} />
                      </div>
                      <div>
                        <p className="font-heading text-white/25 text-xs tracking-[3px] uppercase mb-1">{d.label}</p>
                        <a href={d.href} className="font-body text-white/65 hover:text-blue-light text-sm transition-colors duration-300">
                          {d.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div className="reveal reveal-delay-1 glass rounded-2xl p-8 hover:border-blue-light/30 transition-all duration-400">
                <h3 className="font-heading text-white/25 text-xs tracking-[3px] uppercase mb-5">Find Me Online</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 rounded-xl border border-white/6 hover:border-blue-light/35 hover:bg-blue-light/8 transition-all duration-300 group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(37,99,235,0.12)" }}
                      >
                        <i className={`${s.icon} text-blue-light text-sm`} />
                      </div>
                      <span className="font-heading text-white/50 text-xs tracking-wide group-hover:text-white transition-colors duration-300">
                        {s.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div
                className="reveal reveal-delay-2 glass rounded-2xl p-6 border-blue-light/20 hover:border-blue-light/35 transition-all duration-400"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-heading text-emerald-400 text-xs tracking-[3px] uppercase font-semibold">
                    Available for Work
                  </span>
                </div>
                <p className="font-body text-white/40 text-sm leading-relaxed">
                  Currently open to freelance projects and full-time roles. Response within 24 hours.
                </p>
              </div>
            </div>

            {/* ── Right panel: form ── */}
            <div className="lg:col-span-3 reveal reveal-delay-2">
              <div className="glass rounded-2xl p-10 hover:border-blue-light/25 transition-all duration-400">
                <h2 className="font-display tracking-[2px] text-3xl mb-2">
                  Send a <span className="text-blue-light">Message</span>
                </h2>
                <p className="font-body text-white/35 text-sm mb-8">
                  Fill in the form below and I&apos;ll get back to you within 24 hours.
                </p>

                {status === "sent" ? (
                  <div className="flex flex-col items-center justify-center py-20 gap-5 text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}
                    >
                      <i className="fa-solid fa-check text-emerald-400 text-3xl" />
                    </div>
                    <h3 className="font-heading text-white text-xl font-bold">Message Sent!</h3>
                    <p className="font-body text-white/40 text-sm">I&apos;ll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="font-heading text-blue-light text-sm hover:text-white transition-colors duration-300 tracking-wide"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" className="hidden" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { name: "fname", placeholder: "First Name", type: "text" },
                        { name: "lname", placeholder: "Last Name",  type: "text" },
                      ].map((f) => (
                        <div key={f.name} className="relative group">
                          <input
                            type={f.type}
                            name={f.name}
                            placeholder={f.placeholder}
                            required
                            className="w-full px-5 py-4 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all duration-300 font-body"
                            style={{
                              background: "rgba(11,21,37,0.8)",
                              border: "1px solid rgba(96,165,250,0.12)",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.45)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.12)")}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { name: "email", placeholder: "Email Address", type: "email" },
                        { name: "phone", placeholder: "Phone Number",  type: "tel"   },
                      ].map((f) => (
                        <input
                          key={f.name}
                          type={f.type}
                          name={f.name}
                          placeholder={f.placeholder}
                          required
                          className="w-full px-5 py-4 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all duration-300 font-body"
                          style={{ background: "rgba(11,21,37,0.8)", border: "1px solid rgba(96,165,250,0.12)" }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.45)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.12)")}
                        />
                      ))}
                    </div>

                    {/* Subject */}
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-5 py-4 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all duration-300 font-body"
                      style={{ background: "rgba(11,21,37,0.8)", border: "1px solid rgba(96,165,250,0.12)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.45)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.12)")}
                    />

                    {/* Message */}
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all duration-300 resize-none font-body"
                      style={{ background: "rgba(11,21,37,0.8)", border: "1px solid rgba(96,165,250,0.12)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.45)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.12)")}
                    />

                    {status === "error" && (
                      <p className="font-body text-red-400 text-sm">
                        ❌ Something went wrong. Please try again or email me directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 rounded-xl font-heading font-bold tracking-widest uppercase text-sm text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
                    >
                      {status === "sending" ? (
                        <><i className="fa-solid fa-circle-notch fa-spin" /> Sending...</>
                      ) : (
                        <><i className="fa-solid fa-paper-plane text-xs" /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIButton />
    </>
  );
}
