import React, { useEffect, useState } from 'react'
import NavigationItems, { NavigationItem } from './NavigationItems'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {

  const [activeIndex, setActiveIndex] = useState(0)

  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const index = NavigationItems.findIndex(item => path.includes(item.route))
    setActiveIndex(index)
  }, [location])

  return (
    <div className='flex w-full h-16 border-t border-gray-200 dark:border-zinc-800'>
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
      className: clsx(params.active ? 'animate-jump duration-[.1s]' : '')
    })
    setCurrentIcon(clonedIcon)
  }, [params.active])

  return (
    <Link
      to={'/home' + params.route}
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
    </Link>
  )
}

export default Navigation