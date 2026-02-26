import { useState } from "react";
import { BookOpen, Tv, Wrench, Globe, GraduationCap, type LucideIcon } from "lucide-react";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterChip } from "@/components/ui/FilterChip";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

const categoryFilters = ["Todos", "Livros", "Canais", "Ferramentas", "Sites", "Cursos"];

const resources = [
  {
    title: "Inclusive Design Patterns",
    description: "Referência essencial de padrões de design acessíveis, com exemplos práticos em HTML/CSS/ARIA. Disponível em inglês com resumos em português.",
    category: "livro" as const,
    tags: ["Design", "ARIA", "HTML"],
    href: "https://www.smashingmagazine.com/printed-books/inclusive-design-patterns/",
    metadata: "Heydon Pickering · Smashing Magazine, 2016",
    free: false,
  },
  {
    title: "Deque University",
    description: "Plataforma de cursos especializados em acessibilidade digital. Cobre WCAG, ARIA, mobile e testes com tecnologia assistiva.",
    category: "curso" as const,
    tags: ["WCAG", "treinamento"],
    href: "https://dequeuniversity.com/",
    metadata: "Deque Systems",
    free: false,
  },
  {
    title: "axe DevTools",
    description: "Extensão de browser para auditoria de acessibilidade em tempo real. Detecta automaticamente violações de WCAG.",
    category: "ferramenta" as const,
    tags: ["auditoria", "testes"],
    href: "https://www.deque.com/axe/",
    metadata: "Deque Systems",
    free: true,
  },
  {
    title: "WebAIM",
    description: "Referência fundamental para acessibilidade web. Artigos técnicos, ferramentas de verificação de contraste e surveys sobre uso de tecnologia assistiva.",
    category: "site" as const,
    tags: ["referência", "WCAG"],
    href: "https://webaim.org/",
    metadata: "Utah State University",
    free: true,
  },
  {
    title: "Canal Acessibilidade Primeiro",
    description: "Canal do YouTube com tutoriais em português sobre NVDA, JAWS, VoiceOver, criação de conteúdo acessível e legislação brasileira.",
    category: "canal" as const,
    tags: ["YouTube", "vídeos", "PT-BR"],
    href: "#",
    metadata: "YouTube · PT-BR",
    free: true,
  },
  {
    title: "Leis e normas de acessibilidade no Brasil",
    description: "Guia completo sobre a Lei Brasileira de Inclusão (LBI), norma NBR 17060 e decreto 5.296/2004. Atualizado em 2024.",
    category: "site" as const,
    tags: ["lei", "NBR", "LBI"],
    href: "#",
    metadata: "a11yBR · Curadoria interna",
    free: true,
  },
  {
    title: "WAVE — Web Accessibility Evaluation Tool",
    description: "Ferramenta visual de avaliação de acessibilidade que mostra erros, alertas e features diretamente na página testada.",
    category: "ferramenta" as const,
    tags: ["auditoria", "visual"],
    href: "https://wave.webaim.org/",
    metadata: "WebAIM",
    free: true,
  },
  {
    title: "Color Contrast Checker",
    description: "Verificador de contraste WCAG com suporte a texto normal, texto grande e componentes de UI. Interface simples e acessível.",
    category: "ferramenta" as const,
    tags: ["contraste", "cores", "WCAG"],
    href: "#",
    metadata: "Coolors",
    free: true,
  },
  {
    title: "A11ycasts with Rob Dodson",
    description: "Série de vídeos do Google Developers sobre técnicas de acessibilidade web. Cobre focus management, ARIA, landmarks e mais.",
    category: "canal" as const,
    tags: ["YouTube", "Google", "ARIA"],
    href: "#",
    metadata: "YouTube · Inglês",
    free: true,
  },
];

const categoryMap: Record<string, string> = {
  Todos: "",
  Livros: "livro",
  Canais: "canal",
  Ferramentas: "ferramenta",
  Sites: "site",
  Cursos: "curso",
};

export default function Recursos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchCat = !categoryMap[activeCategory] || r.category === categoryMap[activeCategory];
    const matchSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Group by category for display
  const categories = [...new Set(filtered.map((r) => r.category))];

  const categoryMeta: Record<string, { label: string; icon: LucideIcon }> = {
    livro: { label: "Livros", icon: BookOpen },
    canal: { label: "Canais", icon: Tv },
    ferramenta: { label: "Ferramentas", icon: Wrench },
    site: { label: "Sites", icon: Globe },
    curso: { label: "Cursos", icon: GraduationCap },
  };

  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Recursos" }]} />
          <h1 className="mt-4 mb-2">Recursos</h1>
          <p className="text-muted-foreground text-lg">
            Curadoria de livros, canais, ferramentas e referências sobre acessibilidade digital.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        {/* Search + filters */}
        <div className="mb-8 flex flex-col gap-4">
          <SearchInput
            label="Pesquisar recursos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-lg"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
            {categoryFilters.map((f) => (
              <FilterChip
                key={f}
                active={activeCategory === f}
                onClick={() => setActiveCategory(f)}
              >
                {f}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Grouped sections */}
        {categories.length > 0 ? (
          <div className="flex flex-col gap-12">
            {categories.map((cat) => {
              const items = filtered.filter((r) => r.category === cat);
              return (
                <section key={cat} aria-labelledby={`cat-${cat}`}>
                  <h2
                    id={`cat-${cat}`}
                    className="text-base font-bold text-foreground mb-4 pb-3 border-b border-border flex items-center gap-2"
                  >
                    {(() => { const Ico = categoryMeta[cat].icon; return <Ico size={18} className="text-primary" aria-hidden />; })()}
                    {categoryMeta[cat].label}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((item) => (
                      <ResourceCard key={item.title} {...item} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-semibold">Nenhum recurso encontrado</p>
            <p className="text-sm mt-1">Tente outros filtros ou termos de busca.</p>
          </div>
        )}
      </div>
    </main>
  );
}
