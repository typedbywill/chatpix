export type Conteudo = {
  tipo: 'texto' | 'imagem';
  texto?: string;
  url?: string;
}

export type Usuario = {
  id: number;
  nome: string;
  foto: string;
  verificado: boolean;
}

export type Publicacao = {
  id: number;
  usuario: Usuario;
  conteudos: Conteudo[];
  patrocinado: boolean;
}