'use client'

import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Props as ReactSelectProps, GroupBase } from 'react-select'

export interface OptionType {
  label: string
  value: string
}

type SelectPropsTyped = ReactSelectProps<OptionType, false, GroupBase<OptionType>>

const Select = dynamic<SelectPropsTyped>(() => import('react-select'), { ssr: false })
const Creatable = dynamic<SelectPropsTyped>(() => import('react-select/creatable'), { ssr: false })

interface SelectWrapperProps extends SelectPropsTyped {
  isCreatable?: boolean
  formatCreateLabel?: (inputValue: string) => string
}

const SelectWrapper: FC<SelectWrapperProps> = ({ isCreatable, ...props }) => {
  const Component = isCreatable ? Creatable : Select
  return <Component {...props} />
}

export default SelectWrapper
