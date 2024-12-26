import React from 'react';
import Publicacao from './Publicacao';
import publicacoes from './publicacoesData';

function Publicacoes() {
  return (
    <div className="flex flex-col">
      {publicacoes.map((publicacao) => (
        <Publicacao key={publicacao.id} publicacao={publicacao} />
      ))}
    </div>
  );
}

export default Publicacoes;