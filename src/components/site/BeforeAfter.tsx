import { useState } from "react";

/**
 * Before/after slider. Pass real `before` / `after` image URLs.
 * Without images it renders an elegant placeholder frame.
 */
export function BeforeAfter({ before, after, label }: { before?: string; after?: string; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/5] select-none overflow-hidden bg-ivory">
        {before && after ? (
          <>
            <img src={after} alt={`${label} — depois`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <img
              src={before}
              alt={`${label} — antes`}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              loading="lazy"
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-sand/50" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <p className="font-serif text-lg italic text-muted-foreground">Fotografia de antes e depois<br />a ser inserida</p>
            </div>
          </>
        )}
        <div className="pointer-events-none absolute inset-y-0 w-px bg-background" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-background bg-background/70 text-[0.6rem] tracking-widest backdrop-blur">
            ⟷
          </span>
        </div>
        <span className="eyebrow absolute top-4 left-4 !text-foreground/70">Antes</span>
        <span className="eyebrow absolute top-4 right-4 !text-foreground/70">Depois</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Comparar antes e depois — ${label}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>{label}</span>
        <span>Arraste</span>
      </figcaption>
    </figure>
  );
}
