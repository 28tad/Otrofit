import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Controller, Control, FieldValues, Path, FieldErrors } from 'react-hook-form'

interface PhoneInputProps<T extends FieldValues> {
  label: string
  name: Path<T>
  control: Control<T>
  errors: FieldErrors<T>
  required?: boolean
}

export const PhoneInputField = <T extends FieldValues>({
  name,
  control,
  label,
  required,
  errors,
}: PhoneInputProps<T>) => {
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
        className='data-[error=true]:border-red flex h-[40px] items-center rounded-[16px] bg-white/80 pr-[22px] pl-[10px] text-black data-[error=true]:border lg:h-[48px]'
      >
        <Controller
          name={name}
          control={control}
          rules={{
            validate: (value) => {
              console.log(value, 'val', isValidPhoneNumber(value))
              return isValidPhoneNumber(value) || 'Введите корректный номер'
            },
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              international
              defaultCountry='RU'
              className='border-gray/30 w-full border-b-1 bg-transparent outline-none'
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </div>
    </div>
  )
}
