import type { Equipment } from '@/app/types/equipment'
import { Container } from '@/components/Container'
import React from 'react'
import { Constructor } from './Constructor'

interface Props {
  data: Equipment
}

export default function Equipment({ data }: Props) {
  const { title, blocks } = data
  return (
    <>
      <Container>
        <div className='pt-[34px] pb-[16px] text-[24px] font-bold uppercase lg:pt-[67px] lg:pb-[34px] lg:text-[36px]'>
          {title}
        </div>

        {blocks.map((b, index) => (
          <Constructor block={b} key={`${title}_${index}`} />
        ))}
      </Container>
    </>
  )
}
