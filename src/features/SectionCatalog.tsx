import { Container } from '@/components/Container'
import chair from '@/images/chair_img.webp'
import left_chair from '@/images/left_chair.webp'
import right_chair from '@/images/right_chair.webp'
import fitroller from '@/images/fitroller_img.webp'
import gantry from '@/images/gantry/gantry_catalog.webp'
import gantry_e from '@/images/gantry/gantry_e.webp'
import transformer from '@/images/transformer/transformer_catalog.webp'
import Image from 'next/image'
import Link from 'next/link'
import { frontendRoutes } from '@/app/links'

const ArrowRight = () => {
  return (
    <svg width='24' height='15' viewBox='0 0 24 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M23.1629 8.05158C23.529 7.68547 23.529 7.09188 23.1629 6.72576L17.1967 0.759546C16.8306 0.393429 16.237 0.393429 15.8709 0.759546C15.5048 1.12566 15.5048 1.71925 15.8709 2.08537L21.1742 7.38867L15.8709 12.692C15.5048 13.0581 15.5048 13.6517 15.8709 14.0178C16.237 14.3839 16.8306 14.3839 17.1967 14.0178L23.1629 8.05158ZM0.3125 7.38867V8.32617H22.5V7.38867V6.45117H0.3125V7.38867Z'
        fill='#34353A'
      />
    </svg>
  )
}

const items = [
  {
    title: 'унилифт',
    description: 'Средство для помощи в уходе',
    href: frontendRoutes.unilift,
    img: chair,
  },
  {
    title: 'ортофит роллер',
    description: 'Тренажер активной колясочной езды',
    href: frontendRoutes.fitRoller,
    img: fitroller,
  },
  {
    title: 'Ортофит Ассистент',
    description: 'Мобильная стойка',
    href: frontendRoutes.gantry_m,
    img: gantry,
  },
  {
    title: 'Ортофит Ассистент Электра',
    description: 'Мобильная стойка',
    href: frontendRoutes.gantry_e,
    img: gantry_e,
  },
  {
    title: 'ортофит кресло-трансформер',
    description: 'Уход и безопасная пересадка',
    href: frontendRoutes.transformer,
    img: transformer,
  },
]

export default function SectionCatalog() {
  return (
    <div className='relative'>
      <Image src={left_chair} alt='left_chair_bg' className='absolute z-[-1] hidden lg:block' />
      <Container className='mt-[48px] mb-[90px] lg:mt-[150px] lg:mb-[73px]'>
        <div className='text-center text-[24px] font-bold uppercase lg:text-[36px]'>каталог</div>

        <div className='mt-[30px] flex flex-wrap justify-center gap-x-[24px] gap-y-[60px] lg:mt-[60px] lg:flex-nowrap'>
          {items.map((i) => (
            <Link
              key={i.title}
              href={i.href}
              aria-label={i.title}
              className='bg-light focus-visible:ring-blue/70 relative flex h-[272px] w-[155px] shrink-0 flex-col items-center gap-[14px] rounded-t-[25px] rounded-bl-[25px] pt-[15px] pb-[42px] focus:outline-none focus-visible:ring-2 lg:h-[450px] lg:w-[250px] lg:gap-[18px] lg:rounded-t-[50px] lg:rounded-bl-[50px] lg:px-[45px] lg:py-[44px]'
            >
              <div className='flex h-[87px] items-end justify-center lg:h-[143px]'>
                <Image src={i.img} alt={i.title} className='max-h-full w-auto' />
              </div>

              <div className='text-gray flex h-[44px] items-center justify-center overflow-hidden px-2 text-center text-[16px] leading-[1.15] font-bold break-words uppercase lg:h-[48px] lg:text-[15px]'>
                <span> {i.title} </span>
              </div>

              <div className='flex h-[40px] items-center justify-center overflow-hidden px-2 text-center text-[14px] leading-[1.25] break-words lg:h-[44px] lg:text-[15px]'>
                <span className='line-clamp-2'>{i.description}</span>
              </div>

              <div className='bg-blue pointer-events-none mt-auto hidden size-[60px] items-center justify-center rounded-[100%] lg:flex'>
                <ArrowRight />
              </div>

              <div className='bg-blue pointer-events-none absolute bottom-[-30px] left-1/2 flex size-[60px] -translate-x-1/2 items-center justify-center rounded-[100%] lg:hidden'>
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <Image
        src={right_chair}
        alt='right_chair_bg'
        className='absolute right-0 bottom-[-455px] z-[-1] hidden lg:block'
      />
    </div>
  )
}
