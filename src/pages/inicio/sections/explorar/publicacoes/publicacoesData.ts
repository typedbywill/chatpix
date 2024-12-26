import { Publicacao } from './types';

const publicacoes = [
  {
    id: 1,
    usuario: {
      id: 1,
      nome: 'João Silva',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
      verificado: true,
    },
    conteudos: [
      { tipo: 'texto', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1' },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=2' },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=3' },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=4' },
    ],
    patrocinado: false,
  },
  ...Array.from({ length: 20 }, (_, index) => ({
    id: index + 2,
    usuario: {
      id: index + 2,
      nome: `Usuário ${index + 2}`,
      foto: `https://randomuser.me/api/portraits/men/${index + 2}.jpg`,
      verificado: index % 2 === 0,
    },
    conteudos: [
      { tipo: 'texto', texto: `Publicação ${index + 2}: Texto exemplo para testes.` },
      { tipo: 'imagem', url: `https://loremflickr.com/200/200?random=${index + 2}` },
      { tipo: 'imagem', url: `https://loremflickr.com/200/200?random=${index + 22}` },
    ],
    patrocinado: index % 5 === 0,
  })),
] as Publicacao[];

export default publicacoes;
