import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "./primitives";

const NAV = [
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#clinica", label: "A Clínica" },
  { href: "#resultados", label: "Resultados" },
  { href: "#renata", label: "Renata" },
  { href: "#contato", label: "Contato" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex flex-col leading-none ${className}`} aria-label="Renata de Simas — início">
      <span className="font-serif text-2xl tracking-tight">Renata de Simas</span>
      <span className="mt-1 text-[0.58rem] uppercase tracking-[0.34em] text-taupe">Clínica de Estética</span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ${
        scrolled ? "border-border bg-background/85 py-3 backdrop-blur-md" : "border-transparent py-6"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 -top-px -z-10 h-32 bg-gradient-to-b from-background/90 via-background/45 to-transparent transition-opacity duration-700 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="container-lux flex items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-lux hidden !px-5 !py-3 lg:inline-flex">
          Agendar avaliação
        </a>
        <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu">
          <Menu className="h-6 w-6" strokeWidth={1.2} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-background transition-all duration-700 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-lux flex items-center justify-between py-6">
          <Logo />
          <button onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X className="h-6 w-6" strokeWidth={1.2} />
          </button>
        </div>
        <nav className="container-lux mt-10 flex flex-col gap-5">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`font-serif text-4xl transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="container-lux mt-auto pb-10">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-lux w-full justify-center">
            Agendar avaliação
          </a>
        </div>
      </div>
    </header>
  );
}
