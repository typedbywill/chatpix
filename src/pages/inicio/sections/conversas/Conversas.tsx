import React from 'react'
import { IonPage, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route, Redirect, useLocation } from 'react-router-dom'

import Chats from './chats/Chats'
import Chat from './chat/Chat'

import { createAnimation } from '@ionic/react'

function Conversas() {
  return (
    <div className='flex flex-col w-full h-full overflow-auto z-0'>

      <IonReactRouter>
        <IonRouterOutlet animated={true} animation={slideAnimation}>

          <Route exact path='/inicio/conversas'>
            <ConversasPage />
          </Route>

          <Route path='/inicio/conversas/:chatId'>
            <ChatPage />
          </Route>

          <Route exact path='/'>
            <Redirect to='/inicio/conversas' />
          </Route>

        </IonRouterOutlet>
      </IonReactRouter>

    </div>
  )
}

export default Conversas

function ConversasPage() {
  return (
    <IonPage>
      <ConversasHeader />
      <Chats />
    </IonPage>
  )
}

function ChatPage() {
  return (
    <IonPage className='flex flex-col w-full h-full overflow-auto relative'>
      <Chat />
    </IonPage>
  )
}

function ConversasHeader() {
  return (
    <div className='flex w-full h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-zinc-800'>
      <div className='flex items-center justify-center text-2xl text-gray-700 dark:text-gray-300'>
        <h1 className='text-2xl font-semibold text-gray-700 dark:text-gray-300'>Conversas</h1>
      </div>
    </div>
  )
}

// Função para criar animação personalizada
const slideAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl
  const leavingEl = opts.leavingEl

  const location = window.location.pathname // Obtém a URL atual

  const isNavigatingForward = location.startsWith('/inicio/conversas/') // Indo para um chat

  const rootTransition = createAnimation()
    .addElement(enteringEl)
    .duration(150)
    .easing('ease-in-out')
    .fromTo(
      'transform',
      isNavigatingForward ? 'translateX(100%)' : 'translateX(-100%)', // Condição para animação
      'translateX(0%)'
    )
    .fromTo('opacity', '0', '1')

  if (leavingEl) {
    const leavingTransition = createAnimation()
      .addElement(leavingEl)
      .duration(150)
      .easing('ease-in-out')
      .fromTo(
        'transform',
        'translateX(0%)',
        isNavigatingForward ? 'translateX(-100%)' : 'translateX(100%)' // Condição para animação inversa
      )
      .fromTo('opacity', '1', '0')

    return rootTransition.addAnimation([leavingTransition])
  } else {
    return rootTransition
  }
}
