import { Container } from '@/components/Container'
import Input from '@/components/Input'
import bg from '@/images/section_os_bg.webp'
import Image from 'next/image'

export default function SectionOS() {
  return (
    <div className='relative h-[618px] lg:h-[458px] overflow-hidden mb-[200px]'>
      <div className='absolute inset-0 -z-10'>
        <Image src={bg} alt='fitroller_bg' fill className='object-cover object-center lg:object-[center_65%] opacity-100' quality={100} priority />
        <div className='absolute inset-0 bg-black/40' />
      </div>

      <Container className='h-full pt-[40px] lg:py-[40px] lg:py-[67px] text-white'>
        <div
          className='bg-black/50 h-full rounded-t-[65px] py-[14px] px-[15px] lg:py-[45px] lg:px-[52px] mx-[20px] lg:mx-0'
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <div className='uppercase font-bold text-[24px] mx-auto w-[140px] lg:w-full lg:text-[30px] leading-[110%] lg:leading-[100%] text-center'>
            связаться с нами
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-[10px] lg:gap-[24px] mt-[16px] lg:mt-[20px]'>
            <div className='lg:col-span-2'>
              <Input label='ФИО' />
            </div>
            <div className='lg:col-span-3'>
              <Input label='Продукты' />
            </div>

            <div className='lg:col-span-1'>
              <Input label='Телефон' />
            </div>
            <div className='lg:col-span-2'>
              <Input label='E-mail' />
            </div>
            <div className='lg:col-span-1'>
              <Input label='Город' />
            </div>
            <div className='lg:col-span-1 flex flex-row items-end'>
              <button className='mt-[8px] lg:mt-0 bg-blue w-full rounded-[18px] lg:rounded-[24px] text-[16px] uppercase font-bold h-[60px] lg:h-[48px]'>отправить</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
