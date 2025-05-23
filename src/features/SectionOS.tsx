import { Container } from '@/components/Container'
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
          className='bg-black/50 h-full rounded-t-[65px] py-[14px] px-[15px] lg:py-[45px] lg:px-[52px]'
          style={{ backdropFilter: 'blur(52.83712387084961px)' }}
        >
          <div className='uppercase font-bold text-[24px] mx-auto w-[140px] lg:w-full lg:text-[30px] leading-[110%] lg:leading-[100%] text-center'>
            связаться с нами
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-[10px] lg:gap-[24px] mt-[16px] lg:mt-[20px]'>
            <div className='bg-white/20  rounded-lg lg:col-span-2'>Элемент 1 (2 колонки)</div>
            <div className='bg-white/20 p-4 rounded-lg lg:col-span-3'>Элемент 2 (3 колонки)</div>

            <div className='bg-white/20 p-4 rounded-lg lg:col-span-1'>Элемент 3 (1 колонка)</div>
            <div className='bg-white/20 p-4 rounded-lg lg:col-span-2'>Элемент 4 (2 колонки)</div>
            <div className='bg-white/20 p-4 rounded-lg lg:col-span-1'>Элемент 5 (1 колонка)</div>
            <div className='lg:col-span-1'>
              <button className='bg-blue h-full w-full rounded-[24px] text-[16px] uppercase font-bold'>ОТРАВИТЬ</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
