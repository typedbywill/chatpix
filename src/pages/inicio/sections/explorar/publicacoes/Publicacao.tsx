import React from 'react';
import { Publicacao as PublicacaoType } from './types';
import Conteudos from './Conteudos';
import Usuario from './Usuario';

function Publicacao({ publicacao }: { publicacao: PublicacaoType }) {
  return (
    <div className="flex flex-col gap-4 py-4 px-4">
      <Usuario usuario={publicacao.usuario} />
      <Conteudos conteudos={publicacao.conteudos} />
    </div>
  );
}

export default Publicacao;