import { FormState } from "../types";

type Props = {
  form: FormState;
  onChange: (field: keyof FormState, value: any) => void;
};

export function CursoFields({ form, onChange }: Props) {
  return (
    <fieldset className="border rounded-xl p-6 space-y-4">
      <legend className="text-sm font-bold">Curso ou material</legend>

      <select
        className="input-base"
        value={form.modalidade || ""}
        onChange={(e) => onChange("modalidade", e.target.value)}
        required
      >
        <option value="">Modalidade</option>
        <option value="online">Online</option>
        <option value="presencial">Presencial</option>
        <option value="hibrido">Híbrido</option>
      </select>

      <select
        className="input-base"
        value={form.gratuitoPago || ""}
        onChange={(e) => onChange("gratuitoPago", e.target.value)}
        required
      >
        <option value="">Gratuito ou pago</option>
        <option value="gratuito">Gratuito</option>
        <option value="pago">Pago</option>
      </select>
    </fieldset>
  );
}