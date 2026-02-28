import { FormState } from "../types";

type Props = {
  form: FormState;
  onChange: (field: keyof FormState, value: any) => void;
};

export function ArtigoFields({ form, onChange }: Props) {
  return (
    <fieldset className="border rounded-xl p-6 space-y-4">
      <legend className="text-sm font-bold">Artigo</legend>

      <input
        type="text"
        className="input-base"
        placeholder="Autoria"
        value={form.autoria || ""}
        onChange={(e) => onChange("autoria", e.target.value)}
        required
      />

      <select
        className="input-base"
        value={form.tipoArtigo || ""}
        onChange={(e) => onChange("tipoArtigo", e.target.value)}
        required
      >
        <option value="">Tipo de artigo</option>
        <option value="tecnico">Técnico</option>
        <option value="opinativo">Opinativo</option>
        <option value="estudo-caso">Estudo de caso</option>
        <option value="academico">Acadêmico</option>
      </select>
    </fieldset>
  );
}