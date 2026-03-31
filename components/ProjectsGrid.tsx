"use client";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectsGrid() {
  const [lightbox, setLightbox] = useState<{ images: string[]; idx: number } | null>(null);
  const [carouselIdx, setCarouselIdx] = useState<Record<number, number>>({});

  const getCurrent = (id: number) => carouselIdx[id] ?? 0;
  const setCurrent = (id: number, idx: number) => setCarouselIdx(p => ({ ...p, [id]: idx }));

  const openLightbox = (images: string[], idx: number) => setLightbox({ images, idx });
  const closeLightbox = () => setLightbox(null);
  const lbNav = (dir: number) => {
    if (!lightbox) return;
    const next = (lightbox.idx + dir + lightbox.images.length) % lightbox.images.length;
    setLightbox({ ...lightbox, idx: next });
  };

  return (
    <>
      <section style={{ padding: "80px 0 100px", background: "#071224" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }}>
            {projects.map((p, pi) => {
              const curr = getCurrent(p.id);
              return (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${(pi % 3) * 0.1}s`, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(59,130,246,0.1)", background: "#030b18", transition: "all 0.4s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(59,130,246,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  {/* Carousel */}
                  <div style={{ position: "relative", height: 220, overflow: "hidden", background: "#0a1a35" }}
                    onMouseEnter={e => { e.currentTarget.querySelectorAll(".car-btn").forEach(b => ((b as HTMLElement).style.opacity = "1")); }}
                    onMouseLeave={e => { e.currentTarget.querySelectorAll(".car-btn").forEach(b => ((b as HTMLElement).style.opacity = "0")); }}
                  >
                    <div style={{ display: "flex", height: "100%", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)", transform: `translateX(-${curr * 100}%)` }}>
                      {p.images.map((src, ii) => (
                        <div key={ii} style={{ minWidth: "100%", height: "100%", flexShrink: 0, cursor: "zoom-in" }} onClick={() => openLightbox(p.images, ii)}>
                          <img src={src} alt={`${p.title} ${ii + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                        </div>
                      ))}
                    </div>

                    {/* Arrows */}
                    {p.images.length > 1 && (<>
                      <button className="car-btn" onClick={e => { e.stopPropagation(); setCurrent(p.id, (curr - 1 + p.images.length) % p.images.length); }}
                        style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(3,11,24,0.75)", border: "1px solid rgba(59,130,246,0.25)", color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: 0, transition: "opacity 0.3s", zIndex: 5 }}>
                        <i className="fa-solid fa-chevron-left" style={{ fontSize: 11 }} />
                      </button>
                      <button className="car-btn" onClick={e => { e.stopPropagation(); setCurrent(p.id, (curr + 1) % p.images.length); }}
                        style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(3,11,24,0.75)", border: "1px solid rgba(59,130,246,0.25)", color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: 0, transition: "opacity 0.3s", zIndex: 5 }}>
                        <i className="fa-solid fa-chevron-right" style={{ fontSize: 11 }} />
                      </button>
                    </>)}

                    {/* Dots */}
                    <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 5 }}>
                      {p.images.map((_, ii) => (
                        <button key={ii} onClick={e => { e.stopPropagation(); setCurrent(p.id, ii); }}
                          style={{ width: ii === curr ? 18 : 6, height: 6, borderRadius: 3, background: ii === curr ? "#3b82f6" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
                      ))}
                    </div>

                    {/* Hover overlay */}
                    <div className="car-overlay" style={{ position: "absolute", inset: 0, background: "rgba(37,99,235,0.7)", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 20, opacity: 0, transition: "opacity 0.3s", zIndex: 4, pointerEvents: "none" }}>
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                        style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", padding: "10px 24px", borderRadius: 40, background: "#fff", color: "#030b18", textDecoration: "none", pointerEvents: "auto", display: "inline-flex", alignItems: "center", gap: 8 }}>
                        View Live <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 10 }} />
                      </a>
                    </div>
                    <style>{`.car-overlay { display: flex !important; }`}</style>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "22px 24px 28px" }}>
                    <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.98rem", color: "#e2e8f0", marginBottom: 8 }}>{p.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.83rem", color: "rgba(148,163,184,0.6)", lineHeight: 1.75, marginBottom: 16 }}>{p.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tags.map(t => (
                        <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "0.63rem", letterSpacing: "0.5px", padding: "3px 10px", borderRadius: 20, background: "rgba(59,130,246,0.09)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={closeLightbox}>
          <button onClick={closeLightbox} style={{ position: "absolute", top: 20, right: 24, background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", width: 44, height: 44, borderRadius: "50%", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fa-solid fa-xmark" />
          </button>
          <button onClick={e => { e.stopPropagation(); lbNav(-1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#fff", width: 48, height: 48, borderRadius: "50%", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fa-solid fa-chevron-left" />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: "88vw", maxHeight: "82vh", position: "relative" }}>
            <img src={lightbox.images[lightbox.idx]} alt="Screenshot" style={{ maxWidth: "88vw", maxHeight: "82vh", objectFit: "contain", borderRadius: 8, display: "block" }} />
          </div>
          <button onClick={e => { e.stopPropagation(); lbNav(1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#fff", width: 48, height: 48, borderRadius: "50%", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fa-solid fa-chevron-right" />
          </button>
          <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "2px" }}>
            {lightbox.idx + 1} / {lightbox.images.length}
          </div>
        </div>
      )}
    </>
  );
}
