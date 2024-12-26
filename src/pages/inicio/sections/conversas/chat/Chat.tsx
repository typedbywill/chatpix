import React from 'react'
import { PiCaretLeftBold, PiCheckBold, PiSealFill } from 'react-icons/pi'

function Chat() {
  return (
    <div className='flex flex-col w-full h-full overflow-auto'>

      <ChatHeader />

      <ChatBody />

      <ChatInputs />

    </div>
  )
}

export default Chat

function ChatHeader() {
  return (
    <div className="flex items-center justify-between w-full p-2 py-4 dark:bg-zinc-900 border-b border-zinc-400 dark:border-zinc-800">

      <div className="flex gap-4 items-center">

        {/* Botao Voltar */}
        <PiCaretLeftBold className="text-emerald-500 text-3xl cursor-pointer hover:text-emerald-600 transition-all" />

        <div className="flex relative w-10 h-10 rounded-full bg-emerald-500 items-center justify-center ring-2 ring-emerald-500 ring-offset-2 ring-offset-zinc-100 dark:ring-offset-zinc-900">

          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Nome" className="rounded-full select-none" />

          <div className="absolute -bottom-1 -right-1 flex items-center justify-center">
            <PiSealFill className="text-emerald-500" />
            <PiCheckBold className="text-white dark:text-emerald-900 absolute text-[6px]" />
          </div>

        </div>

        <div className="flex flex-col">

          <h1 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">Nome</h1>

          <span className='text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1'>Web Designer</span>

        </div>

      </div>



    </div>
  )
}

function ChatBody() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto p-4">

      <div className="flex flex-col gap-4">

        <ChatMessage />

        <ChatMessage />

        <ChatMessage />

        <ChatMessage />

        <ChatMessage />

        <ChatMessage />

      </div>

    </div>
  )
}

function ChatMessage() {
  return (
    <div className="flex gap-4">

      <div className="flex relative w-10 h-10 rounded-full bg-emerald-500 items-center justify-center ring-2 ring-emerald-500 ring-offset-2 ring-offset-zinc-100 dark:ring-offset-zinc-900">

        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Nome" className="rounded-full select-none" />

      </div>

      <div className="flex flex-col gap-1">

        <span className="text-sm text-zinc-700 dark:text-zinc-300">Mensagem</span>

        <span className="text-xs text-zinc-500 dark:text-zinc-400">10:00 PM</span>

      </div>

    </div>
  )
}

function ChatInputs() {
  return (
    <div className="flex items-center justify-between w-full p-2 py-4 dark:bg-zinc-900 border-t border-zinc-400 dark:border-zinc-800">

      <input type="text" placeholder="Digite sua mensagem" className="flex-1 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 focus:outline-none" />

      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white dark:text-emerald-900 hover:bg-emerald-600 transition-all">
        <PiCheckBold />
      </button>

    </div>
  )
}