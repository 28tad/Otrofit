'use client'
import { Container } from '@/components/Container'
import fitroller from '@/images/fitroller_main.webp'
import unilift from '@/images/section_catalog_unilift.webp'
import unilift_standart from '@/images/unilift_standart.webp'
import unilift_sanitar from '@/images/unilift_sanitar.webp'
import unilift_podves from '@/images/unilift_podves.webp'
import gantry from '@/images/gantry/gantry_main.webp'
import gantry_m from '@/images/gantry/gantry_mech.webp'
import gantry_e from '@/images/gantry/gantry_elec.webp'
import roller from '@/images/roller_slider_3.webp'
import Image, { StaticImageData } from 'next/image'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { frontendRoutes } from '@/app/links'
import { useEffect, useState } from 'react'
import { ButtonCallUs } from '@/components/ConnectUsButton'

const steps = [
  'Мы разрабатываем и поставляем продукцию, которая помогает улучшить качество жизни независимо от возраста и физических возможностей',
  'В нашем ассортименте — функциональные устройства, созданные с учётом реальных задач: от повседневного ухода до активного восстановления',
]

interface CaruselItem {
  img: StaticImageData
  title: string
  link: string
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
    title: 'ортофит роллер',
    blueTitle: 'Тренажер активной колясочной езды',
    subtitle:
      'Каждое решение — это шаг к свободе движения, самостоятельности и лучшему качеству жизни',
    description: (
      <>
        <span className='font-bold'>Ортофит роллер</span> — тренажёр, позволяющий проводить
        полноценные тренировки прямо в в кресло-коляске. Он помогает развивать силу, выносливость и
        координацию без необходимости посещения спортзала или помощи извне
      </>
    ),
    img: fitroller,
    caruselItems: [
      {
        img: roller,
        title: 'роллер',
        price: 'ОТ 2 000 000 ₽',
        link: frontendRoutes.fitRoller,
      },
    ],
    placement: 'left',
  },
  {
    title: 'ортофит унилифт',
    blueTitle: 'Средство для помощи в уходе',
    subtitle: 'Мы создаём решения, которые работают на практике — там, где это действительно нужно',
    description: (
      <>
        <span className='font-bold'>Унилифт</span> — универсальное подъёмное кресло, которое
        облегчает перемещение и гигиенический уход. Устройство удобно в использовании, адаптировано
        под разные условия и снижает нагрузку на окружающих
      </>
    ),
    img: unilift,
    caruselItems: [
      {
        img: unilift_standart,
        title: 'Унилифт Стандарт',
        link: frontendRoutes.unilift,
        price: 'ОТ 2 000 000 ₽',
      },
      {
        img: unilift_podves,
        title: 'Унилифт Электро',
        link: frontendRoutes.unilift,
        price: 'ОТ 2 000 000 ₽',
      },
      {
        img: unilift_sanitar,
        title: 'Унилифт Санитар',
        link: frontendRoutes.unilift,
        price: 'ОТ 2 000 000 ₽',
      },
      {
        img: unilift_podves,
        title: 'Унилифт Подвес',
        link: frontendRoutes.unilift,
        price: 'ОТ 2 000 000 ₽',
      },
    ],
    mobImg: unilift,
    placement: 'right',
  },
  {
    title: 'ортофит Ассистент',
    blueTitle: 'Средство для перемещения',
    subtitle: '',
    description: (
      <>
        <span className='font-bold'>Ассистент</span> — свободностоящая П-образная стойка для
        безопасного подъёма и перемещения с точной подачей по каретке верхней балки; позволяет
        работать одному оператору. Версии: механическая и электрическая; полностью разборная, есть
        сумка-кофр.
      </>
    ),
    img: gantry,
    caruselItems: [
      {
        img: gantry_m,
        title: 'Ортофит Ассистент',
        price: 'ОТ 2 000 000 ₽',
        link: frontendRoutes.gantry_m,
      },
      {
        img: gantry_e,
        title: 'Ортофит Ассистент Электра',
        price: 'ОТ 2 000 000 ₽',
        link: frontendRoutes.gantry_e,
      },
    ],
    // mobImg: adyutor,
    placement: 'left',
  },
]

