import { FormState } from "../types";

type Props = {
  form: FormState;
  onChange: (field: keyof FormState, value: any) => void;
};

export function FerramentaFields({ form, onChange }: Props) {
  return (
    <fieldset className="border rounded-xl p-6 space-y-4">
      <legend className="text-sm font-bold">Ferramenta</legend>

      <select
        className="input-base"
        value={form.tipoFerramenta || ""}
        onChange={(e) => onChange("tipoFerramenta", e.target.value)}
        required
      >
        <option value="">Tipo de ferramenta</option>
        <option value="auditoria">Auditoria automática</option>
        <option value="manual">Teste manual</option>
        <option value="contraste">Contraste</option>
        <option value="design-system">Design system</option>
        <option value="plugin">Plugin</option>
      </select>

      <select
        className="input-base"
        value={form.modeloFerramenta || ""}
        onChange={(e) => onChange("modeloFerramenta", e.target.value)}
        required
      >
        <option value="">Modelo</option>
        <option value="open-source">Open source</option>
        <option value="freemium">Freemium</option>
        <option value="pago">Pago</option>
      </select>
    </fieldset>
  );
}