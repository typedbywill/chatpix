import React from 'react';
import { PiCheckBold, PiSealFill, PiPaperPlaneTilt, PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { Usuario as UsuarioType } from './types';

function Usuario({ usuario }: { usuario: UsuarioType }) {
  return (
    <div className="flex gap-4 items-center justify-between w-full">
      <div className="flex items-center gap-4">

        <div className="flex relative w-8 h-8 rounded-full bg-emerald-500 dark:bg-zinc-900 items-center justify-center ring-2 ring-emerald-500 ring-offset-2 ring-offset-zinc-100 dark:ring-offset-zinc-900">

          <img src={usuario.foto} alt={usuario.nome} className="rounded-full" />

          {usuario.verificado && (
            <div className="absolute -bottom-1 -right-1 flex items-center justify-center">
              <PiSealFill className="text-emerald-500" />
              <PiCheckBold className="text-white dark:text-emerald-900 absolute text-[6px]" />
            </div>
          )}

        </div>
        
        <div className="flex flex-col">

          <h1 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">{usuario.nome}</h1>

          <span className='text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1'>Web Designer</span>

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
  );
}

export default Usuario;