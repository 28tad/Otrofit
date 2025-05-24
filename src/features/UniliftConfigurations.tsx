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
  description: <>Уникальность и главное преимущество <span className='font-bold'>унилифт</span></>,
  price: 'ОТ 2 000 000 ₽',
  img: empty,
}

const configurations: Configuration[] = new Array(6).fill(baseConfiguration)

export default function UniliftConfigurations() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[32px]'>
      {configurations.map((c, index) => (
        <div key={index} className='bg-light rounded-[40px] lg:rounded-[65px] lg:p-[30px] flex gap-[18px] lg:gap-[28px] h-[160px] lg:h-[220px]'>
          <div className='h-full w-[121px] lg:size-[160px] rounded-l-[26px] lg:rounded-l-[40px]'>
            <Image
              src={c.img}
              className='h-full w-full lg:size-[160px]'
              alt={'unilift_img'} />
          </div>
          <div className='flex flex-col justify-between py-[10px] lg:py-0 pr-[20px] lg:pr-0 max-w-[174px] lg:max-w-[270px]'>
            <div className='flex flex-col text-[16px] lg:text-[20px] font-bold'>
              {c.title}
              <span className='text-[10px] lg:text-[12px] text-blue uppercase'>{c.subTitle}</span>
            </div>
            <div className='text-[14px] lg:text-[18px] font-light leading-[100%]'>{c.description}</div>
            <div className='text-[20px] lg:text-[26px] italic text-blue font-bold'>{c.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
