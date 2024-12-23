import React from 'react'

function Login() {
  return (
    <section className='text-gray-900 dark:text-white  flex flex-col my-auto gap-4 items-center p-4 overflow-auto'>

      <AppLogo />

      <WelcomeMessage />

      <LoginForm />

      <NewAccount />

    </section>
  )
}

export default Login

function AppLogo() {
  return (
    <div className='flex w-full h-20 items-center justify-center'>
      <img
        className='rounded-full object-contain h-20 w-20'
        src='https://via.placeholder.com/150'
        alt='Logo do Aplicativo'
      />
    </div>
  )
}

function WelcomeMessage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-20'>
      <h1 className='text-3xl font-bold text-center'>Bem-vindo ao <p className='text-emerald-500 font-extrabold inline'>ChatPIX</p></h1>
      <p className='text-center text-neutral-700 dark:text-neutral-300 '>Faça login para continuar</p>
    </div>
  )
}

function LoginForm() {
  return (
    <form className='flex flex-col w-full max-w-md space-y-4'>
      <input className='p-3 bg-transparent rounded border transition-all border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-emerald-500' type='email' placeholder='E-mail' />
      <input className='p-3 bg-transparent rounded border transition-all border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-emerald-500' type='password' placeholder='Senha' />
      <button className='p-3 rounded bg-emerald-500 text-white font-bold hover:bg-emerald-600' type='submit'>Entrar</button>
    </form>
  )
}

function NewAccount() {
  return (
    <div className='flex items-center justify-center w-full h-20 text-center'>
      <p>Não tem uma conta? <a className='text-emerald-500 hover:underline' href='/'>Cadastre-se</a></p>
    </div>
  )
}