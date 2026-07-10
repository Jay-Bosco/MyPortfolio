"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import type { Project } from "@/types";

interface Props {
  project: Project;
  onImageClick: (images: string[], index: number) => void;
}

export default function ProjectCard({ project, onImageClick }: Props) {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX   = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 40; // px
  const isMobileApp = project.tags.includes("Mobile App");

  useLayoutEffect(() => {
    const check = () => {
      const el = descRef.current;
      if (!el || expanded) return; // only measure while clamped
      setIsTruncated(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [project.description, expanded]);

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((c) => (c - 1 + project.images.length) % project.images.length);
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((c) => (c + 1) % project.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchEndX.current   = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) >= SWIPE_THRESHOLD) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchEndX.current   = null;
  };

  return (
    <div className="group glass rounded-2xl overflow-hidden hover:border-blue-light/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] flex flex-col h-full">
      {/* Carousel */}
      <div
        className={`relative overflow-hidden bg-ink-200 flex-shrink-0 touch-pan-y ${
          isMobileApp ? "h-[420px]" : "h-52"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {project.images.map((src, i) => (
            <div
              key={i}
              className="min-w-full h-full relative cursor-zoom-in flex-shrink-0"
              onClick={() => onImageClick(project.images, i)}
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className={isMobileApp ? "object-contain" : "object-cover object-top"}
                sizes="(max-width: 768px) 100vw, 370px"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Arrow buttons — desktop only */}
        {project.images.length > 1 && (
          <>
            <button onClick={prev} aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue z-10 text-xs hidden md:flex">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button onClick={next} aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue z-10 text-xs hidden md:flex">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </>
        )}

        {/* Dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-4 h-1.5 bg-blue-light" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover overlay — desktop */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-20 flex items-end justify-center pb-5"
          style={{ background: "rgba(7,13,26,0.82)" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-bold text-sm tracking-wide text-white border border-blue-light/50 bg-blue-light/10 hover:bg-blue-light/20 transition-all duration-300 translate-y-3 group-hover:translate-y-0"
          >
            View Live
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h5 className="font-heading text-white font-bold text-base mb-2 tracking-wide">{project.title}</h5>
        <div className="flex-1">
          <p
            ref={descRef}
            className={`font-body text-white/40 text-sm leading-relaxed mb-2 ${expanded ? "" : "line-clamp-3"}`}
          >
            {project.description}
          </p>
          {isTruncated && (
            <button
              onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); }}
              className="self-start font-heading text-blue-light text-xs tracking-wide uppercase mb-3 hover:text-white transition-colors"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Mobile live link — always visible since no hover on touch */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex md:hidden items-center justify-center gap-2 py-2.5 rounded-xl font-heading font-semibold text-xs tracking-widest uppercase text-blue-light border border-blue-light/25 hover:bg-blue-light/10 transition-all duration-300"
        >
          View Live <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
        </a>
      </div>
    </div>
  );
}
