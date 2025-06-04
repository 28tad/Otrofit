import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title?: string
}

export const Paragraph = ({ children, title }: Props) => {
  return (
    <>
      {title && <div className='text-[20px] font-bold uppercase'>{title}</div>}
      <div className='text-[16px] font-light lg:text-[18px]'>{children}</div>
    </>
  )
}
