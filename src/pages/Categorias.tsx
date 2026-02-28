import { Link } from "react-router-dom";
import {
  Globe,
  Headphones,
  BookOpen,
  Users,
  Calendar,
  Wrench,
  FileText,
  Youtube
} from "lucide-react";

type Categoria = {
  slug: string;
  titulo: string;
  descricao: string;
  icon: any;
};

const categorias: Categoria[] = [
  {
    slug: "sites",
    titulo: "Sites e Sistemas",
    descricao: "Plataformas e sistemas web acessíveis",
    icon: Globe
  },
  {
    slug: "podcasts",
    titulo: "Podcasts",
    descricao: "Programas de áudio sobre acessibilidade",
    icon: Headphones
  },
  {
    slug: "cursos",
    titulo: "Cursos e Materiais",
    descricao: "Recursos educacionais e formativos",
    icon: BookOpen
  },
  {
    slug: "comunidades",
    titulo: "Comunidades",
    descricao: "Grupos e coletivos digitais",
    icon: Users
  },
  {
    slug: "eventos",
    titulo: "Eventos",
    descricao: "Conferências e encontros",
    icon: Calendar
  },
  {
    slug: "ferramentas",
    titulo: "Ferramentas",
    descricao: "Softwares e soluções técnicas",
    icon: Wrench
  },
  {
    slug: "artigos",
    titulo: "Artigos",
    descricao: "Publicações sobre acessibilidade",
    icon: FileText
  },
  {
    slug: "youtube",
    titulo: "Canais do YouTube",
    descricao: "Conteúdo em vídeo",
    icon: Youtube
  }
];

export default function Categorias() {
  return (
    <main className="container-site py-16">
      <h1 className="mb-12">Categorias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((cat) => {
          const Icon = cat.icon;

          return (
            <Link
              key={cat.slug}
              to={`/categoria/${cat.slug}`}
              className="card-base p-6 no-underline hover:shadow-card-hover transition-all"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                  <Icon size={22} className="text-primary" />
                </div>

                <div>
                  <h2 className="font-semibold text-lg">
                    {cat.titulo}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {cat.descricao}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}