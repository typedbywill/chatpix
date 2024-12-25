import React, { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { PiChats } from 'react-icons/pi'
import { IoMdSearch } from 'react-icons/io'
import clsx from 'clsx'
import NavigationItems, { NavigationItem } from './navigation/NavigationItems'

function Home() {
  return (
    <div className='flex w-full h-full flex-col'>

      <div className='flex w-full h-full'></div>

      <Navigation />

    </div>
  )
}

export default Home

function Navigation() {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='flex w-full py-2 border-t border-gray-200 dark:border-zinc-800'>
      {NavigationItems.map((item, index) => (
        <RenderNavigationItem
          key={index}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
          {...item}
        />
      ))}
    </div>
  )

}

function RenderNavigationItem(params:
  NavigationItem & { active: boolean, onClick: () => void }
) {

  const [CurrentIcon, setCurrentIcon] = useState<JSX.Element>(params.active ? params.iconSelected : params.icon)

  useEffect(() => {
    const clonedIcon = React.cloneElement(params.active ? params.iconSelected : params.icon, {
      className: clsx( params.active ? 'animate-jump duration-[.1s]' : '' )
    })
    setCurrentIcon(clonedIcon)
  }, [params.active])

  return (
    <div
      onClick={params.onClick}
      className={
        clsx('flex w-full h-full items-center justify-center select-none cursor-pointer',
          params.active ? 'text-emerald-500' : 'text-gray-500 dark:text-gray-400')
      }
    >
      <div className='flex flex-col items-center justify-center gap-1'>

        <div className='flex items-center justify-center text-2xl'>
          {CurrentIcon}
        </div>

        <div className='flex items-center justify-center text-xs transition-all font-semibold'>
          {params.name}
        </div>

      </div>
    </div>
  )
}