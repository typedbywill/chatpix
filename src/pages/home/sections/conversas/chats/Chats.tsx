import clsx from "clsx";
import { PiMagnifyingGlass } from "react-icons/pi";

export default function Chats() {
  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      <ChatsHeader />
      <ChatsBody />
    </div>
  );
}

function ChatsHeader() {
  return (
    <div className='flex w-full items-center justify-between p-4'>
      <div className="relative flex items-center justify-center w-full">
        <input
          type='text'
          placeholder='Pesquisar conversas'
          className='w-full h-12 pl-12 px-4 bg-gray-100 dark:bg-zinc-900 rounded-full focus:outline-none'
        />
        <PiMagnifyingGlass className='absolute left-4 text-gray-400 dark:text-gray-500 text-2xl caret-emerald-500' />
      </div>
    </div>
  );
}

function ChatsBody() {

  const chats = [
    { id: 1, name: "João Silva", message: "Oi, tudo bem?", time: "10:30", avatar: "https://randomuser.me/api/portraits/men/1.jpg", tempoRestante: 0 },
    { id: 2, name: "Maria Souza", message: "Enviou uma foto", time: "09:45", avatar: "https://randomuser.me/api/portraits/women/2.jpg", tempoRestante: 1 },
    { id: 3, name: "Carlos Lima", message: "Até mais tarde", time: "08:15", avatar: "https://randomuser.me/api/portraits/men/3.jpg", tempoRestante: 4 },
    { id: 4, name: "Ana Paula", message: "Vou confirmar e te aviso o quanto antes!", time: "Ontem", avatar: "https://randomuser.me/api/portraits/women/4.jpg", tempoRestante: 1 },
  ];

  return (
    <div className='flex flex-col w-full overflow-y-auto'>
      {chats.map(({ id, name, message, time, avatar, tempoRestante }) => (
        <div key={id} className='flex items-center p-4 border-b border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 cursor-pointer'>

          <img src={avatar} alt={name} className='w-12 h-12 rounded-full object-cover mr-4' />

          <div className="flex w-full items-center justify-between overflow-x-hidden">

            <div className='flex flex-col flex-grow overflow-hidden'>
              <span className='font-medium text-gray-900 dark:text-white text-ellipsis whitespace-nowrap overflow-hidden'>{name}</span>
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

        </div>
      ))}
    </div>
  );
}
