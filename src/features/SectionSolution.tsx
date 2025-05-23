import { Container } from '@/components/Container'
import fitroller from '@/images/section_catalog_fitroller.webp'
import unilift from '@/images/section_catalog_unilift.webp'
import unilift_mob from '@/images/section_catalog_unilift_mob.webp'
import carusel_uni from '@/images/carusel_uni.webp'
import carusel_fit from '@/images/carusel_fit.webp'
import Image, { StaticImageData } from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ConnectUsButton from '@/components/ConnectUsButton'

const steps = [
  'Мы разрабатываем и поставляем продукцию, которая помогает улучшить качество жизни независимо от возраста и физических возможностей',
  'В нашем ассортименте — функциональные устройства, созданные с учётом реальных задач: от повседневного ухода до активного восстановления',
]

interface CaruselItem {
  img: StaticImageData
  title: string
  price: string
  id?: string
}

interface ProductItem {
  title: string
  subtitle: string
  blueTitle: string
  description: React.ReactNode
  img: StaticImageData
  caruselItems: CaruselItem[]
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
        <span className='font-bold'>FitRoller</span> — тренажёр, позволяющий проводить полноценные тренировки прямо в в кресло-коляске. Он
        помогает развивать силу, выносливость и координацию без необходимости посещения спортзала или помощи извне
      </>
    ),
    img: fitroller,
    caruselItems: [
      {
        img: carusel_fit,
        title: 'fitroller',
        price: 'ОТ 2 000 000 ₽',
      },
    ],
    placement: 'left',
  },
  {
    title: 'унилифт',
    blueTitle: 'Подвес мобильный терапевтический',
    subtitle: 'Мы создаём решения, которые работают на практике — там, где это действительно нужно',
    description: (
      <>
        <span className='font-bold'>Унилифт</span> — универсальное подъёмное кресло, которое облегчает перемещение и гигиенический уход.
        Устройство удобно в использовании, адаптировано под разные условия и снижает нагрузку на окружающих
      </>
    ),
    img: unilift,
    caruselItems: [
      {
        img: carusel_uni,
        title: 'унилифт',
        price: 'ОТ 2 000 000 ₽',
      },
    ],
    mobImg: unilift_mob,
    placement: 'right',
  },
]

const Card = (item: ProductItem) => {
  return (
    <>
      <div className='block lg:hidden w-full max-w-[560px] mx-auto my-[60px]'>
        <Image src={item.mobImg || item.img} alt='fitroller_img' className='w-full object-cover rounded-tr-[65px]' />
      </div>
      <Container className='grid lg:grid-cols-2 lg:gap-[32px]'>
        {item.placement === 'left' && (
          <div className='hidden lg:block lg:w-[519px] lg:h-[440px] rounded-tr-[65px]'>
            <Image src={item.img} alt='fitroller_img' />
          </div>
        )}

        <div>
          <div className='text-[18px] lg:text-[36px] uppercase font-bold leading-[100%]'>{item.title}</div>
          <div className='text-[12px] lg:text-[18px] uppercase font-bold text-blue mt-[8px] lg:mt-0'>{item.blueTitle}</div>
          <div className='text-[14px] lg:text-[18px] font-bold text-gray mt-[16px] ml-[25px] lg:ml-0 lg:mt-[45px] leading-[100%]'>
            {item.subtitle}
          </div>
          <div className='text-[14px] lg:text-[18px] font-light mt-[16px] ml-[25px] lg:ml-0  lg:mt-[30px] leading-[100%]'>{item.description}</div>
          <Carousel className='ml-[25px] lg:ml-[43px] mt-[45px] w-[281px] lg:w-[430px]' opts={{ loop: true }}>
            <CarouselContent>
              {new Array(3).fill(item.caruselItems[0]).map((c) => (
                <CarouselItem className='flex gap-[30px]' key={c.title}>
                  <Image alt={c.title} src={c.img} className='size-[100px] lg:size-[160px] rounded-tl-[25px]' />
                  <div className='flex flex-col justify-around lg:justify-between'>
                    <div className='text-[18px] lg:text-[20px] uppercase font-bold text-gray'>{c.title}</div>
                    <div className='text-[18px] text-blue lg:text-[26px] font-bold italic'>{c.price}</div>
                    <ConnectUsButton className='hidden lg:block lg:w-[239px] lg:h-[59px] rounded-[28px]' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {item.placement === 'right' && (
          <div className='hidden lg:block lg:w-[519px] lg:h-[440px] rounded-tl-[65px]'>
            <Image src={item.img} alt='fitroller_img' />
          </div>
        )}

        <button className='block lg:hidden bg-blue uppercase font-bold text-white h-[60px] w-full rounded-[18px] mt-[16px]'>ознакомиться</button>
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

      <div className='flex flex-col lg:gap-[59px] mt-[0px] lg:mt-[59px] mb-[0px] mb-[60px] lg:mb-[100px]'>
        {items.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </>
  )
}
