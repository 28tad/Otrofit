import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title?: string
}

export const Story = ({ title, children }: Props) => {
  return (
    <div className='bg-blue rounded-[15px] px-[7px] lg:rounded-[24px] lg:px-[14px]'>
      {title && <div className='text-[16px] font-bold lg:text-[18px]'>{title}</div>}
      <div className='bg-light px-[11px] py-[8px] text-[16px] font-light lg:px-[27px] lg:py-[15px] lg:text-[18px]'>
        {children}
      </div>
    </div>
  )
}
