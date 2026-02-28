import { FormState } from "./types";

type Props = {
  form: FormState;
  onChange: (field: keyof FormState, value: any) => void;
};
const contentTypes = [
  {
    value: "sites",
    title: "Sites e Sistemas",
    description: "Plataformas e sistemas web acessíveis",
  },
  {
    value: "podcasts",
    title: "Podcasts",
    description: "Programas de áudio sobre acessibilidade",
  },
  {
    value: "cursos",
    title: "Cursos e Materiais",
    description: "Recursos educacionais e formativos",
  },
  {
    value: "comunidades",
    title: "Comunidades",
    description: "Grupos e coletivos digitais",
  },
  {
    value: "eventos",
    title: "Eventos",
    description: "Conferências e encontros",
  },
  {
    value: "ferramentas",
    title: "Ferramentas",
    description: "Softwares e soluções técnicas",
  },
  {
    value: "artigos",
    title: "Artigos",
    description: "Publicações sobre acessibilidade",
  },
  {
    value: "youtube",
    title: "Canais do YouTube",
    description: "Conteúdo em vídeo",
  },
];
export function BaseFields({ form, onChange }: Props) {
  return (
    <div className="space-y-8">
      {/* Tipo */}
      <div className="space-y-2">
        <fieldset className="space-y-4">
          <legend><h2 className="block text-lg font-bold">Tipo de conteúdo</h2></legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contentTypes.map((type) => {
              const isSelected = form.tipo === type.value;

              return (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => onChange("tipo", type.value)}
                  className={`
            text-left p-4 rounded-lg border transition-all
            ${isSelected
                      ? "border-primary bg-primary/10 ring-2 ring-primary"
                      : "border-border hover:border-primary/50"
                    }
          `}
                >
                  <div className="font-semibold">
                    {type.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {type.description}
                  </div>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>
      <fieldset className="space-y-4">
        <legend><h2 className="block text-lg font-bold">Informações gerais</h2></legend>
        {/* Titulo */}
        <div className="space-y-2">
          <label htmlFor="content-title" className="block text-sm font-medium">
            Título do conteúdo<span aria-hidden="true" className="text-destructive">*</span>
          </label>

          <input
            id="content-title"
            type="text"
            className="input-base"
            placeholder="Título"
            value={form.titulo}
            onChange={(e) => onChange("titulo", e.target.value)}
            required
          />
        </div>

        {/* URL */}
        <div className="space-y-2">
          <label htmlFor="content-url" className="block text-sm font-medium">
            Link do conteúdo<span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="content-url"
            type="url"
            className="input-base"
            placeholder="https://..."
            value={form.url}
            onChange={(e) => onChange("url", e.target.value)}
            required
          /><p className="mt-1 text-xs text-muted-foreground">Link para o conteúdo externo, repositório ou página.</p>
        </div>

        {/* Deescrição */}
        <div className="space-y-2">
          <label htmlFor="content-description" className="block text-sm font-medium">
            Descrição<span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <textarea
            id="content-description"
            className="input-base"
            rows={5}
            minLength={50}
            placeholder="Descrição detalhada"
            value={form.descricao}
            onChange={(e) => onChange("descricao", e.target.value)}
            required
          />
          <p className="mt-1 text-xs text-muted-foreground">{form.descricao.length}/50 caracteres mínimos</p>

        </div>

        {/* Profundidade */}
        <div className="space-y-2">
          <span className="block text-sm font-medium">
            Nível de profundidade
            <span aria-hidden="true" className="text-destructive">*</span>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                value: "intro",
                title: "Introdutório",
                description: "Conceitos básicos e visão geral",
              },
              {
                value: "intermediario",
                title: "Intermediário",
                description: "Aplicação prática e aprofundamento",
              },
              {
                value: "avancado",
                title: "Avançado",
                description: "Discussões técnicas e estratégicas",
              },
            ].map((option) => {
              const isSelected = form.nivel === option.value;

              return (
                <label
                  key={option.value}
                  className={`
            cursor-pointer rounded-lg border p-4 transition-all
            ${isSelected
                      ? "border-primary bg-primary/10 ring-2 ring-primary"
                      : "border-border hover:border-primary/50"
                    }
          `}
                >
                  <input
                    type="radio"
                    name="nivel"
                    value={option.value}
                    checked={isSelected}
                    onChange={(e) => onChange("nivel", e.target.value)}
                    className="sr-only"
                    required
                  />

                  <div className="font-semibold">
                    {option.title}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {option.description}
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </fieldset>
    </div >
  );
}