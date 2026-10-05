import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Instagram, MessageCircle, Star } from "lucide-react";
import { Header, Logo } from "@/components/site/Header";
import { Reveal, RevealImage, PrimaryCta, waLink } from "@/components/site/primitives";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Faq } from "@/components/site/Faq";
import heroImg from "@/assets/hero-renata.jpg";
import skinImg from "@/assets/skin-closeup.jpg";
import roomImg from "@/assets/clinic-room.jpg";
import coffeeImg from "@/assets/clinic-coffee.jpg";
import receptionImg from "@/assets/clinic-reception.jpg";
import toxinaImg from "@/assets/proc-toxina.jpg";
import fiosImg from "@/assets/proc-fios.jpg";
import rinoImg from "@/assets/proc-rinomodelacao.jpg";
import mentoImg from "@/assets/proc-mento.jpg";
import limpezaImg from "@/assets/proc-limpeza.jpg";
import peelingImg from "@/assets/proc-peeling.jpg";

const TITLE = "Renata de Simas | Estética Avançada em Navegantes SC";
const DESC =
  "Tratamentos estéticos personalizados em Navegantes/SC com foco em naturalidade, harmonia e cuidado. Conheça a Clínica Renata de Simas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INSTAGRAM = "https://instagram.com/renatadesimas";

