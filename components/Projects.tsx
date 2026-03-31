"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

interface Props { limit?: number; showCta?: boolean; }

export default function Projects({ limit, showCta = true }: Props) {
  const [lb, setLb] = useState<{ images: string[]; index: number } | null>(null);
  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-4 section-num select-none pointer-events-none pb-4">03</div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-heading text-blue-light text-xs tracking-[4px] uppercase font-semibold">
            03 — Projects
          </span>
          <span className="h-px w-12 bg-blue-light/30" />
        </div>
        <h2
          className="reveal font-display tracking-[2px] mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
        >
          Selected <span className="text-blue-light">Work</span>
        </h2>
        <p className="reveal font-body text-white/40 text-base mb-14 max-w-xl">
          A curated set of projects — from marketplaces and SaaS dashboards to cross-platform mobile apps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayed.map((p, i) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <ProjectCard project={p} onImageClick={(imgs, idx) => setLb({ images: imgs, index: idx })} />
            </div>
          ))}
        </div>

        {showCta && limit && projects.length > limit && (
          <div className="text-center mt-14 reveal">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-sm tracking-widest uppercase text-white border border-blue-light/30 hover:border-blue-light hover:bg-blue-light/8 transition-all duration-300 hover:shadow-blue"
            >
              View All Projects
              <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
        )}
      </div>

      {lb && (
        <Lightbox
          images={lb.images}
          index={lb.index}
          onClose={() => setLb(null)}
          onNav={(d) => setLb((v) => v ? { ...v, index: (v.index + d + v.images.length) % v.images.length } : null)}
        />
      )}
    </section>
  );
}
