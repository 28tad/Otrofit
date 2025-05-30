import { PropsWithChildren } from 'react'

export const Paragraph = ({ children }: PropsWithChildren) => {
  return (
    <div className='py-[16px] text-[16px] font-light lg:py-[30px] lg:text-[18px]'>{children}</div>
  )
}
