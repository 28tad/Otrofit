import { Container } from '@/components/Container'
import { Story } from '@/components/Blocks/Story'
import bg_mob from '@/images/section_about_mob.webp'
import bg from '@/images/section_about.webp'
import Image from 'next/image'
import left_chair from '@/images/left_chair.webp'
import right_chair from '@/images/right_chair.webp'
import { Metadata } from 'next'

const FirstContent = () => {
  return (
    <div className='flex h-full flex-col justify-between'>
      <h1 className='mt-[34px] hidden text-center text-[24px] font-bold uppercase lg:mt-[61px] lg:block lg:text-left lg:text-[36px]'>
        о нас
      </h1>
      <div className='mt-[26px] mb-[18px] text-[16px] font-light lg:mt-[40px] lg:mb-[30px] lg:text-[18px]'>
        <span className='font-bold'>Мы</span> — команда специалистов, объединённых одной задачей:
        создавать и подбирать надёжные технические решения, которые делают повседневную жизнь людей
        с ограниченной мобильностью проще, безопаснее и активнее.
      </div>
      <Story>
        Наши продукты разрабатываются с учётом реальных потребностей пользователей, медицинского
        персонала и специалистов по реабилитации <br />
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
  'Простота и доступность для пользователя',
  'Поддержка на каждом этапе — от консультации до внедрения',
  'Решения, ориентированные на результат',
]

export const metadata: Metadata = {
  title: 'Ортофит | О нас',
  description:
    'Ортофит - разработка реабилитационного оборудования: тренажёр ОРТОФИТ РОЛЛЕР для инвалидных колясок, подъёмное кресло Унилифт. Решения для активной реабилитации, ухода за маломобильными пациентами, адаптивной физкультуры. Профессиональные подъёмники, кресла-туалеты, тренажёры для ЛФК. Доставка по России, поддержка пользователей, оборудование для домов престарелых и медицинских центров.',
}

export default function About() {
  return (
    <>
      {/* desktop block */}
      <div className='mx-auto hidden max-w-[1920px] grid-cols-2 lg:grid'>
        <div className='overflow-hidden rounded-br-[50px] lg:pr-[32px]'>
          <Image
            src={bg}
            alt='fitroller'
            width={bg.width}
            height={bg.height}
            className='h-auto w-full'
            loading='lazy'
          />
        </div>
        <div className='relative flex justify-center pr-[62px]'>
          <FirstContent />
        </div>
      </div>

      {/* mobile block */}
      <div className='block lg:hidden'>
        <div>
          <h1 className='mt-[34px] text-center text-[24px] font-bold uppercase lg:mt-[61px] lg:text-left lg:text-[36px]'>
            о нас
          </h1>
          <div className='relative mx-auto mt-[16px] h-full w-full max-w-[560px] overflow-hidden'>
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
        <h2 className='my-[60px] text-center text-[24px] font-bold uppercase lg:mt-[85px] lg:text-[36px]'>
          чем мы занимаемся
        </h2>
        <div className='flex flex-col gap-[15px] lg:flex-row'>
          {steps.map((s, i) => (
            <div key={i} className='bg-light relative rounded-tr-[80px] rounded-bl-[80px]'>
              <div className='bg-blue absolute top-[-15px] left-[-15px] flex size-[73px] items-center justify-center rounded-[100%] text-[49px] font-bold text-white lg:size-[80px] lg:text-[52px]'>
                {i + 1}
              </div>
              <div className='py-[34px] pr-[62px] pl-[75px] text-[16px] font-light lg:py-[47px] lg:pr-[47px] lg:pl-[80px] lg:text-[20px]'>
                {s}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className='relative'>
        <Image
          src={left_chair}
          alt='left_chair_bg'
          className='absolute top-[-188px] z-[-1] hidden lg:block'
          loading='lazy'
        />
        <Container>
          <h2 className='my-[60px] text-center text-[24px] font-bold uppercase lg:text-[36px]'>
            СТРОИМ ПРОСТЫЕ РЕШЕНИЯ ДЛЯ СЛОЖНЫХ ЗАДАЧ
          </h2>
          <div className='text-[18px] lg:pr-[163px]'>
            <div className='text-[20px] font-bold uppercase'>Почему выбирают нас</div>
            <div className='py-[28px] font-light'>
              Мы специализируемся на разработке и производстве оборудования для реабилитации и
              ухода:
            </div>
            <ul className='list-disc pl-[20px] leading-[110%] font-bold'>
              <li>тренажёры для инвалидных колясок</li>
              <li>ручные и электрические подъёмники</li>
              <li>кресла-туалеты и мобильные санитарные решения</li>
            </ul>

            <div className='pt-[40px] text-[20px] font-bold uppercase'>
              Наши устройства помогают:
            </div>
            <ul className='mt-[28px] list-disc pl-[20px] font-light'>
              <li>поддерживать физическую активность и здоровье</li>
              <li>облегчать повседневный уход за людьми с ограниченной подвижностью</li>
              <li>снижать нагрузку на медицинский и ухаживающий персонал</li>
              <li>улучшать качество жизни дома и в профессиональных учреждениях</li>
            </ul>

            <div className='py-[28px] font-light'>
              Мы работаем напрямую с клиниками, реабилитационными центрами и частными пользователями
              по всей России!
            </div>
            <div>
              Вся продукция адаптирована{' '}
              <span className='font-bold'>
                для домашнего использования, медицинских учреждений, домов престарелых, центров ЛФК
                и программ адаптивной физкультуры
              </span>
            </div>
          </div>
        </Container>
        <Image
          src={right_chair}
          alt='right_chair_bg'
          className='absolute right-0 bottom-[-285px] z-[-1] hidden lg:block'
          loading='lazy'
        />
      </div>

      <Container className='pb-[60px] lg:pb-[100px]'>
        <h2 className='my-[60px] text-center text-[24px] font-bold uppercase lg:text-[36px]'>
          наши ценности
        </h2>
        <div className='grid grid-cols-1 gap-[16px] lg:grid-cols-4 lg:gap-[32px]'>
          {values.map((v) => (
            <div
              key={v}
              className='bg-light relative flex h-[145px] items-center justify-center overflow-hidden rounded-[24px] px-[30px] text-[16px] font-light lg:text-[19px]'
            >
              <div className='bg-blue absolute top-[-40px] right-[-33px] size-[80px] rounded-[100%]' />
              {v}
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
