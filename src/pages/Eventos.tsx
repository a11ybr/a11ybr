import { useState } from "react";
import { EventCard } from "@/components/cards/EventCard";
import { FilterChip } from "@/components/ui/FilterChip";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

const typeFilters = ["Todos", "Workshop", "Meetup", "Congresso", "Webinar", "Curso"];

const events = [
  {
    title: "Workshop: Auditoria de Acessibilidade com NVDA",
    description: "Aprenda a realizar auditorias de acessibilidade usando o leitor de tela gratuito NVDA. Prático e hands-on para desenvolvedores front-end.",
    date: "28 de fevereiro de 2025",
    time: "19h00 – 21h00",
    location: "Online (Zoom)",
    type: "workshop" as const,
    online: true,
    organizer: "a11yBR",
    registrationUrl: "#",
  },
  {
    title: "Meetup a11yBR São Paulo — Edição #12",
    description: "Encontro presencial da comunidade paulistana de acessibilidade digital. Palestras, networking e troca de experiências.",
    date: "8 de março de 2025",
    time: "14h00 – 18h00",
    location: "iMasters Hub — São Paulo, SP",
    type: "meetup" as const,
    online: false,
    organizer: "Comunidade a11yBR SP",
    registrationUrl: "#",
  },
  {
    title: "Webinar: WCAG 2.2 — O que mudou e como implementar",
    description: "Análise técnica dos novos critérios de sucesso da WCAG 2.2 com exemplos práticos em HTML, CSS e JavaScript.",
    date: "15 de março de 2025",
    time: "10h00 – 12h00",
    location: "Online (Google Meet)",
    type: "webinar" as const,
    online: true,
    organizer: "Instituto Incluir Tech",
    registrationUrl: "#",
  },
  {
    title: "Congresso Brasileiro de Acessibilidade Digital 2025",
    description: "Maior evento do setor no Brasil, com palestras de especialistas nacionais e internacionais, workshops e exposição de soluções.",
    date: "24–26 de abril de 2025",
    location: "Centro de Convenções Frei Caneca — São Paulo, SP",
    type: "congresso" as const,
    online: false,
    organizer: "ABDA",
    registrationUrl: "#",
  },
  {
    title: "Curso: Libras para desenvolvedores e designers",
    description: "Introdução à Língua Brasileira de Sinais com foco em como criar produtos digitais mais inclusivos para a comunidade surda.",
    date: "A partir de 5 de maio de 2025",
    time: "Às suas próprias",
    location: "Online (plataforma a11yBR)",
    type: "curso" as const,
    online: true,
    organizer: "Julia Santos — Intérprete de Libras",
    registrationUrl: "#",
  },
  {
    title: "Meetup a11yBR Rio de Janeiro — Edição #7",
    description: "Encontro da comunidade carioca. Apresentações relâmpago, discussão sobre cenário de acessibilidade no setor público e privado.",
    date: "17 de maio de 2025",
    time: "15h00 – 19h00",
    location: "Hub RIO inovação — Rio de Janeiro, RJ",
    type: "meetup" as const,
    online: false,
    organizer: "Comunidade a11yBR RJ",
    registrationUrl: "#",
  },
];

const typeMap: Record<string, string> = {
  Todos: "",
  Workshop: "workshop",
  Meetup: "meetup",
  Congresso: "congresso",
  Webinar: "webinar",
  Curso: "curso",
};

export default function Eventos() {
  const [activeType, setActiveType] = useState("Todos");

  const filtered = events.filter(
    (e) => !typeMap[activeType] || e.type === typeMap[activeType]
  );

  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Eventos" }]} />
          <h1 className="mt-4 mb-2">Eventos</h1>
          <p className="text-muted-foreground text-lg">
            Agenda de workshops, meetups, congressos e webinars sobre acessibilidade digital.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo de evento">
            {typeFilters.map((f) => (
              <FilterChip
                key={f}
                active={activeType === f}
                onClick={() => setActiveType(f)}
              >
                {f}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Events grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filtered.map((evt) => (
              <EventCard key={evt.title} {...evt} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-semibold">Nenhum evento encontrado</p>
            <p className="text-sm mt-1">Tente outro filtro.</p>
          </div>
        )}

        {/* Submit event CTA */}
        <div className="mt-12 p-8 rounded-xl border border-border bg-card text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Tem um evento para divulgar?
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Submeta eventos gratuitos ou pagos relacionados à acessibilidade para aparecerem na agenda da comunidade.
          </p>
          <a
            href="/submeter"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground no-underline"
            style={{ background: "hsl(var(--primary))" }}
          >
            Submeter evento
          </a>
        </div>
      </div>
    </main>
  );
}
