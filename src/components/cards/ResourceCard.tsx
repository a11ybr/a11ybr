import { ExternalLink, Star } from "lucide-react";
import { Tag } from "@/components/ui/Tag";

interface ResourceCardProps {
  title: string;
  description: string;
  category: "livro" | "canal" | "ferramenta" | "site" | "curso";
  tags: string[];
  href: string;
  metadata?: string;
  free?: boolean;
}

const categoryLabels: Record<ResourceCardProps["category"], string> = {
  livro: "📖 Livro",
  canal: "📺 Canal",
  ferramenta: "🛠️ Ferramenta",
  site: "🌐 Site",
  curso: "🎓 Curso",
};

export function ResourceCard({
  title,
  description,
  category,
  tags,
  href,
  metadata,
  free,
}: ResourceCardProps) {
  return (
    <article className="card-base rounded-lg p-5 flex flex-col gap-3">
      {/* Category + free badge */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground">
          {categoryLabels[category]}
        </span>
        {free && (
          <Tag variant="success">Gratuito</Tag>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-foreground leading-snug">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-foreground hover:text-primary transition-colors"
        >
          {title}
        </a>
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>

      {/* Metadata */}
      {metadata && (
        <p className="text-xs text-muted-foreground italic">{metadata}</p>
      )}

      {/* Tags + CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag) => (
            <Tag key={tag} variant="muted" className="text-xs">
              {tag}
            </Tag>
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Acessar: ${title}`}
          className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline no-underline"
        >
          Acessar <ExternalLink size={11} aria-hidden />
        </a>
      </div>
    </article>
  );
}
