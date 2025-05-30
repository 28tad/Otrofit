import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  className?: string
  id?: string
}

export function Container(props: IProps) {
  return (
    <div
      id={props.id}
      className={`xs:px-[20px] mx-auto md:max-w-[560px] md:px-0 lg:max-w-[1070px] ${props.className}`}
    >
      {props.children}
    </div>
  )
}
