import { Logo } from '@/icons/Logo'
import { Container } from '../Container'
import { catalogItemsDTO, contacts, frontendRoutes } from '@/app/links'
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
      <Container className='py-[69px] lg:py-[66px]'>
        <div>
          <Logo className='mx-auto h-[28px] w-[88px] lg:mx-0 lg:h-[37px] lg:w-[115px]' />
          <div className='mx-auto mt-[60px] grid max-w-[240px] grid-cols-1 lg:mt-[55px] lg:max-w-full lg:grid-cols-3'>
            <div>
              <div className='text-blue text-[20px] font-bold uppercase'>контакты</div>
              <div className='mt-[8px] text-white lg:mt-[18px]'>
                <div className='flex items-center gap-[11px]'>
                  <PhoneIcon />
                  {contacts.number}
                </div>
                <div className='flex items-center gap-[11px]'>
                  <MailIcon />
                  {contacts.mail}
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='text-blue mt-[60px] text-[20px] font-bold uppercase lg:mt-0'>
                ссылки
              </div>

              <div className='mt-[8px] grid grid-cols-1 gap-[8px] text-white lg:mt-[18px] lg:grid-cols-2 lg:gap-x-[80px]'>
                {/* ЛЕВАЯ колонка — общие ссылки */}
                <div className='flex flex-col gap-[8px]'>
                  <Link
                    href={frontendRoutes.main}
                    className='max-w-[212px] border-b border-white/30 pb-[8px]'
                  >
                    Главная страница
                  </Link>
                  <Link
                    href={frontendRoutes.about}
                    className='max-w-[212px] border-b border-white/30 pb-[8px] lg:border-none'
                  >
                    О нас
                  </Link>
                </div>

                {/* ПРАВАЯ колонка — продукты */}
                <div className='flex flex-col gap-[8px]'>
                  {catalogItemsDTO.map((item) => (
                    <Link
                      href={item.href}
                      className='max-w-[212px] border-b border-white/30 pb-[8px]'
                    >
                      {item.title}
                    </Link>
                  ))}

                  {/* <Link
                    href={frontendRoutes.fitRoller}
                    className='max-w-[212px] border-b border-white/30 pb-[8px]'
                  >
                    Роллер
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='bg-gray h-[37px] w-full'></div>
    </footer>
  )
}
