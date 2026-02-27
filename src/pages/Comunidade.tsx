import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterChip } from "@/components/ui/FilterChip";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

const typeFilters = [
  "Todos",
  "Profissionais",
  "Empresas",
  "Intérpretes de Libras",
  "Audiodescritores",
  "Mentores",
];

const typeMap: Record<string, string> = {
  Todos: "",
  Profissionais: "professional",
  Empresas: "company",
  "Intérpretes de Libras": "interpreter",
  Audiodescritores: "audiodescriptor",
  Mentores: "mentor",
};

export default function Comunidade() {
  const [activeType, setActiveType] = useState("Todos");
  const [search, setSearch] = useState("");
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("status", "approved");

      if (error) {
        console.error("Erro ao buscar perfis:", error);
      } else {
        setProfiles(data || []);
      }

      setLoading(false);
    };

    fetchProfiles();
  }, []);

  const filtered = profiles.filter((p) => {
    const matchType =
      !typeMap[activeType] || p.profile_type === typeMap[activeType];

    const matchSearch =
      !search ||
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.bio?.toLowerCase().includes(search.toLowerCase());

    return matchType && matchSearch;
  });

  return (
    <main id="main-content">
      <div className="border-b border-border bg-card">
        <div className="container-site py-8">
          <BreadcrumbNav
            items={[{ label: "Home", href: "/" }, { label: "Comunidade" }]}
          />
          <h1 className="mt-4 mb-2">Comunidade</h1>
          <p className="text-muted-foreground text-lg">
            Diretório de profissionais e empresas em acessibilidade no Brasil.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="mb-8 flex flex-col gap-4">
          <SearchInput
            label="Pesquisar na comunidade"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-lg"
          />

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar por tipo"
          >
            {typeFilters.map((f) => (
              <FilterChip
                key={f}
                active={activeType === f}
                onClick={() => setActiveType(f)}
              >
                {f}
              </FilterChip>
            ))}
          </div>

          {!loading && (
            <p className="text-sm text-muted-foreground">
              <strong>{filtered.length}</strong> perfil
              {filtered.length !== 1 ? "is" : ""} encontrado
              {filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {loading ? (
          <div className="py-20 text-center text-muted-foreground">
            Carregando perfis...
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProfileCard
                key={p.id}
                name={p.name}
                role={p.profile_type}
                bio={p.bio}
                location={p.location}
                initials={p.name?.slice(0, 2).toUpperCase()}
                tags={[]}
                links={[]}
                type={p.profile_type}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-semibold">
              Nenhum perfil encontrado
            </p>
            <p className="text-sm mt-1">
              Tente outros filtros ou termos de busca.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}