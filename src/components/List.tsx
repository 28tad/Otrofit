import { ReactNode } from 'react'

interface Props {
  items: string[] | ReactNode[]
  listDecimal?: boolean
}

export const List = ({ items, listDecimal }: Props) => {
  return (
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
  )
}
