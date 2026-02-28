import { FormState } from "../types";

type Props = {
  form: FormState;
  onChange: (field: keyof FormState, value: any) => void;
};

export function SitesFields({ form, onChange }: Props) {
  return (
    <fieldset className="space-y-4">
      <legend className="block text-lg font-medium">
        Detalhes dos Sites/ Sistemas
      </legend>


      <div className="space-y-2">
        <label htmlFor="content-bussines-model" className="block text-sm font-medium">
          Modelo de negócio<span aria-hidden="true" className="text-destructive">*</span>
        </label>
        <select
          className="input-base"
          id="content-bussines-model"
          value={form.modeloNegocio}
          onChange={(e) => onChange("modeloNegocio", e.target.value)}
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="saas">SaaS</option>
          <option value="ecommerce">E-commerce / Marketplace</option>
          <option value="open-source">Open source</option>
          <option value="governamental">Governamental</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="content-product-stage" className="block text-sm font-medium">
          Estágio do produto<span aria-hidden="true" className="text-destructive">*</span>
        </label>
        <select
          className="input-base"
          id="content-product-stage"
          value={form.estagioProduto}
          onChange={(e) => onChange("estagioProduto", e.target.value)}
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="mvp">MVP</option>
          <option value="crescimento">Em crescimento</option>
          <option value="estavel">Estável</option>
          <option value="legado">Legado</option>
        </select>
      </div>
      <div className="space-y-3">
        <span className="block text-sm font-medium">
          Modelo de acesso
          <span aria-hidden="true" className="text-destructive">*</span>
        </span>

        <div className="flex flex-row px-4 text-sm gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="modeloAcesso"
              value="aberto"
              checked={form.modeloAcesso === "aberto"}
              onChange={(e) => onChange("modeloAcesso", e.target.value)}
              required
            />
            <span>Aberto</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="modeloAcesso"
              value="login"
              checked={form.modeloAcesso === "login"}
              onChange={(e) => onChange("modeloAcesso", e.target.value)}
              required
            />
            <span>Login obrigatório</span>
          </label>
        </div>
      </div>
    </fieldset>
  );
}