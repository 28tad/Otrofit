import { ReactNode } from "react"

interface Props {
  items: string[] | ReactNode[]
  listDecimal?: boolean
}

export const List = ({ items, listDecimal }: Props) => {
  return (
    <ul data-decimal={listDecimal} className='font-light list-disc text-[14px] lg:text-[18px] pl-[20px] marker:text-blue data-[decimal=true]:list-none data-[decimal=true]:pl-0'>
      {items.map((i, index) => (
        <li key={index}>
          {listDecimal && <span className="text-blue font-bold pr-[16px]">{index +1}</span>}{i}
        </li>
      ))}
    </ul>
  )
}
