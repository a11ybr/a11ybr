import { useState } from "react";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterChip } from "@/components/ui/FilterChip";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

const typeFilters = [
  "Todos",
  "Profissionais",
  "Empresas",
  "Intérpretes de Libras",
  "Audiodescritores",
  "Mentores",
];

const typeMap: Record<string, string> = {
  Todos: "",
  Profissionais: "profissional",
  Empresas: "empresa",
  "Intérpretes de Libras": "interprete",
  Audiodescritores: "audiodescritor",
  Mentores: "mentor",
};

const profiles = [
  {
    name: "Dra. Camila Souza",
    role: "Pesquisadora em IHC e Acessibilidade",
    bio: "Professora da USP com foco em interfaces para pessoas com deficiência visual. Autora de mais de 30 publicações sobre acessibilidade web.",
    tags: ["Pesquisa", "IHC", "Deficiência Visual", "WCAG"],
    type: "profissional" as const,
    initials: "CS",
    location: "São Paulo, SP",
    links: [{ label: "LinkedIn", href: "#", icon: "linkedin" as const }],
  },
  {
    name: "Pedro Almeida",
    role: "Desenvolvedor Front-end & Especialista WCAG",
    bio: "10 anos de experiência em desenvolvimento web acessível. Consultor para empresas do setor financeiro e governamental.",
    tags: ["WCAG", "Front-end", "Auditoria", "React"],
    type: "mentor" as const,
    initials: "PA",
    location: "Belo Horizonte, MG",
    links: [
      { label: "LinkedIn", href: "#", icon: "linkedin" as const },
      { label: "Site", href: "#", icon: "globe" as const },
    ],
  },
  {
    name: "Instituto Incluir Tech",
    role: "Organização de tecnologia inclusiva",
    bio: "ONG que oferece capacitação gratuita em tecnologia assistiva para pessoas com deficiência em todo o Brasil.",
    tags: ["Capacitação", "Tecnologia Assistiva", "ONG"],
    type: "empresa" as const,
    initials: "IT",
    location: "Curitiba, PR",
    links: [{ label: "Site", href: "#", icon: "globe" as const }],
  },
  {
    name: "Julia Santos",
    role: "Intérprete de Libras — Certificada MEC",
    bio: "Intérprete e tradutora de Libras com especialização em conteúdo digital e videoconferências. Atua em eventos e produção de vídeos acessíveis.",
    tags: ["Libras", "Interpretação", "Vídeo", "Online"],
    type: "interprete" as const,
    initials: "JS",
    location: "Recife, PE",
    links: [{ label: "LinkedIn", href: "#", icon: "linkedin" as const }],
  },
  {
    name: "Roberto Campos",
    role: "Audiodescritor — Cinema e Teatro",
    bio: "Audiodescritor certificado com experiência em longa-metragens, peças teatrais e conteúdo educacional. Roteirista de AD para streaming.",
    tags: ["Audiodescrição", "Cinema", "Teatro", "Streaming"],
    type: "audiodescritor" as const,
    initials: "RC",
    location: "Rio de Janeiro, RJ",
    links: [{ label: "Site", href: "#", icon: "globe" as const }],
  },
  {
    name: "Acessibilis Consultoria",
    role: "Consultoria em Acessibilidade Digital",
    bio: "Empresa especializada em auditoria WCAG, treinamentos para equipes de desenvolvimento e design, e relatórios de conformidade.",
    tags: ["Consultoria", "Auditoria", "Treinamento", "WCAG"],
    type: "empresa" as const,
    initials: "AC",
    location: "Porto Alegre, RS",
    links: [
      { label: "LinkedIn", href: "#", icon: "linkedin" as const },
      { label: "Site", href: "#", icon: "globe" as const },
    ],
  },
];

export default function Comunidade() {
  const [activeType, setActiveType] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = profiles.filter((p) => {
    const matchType = !typeMap[activeType] || p.type === typeMap[activeType];
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.role.toLowerCase().includes(search.toLowerCase()) ||
      p.bio.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchType && matchSearch;
  });

  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Comunidade" }]} />
          <h1 className="mt-4 mb-2">Comunidade</h1>
          <p className="text-muted-foreground text-lg">
            Diretório de profissionais, empresas e especialistas em acessibilidade no Brasil.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4">
          <SearchInput
            label="Pesquisar na comunidade"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-lg"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
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
          <p className="text-sm text-muted-foreground">
            <strong>{filtered.length}</strong> perfil{filtered.length !== 1 ? "is" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProfileCard key={p.name} {...p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-semibold">Nenhum perfil encontrado</p>
            <p className="text-sm mt-1">Tente outros filtros ou termos de busca.</p>
          </div>
        )}

        {/* CTA to join */}
        <div className="mt-12 p-8 rounded-xl border border-border bg-card text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Faça parte do diretório
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            É profissional ou empresa da área de acessibilidade? Cadastre seu perfil gratuitamente.
          </p>
          <a
            href="/submeter"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground no-underline"
            style={{ background: "hsl(var(--primary))" }}
          >
            Cadastrar perfil
          </a>
        </div>
      </div>
    </main>
  );
}
