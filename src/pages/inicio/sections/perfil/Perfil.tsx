import React from 'react';
import { PiArrowCircleDown, PiArrowCircleUp, PiArrowLineRight, PiArrowRight, PiCaretRightFill, PiCreditCard, PiUser } from 'react-icons/pi';

const user = {
  nome: 'João Silva',
  descricao: 'Usuário ativo desde 2021. Amante de tecnologia e finanças.',
  saldo: 1250.75,
  foto: 'https://randomuser.me/api/portraits/men/1.jpg',
  verificado: true,
};

const Perfil = () => {

  return (
    <div className="flex flex-col gap-8 w-full h-full p-6">

      <PerfilHeader />

      <PerfilBody />

    </div>
  );
};

export default Perfil;

function PerfilHeader() {
  return (
    <div className="w-full flex flex-col bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl">

      {/* Nome e descrição */}
      <div className="flex gap-4 items-center">

        <img
          src={user.foto}
          alt={user.nome}
          className="w-12 h-12 rounded-full"
        />

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">{user.nome}</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{user.descricao}</p>
        </div>

      </div>

      <hr className='w-full border-zinc-200 dark:border-zinc-700 my-3' />

      {/* Saldo */}
      <div className="flex justify-between w-full">

        <div className="flex flex-col">

          <span className="text-sm text-zinc-500 dark:text-zinc-400">Saldo</span>

          <span className="text-2xl font-semibold text-emerald-500 dark:text-zinc-200">
            R$ {user.saldo.toFixed(2)}
          </span>

        </div>

        <div className="flex gap-2 items-center">

          <button className="flex gap-1 text-sm items-center justify-center font-semibold p-2 rounded-md text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors">
            <PiArrowCircleDown />
            Sacar
          </button>

          <button className="flex gap-1 text-sm items-center justify-center font-semibold bg-emerald-500 p-2 rounded-md text-black hover:bg-emerald-600 transition-colors">
            <PiArrowCircleUp />
            Depositar
          </button>

        </div>

      </div>

    </div>
  );
}

function PerfilBody() {

  const configuracoes = [
    { icone: <PiUser />, titulo: 'Conta', route: '/inicio/perfil' },
    { icone: <PiCreditCard />, titulo: 'Pagamentos', route: '/inicio/cartoes' },
  ]

  return (
    <div className="w-full flex flex-col bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden">

      {configuracoes.map((configuracao, index) => (
        <div key={index} className="flex gap-4 items-center p-4 justify-between hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer">

          <div className="flex gap-2 items-center">

            <div className="flex w-8 text-2xl">
              {configuracao.icone}
            </div>

            <span className="text-lg font-semibold text-zinc-700 dark:text-gray-300">
              {configuracao.titulo}
            </span>

          </div>

          <div className="flex text-zinc-500">
            <PiCaretRightFill />
          </div>

        </div>
      ))}

    </div>
  )
}