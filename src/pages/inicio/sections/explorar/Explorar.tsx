import React from 'react'
import Publicacoes from './publicacoes/Publicacoes';

function Explorar() {
  return (
    <div className="flex flex-col gap-8 w-full h-full overflow-auto scrollbar-hide">

      <Publicacoes />

    </div>
  )
}

export default Explorar
