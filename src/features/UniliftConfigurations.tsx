import Image, { StaticImageData } from 'next/image'
import empty from '@/images/unilift_configuration.webp'
import { ReactElement } from 'react'

interface Configuration {
  title: string
  subTitle: string
  description: string | ReactElement
  price: string
  img: StaticImageData
}

const baseConfiguration: Configuration = {
  title: 'Унилифт',
  subTitle: 'Подвес мобильный терапевтический',
  description: (
    <>
      Уникальность и главное преимущество <span className='font-bold'>унилифт</span>
    </>
  ),
  price: 'ОТ 2 000 000 ₽',
  img: empty,
}

const configurations: Configuration[] = new Array(6).fill(baseConfiguration)

export default function UniliftConfigurations() {
  return (
    <div className='grid grid-cols-1 gap-[16px] lg:grid-cols-2 lg:gap-[32px]'>
      {configurations.map((c, index) => (
        <div
          key={index}
          className='bg-light flex h-[160px] gap-[18px] rounded-[40px] lg:h-[220px] lg:gap-[28px] lg:rounded-[65px] lg:p-[30px]'
        >
          <div className='h-full w-[121px] rounded-l-[26px] lg:size-[160px] lg:rounded-l-[40px]'>
            <Image src={c.img} className='h-full w-full lg:size-[160px]' alt={'unilift_img'} />
          </div>
          <div className='flex max-w-[174px] flex-col justify-between py-[10px] pr-[20px] lg:max-w-[270px] lg:py-0 lg:pr-0'>
            <div className='flex flex-col text-[16px] font-bold lg:text-[20px]'>
              {c.title}
              <span className='text-blue text-[10px] uppercase lg:text-[12px]'>{c.subTitle}</span>
            </div>
            <div className='text-[14px] leading-[100%] font-light lg:text-[18px]'>
              {c.description}
            </div>
            <div className='text-blue text-[20px] font-bold italic lg:text-[26px]'>{c.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
