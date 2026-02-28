type Props = {
  filters: any;
  setFilters: React.Dispatch<any>;
};

export default function SidebarFiltros({ filters, setFilters }: Props) {
  const toggle = (key: "status" | "types", value: string) => {
    setFilters((prev: any) => {
      const current = prev[key];
      return {
        ...prev,
        [key]: current.includes(value)
          ? current.filter((v: string) => v !== value)
          : [...current, value]
      };
    });
  };

  return (
    <aside className="space-y-8">

      {/* Busca */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Buscar
        </label>
        <input
          type="text"
          value={filters.search}
          onChange={(e) =>
            setFilters((prev: any) => ({
              ...prev,
              search: e.target.value
            }))
          }
          placeholder="Buscar por nome..."
          className="input-base"
        />
      </div>

      {/* Ordenação */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Ordenar por
        </label>
        <select
          value={filters.sort}
          onChange={(e) =>
            setFilters((prev: any) => ({
              ...prev,
              sort: e.target.value
            }))
          }
          className="input-base"
        >
          <option value="recent">Mais recentes</option>
          <option value="alphabetical">Ordem alfabética</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Status</h3>
        {["ativo", "pausado", "descontinuado"].map((s) => (
          <label key={s} className="flex gap-2 items-center mb-2">
            <input
              type="checkbox"
              checked={filters.status.includes(s)}
              onChange={() => toggle("status", s)}
            />
            <span className="text-sm capitalize">{s}</span>
          </label>
        ))}
      </div>

      {/* Tipo */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Tipo</h3>
        {[
          "site",
          "sistema",
          "podcast",
          "youtube",
          "curso",
          "material",
          "comunidade",
          "evento"
        ].map((t) => (
          <label key={t} className="flex gap-2 items-center mb-2">
            <input
              type="checkbox"
              checked={filters.types.includes(t)}
              onChange={() => toggle("types", t)}
            />
            <span className="text-sm capitalize">{t}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}