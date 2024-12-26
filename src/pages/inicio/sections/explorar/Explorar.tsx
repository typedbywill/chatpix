import React from 'react'
import { PiCheck, PiCheckBold, PiDotsThreeOutlineVerticalFill, PiDotsThreeVertical, PiDotsThreeVerticalFill, PiPaperPlaneTilt, PiSealCheckFill, PiSealFill } from 'react-icons/pi';

function Explorar() {
  return (
    <div className="flex flex-col gap-8 w-full h-full overflow-auto">

      <Publicacoes />

    </div>
  )
}

export default Explorar

type Conteudo = {
  tipo: 'texto' | 'imagem';
  texto?: string;
  url?: string;
}

type Usuario = {
  id: number;
  nome: string;
  foto: string;
  verificado: boolean;
}

type Publicacao = {
  id: number;
  usuario: Usuario;
  conteudos: Conteudo[];
  patrocinado: boolean;
}

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
      { tipo: 'texto', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
      { tipo: 'imagem', url: 'https://loremflickr.com/200/200?random=1', },
    ],
    patrocinado: false,
  }
] as Publicacao[]

function Publicacoes() {
  return (
    <div className="flex flex-col">

      {publicacoes.map((publicacao) => (
        <Publicacao key={publicacao.id} publicacao={publicacao} />
      ))}

    </div>
  )
}

function Publicacao({ publicacao }: { publicacao: Publicacao }) {
  return (
    <div className="flex flex-col gap-4 py-4 px-4">

      <Usuario usuario={publicacao.usuario} />

      <Conteudos conteudos={publicacao.conteudos} />

    </div>
  )
}

function Usuario({ usuario }: { usuario: Usuario }) {
  return (
    <div className="flex gap-4 items-center justify-between w-full">

      <div className="flex items-center gap-4">
        <div className="flex relative w-12 h-12 rounded-full bg-emerald-500 dark:bg-zinc-900 items-center justify-center ring-2 ring-emerald-500 ring-offset-2 ring-offset-zinc-100 dark:ring-offset-zinc-900">

          <img
            src={usuario.foto}
            alt={usuario.nome}
            className="rounded-full"
          />

          {usuario.verificado && (
            <div className="absolute -bottom-1 -right-1 text-xl flex items-center justify-center">
              <PiSealFill className="text-emerald-500" />
              <PiCheckBold className="text-white dark:text-emerald-900 absolute text-[10px]" />
            </div>
          )}

        </div>

        <div className="flex flex-col">

          <h1 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">{usuario.nome}</h1>

          <span className='text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1'>
            Web Designer
          </span>

        </div>
      </div>

      <div className="flex items-center justify-center gap-2">

        <button className="flex items-center justify-center p-2 rounded-md text-emerald-500 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950 transition-colors gap-2">
          <PiPaperPlaneTilt />
          <span>Conversar</span>
        </button>

        <PiDotsThreeOutlineVerticalFill className="text-zinc-500 dark:text-zinc-400" />

      </div>

    </div>

  )
}

function Conteudos({ conteudos }: { conteudos: Conteudo[] }) {

  const [TextContent, ImageContent] = [
    conteudos.filter((conteudo) => conteudo.tipo === 'texto'),
    conteudos.filter((conteudo) => conteudo.tipo === 'imagem')
  ]

  return (
    <div className="flex flex-col gap-2">

      {TextContent.map((conteudo, index) => (
        <p key={index} className="text-sm text-zinc-700 dark:text-zinc-300">{conteudo.texto}</p>
      ))}

      <div className="gap-2 flex overflow-x-auto scrollbar-hide pb-2">

        {ImageContent.map((conteudo, index) => (
          <img key={index} src={conteudo.url} className="rounded-lg" />
        ))}

      </div>

    </div>
  )
}
