import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Caminho de navegação" className="flex items-center gap-1 flex-wrap">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="flex items-center gap-1">
            {idx > 0 && (
              <ChevronRight size={13} className="text-muted-foreground" aria-hidden />
            )}
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`text-sm ${isLast ? "text-foreground font-medium" : "text-muted-foreground"}`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
