import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title?: string
}

export const Story = ({ title, children }: Props) => {
  return (
    <div className='bg-blue px-[7px] lg:px-[14px] rounded-[15px] lg:rounded-[24px]'>
      {title && <div className='font-bold text-[16px] lg:text-[18px]'>{title}</div>}
      <div className='bg-light px-[11px] lg:px-[27px] font-light text-[16px] lg:text-[18px] py-[8px] lg:py-[15px]'>{children}</div>
    </div>
  )
}
