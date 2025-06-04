import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title?: string
}

export const Paragraph = ({ children, title }: Props) => {
  return (
    <>
      {title && (
        <div className='mt-[60px] text-[20px] font-bold uppercase lg:mt-[120px]'>{title}</div>
      )}
      <div className='py-[16px] text-[16px] font-light lg:py-[30px] lg:text-[18px]'>{children}</div>
    </>
  )
}
