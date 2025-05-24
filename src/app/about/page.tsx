import { Container } from '@/components/Container'
import { Story } from '@/components/Story'
import bg_mob from '@/images/section_about_mob.webp'
import bg from '@/images/section_about.webp'
import Image from 'next/image'
import left_chair from '@/images/left_chair.webp'
import right_chair from '@/images/right_chair.webp'
import { Metadata } from 'next'

const FirstContent = () => {
  return (
    <div>
      <h1 className='text-[24px] lg:text-[36px] uppercase font-bold mt-[34px] lg:mt-[61px] text-center lg:text-left hidden lg:block'>о нас</h1>
      <div className='mt-[26px] mb-[18px] lg:mt-[40px] lg:mb-[30px] font-light text-[16px] lg:text-[18px]'>
        <span className='font-bold'>Мы</span> — команда специалистов, объединённых одной задачей: создавать и подбирать надёжные технические решения,
        которые делают повседневную жизнь людей с ограниченной мобильностью проще, безопаснее и активнее.
      </div>
      <Story>
        Наши продукты разрабатываются с учётом реальных потребностей пользователей, медицинского персонала и специалистов по реабилитации <br />
        <br />
        Каждое устройство — результат практического опыта, инженерной точности и внимания к деталям
      </Story>
    </div>
  )
}

const steps = [
  'Разработка тренажёров, подъёмников и санитарных кресел',
  'Адаптация решений под домашнее и профессиональное использование',
  'Поддержка пользователей на всех этапах: от выбора до внедрения',
]

const values = [
  'Надёжность, проверенная в работе',
  'Надёжность, проверенная в работе',
  'Поддержка на каждом этапе — от консультации до внедрения',
  'Решения, ориентированные на результат',
]

export const metadata: Metadata = {
  title: 'Ортофит | О нас',
  description: 'Ортофит - разработка реабилитационного оборудования: тренажёр FITRoller для инвалидных колясок, подъёмное кресло Унилифт. Решения для активной реабилитации, ухода за маломобильными пациентами, адаптивной физкультуры. Профессиональные подъёмники, кресла-туалеты, тренажёры для ЛФК. Доставка по России, поддержка пользователей, оборудование для домов престарелых и медицинских центров.'
}

export default function About() {
  return (
    <>
      {/* desktop block */}
      <div className='hidden lg:grid grid-cols-2 max-w-[1920px] max-h-[500px] mx-auto'>
        <div className='lg:pr-[32px]'>
          <Image src={bg} alt='fitroller' className='max-h-[500px] rounded-br-[50px]' />
        </div>
        <div className='relative flex justify-center pr-[62px]'>
          <FirstContent />
        </div>
      </div>

      {/* mobile block */}
      <div className='block lg:hidden'>
        <div>
          <h1 className='text-[24px] lg:text-[36px] uppercase font-bold mt-[34px] lg:mt-[61px] text-center lg:text-left'>о нас</h1>
          <div className='relative h-full  w-full mx-auto max-w-[560px] overflow-hidden mt-[16px]'>
            <Image src={bg_mob} alt='about_us_bg' className='w-full' priority />
          </div>
        </div>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div />
            <FirstContent />
          </div>
        </Container>
      </div>

      <Container>
        <h2 className='text-[24px] lg:text-[36px] font-bold uppercase text-center my-[60px] lg:mt-[85px]'>чем мы занимаемся</h2>
        <div className='flex flex-col lg:flex-row gap-[15px]'>
          {steps.map((s, i) => (
            <div key={i} className='bg-light relative rounded-tr-[80px] rounded-bl-[80px]'>
              <div className='absolute top-[-15px] left-[-15px] size-[73px] lg:size-[80px] bg-blue flex items-center justify-center text-white rounded-[100%] text-[49px] lg:text-[52px] font-bold'>
                {i + 1}
              </div>
              <div className='pl-[75px] lg:pl-[80px] py-[34px] lg:py-[47px] pr-[62px] lg:pr-[47px] text-[16px] lg:text-[20px] font-light'>{s}</div>
            </div>
          ))}
        </div>
      </Container>

      <div className='relative'>
        <Image src={left_chair} alt='left_chair_bg' className='hidden lg:block absolute top-[-188px] z-[-1]' />
        <Container>
          <h2 className='text-[24px] lg:text-[36px] font-bold uppercase text-center my-[60px]'>СТРОИМ ПРОСТЫЕ РЕШЕНИЯ ДЛЯ СЛОЖНЫХ ЗАДАЧ</h2>
          <div className='lg:pr-[163px] text-[18px]'>
            <div className='text-[20px] uppercase font-bold'>Почему выбирают нас</div>
            <div className='py-[28px] font-light'>Мы специализируемся на разработке и производстве оборудования для реабилитации и ухода:</div>
            <ul className='font-bold list-disc pl-[20px] leading-[110%]'>
              <li>тренажёры для инвалидных колясок</li>
              <li>ручные и электрические подъёмники</li>
              <li>кресла-туалеты и мобильные санитарные решения</li>
            </ul>

            <div className='text-[20px] uppercase font-bold pt-[40px]'>Наши устройства помогают:</div>
            <ul className='list-disc pl-[20px] font-light mt-[28px]'>
              <li>поддерживать физическую активность и здоровье</li>
              <li>облегчать повседневный уход за людьми с ограниченной подвижностью</li>
              <li> снижать нагрузку на медицинский и </li>
              <li> ухаживающий персонал улучшать качество жизни дома и в профессиональных учреждениях</li>
            </ul>

            <div className='font-light py-[28px]'>
              Мы работаем напрямую с клиниками, реабилитационными центрами и частными пользователями по всей России!
            </div>
            <div>
              Вся продукция адаптирована{' '}
              <span className='font-bold'>
                для домашнего использования, медицинских учреждений, домов престарелых, центров ЛФК и программ адаптивной физкультуры
              </span>
            </div>
          </div>
        </Container>
        <Image src={right_chair} alt='right_chair_bg' className='hidden lg:block absolute bottom-[-285px] right-0 z-[-1]' />
      </div>

      <Container className='pb-[60px] lg:pb-[100px]'>
        <h2 className='text-[24px] lg:text-[36px] font-bold uppercase text-center my-[60px]'>наши ценности</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-[16px] lg:gap-[32px]'>
          {values.map((v) => (
            <div
              key={v}
              className='bg-light h-[145px] rounded-[24px] flex items-center justify-center px-[30px] relative overflow-hidden text-[16px] lg:text-[19px] font-light'
            >
              <div className='size-[80px] bg-blue rounded-[100%] absolute top-[-40px] right-[-33px]' />
              {v}
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
