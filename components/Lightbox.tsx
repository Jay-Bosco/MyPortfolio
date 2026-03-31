"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onNav: (dir: number) => void;
}

export default function Lightbox({ images, index, onClose, onNav }: Props) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose, onNav]);

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center" onClick={onClose}
      style={{ background: "rgba(4,8,15,0.96)", backdropFilter: "blur(12px)" }}>
      <button onClick={onClose} aria-label="Close"
        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/8 transition-colors z-10 text-xl">
        <i className="fa-solid fa-xmark" />
      </button>

      <button onClick={(e) => { e.stopPropagation(); onNav(-1); }} aria-label="Prev"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-blue/60 hover:border-blue-light/50 transition-all duration-300 z-10">
        <i className="fa-solid fa-chevron-left" />
      </button>

      <div className="relative max-w-[88vw] max-h-[82vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
        <Image src={images[index]} alt={`Screenshot ${index + 1}`} fill className="object-contain" sizes="88vw" />
      </div>

      <button onClick={(e) => { e.stopPropagation(); onNav(1); }} aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-blue/60 hover:border-blue-light/50 transition-all duration-300 z-10">
        <i className="fa-solid fa-chevron-right" />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {images.map((_, i) => (
          <span key={i} className={`rounded-full transition-all duration-300 ${
            i === index ? "w-5 h-1.5 bg-blue-light" : "w-1.5 h-1.5 bg-white/25"
          }`} />
        ))}
      </div>
    </div>
  );
}