const Card = (item: ProductItem) => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    if (!api) return
    const handler = () => setActiveIndex(api.selectedScrollSnap())
    handler()
    api.on('select', handler)
    return () => {
      api.off('select', handler)
    }
  }, [api])

  return (
    <>
      <div className='mx-auto my-[60px] block w-full max-w-[560px] lg:hidden'>
        <Image
          src={item.mobImg || item.img}
          alt='fitroller_img'
          className='w-full rounded-tr-[65px] object-cover'
        />
      </div>
      <Container className='grid lg:grid-cols-2 lg:gap-[32px]'>
        {item.placement === 'left' && (
          <div className='hidden rounded-tr-[65px] lg:block lg:h-[440px] lg:w-[519px]'>
            <Image src={item.img} alt='fitroller_img' />
          </div>
        )}

        <div>
          <div className='text-[18px] leading-[100%] font-bold uppercase lg:text-[36px]'>
            {item.title}
          </div>
          <div className='text-blue mt-[8px] text-[12px] font-bold uppercase lg:mt-0 lg:text-[18px]'>
            {item.blueTitle}
          </div>
          <div className='text-gray mt-[16px] ml-[25px] text-[14px] leading-[100%] font-bold lg:mt-[45px] lg:ml-0 lg:text-[18px]'>
            {item.subtitle}
          </div>
          <div className='mt-[16px] ml-[25px] text-[14px] leading-[100%] font-light lg:mt-[30px] lg:ml-0 lg:text-[18px]'>
            {item.description}
          </div>

          <Carousel
            className='mt-[16px] ml-[25px] w-[281px] lg:mt-[45px] lg:ml-[43px] lg:w-[430px]'
            opts={{ loop: true }}
            setApi={setApi}
          >
            <CarouselContent>
              {item.caruselItems.map((c, index) => (
                <CarouselItem className='flex gap-[30px]' key={c.title + index}>
                  <Image
                    alt={c.title}
                    src={c.img}
                    className='size-[100px] rounded-tl-[25px] lg:size-[160px]'
                  />
                  <div className='flex flex-col justify-around lg:justify-between'>
                    <div className='text-gray text-[18px] font-bold uppercase lg:text-[20px]'>
                      {c.title}
                    </div>

                    <div className='mt-[16px] hidden items-center gap-[10px] lg:flex'>
                      <Link
                        href={c.link || ''}
                        className='bg-blue flex h-[60px] w-[170px] items-center justify-center rounded-[28px] font-bold text-white uppercase'
                      >
                        Подробнее
                      </Link>
                      <ButtonCallUs />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className='mt-[16px] flex items-center gap-[10px] lg:hidden'>
            <Link
              href={item.caruselItems[activeIndex]?.link || ''}
              className='bg-blue flex h-[60px] w-full items-center justify-center rounded-[28px] font-bold text-white uppercase'
            >
              Подробнее
            </Link>
            <ButtonCallUs />
          </div>
        </div>

        {item.placement === 'right' && (
          <div className='hidden rounded-tl-[65px] lg:block lg:h-[440px] lg:w-[519px]'>
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
        <div className='text-gray mb-[30px] text-center text-[24px] font-bold uppercase lg:mb-[60px] lg:text-left lg:text-[36px]'>
          лучшие решения на рынке
        </div>
        <div className='flex flex-col gap-[30px] lg:flex-row'>
          {steps.map((s, i) => (
            <div className='flex items-center gap-[20px]' key={i}>
              <div className='text-blue text-[60px] leading-[100%] font-light lg:text-[77px]'>
                {i + 1}
              </div>
              <p className='text-[16px] font-light lg:text-[20px]'>{s}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className='mt-[0px] mb-[0px] mb-[60px] flex flex-col lg:mt-[59px] lg:mb-[100px] lg:gap-[59px]'>
        {items.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </>
  )
}
