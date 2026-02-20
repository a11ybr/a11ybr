import { Heart, Star, Building2, ArrowRight } from "lucide-react";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

const sponsorTiers = [
  {
    name: "Apoiador Individual",
    price: "R$ 20/mês",
    icon: Heart,
    color: "hsl(var(--primary))",
    benefits: [
      "Menção na página de apoiadores",
      "Acesso antecipado a novos recursos",
      "Badge de apoiador no perfil",
      "Newsletter exclusiva",
    ],
    cta: "Apoiar mensalmente",
  },
  {
    name: "Patrocinador Bronze",
    price: "R$ 500/mês",
    icon: Star,
    color: "hsl(38 80% 50%)",
    benefits: [
      "Logo na página inicial",
      "Destaque em 2 newsletters mensais",
      "1 vaga gratuita em workshops",
      "Acesso ao relatório de impacto",
    ],
    cta: "Tornar-se patrocinador",
  },
  {
    name: "Patrocinador Ouro",
    price: "R$ 1.500/mês",
    icon: Building2,
    color: "hsl(220 60% 40%)",
    benefits: [
      "Logo em destaque (home + todas as páginas)",
      "Artigo patrocinado mensal",
      "5 vagas em workshops",
      "Relatório mensal de impacto",
      "Menção em redes sociais semanalmente",
      "Call de apresentação trimestral",
    ],
    cta: "Tornar-se patrocinador Ouro",
  },
];

export default function Apoiar() {
  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Apoiar" }]} />
          <h1 className="mt-4 mb-2">Apoiar o a11yBR</h1>
          <p className="text-muted-foreground text-lg">
            Ajude a manter o maior hub colaborativo de acessibilidade digital em português.
          </p>
        </div>
      </div>

      <div className="container-site py-12">
        {/* Mission */}
        <section
          className="mb-14 p-8 lg:p-12 rounded-2xl border border-border bg-card"
          aria-labelledby="mission-heading"
        >
          <div className="max-w-2xl">
            <span className="section-label mb-4 block">Por que apoiar</span>
            <h2 id="mission-heading" className="mb-4">
              Acessibilidade digital é direito de todos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O a11yBR é um projeto independente, mantido por voluntários e pela comunidade. Todo o conteúdo é gratuito porque acreditamos que o conhecimento sobre inclusão digital não deve ter barreiras.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com seu apoio, conseguimos manter a infraestrutura, pagar moderadores editoriais, produzir conteúdo original e organizar eventos gratuitos para a comunidade.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "R$ 0", label: "Custo do conteúdo" },
                { value: "100%", label: "Open source" },
                { value: "1.240+", label: "Conteúdos publicados" },
                { value: "96", label: "Eventos realizados" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-extrabold" style={{ color: "hsl(var(--primary))" }}>
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship tiers */}
        <section aria-labelledby="sponsor-heading" className="mb-14">
          <span className="section-label mb-3 block">Patrocínio</span>
          <h2 id="sponsor-heading" className="mb-8">Planos de apoio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorTiers.map(({ name, price, icon: Icon, color, benefits, cta }) => (
              <article
                key={name}
                className="card-base rounded-xl overflow-hidden flex flex-col"
              >
                <div className="p-5 border-b border-border" style={{ background: `${color}12` }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={20} style={{ color }} aria-hidden />
                    <h3 className="text-base font-bold text-foreground">{name}</h3>
                  </div>
                  <p className="text-2xl font-extrabold" style={{ color }}>{price}</p>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <ul className="flex flex-col gap-2 mb-6 flex-1 list-none p-0 m-0">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-primary-foreground" style={{ background: color }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground transition-colors"
                    style={{ background: color }}
                    onClick={() => alert("Em breve: integração de pagamentos")}
                  >
                    {cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* One-time donation */}
        <section
          className="p-8 rounded-2xl border border-border bg-card text-center"
          aria-labelledby="donation-heading"
        >
          <span className="section-label mb-3 mx-auto flex justify-center">Doação única</span>
          <h2 id="donation-heading" className="mb-3">Prefere contribuir uma vez?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Qualquer valor ajuda. Use o PIX ou os botões abaixo para fazer uma doação avulsa no valor que preferir.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {["R$ 10", "R$ 25", "R$ 50", "R$ 100", "Outro valor"].map((val) => (
              <button
                key={val}
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                onClick={() => alert("Em breve: integração de pagamentos")}
              >
                {val}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            PIX: <strong className="text-foreground">apoiar@a11ybr.com.br</strong>
          </p>
        </section>
      </div>
    </main>
  );
}
