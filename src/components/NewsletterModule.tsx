import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function NewsletterModule() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="rounded-xl border border-border p-8 bg-card"
      aria-labelledby="newsletter-heading"
    >
      {submitted ? (
        <div className="flex flex-col items-center text-center gap-3 py-4">
          <CheckCircle size={32} className="text-success" aria-hidden />
          <h3 id="newsletter-heading" className="text-lg font-bold text-foreground">
            Inscrição confirmada!
          </h3>
          <p className="text-sm text-muted-foreground">
            Você receberá as novidades do a11yBR em breve.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <span className="section-label mb-3 block">Newsletter</span>
            <h3 id="newsletter-heading" className="text-xl font-bold text-foreground mb-2">
              Fique por dentro do a11yBR
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Receba uma curadoria semanal de conteúdos, recursos e eventos sobre acessibilidade digital. Sem spam.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                aria-required="true"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground transition-colors flex-shrink-0"
              style={{ background: "hsl(var(--primary))" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary-hover))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary))";
              }}
            >
              Inscrever-se
              <ArrowRight size={15} aria-hidden />
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            Ao se inscrever, você concorda com nossa{" "}
            <a href="/sobre#privacidade" className="text-primary hover:underline">
              política de privacidade
            </a>
            .
          </p>
        </>
      )}
    </section>
  );
}
