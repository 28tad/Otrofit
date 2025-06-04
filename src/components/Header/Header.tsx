import { Logo } from '@/icons/Logo'
import { Container } from '../Container'
import { BurgerMenu } from './BurgerMenu'
import { frontendRoutes } from '@/app/links'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-gray relative sticky top-0 z-[20] h-[60px]'>
      <Container className='flex h-full items-center'>
        <div className='flex w-full items-center justify-between'>
          <Link href={frontendRoutes.main}>
            <Logo className='h-[28px] w-[88px] lg:h-[37px] lg:w-[115px]' />
          </Link>
          <BurgerMenu />
        </div>
      </Container>
    </header>
  )
}
