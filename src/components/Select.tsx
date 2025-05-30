'use client'

import { useEffect, useRef, useState } from 'react'
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

interface InputProps<T extends FieldValues> {
  label: string
  options: { value: string; label: string }[]
  defaultValue?: string
  name: Path<T>
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  placeholder?: string
  className?: string
  required?: boolean
}

export const Select = <T extends FieldValues>({
  name,
  register,
  options,
  required,
  errors,
  label,
  defaultValue = '',
}: InputProps<T>) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const hasError = !!errors[name]

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
    register(name).onChange({ target: { value, name: name } })
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selectedOption = options.find((opt) => opt.value === selectedValue)

  return (
    <div className='relative flex flex-col gap-[6px]' ref={selectRef}>
      <label
        data-haserror={hasError}
        className='data-[haserror=true]:text-red text-[14px] font-normal lg:text-[16px]'
      >
        {label} {required ? <span className='text-blue'>*</span> : null}
      </label>
      <div
        data-haserror={hasError}
        className='data-[haserror=true]:border-red flex h-[40px] cursor-pointer items-center rounded-[16px] bg-white/80 px-[22px] text-black data-[haserror=true]:border lg:h-[48px]'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='border-gray/30 text-gray w-full border-b bg-transparent outline-none'>
          {selectedOption?.label || 'Выберите продукт'}
        </div>
        <svg
          className='ml-[5px] opacity-30 transition-all transition-transform duration-300 ease-in-out data-[open=true]:rotate-180'
          width='16'
          height='16'
          data-open={isOpen}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M7 10l5 5 5-5' stroke='currentColor' strokeWidth='2' />
        </svg>
      </div>

      {isOpen && (
        <div className='text-gray/80 absolute top-full right-0 left-0 z-10 mt-1 overflow-hidden rounded-[16px] bg-white shadow-lg'>
          {options.map((option) => (
            <div
              key={option.value}
              className={`hover:bg-gray/30 cursor-pointer px-[22px] py-[10px] ${selectedValue === option.value ? 'bg-gray-200' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
