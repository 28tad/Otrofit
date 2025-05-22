import { Logo } from '@/icons/Logo'
import { Container } from '../Container'
import { BurgerMenu } from './BurgerMenu'

export default function Header() {
  return (
    <div className='h-[60px] bg-gray relative'>
      <Container className='flex items-center h-full'>
        <div className='flex items-center justify-between w-full'>
          <Logo className='h-[28px] w-[88px] lg:w-[115px] lg:h-[37px]' />
          <BurgerMenu />
        </div>
      </Container>
    </div>
  )
}
