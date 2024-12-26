import React, { useEffect, useState } from 'react'
import NavigationItems, { NavigationItem } from './NavigationItems'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {

  const [activeIndex, setActiveIndex] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const path = location.pathname

    const currentItem = NavigationItems.find(item => path.includes(item.route))
    if (!currentItem) return

    const currentIndex = NavigationItems.indexOf(currentItem)
    setActiveIndex(currentIndex)

    if (path.includes('/inicio/conversas/')) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }

  }, [location.pathname])

  return (
    <div className={clsx('flex w-full h-16 border-t border-gray-200 dark:border-zinc-800 z-[999] transition-all',
      isHidden ? 'transform translate-y-16' : ''
    )}>
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
      to={'/inicio' + params.route}
      onClick={params.onClick}
      className={
        clsx('flex w-full h-full items-center justify-center select-none cursor-pointer',
          params.active ? 'text-emerald-500' : 'text-gray-500 dark:text-gray-400')
      }
    >
      <div className='flex flex-col items-center justify-center gap-1'>

        <div className='flex items-center justify-center text-2xl relative'>

          <span>{CurrentIcon}</span>

          {params.hasUpdates && (
            <div className='absolute animate-pulse -top-1 -right-1 w-2 h-2 bg-emerald-500 dark:bg-emerald-600 rounded-full shadow-sm'></div>
          )}

        </div>

        <div className='flex items-center justify-center text-xs transition-all font-semibold'>
          {params.name}
        </div>

      </div>
    </Link>
  )
}

export default Navigation