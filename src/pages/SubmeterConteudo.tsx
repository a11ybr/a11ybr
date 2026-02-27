import {

  useState
} from "react";

import {

  BreadcrumbNav
} from "@/components/ui/BreadcrumbNav";

import {

  Button
} from "@/components/ui/button";

import {

  ChevronRight
} from "lucide-react";

import {

  supabase
} from "@/lib/supabase";

type FormState = {

  tipo: string;
  titulo: string;

  url: string;

  descricao: string;

  nome: string;

  email: string;

  aceite: boolean;
};

export default function SubmeterConteudo() {

  const [form, setForm] = useState<FormState>({

    tipo: "",

    titulo: "",

    url: "",

    descricao: "",

    nome: "",

    email: "",

    aceite: false,

  });

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormState, value: string | boolean) => {

    setForm((prev) => ({
      ...prev,
      [field]: value

    }));

  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (!form.aceite) {
      alert("Você precisa aceitar os termos.");
      return;

    }

    setLoading(true);

    const payload = {
      type: form.tipo,
      title: form.titulo,
      description: form.descricao,
      url: form.url || null,
      author_name: form.nome,
      author_email: form.email,
      status: "pending",

    };

    const {
      error

    } = await supabase.from("contents").insert([payload]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Erro ao enviar conteúdo.");
      return;

    }

    setSubmitted(true);

  };

  if (submitted) {

    return (
      <main className="container-site py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Submissão recebida</h1>
        <p className="text-muted-foreground">

          Obrigado!
        </p>

      </main>

    );

  }

  return (

    <main className="container-site py-16">

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Submeter conteúdo" },]} />

      <header className="mt-8 mb-16 reading-width">
        <span className="section-label mb-4 block">Comunidade</span>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Submeter conteúdo
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Contribua com a comunidade enviando artigos, tutoriais, projetos, recursos e mais.
        </p>

      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

        <form className="space-y-14 reading-width" onSubmit={handleSubmit}>
          {/* DETALHES DO CONTEÚDO */}
          <fieldset className="border border-border rounded-xl p-6 space-y-6"> <legend className="px-2 text-sm font-bold text-foreground">
            Detalhes do conteúdo </legend>
            <div>

              <label className="block text-sm font-medium mb-1.5" htmlFor="content-type">
                Tipo de conteúdo<span aria-hidden="true" className="text-destructive">*</span>

              </label>

              <select id="content-type" className="input-base" value={form.tipo} onChange={(e) => handleChange("tipo", e.target.value)} required>
                <option value="">Selecione</option>
                <option value="artigo">Artigo</option>
                <option value="evento">Evento</option>
                <option value="projeto">Projeto</option>
                <option value="recurso">Recurso</option>
                <option value="tutorial">Tutorial</option>

              </select> </div>
            <div>

              <label className="block text-sm font-medium mb-1.5" htmlFor="content-title">
                Título<span aria-hidden="true" className="text-destructive">*</span>

              </label>

              <input type="text" id="content-title" className="input-base" placeholder="Título claro e descritivo" value={form.titulo} onChange={(e) => handleChange("titulo", e.target.value)} required /> </div>
            <div>

              <label className="block text-sm font-medium mb-1.5" htmlFor="content-url">
                URL do conteúdo<span aria-hidden="true" className="text-destructive">*</span>

              </label>

              <input placeholder="https://exemplo.com/seu-artigo" type="url" id="content-url" className="input-base" value={form.url} onChange={(e) => handleChange("url", e.target.value)} required />

              <p className="mt-1 text-xs text-muted-foreground">Link para o conteúdo externo, repositório ou página.</p> </div>
            <div>

              <label className="block text-sm font-medium mb-1.5" htmlFor="content-description">
                Descrição/ Resumo<span aria-hidden="true" className="text-destructive">*</span>

              </label>

              <textarea placeholder="Descreva o conteúdo, seu objetivo e para quem é destinado. Mínimo de 50 caracteres." id="content-description" rows={6} className="input-base resize-y" minLength={50} value={form.descricao} onChange={(e) => handleChange("descricao", e.target.value)} required />

              <p className="mt-1 text-xs text-muted-foreground">{form.descricao.length}/50 caracteres mínimos</p>
            </div>
          </fieldset>
          {/* QUEM ESTÁ SUBMETENDO */}
          <fieldset className="border border-border rounded-xl p-6 space-y-4"> <legend className="px-2 text-sm font-bold text-foreground">
            Quem está submetendo? </legend> <div
            >
              <p className="text-muted-foreground pb-4">Informação não serão compartilhadas publicamente.</p>
              <label className="block text-sm font-medium mb-1.5" htmlFor="author-name">
                Responsável pela submissão<span aria-hidden="true" className="text-destructive">*</span>

              </label>

              <input type="text" id="author-name" placeholder="Nome completo" className="input-base" value={form.nome} onChange={(e) => handleChange("nome", e.target.value)} required /> </div> <div
              >

              <label className="block text-sm font-medium mb-1.5" htmlFor="author-email">
                E-mail<span aria-hidden="true" className="text-destructive">*</span>

              </label>

              <input type="email" id="author-email" placeholder="E-mail" className="input-base" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required/></div>
          </fieldset>
          {/* TERMOS */}

          <label className="flex items-start gap-3 cursor-pointer" htmlFor="terms-acceptance">

            <input className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0" type="checkbox" checked={form.aceite} onChange={(e) => handleChange("aceite", e.target.checked)} id="terms-acceptance" />

            <span className="text-sm text-foreground leading-relaxed">
              Confirmo que tenho os direitos necessários sobre este conteúdo e aceito que ele seja publicado sob licença{" "}
              <a href="#" className="text-primary hover:underline">Creative Commons CC BY 4.0</a>.
              Também concordo com a{" "}
              <a href="/sobre#privacidade" className="text-primary hover:underline">política de privacidade</a>.
            </span> </label>

          <Button size="lg" disabled={loading}> {loading ? "Enviando..." : "Enviar submissão"} <ChevronRight size={16} className="ml-2" />
          </Button>

        </form>

        {/* SIDEBAR */}
        <aside className="space-y-14 reading-width">
          <div className="sticky top-28 space-y-8"> <div className="card-base p-6 space-y-4" >
            <h3 className="tfont-bold text-foreground mb-3 flex items-center gap-2">

              Processo de revisão
            </h3>
            <ol className="flex flex-col gap-2 text-sm text-muted-foreground list-none p-0 m-0">

              <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground mt-0.5" aria-hidden="true" style={{background: "hsl(var(--primary))"}} >1</span> Submissão recebida</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground mt-0.5" aria-hidden="true" style={{background: "hsl(var(--primary))"}} >2</span> Análise editorial (até 7 dias úteis)</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground mt-0.5" aria-hidden="true" style={{background: "hsl(var(--primary))"}} >3</span> Feedback por e-mail</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground mt-0.5" aria-hidden="true" style={{background: "hsl(var(--primary))"}} >4</span> Publicação após aprovação</li>
            </ol> </div> <div className="card-base p-6 space-y-4">

              <h3 className="font-semibold text-foreground">
                O que aceitamos

              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Artigos técnicos</li>
                <li>Tutoriais práticos</li>
                <li>Projetos open source</li>
                <li>Recursos e ferramentas</li>
                <li>Eventos</li>
                <li>Perfis profissionais</li>

              </ul> </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
