import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";

interface ContentCardProps {
  title: string;
  excerpt: string;
  type: "artigo" | "tutorial" | "projeto";
  tags: string[];
  author: string;
  date: string;
  readTime?: string;
  href: string;
}

const typeLabels: Record<ContentCardProps["type"], string> = {
  artigo: "Artigo",
  tutorial: "Tutorial",
  projeto: "Projeto",
};

const typeColors: Record<ContentCardProps["type"], string> = {
  artigo: "default",
  tutorial: "success",
  projeto: "warning",
};

export function ContentCard({
  title,
  excerpt,
  type,
  tags,
  author,
  date,
  readTime,
  href,
}: ContentCardProps) {
  return (
    <article className="card-base flex flex-col h-full rounded-lg">
      <div className="p-5 flex flex-col flex-1">
        {/* Type badge + meta */}
        <div className="flex items-center justify-between mb-3">
          <Tag variant={typeColors[type] as any}>{typeLabels[type]}</Tag>
          {readTime && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} aria-hidden />
              {readTime}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
          <Link
            to={href}
            className="no-underline text-foreground hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <Tag key={tag} variant="muted" className="text-xs">
                #{tag}
              </Tag>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <p className="text-xs font-medium text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
          <Link
            to={href}
            aria-label={`Ler: ${title}`}
            className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline no-underline"
          >
            Ler <ArrowRight size={12} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
