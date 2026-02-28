export type FormState = {
    tipo: string;
    titulo: string;
    url: string;
    descricao: string;

    pais: string;
    ano: string;
    publicoAlvo: string[];
    nivel: string;

    imagem: File | null;
    imagemAlt: string;

    // Sites
    modeloNegocio?: string;
    estagioProduto?: string;
    modeloAcesso?: string;

    // Podcasts
    tema?: string;
    formato: string[]
    formatoOutro?: string

    // Cursos
    modalidade?: string;
    gratuitoPago?: string;

    // Comunidades
    plataforma?: string;
    acesso?: string;

    // Eventos
    tipoEvento?: string;
    categoriaEvento?: string;

    // Ferramentas
    tipoFerramenta?: string;
    modeloFerramenta?: string;

    // Artigos
    autoria?: string;
    tipoArtigo?: string;

    // YouTube
    focoCanal?: string;
    tipoConteudoYT?: string;

    nome: string;
    email: string;
    aceite: boolean;
};