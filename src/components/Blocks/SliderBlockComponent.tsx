import type { SliderBlock } from '@/app/types/equipment'
import ConnectUsButton from '@/components/ConnectUsButton'
import { Story } from '@/components/Blocks/Story'
import { ItemCarousel } from '@/features/ItemCarousel'

import React from 'react'
import { List } from './List'

export const SliderBlockComponent = (props: SliderBlock) => {
  const { images, price, list, story } = props

  const duplicatedImages = images.length <= 4 ? [...images, ...images] : images
  return (
    <div className='grid grid-cols-1 gap-[29px] lg:grid-cols-2'>
      <div>
        <ItemCarousel items={duplicatedImages} />
      </div>
      <div>
        {price && (
          <div className='text-blue mb-[18px] flex justify-between text-[20px] font-bold uppercase italic lg:text-[39px]'>
            цена
            <div>{price}</div>
          </div>
        )}
        <Story>{story.content}</Story>
        <div className='my-[18px] lg:mb-[33px]'>
          <List {...list} />
        </div>
        <div className='flex lg:justify-end'>
          <ConnectUsButton />
        </div>
      </div>
    </div>
  )
}
