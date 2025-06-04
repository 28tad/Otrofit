import { ReactNode } from 'react'

interface Props {
  items: string[] | ReactNode[]
  listDecimal?: boolean
  title?: string
}

export const List = ({ items, listDecimal, title }: Props) => {
  return (
    <>
      <div className='pt-[60px] pb-[16px] text-[20px] font-bold uppercase lg:pt-[24px] lg:pb-[30px]'>
        {title}
      </div>
      <ul
        data-decimal={listDecimal}
        className='marker:text-blue list-disc pl-[20px] text-[14px] font-light data-[decimal=true]:list-none data-[decimal=true]:pl-0 lg:text-[18px]'
      >
        {items.map((i, index) => (
          <li key={index}>
            {listDecimal && <span className='text-blue pr-[16px] font-bold'>{index + 1}</span>}
            {i}
          </li>
        ))}
      </ul>
    </>
  )
}
