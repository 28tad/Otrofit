import { FieldErrors, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface InputProps<T extends FieldValues> {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  placeholder?: string
  className?: string
  required?: boolean
}

export const Input = <T extends FieldValues>({
  name,
  register,
  errors,
  required,
  label,
}: InputProps<T>) => {
  const hasError = !!errors[name]
  return (
    <div className='flex flex-col gap-[6px]'>
      <label
        data-haserror={hasError}
        className='data-[haserror=true]:text-red text-[14px] font-normal lg:text-[16px]'
      >
        {label} {required ? <span className='text-blue'>*</span> : null}
      </label>
      <div
        data-haserror={hasError}
        className='data-[haserror=true]:border-red flex h-[40px] items-center rounded-[16px] bg-white/80 px-[22px] text-black data-[haserror=true]:border lg:h-[48px]'
      >
        <input
          {...register(name)}
          className='border-gray/30 w-full border-b-1 bg-transparent outline-none'
        />
      </div>
      {/* {errors[name] && <div className='text-red uppercase text-[12px] mt-[5px]'>{String(errors[name]?.message)}</div>} */}
    </div>
  )
}
