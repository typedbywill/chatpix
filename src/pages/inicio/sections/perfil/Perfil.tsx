import React from 'react';

const user = {
  nome: 'João Silva',
  descricao: 'Usuário ativo desde 2021. Amante de tecnologia e finanças.',
  saldo: 1250.75,
  foto: 'https://randomuser.me/api/portraits/men/1.jpg',
  verificado: true,
};

const Perfil = () => {

  return (
    <div className="flex flex-col w-full h-full">

      <PerfilHeader />

    </div>
  );
};

export default Perfil;

function PerfilHeader() {
  return (
    <div className="flex w-full p-6 items-center justify-between ">

      <div className="flex">
        <img
          src={user.foto}
          alt={user.nome}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">{user.nome}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.descricao}</p>
        </div>
      </div>

    </div>
  );
}