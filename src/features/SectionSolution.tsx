import { Container } from '@/components/Container'
import fitroller from '@/images/section_catalog_fitroller.webp'
import unilift from '@/images/section_catalog_unilift.webp'
import unilift_mob from '@/images/section_catalog_unilift_mob.webp'
import Image, { StaticImageData } from 'next/image'

const steps = [
  'Мы разрабатываем и поставляем продукцию, которая помогает улучшить качество жизни независимо от возраста и физических возможностей',
  'В нашем ассортименте — функциональные устройства, созданные с учётом реальных задач: от повседневного ухода до активного восстановления',
]

type ProductItem = {
  title: string
  subtitle: string
  blueTitle: string
  description: React.ReactNode
  img: StaticImageData
  mobImg?: StaticImageData
  placement: 'left' | 'right'
}

const items: ProductItem[] = [
  {
    title: 'FITRoller',
    blueTitle: 'Тренажер активной колясочной езды',
    subtitle: 'Каждое решение — это шаг к свободе движения, самостоятельности и лучшему качеству жизни',
    description: (
      <>
        <span className='uppercase font-bold'>FitRoller</span> — тренажёр, позволяющий проводить полноценные тренировки прямо в в кресло-коляске. Он
        помогает развивать силу, выносливость и координацию без необходимости посещения спортзала или помощи извне
      </>
    ),
    img: fitroller,
    placement: 'left',
  },
  {
    title: 'унилифт',
    blueTitle: 'Подвес мобильный терапевтический',
    subtitle: 'Мы создаём решения, которые работают на практике — там, где это действительно нужно',
    description: (
      <>
        <span className='uppercase font-bold'>Унилифт</span> — универсальное подъёмное кресло, которое облегчает перемещение и гигиенический уход.
        Устройство удобно в использовании, адаптировано под разные условия и снижает нагрузку на окружающих
      </>
    ),
    img: unilift,
    mobImg: unilift_mob,
    placement: 'right',
  },
]

const Card = (item: ProductItem) => {
  return (
    <>
      <div className='block lg:hidden size-[375px] mx-auto my-[60px]'>
        <Image src={item.mobImg || item.img} alt='fitroller_img' className='w-full min-h-[375px] object-cover rounded-tr-[65px]' />
      </div>
      <Container className='grid lg:grid-cols-2 lg:gap-[32px]'>
        {item.placement === 'left' && (
          <div className='hidden lg:block lg:w-[519px] lg:h-[440px] rounded-tr-[65px]'>
            <Image src={item.img} alt='fitroller_img' />
          </div>
        )}

        <div>
          <div className='text-[18px] lg:text-[36px] uppercase font-bold'>{item.title}</div>
          <div className='text-[12px] lg:text-[18px] uppercase font-bold text-blue mt-[8px] lg:mt-0'>{item.blueTitle}</div>
          <div className='text-[14px] lg:text-[18px] font-bold text-gray mt-[16px] ml-[25px] lg:ml-0 lg:mt-[45px]'>{item.subtitle}</div>
          <div className='text-[14px] lg:text-[18px] font-light mt-[16px] ml-[25px] lg:ml-0  lg:mt-[30px]'>{item.description}</div>
        </div>

        {item.placement === 'right' && (
          <div className='hidden lg:block lg:w-[519px] lg:h-[440px] rounded-tl-[65px]'>
            <Image src={item.img} alt='fitroller_img' />
          </div>
        )}
      </Container>
    </>
  )
}

export default function SectionSolution() {
  return (
    <>
      <Container className='mt-[100px]'>
        <div className='text-[24px] lg:text-[36px] uppercase text-gray font-bold lg:text-left text-center mb-[30px] lg:mb-[60px]'>
          лучшие решения на рынке
        </div>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          {steps.map((s, i) => (
            <div className='flex items-center gap-[20px]' key={i}>
              <div className='text-blue text-[60px] lg:text-[77px] font-light leading-[100%]'>{i + 1}</div>
              <p className='text-[16px] lg:text-[20px] font-light'>{s}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className='flex flex-col lg:gap-[59px] mt-[30px] lg:mt-[59px] mb-[60px] lg:mb-[100px]'>
        {items.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </>
  )
}
