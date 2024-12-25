import { Link } from 'react-router-dom'
import { PiGlobe, PiMagnifyingGlass } from 'react-icons/pi'

export default function EmptyConversas() {
  return (
    <div className='flex w-full h-full items-center justify-center gap-4 flex-col'>

      <PiMagnifyingGlass className='text-gray-400 dark:text-gray-500 text-4xl' />

      <h1 className='text-xl font-semibold text-gray-400 dark:text-gray-500'>Nenhuma conversa ainda</h1>

      <Link
        to='/home/explorar'
        className="flex items-center justify-center gap-2 px-4 py-2 text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 rounded-full"
      >

        <PiGlobe className='text-emerald-400 dark:text-emerald-500 text-2xl' />

        <h1 className='text-xs font-semibold text-emerald-400 dark:text-emerald-500'>Explore e encontre novas pessoas</h1>

      </Link>

    </div>
  )
}
