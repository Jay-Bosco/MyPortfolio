interface Props {
  text?: string;
}

export default function Watermark({ text = "IRE LO JASI" }: Props) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <span
        className="font-display leading-none tracking-[6px] whitespace-nowrap text-center"
        style={{ fontSize: "clamp(2.8rem, 13vw, 13rem)", color: "rgba(255,255,255,0.035)" }}
      >
        {text}
      </span>
    </div>
  );
}
