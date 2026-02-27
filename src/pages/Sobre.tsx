import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { Github, ExternalLink } from "lucide-react";

const team = [
  { name: "Fernanda Oliveira", role: "Fundadora & Editora-chefe", initials: "FO" },
  { name: "Rafael Mendes", role: "Desenvolvedor & Arquiteto", initials: "RM" },
  { name: "Ana Lima", role: "Curadora de Conteúdo", initials: "AL" },
  { name: "Lucas Carvalho", role: "Open Source & Comunidade", initials: "LC" }];


export default function Sobre() {
  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Sobre" }]} />
          <h1 className="mt-4 mb-2">Sobre o a11yBR</h1>
          <p className="text-muted-foreground text-lg">
            O que somos, por que existimos e como funciona a plataforma.
          </p>
        </div>
      </div>

      <div className="container-site py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Mission */}
            <section aria-labelledby="missao-heading">
              <span className="section-label mb-3 block">Missão</span>
              <h2 id="missao-heading" className="mb-4">O que é o a11yBR?</h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  O <strong className="text-foreground">a11yBR</strong> é um hub colaborativo de acessibilidade digital focado no contexto brasileiro. Reunimos conteúdos técnicos, recursos curados, profissionais especializados e uma comunidade ativa — tudo em português.
                </p>
                <p>
                  Acreditamos que o conhecimento sobre inclusão digital deve ser acessível a todos: desenvolvedores, designers, gestores e estudantes. Por isso, todo o conteúdo da plataforma é gratuito e mantido pela própria comunidade.
                </p>
                <p>
                  O projeto surgiu em 2022 da necessidade de centralizar conteúdos de qualidade em português, diante da escassez de materiais atualizados sobre WCAG, ARIA, tecnologia assistiva e legislação brasileira de acessibilidade.
                </p>
              </div>
            </section>

            {/* How it works */}
            <section aria-labelledby="como-heading">
              <span className="section-label mb-3 block">Funcionamento</span>
              <h2 id="como-heading" className="mb-4">Como funciona</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: "📝", title: "Submissão comunitária", desc: "Qualquer pessoa pode submeter conteúdo para revisão editorial." },
                  { icon: "🔍", title: "Revisão editorial", desc: "Nossa equipe analisa cada submissão por qualidade e relevância." },
                  { icon: "✅", title: "Publicação aprovada", desc: "Conteúdos aprovados são publicados e atribuídos ao autor." },
                  { icon: "🔄", title: "Atualização contínua", desc: "A plataforma é atualizada semanalmente com novos conteúdos." }].
                  map(({ icon, title, desc }) =>
                    <div key={title} className="p-5 rounded-xl border border-border bg-card flex gap-4">
                      <span className="text-2xl flex-shrink-0" aria-hidden>{icon}</span>
                      <div>
                        <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
                        <p className="text-sm text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  )}
              </div>
            </section>

            {/* Team */}
            <section aria-labelledby="equipe-heading">
              <span className="section-label mb-3 block">Equipe</span>
              <h2 id="equipe-heading" className="mb-6">Quem mantém o a11yBR</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.map((member) =>
                  <div
                    key={member.name}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">

                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-primary-foreground flex-shrink-0"
                      style={{ background: "hsl(var(--primary))" }}
                      aria-hidden>

                      {member.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Code of conduct */}
            <section id="conduta" aria-labelledby="conduta-heading">
              <span className="section-label mb-3 block">Código de conduta</span>
              <h2 id="conduta-heading" className="mb-4">Nossa comunidade</h2>
              <div className="p-6 rounded-xl border border-border bg-card text-sm text-muted-foreground flex flex-col gap-3 leading-relaxed">
                <p>A comunidade a11yBR é um espaço respeitoso e inclusivo para todos. Esperamos que todos os participantes:</p>
                <ul className="flex flex-col gap-2 ml-4">
                  {[
                    "Tratem todos com respeito e profissionalismo",
                    "Utilizem linguagem inclusiva e não discriminatória",
                    "Sejam receptivos a perspectivas diferentes das suas",
                    "Reconheçam o trabalho de outras pessoas",
                    "Reportem comportamentos inadequados para a equipe"].
                    map((item) =>
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden />
                        {item}
                      </li>
                    )}
                </ul>
              </div>
            </section>

            {/* Accessibility statement */}
            <section id="acessibilidade" aria-labelledby="acess-heading">
              <span className="section-label mb-3 block">Acessibilidade do site</span>
              <h2 id="acess-heading" className="mb-4">Declaração de acessibilidade</h2>
              <div className="p-6 rounded-xl border border-border bg-card text-sm text-muted-foreground leading-relaxed flex flex-col gap-3">
                <p>
                  O a11yBR se compromete a atender os critérios de sucesso WCAG 2.1 nível AA. Este site foi construído com semântica HTML correta, foco visível em todos os elementos interativos, contraste de cor adequado e suporte a leitores de tela.
                </p>
                <p>
                  Encontrou algum problema de acessibilidade? Reporte para{" "}
                  <a href="mailto:acessibilidade@a11ybr.com.br" className="text-primary hover:underline">
                    acessibilidade@a11ybr.com.br
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            <div className="sticky top-24 flex flex-col gap-5">
              <div className="p-5 rounded-xl border border-border bg-card">
                <h2 className="text-sm font-bold text-foreground mb-3">Links rápidos</h2>
                <ul className="flex flex-col gap-2 list-none p-0 m-0">
                  {[
                    { label: "Código de conduta", href: "#conduta" },
                    { label: "Política de privacidade", href: "#privacidade" },
                    { label: "Declaração de acessibilidade", href: "#acessibilidade" },
                    { label: "Submeter conteúdo", href: "/submeter" },
                    { label: "Apoiar o projeto", href: "/apoiar" }].
                    map((l) =>
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">

                          {l.label}
                        </a>
                      </li>
                    )}
                </ul>
              </div>

              <div

                className="rounded-xl p-8 flex flex-col gap-5"
                style={{ background: "hsl(var(--primary))" }}>

                <Github size={20} className="mb-3" color="#fff" aria-hidden />
                <h2 className="text-sm font-bold mb-1 text-primary-foreground">Open Source</h2>
                <p className="text-xs mb-3 text-primary-light">
                  O código do a11yBR é aberto. Contribuições são bem-vindas!
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline no-underline text-secondary">

                  Ver no GitHub <ExternalLink size={11} aria-hidden />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>);

}