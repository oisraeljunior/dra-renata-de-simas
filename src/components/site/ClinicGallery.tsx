import { useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

export function ClinicGallery({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const dragX = useRef<number | null>(null);

  const go = (n: number) => {
    setActive(((n % slides.length) + slides.length) % slides.length);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragX.current === null) return;
    const delta = e.clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(delta) > 45) go(active + (delta < 0 ? 1 : -1));
  };

  return (
    <figure
      className="select-none"
      role="group"
      aria-roledescription="galeria de fotos"
      aria-label="Fotos da clínica"
    >
      <div
        className="relative aspect-square overflow-hidden touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (dragX.current = null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(active + 1);
          if (e.key === "ArrowLeft") go(active - 1);
        }}
        tabIndex={0}
        aria-live="polite"
      >
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1080}
            height={1080}
            draggable={false}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== active}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-lux)] ${
              i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3" aria-hidden>
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              tabIndex={-1}
              onClick={() => go(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ease-[var(--ease-lux)] ${
                i === active ? "w-8 bg-foreground" : "w-3 bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Foto anterior"
              className="grid h-10 w-10 place-items-center rounded-full border border-foreground/20 text-foreground/70 transition-colors duration-300 hover:border-foreground/60 hover:text-foreground"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Próxima foto"
              className="grid h-10 w-10 place-items-center rounded-full border border-foreground/20 text-foreground/70 transition-colors duration-300 hover:border-foreground/60 hover:text-foreground"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {slides[active].caption}
      </figcaption>
    </figure>
  );
}
