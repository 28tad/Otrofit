import { Logo } from '@/icons/Logo'
import { Container } from '../Container'
import { BurgerMenu } from './BurgerMenu'
import { frontendRoutes } from '@/app/links'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='h-[60px] bg-gray relative'>
      <Container className='flex items-center h-full'>
        <div className='flex items-center justify-between w-full'>
          <Link href={frontendRoutes.main}>
            <Logo className='h-[28px] w-[88px] lg:w-[115px] lg:h-[37px]' />
          </Link>
          <BurgerMenu />
        </div>
      </Container>
    </header>
  )
}
