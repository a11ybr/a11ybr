import { FormState } from "../types";

type Props = {
  form: FormState;
  onChange: (field: keyof FormState, value: any) => void;
};

export function PodcastFields({ form, onChange }: Props) {
  const options = [
    { value: "entrevista", label: "Entrevista" },
    { value: "mesa-redonda", label: "Mesa-redonda" },
    { value: "solo", label: "Solo" },
    { value: "tecnico", label: "Técnico" },
    { value: "storytelling", label: "Storytelling" },
    { value: "outro", label: "Outro" },
  ];

  return (
    <fieldset className="space-y-6">
      <legend className="block text-lg font-medium">
        Detalhes dos Podcasts
      </legend>

      {/* Tema */}
      <div className="space-y-2">
        <label htmlFor="content-theme" className="block text-sm font-medium">
          Tema principal
          <span aria-hidden="true" className="text-destructive">*</span>
        </label>

        <input
          id="content-theme"
          type="text"
          className="input-base"
          placeholder="Ex: Acessibilidade em aplicativos mobile bancários"
          value={form.tema || ""}
          onChange={(e) => onChange("tema", e.target.value)}
          required
        />

        <p className="text-xs text-muted-foreground">
          Descreva o foco central do episódio ou programa. Seja específico.
        </p>
      </div>

      {/* Formato */}
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="block text-sm font-medium">
            Formato
            <span aria-hidden="true" className="text-destructive">*</span>
          </span>

          <p className="text-xs text-muted-foreground">
            Você pode selecionar mais de um formato.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {options.map((option) => {
            const isChecked =
              form.formato?.includes(option.value) || false;

            return (
              <div key={option.value} className="flex flex-row pl-2 text-sm gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={isChecked}
                    onChange={(e) => {
                      const current = form.formato || [];

                      const updated = e.target.checked
                        ? [...current, option.value]
                        : current.filter(
                          (f) => f !== option.value
                        );

                      onChange("formato", updated);
                    }}
                  />

                  <span className="block text-sm">{option.label}</span>
                </label>

                {option.value === "outro" && isChecked && (
                  <input
                    type="text"
                    className="input-base"
                    placeholder="Descreva o formato"
                    value={form.formatoOutro || ""}
                    onChange={(e) =>
                      onChange("formatoOutro", e.target.value)
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </fieldset>
  );
}