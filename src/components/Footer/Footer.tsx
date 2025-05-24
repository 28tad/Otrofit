import { Logo } from '@/icons/Logo'
import { Container } from '../Container'
import { contacts, frontendRoutes } from '@/app/links'
import { PhoneIcon } from '@/icons/PhoneIcon'
import { MailIcon } from '@/icons/MailIcon'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #34353A 32.44%, #1D1D1D 100%)',
      }}
    >
      <Container className='py-[69px] lg:py-[56px]'>
        <div>
          <Logo className='w-[88px] h-[28px] lg:w-[115px] lg:h-[37px] mx-auto lg:mx-0' />
          <div className='mt-[60px] lg:mt-[55px] grid grid-cols-1 lg:grid-cols-3 max-w-[240px] mx-auto lg:max-w-full'>
            <div>
              <div className='text-[20px] uppercase text-blue font-bold'>контакты</div>
              <div className='mt-[8px] lg:mt-[18px] text-white'>
                <div className='flex gap-[11px] items-center '>
                  <PhoneIcon />
                  {contacts.number}
                </div>
                <div className='flex gap-[11px] items-center'>
                  <MailIcon />
                  {contacts.mail}
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='mt-[60px] lg:mt-0 text-[20px] uppercase text-blue font-bold'>ссылки</div>
              <div className='mt-[8px] lg:mt-[18px] text-white grid grid-cols-1 lg:grid-cols-2 gap-[8px]'>
                <Link href={frontendRoutes.main} className='pb-[8px] border-b border-white/30 max-w-[212px]'>Главная страница</Link>
                <Link href={frontendRoutes.unilift} className='pb-[8px] border-b border-white/30 max-w-[212px]'>Унилифт</Link>
                <Link href={frontendRoutes.about} className='pb-[8px] border-b lg:border-none border-white/30 max-w-[212px]'>О нас</Link>
                <Link href={frontendRoutes.fitRoller}>FitRoller</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='h-[37px] w-full bg-gray'></div>
    </footer>
  )
}
