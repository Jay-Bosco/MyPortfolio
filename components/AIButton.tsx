"use client";

export default function AIButton() {
  return (
    <div className="fixed bottom-8 right-8 z-[999] group">
      {/* Sparkles */}
      {(["top-2 right-2 [animation-delay:0s]","top-3 right-14 [animation-delay:0.5s]","top-12 right-3 [animation-delay:1s]"] as const).map((cls, i) => (
        <span key={i} className={`absolute w-2 h-2 bg-white rounded-full animate-[sparkle_1.5s_infinite] ${cls}`} />
      ))}
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full border-2 border-blue-light/60 animate-pulse-ring" />

      {/* Tooltip */}
      <div
        className="absolute right-20 top-1/2 -translate-y-1/2 px-5 py-3 rounded-3xl text-white text-sm font-heading font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-[88px] transition-all duration-300 shadow-xl"
        style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
      >
        Ask Me Anything! ✨
        <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-[#2563eb] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
      </div>

      {/* Button */}
      <a
        href="https://huggingface.co/spaces/Jay-Bosco/Assistant_AI"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="AI Assistant"
        className="relative w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-blue-lg"
        style={{
          background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
          boxShadow: "0 8px 25px rgba(37,99,235,0.4)",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <i className="fa-solid fa-robot text-white text-2xl" />
      </a>
    </div>
  );
}
