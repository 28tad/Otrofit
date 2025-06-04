import type { ImageBlock } from '@/app/types/equipment'
import Image from 'next/image'
import React from 'react'

export default function ImageBlock(props: ImageBlock) {
  const { src, alt, title, className } = props
  return (
    <>
      {title && (
        <div className='pt-[60px] pb-[16px] text-[20px] font-bold uppercase lg:pt-[24px] lg:pb-[30px]'>
          {title}
        </div>
      )}
      <div className='mt-[16px] mb-[67px] flex justify-center lg:mt-[38px] lg:mb-[72px]'>
        <Image
          src={src}
          alt={alt || 'image'}
          className={className || 'h-[249px] w-[336px] lg:h-[403px] lg:w-[543px]'}
        />
      </div>
    </>
  )
}
