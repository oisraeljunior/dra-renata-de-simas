import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { ArrowRight } from "lucide-react";

export const WHATSAPP_NUMBER = "5547992828014";
export const waLink = (msg = "Olá! Vim pelo site da Clínica Renata de Simas e gostaria de agendar uma avaliação.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  /** Optional custom IntersectionObserver threshold, e.g. for partially visible scroll cards. */
  threshold?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>(threshold ?? 0.18);
  return (
    <Tag ref={ref} className={`reveal ${inView ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function RevealImage({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  eager = false,
  delay = 0,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div ref={ref} className={className}>
      <div className={`reveal-img h-full w-full overflow-hidden ${inView ? "is-in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        style={{ transitionDelay: `${delay}ms` }}
      />
      </div>
    </div>
  );
}

export function PrimaryCta({ children, href = waLink(), light = false }: { children: ReactNode; href?: string; light?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-lux ${light ? "btn-lux-light" : ""}`}>
      {children}
      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
    </a>
  );
}
