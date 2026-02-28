import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ContentCard } from "@/components/cards/ContentCard";

interface Props {
  categoria: string;
}

export default function ListaConteudo({ categoria }: Props) {
  const [dados, setDados] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("contents")
        .select("*")
        .eq("type", categoria)
        .eq("status", "approved");

      if (!error) setDados(data || []);

      setLoading(false);
    };

    fetchData();
  }, [categoria]);

  if (loading) return <p>Carregando...</p>;

  if (!dados.length) return <p>Nenhum conteúdo encontrado.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dados.map((item) => (
        <ContentCard
          key={item.id}
          title={item.title}
          excerpt={item.description}
          type={item.type}
          href={item.url}
          author={item.author_name}
        />
      ))}
    </div>
  );
}