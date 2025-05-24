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

export const Input = <T extends FieldValues>({ name, register, errors, required, label }: InputProps<T>) => {
  const hasError = !!errors[name]

  return (
    <div className='flex flex-col gap-[6px]'>
      <label data-hasError={hasError} className='text-[14px] lg:text-[16px] font-normal data-[hasError=true]:text-red'>
        {label} {required ? <span className='text-blue'>*</span> : null}
      </label>
      <div
        data-hasError={hasError}
        className='bg-white/80 text-black rounded-[16px] h-[40px] lg:h-[48px] px-[22px] flex items-center  data-[hasError=true]:border data-[hasError=true]:border-red'
      >
        <input {...register(name)} className='bg-transparent border-b-1 border-gray/30 outline-none w-full' />
      </div>
      {/* {errors[name] && <div className='text-red uppercase text-[12px] mt-[5px]'>{String(errors[name]?.message)}</div>} */}
    </div>
  )
}
