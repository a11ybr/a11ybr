import { useState } from "react";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
type LinkItem = {
    type: string;
    url: string;
};
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
        .from("profiles")
        .insert([
            {
                name,
                role,
                bio,
                location,
                profile_type,
                contact_name,
                contact_email,
            },
        ])
        .select()
        .single();

    if (error) {
        console.error(error);
        return;
    }

    if (links.length > 0) {
        const linkPayload = links
            .filter((l) => l.url.trim() !== "")
            .map((l) => ({
                profile_id: data.id,
                link_type: l.type,
                url: l.url,
            }));

        await supabase.from("profile_links").insert(linkPayload);
    }

    alert("Perfil enviado para análise.");
};

export default function SubmeterPerfil() {
    const [links, setLinks] = useState<LinkItem[]>([
        { type: "linkedin", url: "" },
    ]);

    const handleLinkChange = (
        index: number,
        field: keyof LinkItem,
        value: string
    ) => {
        const updated = [...links];
        updated[index][field] = value;
        setLinks(updated);
    };

    const addLink = () => {
        setLinks([...links, { type: "linkedin", url: "" }]);
    };

    const removeLink = (index: number) => {
        setLinks(links.filter((_, i) => i !== index));
    };

    return (
        <main className="container-site py-16">
            <BreadcrumbNav
                items={[
                    { label: "Home", href: "/" },
                    { label: "Submeter perfil" },
                ]}
            />

            {/* Header */}
            <header className="mt-8 mb-16 reading-width">
                <span className="section-label mb-4 block">Comunidade</span>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                    Submeter perfil profissional
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Cadastre seu perfil ou de sua organização para fazer parte do
                    ecossistema a11yBR.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

                {/* FORM */}
                <form className="space-y-14 reading-width" onSubmit={handleSubmit}>

                    {/* Tipo de perfil */}
                    <section>
                        <h2 className="text-lg font-semibold mb-4 text-foreground">
                            Tipo de perfil
                        </h2>

                        <select className="input-base">
                            <option>Selecione o tipo</option>
                            <option>Profissional</option>
                            <option>Empresa</option>
                            <option>Intérprete de Libras</option>
                            <option>Audiodescritor</option>
                            <option>Mentor</option>
                        </select>
                    </section>

                    {/* Informações principais */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-semibold text-foreground">
                            Informações principais
                        </h2>

                        <input
                            type="text"
                            placeholder="Nome ou nome da organização"
                            className="input-base"
                        />

                        <input
                            type="text"
                            placeholder="Cargo / Especialidade"
                            className="input-base"
                        />

                        <textarea
                            rows={4}
                            placeholder="Bio profissional ou descrição institucional"
                            className="input-base resize-y"
                        />

                        <input
                            type="text"
                            placeholder="Localização (cidade, estado ou remoto)"
                            className="input-base"
                        />
                    </section>

                    {/* Links profissionais dinâmicos */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-semibold text-foreground">
                            Links profissionais
                        </h2>

                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="grid md:grid-cols-[180px_1fr_auto] gap-4 items-end"
                            >
                                <select
                                    className="input-base"
                                    value={link.type}
                                    onChange={(e) =>
                                        handleLinkChange(index, "type", e.target.value)
                                    }
                                >
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="site">Site</option>
                                    <option value="portfolio">Portfólio</option>
                                    <option value="github">GitHub</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="x">X</option>
                                    <option value="bluesky">Bluesky</option>
                                    <option value="mastodon">Mastodon</option>
                                </select>

                                <input
                                    type="url"
                                    placeholder="https://..."
                                    className="input-base"
                                    value={link.url}
                                    onChange={(e) =>
                                        handleLinkChange(index, "url", e.target.value)
                                    }
                                />

                                <button
                                    type="button"
                                    className="text-sm text-destructive hover:underline"
                                    onClick={() => removeLink(index)}
                                >
                                    Remover
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="text-sm text-primary hover:underline"
                            onClick={addLink}
                        >
                            + Adicionar link
                        </button>
                    </section>

                    {/* Contato */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-semibold text-foreground">
                            Contato
                        </h2>
                        <p><small className="text-muted-foreground">Essas informações não serão exibidas publicamente.</small></p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Nome do responsável"
                                className="input-base"
                            />

                            <input
                                type="email"
                                placeholder="E-mail para contato"
                                className="input-base"
                            />
                        </div>
                    </section>

                    {/* Termos */}
                    <section>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Confirmo que as informações são verdadeiras e autorizo a
                                publicação do perfil na plataforma a11yBR. Também concordo
                                com a{" "}
                                <a
                                    href="/politica-de-privacidade"
                                    className="text-primary underline"
                                >
                                    política de privacidade
                                </a>.
                            </p>
                        </div>
                    </section>

                    <div>
                        <Button size="lg">
                            Enviar perfil
                            <ChevronRight size={16} className="ml-2" />
                        </Button>
                    </div>
                </form>

                {/* SIDEBAR */}
                <aside className="hidden lg:block">
                    <div className="sticky top-28 space-y-8">

                        <div className="card-base p-6 space-y-4">
                            <h3 className="font-semibold text-foreground">
                                Processo de validação
                            </h3>
                            <ol className="space-y-3 text-sm text-muted-foreground">
                                <li>1. Envio do perfil</li>
                                <li>2. Verificação das informações</li>
                                <li>3. Contato se necessário</li>
                                <li>4. Publicação no diretório</li>
                            </ol>
                        </div>

                        <div className="card-base p-6 space-y-4">
                            <h3 className="font-semibold text-foreground">
                                Critérios
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Atuação real em acessibilidade</li>
                                <li>Informações verificáveis</li>
                                <li>Links válidos</li>
                                <li>Alinhamento com a comunidade</li>
                            </ul>
                        </div>

                    </div>
                </aside>

            </div>
        </main>
    );
}