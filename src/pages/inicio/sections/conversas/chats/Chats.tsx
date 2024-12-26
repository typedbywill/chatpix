import clsx from "clsx";
import { useState } from "react";
import { PiMagnifyingGlass, PiSealCheckFill, PiXCircle } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Chats() {
  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      <ChatsHeader />
      <ChatsBody />
    </div>
  );
}

function ChatsHeader() {

  const [search, setSearch] = useState('');

  return (
    <div className='flex w-full items-center justify-between px-4 py-2'>
      <div className="relative flex items-center justify-center w-full">

        <input
          type='text'
          placeholder='Pesquisar conversas'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full px-10 py-2 bg-gray-100 dark:bg-zinc-900 rounded-full focus:outline-none caret-emerald-500'
        />

        <PiMagnifyingGlass className='absolute left-3 text-gray-400 dark:text-gray-500 text-2xl' />

        <PiXCircle
          className={clsx('absolute right-3 text-gray-400 dark:text-gray-500 text-2xl cursor-pointer transition-all bg-gray-100 dark:bg-zinc-900',
            search.length === 0 ? 'opacity-0' : 'opacity-100'
          )}
          onClick={() => setSearch('')}
        />

      </div>
    </div>
  );
}

function ChatsBody() {
  
  const chats = [
    { id: 1, name: "João Silva", message: "Oi, tudo bem?", time: "10:30", avatar: "https://randomuser.me/api/portraits/men/1.jpg", tempoRestante: 0, online: true, verificado: true },
    { id: 2, name: "Maria Souza", message: "Enviou uma foto", time: "09:45", avatar: "https://randomuser.me/api/portraits/women/2.jpg", tempoRestante: 1, online: false, verificado: false },
    { id: 3, name: "Carlos Lima", message: "Até mais tarde", time: "08:15", avatar: "https://randomuser.me/api/portraits/men/3.jpg", tempoRestante: 4, online: true, verificado: true },
    { id: 4, name: "Ana Paula", message: "Vou confirmar e te aviso o quanto antes!", time: "Ontem", avatar: "https://randomuser.me/api/portraits/women/4.jpg", tempoRestante: 1, online: false, verificado: false },
  ];

  return (
    <div className='flex flex-col w-full overflow-y-auto'>

      {chats.map(({ id, name, message, time, avatar, tempoRestante, online, verificado }) => (
        <Link
          to={`/inicio/conversas/${id}`}
          key={id}
          className='flex items-center p-4 border-b border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 cursor-pointer transition-all'
        >

          <div className={clsx('min-w-12 min-h-12 rounded-full flex-shrink-0 mr-4 transition-all relative')}>

            <img
              src={avatar}
              alt={name}
              className='w-12 h-12 rounded-xl object-cover'
            />

            {online && (
              <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-500 dark:bg-green-500 rounded-full shadow-sm'></div>
            )}

          </div>

          <div className="flex w-full items-center justify-between overflow-x-hidden">

            <div className='flex flex-col flex-grow overflow-hidden'>

              <span className='font-medium text-gray-900 dark:text-white text-ellipsis whitespace-nowrap overflow-hidden'>
                {verificado && <PiSealCheckFill className='text-green-500 inline mr-1' />}
                {name}
              </span>

              <span className='text-sm text-gray-500 dark:text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden'>{message}</span>

            </div>

            <div className="flex flex-col items-end justify-between text-right gap-1">

              <span className='text-xs text-gray-400 dark:text-gray-500'>{time}</span>

              <span
                className={clsx(
                  'flex items-center justify-center rounded-full text-xs px-2 py-1 text-nowrap',
                  tempoRestante > 0 ? 'dark:bg-emerald-900 bg-emerald-200 text-emerald-900 dark:text-emerald-200' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                )}
              >
                {tempoRestante > 0 ? `${tempoRestante}m restante` : 'Expirado'}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}