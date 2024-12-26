import React from 'react';
import { Conteudo } from './types';

function Conteudos({ conteudos }: { conteudos: Conteudo[] }) {
  const [TextContent, ImageContent] = [
    conteudos.filter((conteudo) => conteudo.tipo === 'texto'),
    conteudos.filter((conteudo) => conteudo.tipo === 'imagem')
  ];

  return (
    <div className="flex flex-col gap-2">

      {TextContent.map((conteudo, index) => (
        <p key={index} className="text-sm text-zinc-700 dark:text-zinc-300">{conteudo.texto}</p>
      ))}

      <div className="gap-2 flex overflow-x-auto pb-2">
        {ImageContent.map((conteudo, index) => (
          <img key={index} src={conteudo.url} className="rounded-lg" />
        ))}
      </div>

    </div>
  );
}

export default Conteudos;