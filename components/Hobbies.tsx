"use client";

const hobbies = [
  { icon: "fa-solid fa-hands-praying",     label: "Praying"          },
  { icon: "fa-solid fa-code",              label: "Coding"           },
  { icon: "fa-solid fa-book-open",         label: "Reading"          },
  { icon: "fa-solid fa-futbol",            label: "Watching Football"},
  { icon: "fa-solid fa-person-running",    label: "Playing Football" },
  { icon: "fa-solid fa-lightbulb",         label: "Learning New Things"},
  { icon: "fa-solid fa-hand-holding-heart",label: "Helping Others"  },
];

const priorities = [
  "God First","Self","My Career","Work","Education","Family","My Country",
];

export default function Hobbies() {
  return (
    <section className="py-32 bg-ink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-heading text-blue-light text-xs tracking-[4px] uppercase font-semibold">
            04 — Personal
          </span>
          <span className="h-px w-12 bg-blue-light/30" />
        </div>
        <h2
          className="reveal font-display tracking-[2px] mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
        >
          Beyond the <span className="text-blue-light">Code</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hobbies */}
          <div className="reveal">
            <h3 className="font-heading text-white/25 text-xs tracking-[4px] uppercase flex items-center gap-3 mb-7">
              <span className="w-5 h-px bg-blue-light/40" /> Hobbies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((h, i) => (
                <div key={i}
                  className="glass flex items-center gap-3 p-4 rounded-xl group cursor-default hover:border-blue-light/25 transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue/20"
                    style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(96,165,250,0.15)" }}>
                    <i className={`${h.icon} text-blue-light text-sm`} />
                  </div>
                  <span className="font-body text-white/55 text-sm group-hover:text-white transition-colors duration-300">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Priorities */}
          <div className="reveal reveal-delay-2">
            <h3 className="font-heading text-white/25 text-xs tracking-[4px] uppercase flex items-center gap-3 mb-7">
              <span className="w-5 h-px bg-blue-light/40" /> Priorities
            </h3>
            <div className="space-y-2.5">
              {priorities.map((p, i) => (
                <div key={i}
                  className="glass flex items-center gap-5 p-4 rounded-xl group cursor-default hover:border-blue-light/25 transition-all duration-300">
                  <span className="font-display text-2xl text-blue-light/30 group-hover:text-blue-light transition-colors duration-300 w-10 flex-shrink-0"
                    style={{ letterSpacing: "1px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-white/5 group-hover:bg-blue-light/20 transition-colors duration-300" />
                  <span className="font-body text-white/55 text-sm group-hover:text-white transition-colors duration-300">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
