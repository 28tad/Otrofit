import { Container } from '@/components/Container'
import { Story } from '@/components/Story'
import bg_mob from '@/images/section_about_mob.webp'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className='block lg:hidden'>
        <h1 className='text-[24px] lg:text-[36px] uppercase font-bold mt-[34px] lg:mt-[61px] text-center lg:text-left'>о нас</h1>
        <div className='relative h-full  w-full mx-auto max-w-[560px] overflow-hidden mt-[16px]'>
          <Image src={bg_mob} alt='about_us_bg' className='w-full' priority />
        </div>
      </div>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div />
          <div>
            <h1 className='text-[24px] lg:text-[36px] uppercase font-bold mt-[34px] lg:mt-[61px] text-center lg:text-left hidden lg:block'>о нас</h1>
            <div className='mt-[26px] mb-[18px] lg:mt-[60px] lg:mb-[30px] font-light text-[16px] lg:text-[18px]'>
              <span className='font-bold'>Мы</span> — команда специалистов, объединённых одной задачей: создавать и подбирать надёжные технические
              решения, которые делают повседневную жизнь людей с ограниченной мобильностью проще, безопаснее и активнее.
            </div>
            <Story>
              Наши продукты разрабатываются с учётом реальных потребностей пользователей, медицинского персонала и специалистов по реабилитации <br />
              <br />
              Каждое устройство — результат практического опыта, инженерной точности и внимания к деталям
            </Story>
          </div>
        </div>
      </Container>
    </>
  )
}
