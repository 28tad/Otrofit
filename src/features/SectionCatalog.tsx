import { Container } from '@/components/Container'
import chair from '@/images/chair_img.webp'
import left_chair from '@/images/left_chair.webp'
import right_chair from '@/images/right_chair.webp'
import fitroller from '@/images/fitroller_img.webp'
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
    description: 'Подвес мобильный терапевтический',
    href: frontendRoutes.unilift,
    img: chair,
  },
  {
    title: 'ортофит роллер',
    description: 'Тренажер активной колясочной езды',
    href: frontendRoutes.fitRoller,
    img: fitroller,
  },
]

export default function SectionCatalog() {
  return (
    <div className='relative'>
      <Image src={left_chair} alt='left_chair_bg' className='absolute z-[-1] hidden lg:block' />
      <Container className='mt-[48px] mb-[90px] lg:mt-[150px] lg:mb-[73px]'>
        <div className='text-center text-[24px] font-bold uppercase lg:text-[36px]'>каталог</div>
        <div className='mt-[30px] flex justify-center gap-[24px] lg:mt-[60px]'>
          {items.map((i) => {
            return (
              <div
                key={i.title}
                className='bg-light relative flex h-[272px] w-[155px] flex-col items-center justify-center gap-[18px] rounded-t-[25px] rounded-bl-[25px] pt-[15px] pb-[42px] lg:h-[450px] lg:w-[250px] lg:gap-[23px] lg:rounded-t-[50px] lg:rounded-bl-[50px] lg:px-[45px] lg:py-[44px]'
              >
                <Image src={i.img} alt={i.title} className='size-[87px] lg:size-[143px]' />
                <div className='text-gray text-[16px] font-bold uppercase lg:text-[15px]'>
                  {i.title}
                </div>
                <div className='text-center text-[14px] lg:text-[15px]'>{i.description}</div>
                <Link
                  href={i.href}
                  className='bg-blue hidden size-[60px] items-center justify-center rounded-[100%] lg:flex'
                >
                  <ArrowRight />
                </Link>
                <Link
                  href={i.href}
                  className='bg-blue absolute bottom-[-30px] flex size-[60px] items-center justify-center rounded-[100%] lg:hidden'
                >
                  <ArrowRight />
                </Link>
              </div>
            )
          })}
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
