import React from 'react';

const Perfil = () => {
  const user = {
    nome: 'João Silva',
    descricao: 'Usuário ativo desde 2021. Amante de tecnologia e finanças.',
    saldo: 1250.75,
    foto: 'https://randomuser.me/api/portraits/men/1.jpg',
    verificado: true,

  };

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={user.foto}
            alt={user.nome}
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              {user.nome}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user.descricao}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="flex items-center justify-center px-4 py-2 rounded-full bg-emerald-500 text-white"
          >
            Sacar
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 ml-4 rounded-full bg-blue-500 text-white"
          >
            Depositar
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Saldo
          </h2>
          <p className="ml-2 text-2xl font-semibold text-gray-700 dark:text-gray-300">
            R$ {user.saldo}
          </p>
        </div>
        {user.verificado && (
          <div className="flex items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Verificado
            </p>
            <div className="w-4 h-4 bg-green-500 rounded-full ml-2"></div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Perfil;
