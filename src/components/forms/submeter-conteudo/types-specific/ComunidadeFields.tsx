import { FormState } from "../types";

type Props = {
  form: FormState;
  onChange: (field: keyof FormState, value: any) => void;
};

export function ComunidadeFields({ form, onChange }: Props) {
  return (
    <fieldset className="border rounded-xl p-6 space-y-4">
      <legend className="text-sm font-bold">Comunidade</legend>

      <select
        className="input-base"
        value={form.plataforma || ""}
        onChange={(e) => onChange("plataforma", e.target.value)}
        required
      >
        <option value="">Plataforma</option>
        <option value="discord">Discord</option>
        <option value="slack">Slack</option>
        <option value="whatsapp">WhatsApp</option>
        <option value="telegram">Telegram</option>
        <option value="linkedin">LinkedIn</option>
      </select>

      <select
        className="input-base"
        value={form.acesso || ""}
        onChange={(e) => onChange("acesso", e.target.value)}
        required
      >
        <option value="">Tipo de acesso</option>
        <option value="aberto">Aberto</option>
        <option value="convite">Mediante convite</option>
      </select>
    </fieldset>
  );
}