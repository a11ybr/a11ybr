import { NewsletterModule } from "@/components/NewsletterModule";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

export default function Newsletter() {
  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Newsletter" }]} />
          <h1 className="mt-4 mb-2">Newsletter</h1>
          <p className="text-muted-foreground text-lg">
            Curadoria semanal de conteúdos, recursos e eventos sobre acessibilidade digital.
          </p>
        </div>
      </div>

      <div className="container-site py-12">
        <div className="max-w-2xl mx-auto">
          <NewsletterModule />

          {/* What to expect */}
          <div className="mt-10 p-6 rounded-xl border border-border bg-card">
            <h2 className="text-base font-bold text-foreground mb-4">O que você receberá</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "📰", label: "Artigos e tutoriais", desc: "Os melhores conteúdos publicados na semana" },
                { icon: "🛠️", label: "Ferramentas e recursos", desc: "Novidades em ferramentas de acessibilidade" },
                { icon: "📅", label: "Eventos da semana", desc: "Workshops, meetups e webinars que valem a pena" },
                { icon: "💼", label: "Vagas e oportunidades", desc: "Oportunidades focadas em acessibilidade" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-2xl" aria-hidden>{icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past editions */}
          <div className="mt-8">
            <h2 className="text-base font-bold text-foreground mb-4">Edições anteriores</h2>
            <div className="flex flex-col gap-3">
              {[
                { number: "#47", title: "WCAG 2.2 em produção: o que mudou na prática", date: "14 fev 2025" },
                { number: "#46", title: "Ferramentas de teste: o guia definitivo de 2025", date: "7 fev 2025" },
                { number: "#45", title: "Libras no digital: estado atual e desafios", date: "31 jan 2025" },
              ].map((ed) => (
                <a
                  key={ed.number}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary-light transition-colors no-underline group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary">{ed.number}</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {ed.title}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-4">{ed.date}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
