import { useState } from "react";
import { Plus } from "lucide-react";

const QUESTIONS = [
  "Qual o valor dos procedimentos?",
  "Quantas sessões são necessárias para ver resultados?",
  "Quanto tempo duram os efeitos da toxina botulínica?",
  "O preenchimento labial é feito com anestesia?",
];

// Respostas a serem preenchidas pela clínica.
const ANSWERS: Record<number, string> = {};

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-border">
      {QUESTIONS.map((q, i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="border-b border-border">
            <button
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-serif text-2xl md:text-[1.7rem]">{q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-taupe transition-transform duration-700 ${isOpen ? "rotate-45" : ""}`}
                strokeWidth={1.2}
              />
            </button>
            <div
              className="grid transition-all duration-700"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", transitionTimingFunction: "var(--ease-lux)" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-8 leading-relaxed text-muted-foreground">
                  {ANSWERS[i] ??
                    "Cada caso é avaliado individualmente. Fale com a nossa equipe pelo WhatsApp para receber uma orientação personalizada."}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
