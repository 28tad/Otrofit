import { Controller, Control, FieldValues, Path, FieldErrors } from 'react-hook-form'
import SelectWrapper from './SelectWrapper'

export interface OptionType {
  label: string
  value: string
}

export interface GroupedOption {
  label: string
  options: OptionType[]
}

export type SelectOption = OptionType | GroupedOption

export interface SelectProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  required?: boolean
  options: SelectOption[]
  errors: FieldErrors<T>
  isCreatable?: boolean
}

export const Select = <T extends FieldValues>({
  name,
  control,
  label,
  required,
  options,
  errors,
  isCreatable,
}: SelectProps<T>) => {
  const hasError = !!errors[name]

  return (
    <div className='flex flex-col gap-[6px]'>
      <label
        data-error={hasError}
        className='data-[error=true]:text-red text-[14px] font-normal lg:text-[16px]'
      >
        {label} {required && <span className='text-blue'>*</span>}
      </label>
      <div
        data-error={hasError}
        className='data-[error=true]:border-red flex h-[40px] items-center rounded-[16px] bg-white/80 px-[22px] text-black data-[error=true]:border lg:h-[48px]'
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <SelectWrapper
              {...field}
              options={options}
              isCreatable={isCreatable}
              value={
                (Array.isArray(options)
                  ? options
                      .flatMap((opt) => ('options' in opt ? opt.options : [opt]))
                      .find((opt) => opt.value === field.value)
                  : null) || (isCreatable ? { label: field.value, value: field.value } : null)
              }
              onChange={(option) => field.onChange(option?.value ?? '')}
              classNamePrefix='react-select'
              placeholder=''
              className='border-gray/30 w-full border-b-1 bg-transparent outline-none'
              isSearchable
              menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
              formatCreateLabel={(inputValue) =>
                `Свой ${label.toLocaleLowerCase()} "${inputValue}"`
              }
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                  minHeight: 'unset',
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 1,
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? '#e5e5e5' : 'white',
                  color: 'black',
                }),
              }}
            />
          )}
        />
      </div>
    </div>
  )
}