function Index() {
  return (
    <div id="top" className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Philosophy />
        <Procedures />
        <MidCta />
        <Clinic />
        <Results />
        <About />
        <Testimonials />
        <RoomRental />
        <FaqSection />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground lg:hidden"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.4} />
      </a>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-28 lg:pt-0">
      <div className="container-lux grid min-h-[100svh] items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-0">
        <div className="relative z-10 order-2 pb-16 lg:order-1 lg:pr-16 lg:pt-28 lg:pb-0">
          <Reveal delay={100}>
            <p className="eyebrow">Estética avançada • Navegantes/SC</p>
          </Reveal>
          <Reveal delay={250} as="h1" className="mt-8 text-[3.2rem] leading-[0.95] md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem]">
            Sua melhor versão,
            <br />
            <em className="font-light text-taupe">sem deixar</em>
            <br />
            de ser você.
          </Reveal>
          <Reveal delay={450}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Tratamentos personalizados para realçar sua beleza com equilíbrio, segurança e naturalidade.
            </p>
          </Reveal>
          <Reveal delay={600} className="mt-10 flex flex-wrap items-center gap-8">
            <PrimaryCta>Agendar avaliação</PrimaryCta>
            <a href="#procedimentos" className="link-lux">
              Conhecer procedimentos
            </a>
          </Reveal>
        </div>

        <div className="relative order-1 lg:order-2 lg:-mr-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:h-[100svh]">
          <RevealImage
            src={heroImg}
            alt="Renata de Simas em sua clínica de estética em Navegantes"
            width={1152}
            height={1440}
            eager
            delay={500}
            className="hero-photo aspect-[4/5] lg:aspect-auto lg:h-full"
            imgClassName="object-[center_20%]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-14 bg-gradient-to-r from-background via-background/70 to-transparent lg:block"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- AUTHORITY ---------------- */
const STATS = [
  ["+3 mil", "mulheres atendidas"],
  ["5 anos", "especialista em estética"],
  ["16 anos", "de formação"],
  ["Harvard", "certificação"],
];
function Authority() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container-lux grid grid-cols-2 lg:grid-cols-4">
        {STATS.map(([n, l], i) => (
          <Reveal
            key={l}
            delay={i * 120}
            className={`px-2 py-10 md:px-8 md:py-14 ${i % 2 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <p className="font-serif text-4xl md:text-5xl">{n}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PHILOSOPHY ---------------- */
function Philosophy() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Nossa filosofia</p>
          </Reveal>
          <Reveal delay={120} as="h2" className="mt-8 text-5xl leading-[1.02] md:text-7xl">
            Beleza não é sobre mudar quem você é.
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 font-serif text-2xl italic leading-snug text-taupe md:text-4xl">
              É sobre valorizar o que já existe de mais bonito em você.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-10 max-w-lg leading-relaxed text-muted-foreground lg:ml-auto lg:mr-16">
              Cada rosto possui características únicas. Por isso, cada tratamento começa com uma avaliação individual,
              respeitando suas proporções, seus objetivos e, principalmente, sua naturalidade.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <RevealImage src={skinImg} alt="Detalhe de pele natural e luminosa" width={1024} height={1280} className="aspect-[4/5] lg:translate-y-16" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCEDURES ---------------- */
const PROCS = [
  {
    n: "01",
    name: "Toxina Botulínica",
    img: toxinaImg,
    text: "Suaviza linhas de expressão e ajuda a prevenir marcas mais profundas, proporcionando uma aparência mais descansada e rejuvenescida sem perder a naturalidade.",
  },
  {
    n: "02",
    name: "Rinomodelação",
    img: rinoImg,
    text: "Refina as proporções do nariz de forma não cirúrgica, harmonizando o perfil com o restante do rosto e respeitando a sua identidade.",
  },
  {
    n: "03",
    name: "Preenchimento de Mento",
    img: mentoImg,
    text: "Define o contorno do queixo e melhora o equilíbrio do perfil, trazendo mais harmonia às proporções faciais de maneira sutil e natural.",
  },
  {
    n: "04",
    name: "Limpeza de Pele",
    img: limpezaImg,
    text: "Renova e purifica a pele, removendo impurezas e células mortas para devolver luminosidade, viço e maciez ao rosto.",
  },
  {
    n: "05",
    name: "Peeling",
    img: peelingImg,
    text: "Estimula a renovação celular para uniformizar o tom da pele, suavizar manchas e texturas e revelar uma pele mais luminosa.",
  },
  {
    n: "06",
    name: "Fios de PDO",
    img: fiosImg,
    text: "Estimulam a produção de colágeno e promovem maior firmeza da pele, auxiliando na redução da flacidez e na redefinição dos contornos de forma progressiva.",
  },
];
function Procedures() {
  const [activeProcedure, setActiveProcedure] = useState(0);
  const articles = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const focusLine = window.innerHeight * 0.45;
      let current = 0;
      articles.current.forEach((article, index) => {
        if (article && article.getBoundingClientRect().top <= focusLine) current = index;
      });
      setActiveProcedure(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="procedimentos" className="bg-background py-24 md:py-28">
      <div className="container-lux grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="procedures-intro lg:sticky lg:top-24">
          <p className="eyebrow">Tratamentos</p>
          <h2 className="procedures-heading mt-7 text-5xl leading-[1.02] xl:text-6xl">
            Procedimentos<br />pensados para você.
          </h2>
          <p className="procedures-description mt-7 max-w-md leading-relaxed text-muted-foreground">
            Protocolos personalizados para realçar seus traços, suavizar os sinais do tempo e preservar aquilo que torna você única.
          </p>
          <ol className="procedures-index mt-12 hidden space-y-6 lg:block" aria-label="Procedimentos">
            {PROCS.map((p, i) => (
              <li
                key={p.n}
                aria-current={activeProcedure === i ? "true" : undefined}
                className={`flex items-baseline gap-3 font-serif text-2xl uppercase transition-colors duration-300 xl:text-3xl ${activeProcedure === i ? "font-bold text-primary" : "font-normal text-taupe"}`}
              >
                <span className="w-4 shrink-0" aria-hidden="true">{activeProcedure === i ? "–" : ""}</span>
                <span>{p.n} — {p.name}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {PROCS.map((p, i) => (
            <article key={p.n} ref={(element) => { articles.current[i] = element; }}>
              <div className="img-hover aspect-[5/4]">
                <img src={p.img} alt={p.name} width={1024} height={1280} loading="lazy" decoding="async" className="h-full w-full object-cover object-[center_35%]" />
              </div>
              <div className="mt-7 flex items-baseline gap-4">
                <span className="font-serif text-2xl text-taupe">{p.n}</span>
                <h3 className="!font-sans text-base uppercase">{p.name}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
              <a
                href={waLink(`Olá! Vim pelo site e gostaria de saber mais sobre ${p.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-lux mt-6"
              >
                Saiba mais <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MID CTA ---------------- */
function MidCta() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2" className="text-4xl leading-tight md:text-6xl">
            Não sabe qual procedimento é ideal para você?
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Na avaliação, analisamos suas características, seus objetivos e indicamos um tratamento pensado para o seu rosto.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10">
            <PrimaryCta>Agendar minha avaliação</PrimaryCta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLINIC ---------------- */
function Clinic() {
  return (
    <section id="clinica" className="bg-secondary py-24 md:py-36">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">A Clínica</p>
            </Reveal>
            <Reveal delay={120} as="h2" className="mt-8 text-5xl leading-[1.02] md:text-6xl">
              Uma experiência pensada em cada detalhe.
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-20">
            <Reveal delay={200}>
              <p className="leading-relaxed text-muted-foreground">
                Mais do que realizar um procedimento, queremos que você se sinta acolhida desde o momento em que entra na clínica.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          <figure className="md:col-span-8">
            <div className="img-hover">
              <RevealImage src={roomImg} alt="Sala de atendimento com janelas do teto ao chão" width={1600} height={1072} className="aspect-[3/2]" />
            </div>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Sala de atendimento — Centro de Navegantes
            </figcaption>
          </figure>
          <div className="flex flex-col gap-6 md:col-span-4 md:gap-8 md:pt-32">
            <figure>
              <div className="img-hover">
                <RevealImage src={coffeeImg} alt="Café com chocolate na recepção" width={896} height={1120} className="aspect-[4/5]" delay={150} />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Café com chocolate na recepção</figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-start">
          <figure className="md:col-span-5">
            <div className="img-hover">
              <RevealImage src={receptionImg} alt="Recepção da clínica" width={1024} height={768} className="aspect-[4/3]" />
            </div>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Recepção</figcaption>
          </figure>
          <div className="space-y-8 md:col-span-6 md:col-start-7">
            {[
              "Localizada no centro de Navegantes, com fácil acesso.",
              "Um ambiente aconchegante, elegante e pensado para o seu bem-estar.",
              "Do café com chocolate na recepção ao momento do procedimento, cada detalhe foi pensado para proporcionar conforto e cuidado.",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 120} className="flex gap-6 border-t border-foreground/15 pt-6">
                <span className="font-serif text-lg text-taupe">0{i + 1}</span>
                <p className="font-serif text-xl leading-snug md:text-2xl">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTS ---------------- */
function Results() {
  return (
    <section id="resultados" className="py-24 md:py-36">
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Resultados</p>
            </Reveal>
            <Reveal delay={120} as="h2" className="mt-8 text-5xl leading-[1.02] md:text-6xl">
              Resultados que respeitam a sua identidade.
            </Reveal>
          </div>
          <Reveal delay={240}>
            <p className="max-w-md leading-relaxed text-muted-foreground lg:ml-auto">
              Cada resultado começa com uma avaliação individual e um planejamento pensado para preservar equilíbrio, harmonia e naturalidade.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {["Toxina botulínica", "Rinomodelação", "Fios de PDO"].map((l, i) => (
            <Reveal key={l} delay={i * 120} className="w-[80%] shrink-0 snap-start md:w-auto">
              <BeforeAfter label={l} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14">
          <PrimaryCta>Quero agendar minha avaliação</PrimaryCta>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="renata" className="bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2">
        <RevealImage src={heroImg} alt="Retrato de Renata de Simas" width={1152} height={1440} className="aspect-[4/5] lg:aspect-auto lg:min-h-[100vh]" />
        <div className="flex items-center px-6 py-20 md:px-16 lg:px-20 xl:px-28">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow !text-champagne">Quem vai cuidar de você</p>
            </Reveal>
            <Reveal delay={120} as="h2" className="mt-8 text-6xl md:text-8xl">
              Renata de Simas
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 font-serif text-2xl italic text-champagne">Cuidado, técnica e naturalidade em cada detalhe.</p>
            </Reveal>
            <Reveal delay={360} className="mt-10 space-y-5 leading-relaxed text-primary-foreground/75">
              <p>Enfermeira formada há 16 anos, pós-graduada em Urgência e Emergência e Estética Avançada.</p>
              <p>Há 5 anos atua como especialista na área da estética, acumulando mais de 3 mil mulheres atendidas.</p>
              <p>Possui certificação em Harvard e atualmente é graduanda em Medicina.</p>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-primary-foreground/15 pt-10">
              {[
                ["16", "anos de formação"],
                ["5", "anos na estética"],
                ["+3 mil", "mulheres atendidas"],
                ["Harvard", "certificação"],
              ].map(([n, l], i) => (
                <Reveal key={l} delay={i * 100}>
                  <p className="font-serif text-4xl">{n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/55">{l}</p>
                </Reveal>
              ))}
              <Reveal delay={450} className="col-span-2 border-t border-primary-foreground/15 pt-6">
                <p className="font-serif text-2xl italic text-champagne">Graduanda em Medicina</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
// Substituir pelos depoimentos reais das pacientes.
const TESTIMONIALS = [
  { name: "Nome da paciente", proc: "Procedimento", text: "Espaço reservado para um depoimento real de paciente." },
  { name: "Nome da paciente", proc: "Procedimento", text: "Espaço reservado para um depoimento real de paciente." },
  { name: "Nome da paciente", proc: "Procedimento", text: "Espaço reservado para um depoimento real de paciente." },
];
function Testimonials() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-lux">
        <Reveal>
          <p className="eyebrow">Experiências</p>
        </Reveal>
        <Reveal delay={120} as="h2" className="mt-8 max-w-2xl text-5xl leading-[1.02] md:text-6xl">
          O que nossas pacientes dizem.
        </Reveal>
        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-0 md:overflow-visible">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 120}
              as="blockquote"
              className={`w-[85%] shrink-0 snap-start border-t border-border pt-8 md:w-auto md:px-10 md:first:pl-0 ${i ? "md:border-l md:border-t-0 md:pt-0" : "md:border-t-0 md:pt-0"}`}
            >
              <div className="flex gap-1 text-taupe">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3 w-3 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl italic leading-snug">“{t.text}”</p>
              <footer className="mt-8 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-muted-foreground"> — {t.proc}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ROOM RENTAL ---------------- */
const FEATURES = [
  "Sala espaçosa",
  "Maca 100% elétrica",
  "Janelas do teto ao chão",
  "Mesa de atendimento",
  "Som ambiente",
  "Área para fotos",
  "Decoração elegante",
  "Ar-condicionado",
];
function RoomRental() {
  return (
    <section className="border-t border-border bg-card py-24 md:py-32">
      <div className="container-lux grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Para profissionais</p>
          </Reveal>
          <Reveal delay={120} as="h2" className="mt-8 text-4xl leading-tight md:text-5xl">
            Um espaço à altura da experiência que você deseja oferecer.
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Receba seus pacientes em uma clínica elegante, confortável e preparada para proporcionar uma experiência profissional completa.
            </p>
          </Reveal>
          <Reveal delay={360} className="mt-10">
            <a
              href={waLink("Olá! Vim pelo site e gostaria de consultar datas e valores para locação da sala.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-lux"
            >
              Consultar datas e valores <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
            </a>
          </Reveal>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f} delay={i * 60} className="flex items-baseline gap-5 border-b border-border py-5">
              <span className="text-xs text-taupe">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-2xl">{f}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FaqSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">Dúvidas frequentes</p>
          </Reveal>
          <Reveal delay={120} as="h2" className="mt-8 text-4xl leading-tight md:text-5xl">
            Antes de agendar, talvez você queira saber…
          </Reveal>
        </div>
        <Reveal delay={200} className="lg:col-span-7 lg:col-start-6">
          <Faq />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <img src={roomImg} alt="" aria-hidden width={1600} height={1072} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
      <div className="container-lux py-32 md:py-48">
        <div className="max-w-3xl">
          <Reveal as="h2" className="text-5xl leading-[1.02] md:text-7xl">
            Talvez a mudança que você procura não seja se transformar.
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 font-serif text-3xl italic text-champagne md:text-5xl">Seja voltar a se reconhecer.</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-10 max-w-md leading-relaxed text-primary-foreground/75">
              Agende sua avaliação e descubra um tratamento pensado especialmente para você.
            </p>
          </Reveal>
          <Reveal delay={450} className="mt-10">
            <PrimaryCta light>Agendar minha avaliação</PrimaryCta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const address = "Av. João Sacavém, 571, Sala 504, Centro, Navegantes - SC, 88370-438";
  return (
    <section id="contato" className="py-24 md:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Contato</p>
          </Reveal>
          <Reveal delay={120} as="h2" className="mt-8 text-5xl md:text-6xl">
            Venha nos conhecer.
          </Reveal>
          <dl className="mt-12 space-y-8">
            <Reveal className="border-t border-border pt-5">
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-2 font-serif text-2xl">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="nav-link !text-2xl">
                  (47) 99282-8014
                </a>
              </dd>
            </Reveal>
            <Reveal delay={80} className="border-t border-border pt-5">
              <dt className="eyebrow">Instagram</dt>
              <dd className="mt-2 font-serif text-2xl">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="nav-link !text-2xl">
                  @renatadesimas
                </a>
              </dd>
            </Reveal>
            <Reveal delay={160} className="border-t border-border pt-5">
              <dt className="eyebrow">Horários</dt>
              <dd className="mt-2 space-y-1">
                <p>Segunda a sexta — 10h00 às 19h00</p>
                <p>Sábado — 09h00 às 15h00</p>
              </dd>
            </Reveal>
            <Reveal delay={240} className="border-t border-border pt-5">
              <dt className="eyebrow">Endereço</dt>
              <dd className="mt-2 leading-relaxed">
                <address className="not-italic">
                  Av. João Sacavém, 571 — Sala 504
                  <br />
                  Centro, Navegantes – SC
                  <br />
                  88370-438
                </address>
              </dd>
            </Reveal>
          </dl>
        </div>
        <Reveal delay={200} className="lg:col-span-6 lg:col-start-7">
          <div className="aspect-[4/5] overflow-hidden bg-secondary md:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]">
            <iframe
              title="Mapa da Clínica Renata de Simas"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              className="h-full w-full grayscale-[0.85] sepia-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-3">
        <Logo />
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm" aria-label="Rodapé">
          <a href="#procedimentos" className="nav-link">Procedimentos</a>
          <a href="#clinica" className="nav-link">A Clínica</a>
          <a href="#resultados" className="nav-link">Resultados</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>
        <div className="flex gap-6 md:justify-end">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5" strokeWidth={1.3} />
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5" strokeWidth={1.3} />
          </a>
        </div>
      </div>
      <div className="container-lux flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Renata de Simas — Clínica de Estética. Todos os direitos reservados.</p>
        {/* Inserir CNPJ correto */}
        <p>CNPJ: a definir</p>
      </div>
    </footer>
  );
}
