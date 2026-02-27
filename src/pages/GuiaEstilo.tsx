import { useState } from "react";
import {
    Accessibility, BookOpen, Tv, Wrench, Globe, GraduationCap,
    ArrowRight, CheckCircle, Clock, MapPin, Calendar, ExternalLink,
    ChevronRight, Search, Eye, Code, Type, Palette, Layout, Square,
    MousePointer, Layers, Grid3X3, AlignLeft, Smartphone, Monitor, Tablet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/ui/Tag";
import { FilterChip } from "@/components/ui/FilterChip";
import { SearchInput } from "@/components/ui/SearchInput";
import { PaginationNav } from "@/components/ui/PaginationNav";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { ContentCard } from "@/components/cards/ContentCard";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { EventCard } from "@/components/cards/EventCard";
import { NewsletterModule } from "@/components/NewsletterModule";
import {
    Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";

/* ---------- helpers ---------- */
function SectionAnchor({ id, icon: Icon, title }: { id: string; icon: any; title: string }) {
    return (
        <div id={id} className="scroll-mt-24 pt-12 pb-4 border-b border-border mb-8">
            <div className="flex items-center gap-2">
                <Icon size={20} className="text-primary" aria-hidden />
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            </div>
        </div>
    );
}

function Swatch({ label, css, textClass = "text-foreground" }: { label: string; css: string; textClass?: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                className="w-16 h-16 rounded-lg border border-border shadow-sm"
                style={{ background: `hsl(${css})` }}
            />
            <span className={`text-xs font-medium ${textClass}`}>{label}</span>
            <code className="text-2xs text-muted-foreground">{css}</code>
        </div>
    );
}

function CodeBlock({ children }: { children: string }) {
    return (
        <pre className="rounded-lg border border-border bg-muted/50 p-4 overflow-x-auto text-xs leading-relaxed text-foreground font-mono">
            <code>{children}</code>
        </pre>
    );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h3 className="text-lg font-bold text-foreground mb-4">{title}</h3>
            {children}
        </div>
    );
}

/* ---------- Sidebar Nav ---------- */
const sections = [
    { id: "cores", label: "Cores", icon: Palette },
    { id: "tipografia", label: "Tipografia", icon: Type },
    { id: "espacamento", label: "Espaçamento & Grid", icon: Grid3X3 },
    { id: "botoes", label: "Botões", icon: MousePointer },
    { id: "tags-badges", label: "Tags & Badges", icon: Layers },
    { id: "formularios", label: "Formulários", icon: AlignLeft },
    { id: "cards", label: "Cards", icon: Square },
    { id: "navegacao", label: "Navegação", icon: Layout },
    { id: "feedback", label: "Feedback & Estados", icon: Eye },
    { id: "tokens-css", label: "Tokens CSS", icon: Code },
    { id: "responsividade", label: "Responsividade", icon: Smartphone },
];

/* ========== PAGE ========== */
export default function GuiaEstilo() {
    const [activeChip, setActiveChip] = useState("Todos");
    const [currentPage, setCurrentPage] = useState(2);

    return (
        <main className="container-site py-10">
            {/* Page header */}
            <div className="mb-6">
                <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Guia de Estilo" }]} />
            </div>
            <div className="mb-10">
                <span className="section-label mb-3 block">Design System</span>
                <h1 className="text-4xl font-bold text-foreground mb-3">Guia de Estilo — a11yBR</h1>
                <p className="text-muted-foreground leading-relaxed reading-width">
                    Referência visual e técnica de todos os tokens, componentes e padrões do projeto. Use este guia para manter consistência ao criar novas páginas.
                </p>
            </div>

            {/* Layout: sidebar + content */}
            <div className="flex gap-10">
                {/* Sidebar nav — sticky */}
                <aside className="hidden lg:block w-52 flex-shrink-0">
                    <nav className="sticky top-24 flex flex-col gap-1" aria-label="Seções do guia">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-primary-light transition-colors no-underline"
                            >
                                <s.icon size={14} aria-hidden />
                                {s.label}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Main content */}
                <div className="flex-1 min-w-0">

                    {/* ===== CORES ===== */}
                    <SectionAnchor id="cores" icon={Palette} title="Cores" />

                    <SubSection title="Cor primária (accent)">
                        <div className="flex flex-wrap gap-6">
                            <Swatch label="Primary" css="var(--primary)" />
                            <Swatch label="Primary Hover" css="var(--primary-hover)" />
                            <Swatch label="Primary Light" css="var(--primary-light)" />
                            <Swatch label="Primary FG" css="var(--primary-foreground)" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            Use a cor primária <strong>apenas</strong> para: botões, links, tags, hovers, destaques importantes e marcadores de seção. Evite blocos de cor excessivos.
                        </p>
                        <CodeBlock>{`/* CSS */
hsl(var(--primary))      /* #a81f3f — 346 69% 39% */
hsl(var(--primary-hover)) /* 346 69% 32% */
hsl(var(--primary-light)) /* 346 69% 95% */

/* Tailwind */
className="bg-primary text-primary-foreground"
className="hover:bg-primary/90"`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Superfícies">
                        <div className="flex flex-wrap gap-6">
                            <Swatch label="Background" css="var(--background)" />
                            <Swatch label="Card" css="var(--card)" />
                            <Swatch label="Muted" css="var(--muted)" />
                            <Swatch label="Secondary" css="var(--secondary)" />
                            <Swatch label="Popover" css="var(--popover)" />
                        </div>
                    </SubSection>

                    <SubSection title="Texto">
                        <div className="flex flex-wrap gap-6">
                            <Swatch label="Foreground" css="var(--foreground)" />
                            <Swatch label="Muted FG" css="var(--muted-foreground)" />
                            <Swatch label="Secondary FG" css="var(--secondary-foreground)" />
                        </div>
                    </SubSection>

                    <SubSection title="Semânticas">
                        <div className="flex flex-wrap gap-6">
                            <Swatch label="Destructive" css="var(--destructive)" />
                            <Swatch label="Success" css="var(--success)" />
                            <Swatch label="Warning" css="var(--warning)" />
                        </div>
                    </SubSection>

                    <SubSection title="Bordas & Foco">
                        <div className="flex flex-wrap gap-6">
                            <Swatch label="Border" css="var(--border)" />
                            <Swatch label="Border Strong" css="var(--border-strong)" />
                            <Swatch label="Ring" css="var(--ring)" />
                        </div>
                        <CodeBlock>{`/* Focus ring padrão */
:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 3px;
}

/* Focus ring custom */
var(--focus-ring): 0 0 0 3px hsl(346 69% 39% / 0.25);`}</CodeBlock>
                    </SubSection>

                    {/* ===== TIPOGRAFIA ===== */}
                    <SectionAnchor id="tipografia" icon={Type} title="Tipografia" />

                    <SubSection title="Família tipográfica">
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-muted-foreground mb-1">Corpo — Inter</p>
                                <p className="text-lg" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                                    Acessibilidade digital é um direito, não um privilégio.
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground mb-1">Headings — Inter Bold</p>
                                <p className="text-2xl font-bold" style={{ fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "-0.02em" }}>
                                    Acessibilidade digital é um direito.
                                </p>
                            </div>
                        </div>
                        <CodeBlock>{`body { font-family: 'Inter', system-ui, sans-serif; line-height: 1.6; }
h1-h6 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.2; }`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Escala tipográfica">
                        <div className="space-y-3">
                            <div><h1 className="!text-5xl">H1 — 3rem (48px)</h1></div>
                            <div><h2 className="!text-4xl">H2 — 2.25rem (36px)</h2></div>
                            <div><h3 className="!text-3xl">H3 — 1.875rem (30px)</h3></div>
                            <div><h4 className="!text-2xl">H4 — 1.5rem (24px)</h4></div>
                            <div><p className="text-xl">XL body — 1.25rem (20px)</p></div>
                            <div><p className="text-lg">LG body — 1.125rem (18px)</p></div>
                            <div><p className="text-base">Base body — 1rem (16px)</p></div>
                            <div><p className="text-sm">SM — 0.875rem (14px)</p></div>
                            <div><p className="text-xs">XS — 0.75rem (12px)</p></div>
                            <div><p className="text-2xs">2XS — 0.6875rem (11px)</p></div>
                        </div>
                        <CodeBlock>{`/* Headings responsivos com clamp() */
h1 { font-size: clamp(2rem, 4vw, 3rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2rem); }
h3 { font-size: clamp(1.125rem, 2vw, 1.375rem); }

/* Largura de leitura confortável */
.reading-width { max-width: var(--reading-max); /* 72ch */ }`}</CodeBlock>
                    </SubSection>

                    {/* ===== ESPAÇAMENTO ===== */}
                    <SectionAnchor id="espacamento" icon={Grid3X3} title="Espaçamento & Grid" />

                    <SubSection title="Container">
                        <CodeBlock>{`/* Container principal */
.container-site {
  max-width: var(--container-max); /* 1200px */
  margin-inline: auto;
  padding-inline: 1.5rem;  /* mobile */
                  2rem;    /* md: 768px */
                  2.5rem;  /* lg: 1024px */
}

/* Seções */
.section-gap { padding-block: var(--section-gap); /* 5rem */ }`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Grid 12 colunas">
                        <div className="grid-12 mb-4">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="bg-primary-light border border-primary/20 rounded h-10 flex items-center justify-center text-xs font-semibold text-primary">
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                        <CodeBlock>{`.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Breakpoints">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-muted">
                                        <th className="text-left p-3 font-semibold text-foreground">Token</th>
                                        <th className="text-left p-3 font-semibold text-foreground">Min-width</th>
                                        <th className="text-left p-3 font-semibold text-foreground">Uso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["xs", "480px", "Smartphones maiores"],
                                        ["sm", "640px", "Smartphones landscape"],
                                        ["md", "768px", "Tablets"],
                                        ["lg", "1024px", "Desktop"],
                                        ["xl", "1280px", "Desktop grande"],
                                        ["2xl", "1400px", "Container max"],
                                    ].map(([token, width, uso]) => (
                                        <tr key={token} className="border-t border-border">
                                            <td className="p-3 font-mono text-primary text-xs">{token}</td>
                                            <td className="p-3 text-foreground">{width}</td>
                                            <td className="p-3 text-muted-foreground">{uso}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SubSection>

                    {/* ===== BOTÕES ===== */}
                    <SectionAnchor id="botoes" icon={MousePointer} title="Botões" />

                    <SubSection title="Variantes">
                        <div className="flex flex-wrap gap-3 items-center mb-4">
                            <Button variant="default">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                            <Button variant="destructive">Destructive</Button>
                        </div>
                        <CodeBlock>{`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Tamanhos">
                        <div className="flex flex-wrap gap-3 items-center mb-4">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                            <Button size="icon"><Accessibility size={16} /></Button>
                        </div>
                        <CodeBlock>{`<Button size="sm">Small</Button>       /* h-9  px-3 */
<Button size="default">Default</Button> /* h-10 px-4 */
<Button size="lg">Large</Button>       /* h-11 px-8 */
<Button size="icon">…</Button>         /* h-10 w-10 */`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Estados">
                        <div className="flex flex-wrap gap-3 items-center mb-4">
                            <Button>Normal</Button>
                            <Button className="ring-2 ring-primary ring-offset-2">Focused</Button>
                            <Button disabled>Disabled</Button>
                        </div>
                    </SubSection>

                    {/* ===== TAGS & BADGES ===== */}
                    <SectionAnchor id="tags-badges" icon={Layers} title="Tags & Badges" />

                    <SubSection title="Tag (componente custom)">
                        <div className="flex flex-wrap gap-2 items-center mb-4">
                            <Tag variant="default">Default</Tag>
                            <Tag variant="primary">Primary</Tag>
                            <Tag variant="muted">Muted</Tag>
                            <Tag variant="success">Success</Tag>
                            <Tag variant="warning">Warning</Tag>
                        </div>
                        <CodeBlock>{`<Tag variant="default">Default</Tag>
<Tag variant="primary">Primary</Tag>
<Tag variant="muted">Muted</Tag>
<Tag variant="success">Success</Tag>
<Tag variant="warning">Warning</Tag>

/* Classe base */
.tag-base {
  display: inline-flex; align-items: center;
  padding: 0.2rem 0.65rem; border-radius: 999px;
  font-size: 0.75rem; font-weight: 600;
}`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Badge (shadcn)">
                        <div className="flex flex-wrap gap-2 items-center mb-4">
                            <Badge variant="default">Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>
                    </SubSection>

                    <SubSection title="Section Label">
                        <div className="mb-4">
                            <span className="section-label">Destaques</span>
                        </div>
                        <CodeBlock>{`<span className="section-label">Destaques</span>

/* Marcador com barra vermelha à esquerda */
.section-label::before {
  content: ''; width: 1.25rem; height: 2px;
  background: hsl(var(--primary));
}`}</CodeBlock>
                    </SubSection>

                    <SubSection title="FilterChip">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Todos", "Artigos", "Tutoriais", "Projetos"].map((chip) => (
                                <FilterChip
                                    key={chip}
                                    active={activeChip === chip}
                                    onClick={() => setActiveChip(chip)}
                                >
                                    {chip}
                                </FilterChip>
                            ))}
                        </div>
                        <CodeBlock>{`<FilterChip active={true} onClick={…}>Artigos</FilterChip>

/* active: bg-primary text-primary-foreground border-primary */
/* inactive: bg-card text-muted-foreground border-border */`}</CodeBlock>
                    </SubSection>

                    {/* ===== FORMULÁRIOS ===== */}
                    <SectionAnchor id="formularios" icon={AlignLeft} title="Formulários" />

                    <SubSection title="SearchInput">
                        <div className="max-w-md mb-4">
                            <SearchInput label="Pesquisar conteúdos…" />
                        </div>
                        <CodeBlock>{`<SearchInput label="Pesquisar conteúdos…" />

/* Input styling */
border border-border bg-card text-sm
focus:ring-2 focus:ring-primary focus:border-primary`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Campos de formulário">
                        <div className="max-w-md space-y-4 mb-4">
                            <div>
                                <label htmlFor="sg-name" className="block text-sm font-medium text-foreground mb-1.5">
                                    Nome completo
                                </label>
                                <input
                                    id="sg-name"
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="sg-email" className="block text-sm font-medium text-foreground mb-1.5">
                                    E-mail
                                </label>
                                <input
                                    id="sg-email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="sg-select" className="block text-sm font-medium text-foreground mb-1.5">
                                    Categoria
                                </label>
                                <select
                                    id="sg-select"
                                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                >
                                    <option>Selecione…</option>
                                    <option>Artigo</option>
                                    <option>Tutorial</option>
                                    <option>Projeto</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sg-textarea" className="block text-sm font-medium text-foreground mb-1.5">
                                    Descrição
                                </label>
                                <textarea
                                    id="sg-textarea"
                                    rows={3}
                                    placeholder="Descreva o conteúdo…"
                                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-y"
                                />
                            </div>
                        </div>
                        <CodeBlock>{`/* Padrão de input */
className="w-full px-4 py-2.5 rounded-lg border border-border
  bg-card text-sm text-foreground
  placeholder:text-muted-foreground
  focus:outline-none focus:ring-2 focus:ring-primary
  focus:border-primary transition-colors"

/* Labels */
className="block text-sm font-medium text-foreground mb-1.5"`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Estados de erro">
                        <div className="max-w-md mb-4">
                            <label htmlFor="sg-error" className="block text-sm font-medium text-foreground mb-1.5">
                                E-mail *
                            </label>
                            <input
                                id="sg-error"
                                type="email"
                                value="email-invalido"
                                readOnly
                                className="w-full px-4 py-2.5 rounded-lg border-2 border-destructive bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-destructive transition-colors"
                                aria-invalid="true"
                                aria-describedby="sg-error-msg"
                            />
                            <p id="sg-error-msg" className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                                <CheckCircle size={12} aria-hidden /> Formato de e-mail inválido.
                            </p>
                        </div>
                    </SubSection>

                    {/* ===== CARDS ===== */}
                    <SectionAnchor id="cards" icon={Square} title="Cards" />

                    <SubSection title="Card base (utilitário CSS)">
                        <div className="max-w-sm mb-4">
                            <div className="card-base p-6 rounded-lg">
                                <p className="text-sm text-muted-foreground">
                                    Classe <code className="text-primary font-mono text-xs">.card-base</code> aplica background, borda, sombra e hover automaticamente.
                                </p>
                            </div>
                        </div>
                        <CodeBlock>{`.card-base {
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) + 2px);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
}
.card-base:hover {
  box-shadow: var(--shadow-card-hover);
  border-color: hsl(var(--primary) / 0.2);
  transform: translateY(-1px);
}`}</CodeBlock>
                    </SubSection>

                    <SubSection title="ContentCard">
                        <div className="max-w-sm mb-4">
                            <ContentCard
                                title="Acessibilidade em SPAs com React"
                                excerpt="Como garantir navegação acessível em aplicações single-page com gerenciamento de foco e anúncios para leitores de tela."
                                type="artigo"
                                tags={["React", "ARIA", "SPA"]}
                                author="Maria Silva"
                                date="15 Jan 2025"
                                readTime="6 min"
                                href="#"
                            />
                        </div>
                    </SubSection>

                    <SubSection title="ProfileCard">
                        <div className="max-w-sm mb-4">
                            <ProfileCard
                                name="João Santos"
                                role="Especialista em Acessibilidade"
                                bio="Consultor com 10 anos de experiência em acessibilidade digital e conformidade WCAG."
                                tags={["WCAG", "ARIA", "Design Inclusivo"]}
                                type="profissional"
                                initials="JS"
                                location="São Paulo, SP"
                                links={[
                                    { label: "LinkedIn", href: "#", icon: "linkedin" },
                                    { label: "Site", href: "#", icon: "globe" },
                                ]}
                            />
                        </div>
                    </SubSection>

                    <SubSection title="ResourceCard">
                        <div className="max-w-sm mb-4">
                            <ResourceCard
                                title="Guia WCAG 2.2 em Português"
                                description="Tradução oficial das diretrizes de acessibilidade para conteúdo web, com exemplos práticos."
                                category="livro"
                                tags={["WCAG", "W3C"]}
                                href="#"
                                metadata="W3C, 2023"
                                free
                            />
                        </div>
                    </SubSection>

                    <SubSection title="EventCard">
                        <div className="max-w-sm mb-4">
                            <EventCard
                                title="Workshop de Testes de Acessibilidade"
                                description="Aprenda a usar ferramentas automatizadas e manuais para verificar acessibilidade."
                                date="20 Mar 2025"
                                time="14:00"
                                location="Online"
                                type="workshop"
                                online
                                organizer="a11yBR"
                                registrationUrl="#"
                            />
                        </div>
                    </SubSection>

                    <SubSection title="Card shadcn">
                        <div className="max-w-sm mb-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Título do Card</CardTitle>
                                    <CardDescription>Descrição auxiliar do card.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Conteúdo interno do card shadcn.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm">Ação</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </SubSection>

                    {/* ===== NAVEGAÇÃO ===== */}
                    <SectionAnchor id="navegacao" icon={Layout} title="Navegação" />

                    <SubSection title="BreadcrumbNav">
                        <div className="mb-4">
                            <BreadcrumbNav items={[
                                { label: "Home", href: "/" },
                                { label: "Conteúdo", href: "/conteudo" },
                                { label: "Artigo Exemplo" },
                            ]} />
                        </div>
                        <CodeBlock>{`<BreadcrumbNav items={[
  { label: "Home", href: "/" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Artigo Exemplo" },  // último item sem href = página atual
]} />`}</CodeBlock>
                    </SubSection>

                    <SubSection title="PaginationNav">
                        <div className="mb-4">
                            <PaginationNav currentPage={currentPage} totalPages={8} onPageChange={setCurrentPage} />
                        </div>
                        <CodeBlock>{`<PaginationNav currentPage={2} totalPages={8} onPageChange={setPage} />`}</CodeBlock>
                    </SubSection>

                    <SubSection title="NewsletterModule">
                        <div className="max-w-lg mb-4">
                            <NewsletterModule />
                        </div>
                    </SubSection>

                    {/* ===== FEEDBACK ===== */}
                    <SectionAnchor id="feedback" icon={Eye} title="Feedback & Estados" />

                    <SubSection title="Sombras">
                        <div className="flex flex-wrap gap-6 mb-4">
                            {[
                                { label: "shadow-sm", cls: "shadow-card" },
                                { label: "shadow-md", cls: "shadow-md" },
                                { label: "shadow-lg", cls: "shadow-lg" },
                                { label: "shadow-card-hover", cls: "shadow-card-hover" },
                            ].map((s) => (
                                <div key={s.label} className={`w-28 h-20 rounded-lg bg-card border border-border flex items-center justify-center ${s.cls}`}>
                                    <span className="text-2xs font-mono text-muted-foreground">{s.label}</span>
                                </div>
                            ))}
                        </div>
                        <CodeBlock>{`--shadow-sm: 0 1px 3px 0 hsl(220 15% 12% / 0.06), …
--shadow-md: 0 4px 12px -2px hsl(220 15% 12% / 0.08), …
--shadow-lg: 0 10px 24px -4px hsl(220 15% 12% / 0.1), …
--shadow-card-hover: 0 8px 20px -4px hsl(346 69% 39% / 0.12), …`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Animações">
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="animate-fade-in bg-card border border-border rounded-lg p-4 w-40 text-center">
                                <p className="text-xs font-medium text-foreground">fade-in</p>
                                <p className="text-2xs text-muted-foreground">0.3s ease-out</p>
                            </div>
                        </div>
                        <CodeBlock>{`@keyframes fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

/* Transições padrão */
transition: color 0.15s ease, opacity 0.15s ease;       /* links */
transition: box-shadow 0.2s ease, transform 0.2s ease;  /* cards */`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Focus & Hover">
                        <div className="flex flex-wrap gap-4 items-center mb-4">
                            <Button className="ring-2 ring-primary ring-offset-2">Focus visible</Button>
                            <a href="#" className="text-primary underline">Link hover →</a>
                            <div className="card-base p-4 rounded-lg w-32 text-center">
                                <span className="text-xs text-muted-foreground">Card hover</span>
                            </div>
                        </div>
                        <CodeBlock>{`:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 3px;
  border-radius: 3px;
}

a:hover { color: hsl(var(--primary-hover)); }
.card-base:hover { transform: translateY(-1px); }`}</CodeBlock>
                    </SubSection>

                    {/* ===== TOKENS CSS ===== */}
                    <SectionAnchor id="tokens-css" icon={Code} title="Tokens CSS" />

                    <SubSection title="Variáveis customizadas">
                        <CodeBlock>{`:root {
  /* Brand */
  --primary: 346 69% 39%;          /* #a81f3f */
  --primary-foreground: 0 0% 100%;
  --primary-hover: 346 69% 32%;
  --primary-light: 346 69% 95%;

  /* Surface */
  --background: 40 20% 97%;
  --foreground: 220 15% 12%;
  --card: 0 0% 100%;
  --muted: 220 14% 93%;
  --secondary: 220 14% 94%;

  /* Semantic */
  --destructive: 0 84% 60%;
  --success: 142 72% 29%;
  --warning: 38 92% 50%;

  /* Borders */
  --border: 220 13% 86%;
  --border-strong: 220 13% 72%;
  --ring: 346 69% 39%;
  --radius: 0.375rem;

  /* Layout */
  --nav-height: 4rem;
  --section-gap: 5rem;
  --container-max: 1200px;
  --reading-max: 72ch;
}`}</CodeBlock>
                    </SubSection>

                    <SubSection title="Classes utilitárias do projeto">
                        <CodeBlock>{`/* Container */
.container-site   — max-width + padding responsivo

/* Espaçamento de seção */
.section-gap      — padding-block: var(--section-gap)

/* Marcador de seção */
.section-label    — uppercase 0.75rem com barra primária

/* Card */
.card-base        — bg-card + border + shadow + hover

/* Leitura */
.reading-width    — max-width: var(--reading-max)

/* Grid */
.grid-12          — 12 colunas com gap de 1.5rem

/* Tag */
.tag-base         — pill inline-flex

/* Divider */
.divider-label    — linha + texto + linha`}</CodeBlock>
                    </SubSection>

                    {/* ===== RESPONSIVIDADE ===== */}
                    <SectionAnchor id="responsividade" icon={Smartphone} title="Responsividade" />

                    <SubSection title="Princípios">
                        <div className="space-y-3 mb-4">
                            <div className="flex items-start gap-3">
                                <Smartphone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Mobile-first</p>
                                    <p className="text-sm text-muted-foreground">Estilos base para mobile, media queries adicionam complexidade.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Tablet size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Tablet (md: 768px)</p>
                                    <p className="text-sm text-muted-foreground">Grid de 2 colunas, padding lateral aumenta.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Monitor size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Desktop (lg: 1024px+)</p>
                                    <p className="text-sm text-muted-foreground">Grid de 3-4 colunas, sidebar visível, navegação completa.</p>
                                </div>
                            </div>
                        </div>
                        <CodeBlock>{`/* Padrão de grid responsivo */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5

/* Padding responsivo */
p-4 md:p-6 lg:p-8

/* Visibilidade */
hidden lg:block     — sidebar desktop only
flex lg:hidden      — menu mobile only`}</CodeBlock>
                    </SubSection>

                    {/* Divider label demo */}
                    <SubSection title="Divider label">
                        <div className="divider-label mb-4">ou</div>
                        <CodeBlock>{`<div className="divider-label">ou</div>

.divider-label::before, .divider-label::after {
  content: ''; flex: 1; height: 1px;
  background: hsl(var(--border));
}`}</CodeBlock>
                    </SubSection>

                    {/* End */}
                    <div className="mt-16 pt-8 border-t border-border text-center">
                        <p className="text-sm text-muted-foreground">
                            Guia de Estilo — a11yBR · Última atualização: Fevereiro 2026
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
