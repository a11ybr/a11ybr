import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Recursos", href: "/recursos" },
  { label: "Comunidade", href: "/comunidade" },
  { label: "Eventos", href: "/eventos" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Sobre", href: "/sobre" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <header
        className="sticky top-0 z-50 bg-card border-b border-border"
        style={{ boxShadow: "var(--shadow-sm)" }}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between" style={{ height: "var(--nav-height)" }}>
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 no-underline group"
              aria-label="a11yBR — Página inicial"
            >
              <span
                className="flex items-center justify-center w-9 h-9 rounded-md font-extrabold text-sm text-primary-foreground tracking-tight"
                style={{ background: "hsl(var(--primary))" }}
                aria-hidden="true"
              >
                a11y
              </span>
              <span className="font-extrabold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                BR
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navegação principal"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium no-underline transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/apoiar"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground no-underline transition-colors"
              >
                Apoiar
              </Link>
              <Link
                to="/submeter"
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-primary-foreground no-underline transition-colors"
                style={{
                  background: "hsl(var(--primary))",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary-hover))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary))";
                }}
              >
                Submeter conteúdo
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-secondary transition-colors"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden border-t border-border bg-card animate-fade-in"
            aria-label="Menu mobile"
          >
            <div className="container-site py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium no-underline transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary-light"
                      : "text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
                <Link
                  to="/apoiar"
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-secondary no-underline transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Apoiar
                </Link>
                <Link
                  to="/submeter"
                  className="px-3 py-2.5 rounded-md text-sm font-semibold text-primary-foreground no-underline text-center"
                  style={{ background: "hsl(var(--primary))" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Submeter conteúdo
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
