import { useState } from "react";
import { ContentCard } from "@/components/cards/ContentCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterChip } from "@/components/ui/FilterChip";
import { PaginationNav } from "@/components/ui/PaginationNav";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

const typeFilters = ["Todos", "Artigos", "Tutoriais", "Projetos"];
const tagFilters = ["WCAG", "ARIA", "Libras", "Design", "React", "Mobile", "PDF", "Multimídia", "Leitores de tela"];

const allContent = [
  {
    title: "Implementando ARIA live regions para notificações acessíveis",
    excerpt: "Como usar aria-live, aria-atomic e aria-relevant para criar regiões dinâmicas que comunicam atualizações a usuários de leitores de tela.",
    type: "tutorial" as const,
    tags: ["ARIA", "leitores-de-tela", "HTML"],
    author: "Fernanda Oliveira",
    date: "15 fev 2025",
    readTime: "8 min",
    href: "/conteudo/aria-live-regions",
  },
  {
    title: "Contraste de cores no design de interfaces: além do AA",
    excerpt: "Uma análise aprofundada dos requisitos WCAG AAA e como implementar paletas de cores que garantam acessibilidade para usuários com baixa visão.",
    type: "artigo" as const,
    tags: ["cores", "design", "WCAG"],
    author: "Rafael Mendes",
    date: "12 fev 2025",
    readTime: "12 min",
    href: "/conteudo/contraste-cores",
  },
  {
    title: "Biblioteca React de componentes acessíveis: a11y-ui-br",
    excerpt: "Projeto open source com componentes React pré-testados com NVDA, JAWS e VoiceOver, documentação em português.",
    type: "projeto" as const,
    tags: ["React", "open-source", "componentes"],
    author: "Lucas Carvalho",
    date: "10 fev 2025",
    readTime: "5 min",
    href: "/conteudo/a11y-ui-br",
  },
  {
    title: "Guia prático de testes com NVDA para desenvolvedores",
    excerpt: "Aprenda a configurar e usar o NVDA para testar a acessibilidade das suas aplicações web, incluindo atalhos e fluxos de navegação.",
    type: "tutorial" as const,
    tags: ["NVDA", "leitores-de-tela", "testes"],
    author: "Ana Lima",
    date: "8 fev 2025",
    readTime: "15 min",
    href: "/conteudo/nvda-guia",
  },
  {
    title: "Acessibilidade em PDFs: criando documentos inclusivos",
    excerpt: "Boas práticas para geração de PDFs acessíveis com tags estruturais, texto alternativo em imagens e ordem de leitura correta.",
    type: "artigo" as const,
    tags: ["PDF", "documentos", "WCAG"],
    author: "Mariana Costa",
    date: "5 fev 2025",
    readTime: "10 min",
    href: "/conteudo/pdfs-acessiveis",
  },
  {
    title: "Plugin Figma para verificação de contraste automática",
    excerpt: "Plugin open source que analisa automaticamente o contraste de todos os textos em um arquivo Figma e gera relatório WCAG.",
    type: "projeto" as const,
    tags: ["Figma", "design", "contraste"],
    author: "Carlos Nunes",
    date: "3 fev 2025",
    readTime: "4 min",
    href: "/conteudo/figma-contraste",
  },
];

export default function Conteudo() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("Todos");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setPage(1);
  };

  const filtered = allContent.filter((c) => {
    const matchType =
      activeType === "Todos" ||
      (activeType === "Artigos" && c.type === "artigo") ||
      (activeType === "Tutoriais" && c.type === "tutorial") ||
      (activeType === "Projetos" && c.type === "projeto");
    const matchSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchTags =
      activeTags.length === 0 ||
      activeTags.some((t) => c.tags.some((ct) => ct.toLowerCase() === t.toLowerCase()));
    return matchType && matchSearch && matchTags;
  });

  return (
    <main id="main-content">
      {/* Page header */}
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Conteúdo" }]} />
          <h1 className="mt-4 mb-2">Conteúdo</h1>
          <p className="text-muted-foreground text-lg">
            Artigos, tutoriais e projetos submetidos pela comunidade a11yBR.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        {/* Search + filters */}
        <div className="mb-8 flex flex-col gap-5">
          <SearchInput
            label="Pesquisar conteúdo"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="max-w-lg"
          />

          {/* Type filter */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Tipo
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
              {typeFilters.map((f) => (
                <FilterChip
                  key={f}
                  active={activeType === f}
                  onClick={() => { setActiveType(f); setPage(1); }}
                >
                  {f}
                </FilterChip>
              ))}
            </div>
          </div>

          {/* Tag filter */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Tags
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tag">
              {tagFilters.map((t) => (
                <FilterChip
                  key={t}
                  active={activeTags.includes(t)}
                  onClick={() => toggleTag(t)}
                >
                  #{t}
                </FilterChip>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            <strong>{filtered.length}</strong> resultado{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {filtered.map((item) => (
              <ContentCard key={item.href} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-semibold">Nenhum resultado encontrado</p>
            <p className="text-sm mt-1">Tente outros filtros ou termos de busca.</p>
          </div>
        )}

        {filtered.length > 6 && (
          <PaginationNav
            currentPage={page}
            totalPages={Math.ceil(filtered.length / 6)}
            onPageChange={setPage}
          />
        )}
      </div>
    </main>
  );
}
