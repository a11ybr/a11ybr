import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function PaginationNav({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1
  );

  const handleKey = (e: React.KeyboardEvent, page: number) => {
    if (e.key === "Enter" || e.key === " ") {
      onPageChange?.(page);
    }
  };

  return (
    <nav aria-label="Paginação" className="flex items-center justify-center gap-1">
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className={cn(
          "w-9 h-9 flex items-center justify-center rounded-md border border-border text-muted-foreground transition-colors",
          "hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
      >
        <ChevronLeft size={16} aria-hidden />
      </button>

      {visiblePages.map((page, idx) => {
        const prev = visiblePages[idx - 1];
        const gap = prev && page - prev > 1;
        return (
          <span key={page} className="flex items-center gap-1">
            {gap && (
              <span className="w-9 h-9 flex items-center justify-center text-muted-foreground text-sm">
                …
              </span>
            )}
            <button
              onClick={() => onPageChange?.(page)}
              aria-label={`Página ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={cn(
                "w-9 h-9 flex items-center justify-center rounded-md border text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                page === currentPage
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {page}
            </button>
          </span>
        );
      })}

      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
        className={cn(
          "w-9 h-9 flex items-center justify-center rounded-md border border-border text-muted-foreground transition-colors",
          "hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
      >
        <ChevronRight size={16} aria-hidden />
      </button>
    </nav>
  );
}
