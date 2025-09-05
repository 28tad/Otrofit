'use client'

import { useState, useEffect } from 'react'
import { BurgerIcon } from '@/icons/BurgerIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { frontendRoutes } from '@/app/links'

const pages = [
  { title: 'Главная', href: frontendRoutes.main },
  { title: 'Роллер', href: frontendRoutes.fitRoller },
  { title: 'Унилифт', href: frontendRoutes.unilift },
  { title: 'Гантри', href: frontendRoutes.gantry },
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
    <div className='burger-menu'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative z-[4]'
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        <BurgerIcon className={`text-white transition-colors hover:text-white/65`} />
      </button>

      <div
        data-open={isOpen}
        className={`bg-blue fixed top-0 right-0 z-[3] h-0 w-full max-w-[200px] overflow-hidden rounded-bl-[40px] opacity-0 transition-all duration-300 ease-in-out data-[open=true]:h-[284px] data-[open=true]:opacity-100 lg:max-w-[450px]`}
      >
        <div className='flex flex-col gap-[15px] pt-[71px] pl-[26px] text-white lg:pt-[74px] lg:pl-[40px]'>
          {pages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              data-active={pathname === p.href}
              className={`text-[24px] leading-[100%] transition-all hover:text-white/50 hover:underline data-[active=true]:underline`}
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
