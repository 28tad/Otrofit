'use client'

import { useState, useEffect } from 'react'
import { BurgerIcon } from '@/icons/BurgerIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { frontendRoutes } from '@/app/links'

const pages = [
  { title: 'Главная', href: frontendRoutes.main },
  { title: 'FITRoller', href: frontendRoutes.fitRoller },
  { title: 'Унилифт', href: frontendRoutes.unilift },
  { title: 'О нас', href: frontendRoutes.about },
]

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.burger-menu')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <div className="burger-menu">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className='relative z-[2]'
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        <BurgerIcon className={`text-white hover:text-white/65 transition-colors`} />
      </button>

      <div data-open={isOpen} className={`
        fixed top-0 right-0 w-full max-w-[200px] lg:max-w-[450px] bg-blue
        overflow-hidden z-[1] rounded-bl-[40px]
        transition-all duration-300 ease-in-out
        h-0 opacity-0 data-[open=true]:h-[284px] data-[open=true]:opacity-100
      `}>
        <div className='text-white pl-[26px] pt-[71px] lg:pl-[40px] lg:pt-[74px] flex flex-col gap-[15px]'>
          {pages.map((p) => (
            <Link 
              key={p.href} 
              href={p.href}
              data-active={pathname === p.href}
              className={`
                leading-[100%] text-[24px] transition-all
                hover:text-white/50 hover:underline
                data-[active=true]:underline
              `}
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}