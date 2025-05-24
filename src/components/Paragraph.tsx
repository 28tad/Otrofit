import { PropsWithChildren } from 'react'

export const Paragraph = ({ children }: PropsWithChildren) => {
  return <div className='text-[16px] lg:text-[18px] font-light py-[16px] lg:py-[30px]'>{children}</div>
}
