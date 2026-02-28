import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Submeter() {
  return (
    <main className="container-site py-16">

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Submeter" },
        ]}
      />

      <header className="mt-8 mb-16 reading-width">
        <span className="section-label mb-4 block">Comunidade</span>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Enviar contribuição
        </h1>
        <p className="text-lg leading-relaxed">Compartilhe uma iniciativa de acessibilidade digital com a comunidade. Todas as submissões são revisadas antes de serem publicadas.

        </p>
        <p className="text-muted-foreground ">
          Escolha o tipo de contribuição que você deseja enviar para o ecossistema a11yBR.
        </p>
      </header>
      <div className="rounded-lg border border-border bg-muted/50 p-4 mb-8">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Importante:</strong> Esta plataforma documenta e conecta iniciativas — não valida, certifica ou ranqueia. Todas as informações são fornecidas pela comunidade e podem ser editadas ou atualizadas a qualquer momento.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Submeter Conteúdo */}
        <div className="card-base p-8 space-y-6">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Submeter conteúdo
            </h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed pb-6">
            Envie artigos, tutoriais, projetos open source, recursos, eventos ou outros materiais relevantes.
          </p>

          <Link to="/submeter/conteudo">
            <Button>
              Enviar conteúdo
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Submeter Perfil */}
        <div className="card-base p-8 space-y-6">
          <div className="flex items-center gap-3">
            <User size={20} className="text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Submeter perfil
            </h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed pb-6">
            Cadastre seu perfil profissional ou institucional para fazer parte do diretório da comunidade.
          </p>

          <Link to="/submeter/perfil">
            <Button>
              Enviar perfil
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

      </div>

    </main>
  );
}