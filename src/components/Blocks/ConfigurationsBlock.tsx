import Image from 'next/image'

import { Configuration, ConfigurationBlock } from '@/app/types/equipment'

export default function ConfigurationsBlock(props: ConfigurationBlock) {
  const baseConfiguration: Configuration[] = props.configurations

  return (
    <>
      <div className='pb-[16px] text-[20px] font-bold uppercase lg:pb-[30px]'>Конфигурации</div>

      <div className='grid grid-cols-1 gap-[16px] lg:grid-cols-2 lg:gap-[32px]'>
        {baseConfiguration.map((c, index) => (
          <div
            key={index}
            className='bg-light flex h-[160px] gap-[18px] rounded-[40px] shadow-lg lg:h-[220px] lg:gap-[28px] lg:rounded-[65px] lg:p-[30px]'
          >
            <div className='h-full w-[121px] overflow-hidden rounded-l-[26px] lg:size-[160px] lg:rounded-l-[40px]'>
              <Image
                src={c.img.src}
                className='h-full w-full object-cover'
                alt={c.img.alt || 'configuration_image'}
              />
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
    </>
  )
}
