import { useState } from "react";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

type ContentType = "artigo" | "tutorial" | "projeto" | "recurso" | "evento" | "perfil" | "";

const contentTypes = [
  { value: "artigo", label: "Artigo" },
  { value: "tutorial", label: "Tutorial" },
  { value: "projeto", label: "Projeto open source" },
  { value: "recurso", label: "Recurso (livro, canal, ferramenta)" },
  { value: "evento", label: "Evento" },
  { value: "perfil", label: "Perfil profissional" },
];

interface FormData {
  tipo: ContentType;
  titulo: string;
  descricao: string;
  url: string;
  tags: string;
  nome: string;
  email: string;
  aceite: boolean;
}

const initialForm: FormData = {
  tipo: "",
  titulo: "",
  descricao: "",
  url: "",
  tags: "",
  nome: "",
  email: "",
  aceite: false,
};

export default function SubmeterConteudo() {
  const [form, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.tipo) newErrors.tipo = "Selecione o tipo de conteúdo.";
    if (!form.titulo.trim()) newErrors.titulo = "O título é obrigatório.";
    else if (form.titulo.length < 10) newErrors.titulo = "O título deve ter pelo menos 10 caracteres.";
    if (!form.descricao.trim()) newErrors.descricao = "A descrição é obrigatória.";
    else if (form.descricao.length < 50) newErrors.descricao = "A descrição deve ter pelo menos 50 caracteres.";
    if (!form.nome.trim()) newErrors.nome = "Seu nome é obrigatório.";
    if (!form.email.trim()) newErrors.email = "Seu e-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "E-mail inválido.";
    if (!form.aceite) newErrors.aceite = "Você precisa aceitar os termos para submeter.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-2.5 rounded-lg border text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
      errors[field] ? "border-destructive focus:ring-destructive" : "border-border focus:border-primary"
    }`;

  if (submitted) {
    return (
      <main id="main-content" className="container-site py-16">
        <div className="max-w-xl mx-auto text-center py-12">
          <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "hsl(var(--success))" }} aria-hidden />
          <h1 className="text-2xl font-bold text-foreground mb-3">Submissão recebida!</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Obrigado pela contribuição, <strong>{form.nome}</strong>! Sua submissão será analisada pela equipe editorial do a11yBR. O processo de revisão leva até <strong>7 dias úteis</strong>. Você receberá um e-mail em <strong>{form.email}</strong> com a decisão.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground no-underline"
            style={{ background: "hsl(var(--primary))" }}
          >
            Voltar à página inicial
          </a>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Submeter conteúdo" }]} />
          <h1 className="mt-4 mb-2">Submeter conteúdo</h1>
          <p className="text-muted-foreground text-lg">
            Contribua com a comunidade enviando artigos, tutoriais, projetos, recursos e mais.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
              {/* Section: Content type */}
              <fieldset className="border border-border rounded-xl p-6">
                <legend className="px-2 text-sm font-bold text-foreground">
                  Tipo de conteúdo <span aria-hidden className="text-destructive">*</span>
                </legend>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {contentTypes.map(({ value, label }) => (
                    <label
                      key={value}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                        form.tipo === value
                          ? "border-primary bg-primary-light text-primary"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipo"
                        value={value}
                        checked={form.tipo === value}
                        onChange={(e) => handleChange("tipo", e.target.value)}
                        className="accent-primary"
                      />
                      <span className="text-sm font-medium">{label}</span>
                    </label>
                  ))}
                </div>
                {errors.tipo && (
                  <p className="mt-2 text-xs text-destructive flex items-center gap-1" role="alert">
                    <AlertCircle size={12} aria-hidden /> {errors.tipo}
                  </p>
                )}
              </fieldset>

              {/* Section: Content details */}
              <fieldset className="border border-border rounded-xl p-6">
                <legend className="px-2 text-sm font-bold text-foreground">Detalhes do conteúdo</legend>
                <div className="mt-3 flex flex-col gap-5">
                  {/* Title */}
                  <div>
                    <label htmlFor="titulo" className="block text-sm font-semibold text-foreground mb-1.5">
                      Título <span aria-hidden className="text-destructive">*</span>
                    </label>
                    <input
                      id="titulo"
                      type="text"
                      value={form.titulo}
                      onChange={(e) => handleChange("titulo", e.target.value)}
                      placeholder="Título claro e descritivo"
                      aria-required="true"
                      aria-describedby={errors.titulo ? "titulo-error" : undefined}
                      className={inputClass("titulo")}
                    />
                    {errors.titulo && (
                      <p id="titulo-error" className="mt-1.5 text-xs text-destructive flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden /> {errors.titulo}
                      </p>
                    )}
                  </div>

                  {/* URL */}
                  <div>
                    <label htmlFor="url" className="block text-sm font-semibold text-foreground mb-1.5">
                      URL do conteúdo
                    </label>
                    <input
                      id="url"
                      type="url"
                      value={form.url}
                      onChange={(e) => handleChange("url", e.target.value)}
                      placeholder="https://exemplo.com/seu-artigo"
                      className={inputClass("url")}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Link para o conteúdo externo, repositório ou página.
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="descricao" className="block text-sm font-semibold text-foreground mb-1.5">
                      Descrição / Resumo <span aria-hidden className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="descricao"
                      rows={5}
                      value={form.descricao}
                      onChange={(e) => handleChange("descricao", e.target.value)}
                      placeholder="Descreva o conteúdo, seu objetivo e para quem é destinado. Mínimo de 50 caracteres."
                      aria-required="true"
                      aria-describedby={errors.descricao ? "descricao-error" : "descricao-hint"}
                      className={inputClass("descricao")}
                    />
                    <p id="descricao-hint" className="mt-1 text-xs text-muted-foreground">
                      {form.descricao.length}/50 caracteres mínimos
                    </p>
                    {errors.descricao && (
                      <p id="descricao-error" className="mt-1 text-xs text-destructive flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden /> {errors.descricao}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  <div>
                    <label htmlFor="tags" className="block text-sm font-semibold text-foreground mb-1.5">
                      Tags
                    </label>
                    <input
                      id="tags"
                      type="text"
                      value={form.tags}
                      onChange={(e) => handleChange("tags", e.target.value)}
                      placeholder="WCAG, ARIA, React, Libras (separadas por vírgula)"
                      className={inputClass("tags")}
                    />
                  </div>
                </div>
              </fieldset>

              {/* Section: Author */}
              <fieldset className="border border-border rounded-xl p-6">
                <legend className="px-2 text-sm font-bold text-foreground">Quem está submetendo</legend>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-foreground mb-1.5">
                      Nome <span aria-hidden className="text-destructive">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      value={form.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      placeholder="Seu nome completo"
                      aria-required="true"
                      className={inputClass("nome")}
                    />
                    {errors.nome && (
                      <p className="mt-1.5 text-xs text-destructive flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden /> {errors.nome}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
                      E-mail <span aria-hidden className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      aria-required="true"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-destructive flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              {/* Terms */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.aceite}
                    onChange={(e) => handleChange("aceite", e.target.checked)}
                    className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0"
                    aria-required="true"
                  />
                  <span className="text-sm text-foreground leading-relaxed">
                    Confirmo que tenho os direitos necessários sobre este conteúdo e aceito que ele seja publicado sob licença{" "}
                    <a href="#" className="text-primary hover:underline">Creative Commons CC BY 4.0</a>.
                    Também concordo com a{" "}
                    <a href="/sobre#privacidade" className="text-primary hover:underline">política de privacidade</a>.
                  </span>
                </label>
                {errors.aceite && (
                  <p className="mt-1.5 text-xs text-destructive flex items-center gap-1 ml-7" role="alert">
                    <AlertCircle size={12} aria-hidden /> {errors.aceite}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-primary-foreground transition-colors self-start"
                style={{ background: "hsl(var(--primary))" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary-hover))"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary))"; }}
              >
                Enviar submissão
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside aria-label="Informações sobre o processo de revisão">
            <div className="sticky top-24 flex flex-col gap-5">
              <div className="p-5 rounded-xl border border-border bg-card">
                <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <Info size={15} className="text-primary" aria-hidden />
                  Processo de revisão
                </h2>
                <ol className="flex flex-col gap-2 text-sm text-muted-foreground list-none p-0 m-0">
                  {[
                    "Submissão recebida pela equipe editorial",
                    "Análise de qualidade e relevância (até 7 dias úteis)",
                    "Feedback por e-mail com aprovação ou sugestões",
                    "Publicação no a11yBR após aprovação",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground mt-0.5"
                        style={{ background: "hsl(var(--primary))" }}
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div
                className="p-5 rounded-xl border"
                style={{ borderColor: "hsl(var(--primary) / 0.3)", background: "hsl(var(--primary-light))" }}
              >
                <h2 className="text-sm font-bold text-primary mb-2">O que aceitamos</h2>
                <ul className="text-sm text-foreground flex flex-col gap-1.5 list-none p-0 m-0">
                  {[
                    "Artigos técnicos e de opinião",
                    "Tutoriais práticos",
                    "Projetos open source",
                    "Livros, cursos e ferramentas",
                    "Eventos da comunidade",
                    "Perfis profissionais",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
