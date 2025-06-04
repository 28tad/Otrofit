import type { Equipment } from '@/app/types/equipment'
import { Container } from '@/components/Container'
import React from 'react'
import { Constructor } from './Constructor'
import left_chair from '@/images/left_chair.webp'
import right_chair from '@/images/right_chair.webp'
import Image from 'next/image'

interface Props {
  data: Equipment
}

export default function Equipment({ data }: Props) {
  const { title, blocks } = data
  return (
    <div className='relative'>
      <Image
        src={left_chair}
        alt='left_chair_bg'
        className='absolute top-[714px] z-[-1] hidden lg:block'
      />
      <Container>
        <div className='pt-[34px] text-[24px] font-bold uppercase lg:pt-[67px] lg:text-[36px]'>
          {title}
        </div>

        {blocks.map((b, index) => (
          <div key={`${title}_${index}`} className='my-[16px] lg:my-[38px]'>
            <Constructor block={b} />
          </div>
        ))}
      </Container>
      <Image
        src={right_chair}
        alt='right_chair_bg'
        className='absolute top-[1187px] right-0 z-[-1] hidden lg:block'
      />
    </div>
  )
}
