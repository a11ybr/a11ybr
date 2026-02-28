import { FormState } from "./types";

type Props = {
    form: FormState;
    onChange: (field: keyof FormState, value: any) => void;
};

export function SubmitterFields({ form, onChange }: Props) {
    return (
        <fieldset className="space-y-4">
            <legend className="text-sm font-bold">
                Quem está submetendo?
            </legend>

            <input
                type="text"
                className="input-base"
                placeholder="Nome"
                value={form.nome}
                onChange={(e) => onChange("nome", e.target.value)}
                required
            />

            <input
                type="email"
                className="input-base"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => onChange("email", e.target.value)}
                required
            />

            <label className="flex items-start gap-3 text-sm">
                <input
                    type="checkbox"
                    checked={form.aceite}
                    onChange={(e) => onChange("aceite", e.target.checked)}
                    className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0"
                />
                <span className="text-sm text-foreground leading-relaxed">
                    Confirmo que tenho os direitos necessários sobre este conteúdo e aceito que ele seja publicado sob licença{" "}
                    <a href="#" className="text-primary hover:underline">Creative Commons CC BY 4.0</a>.
                    Também concordo com a{" "}
                    <a href="/sobre#privacidade" className="text-primary hover:underline">política de privacidade</a>.
                </span>
            </label>
        </fieldset>
    );
}