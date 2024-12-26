import React from 'react'
import Chats from './chats/Chats'
import { Route, Switch } from 'react-router'
import Chat from './chat/Chat'

function Conversas() {
  return (
    <div className='flex flex-col w-full h-full overflow-auto'>

      <Switch>

        <Route
          exact
          path='/inicio/conversas'
          render={() => (<>
            <ConversasHeader />
            <Chats />
          </>)} />

        <Route
          path='/inicio/conversas/:chatId'
          component={Chat}
        />

      </Switch>

    </div>
  )
}

export default Conversas

function ConversasHeader() {
  return (
    <div className='flex w-full h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-zinc-800'>

      <div className='flex items-center justify-center text-2xl text-gray-700 dark:text-gray-300'>

        <h1 className='text-2xl font-semibold text-gray-700 dark:text-gray-300'>Conversas</h1>

      </div>

    </div>
  )
}