'use client'

import { Container } from '@/components/Container'
import bg from '@/images/section_os_bg.webp'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { sendTgMessage } from '@/lib/api'
import { orderTemplate } from './TelegramTemplates.ts'

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

const schema = z.object({
  fio: z.string().min(5, 'заполните поле'),
  product: z.string().min(1, 'Выберите продукт'),
  phone: z.string().regex(phoneRegex, 'заполните поле'),
  mail: z.string().email('заполните поле'),
  city: z.string().optional(),
})

export type ContactForm = z.infer<typeof schema>

export default function SectionOS() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const { toast } = await import('react-toastify')
    try {
      await sendTgMessage({ message: orderTemplate(data) })
      toast.success('Успешно отправлено')
      reset()
    } catch (error) {
      toast.error((error as Error).message || 'Что-то пошло не так...')
    }
  }

  return (
    <div className='relative h-[618px] lg:h-[458px] overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <Image src={bg} alt='fitroller_bg' fill className='object-cover object-center lg:object-[center_65%] opacity-100' quality={100} priority />
        <div className='absolute inset-0 bg-black/40' />
      </div>

      <Container className='h-full pt-[40px] lg:py-[40px] lg:py-[67px] text-white'>
        <div
          className='bg-black/50 h-full rounded-t-[65px] py-[14px] px-[15px] lg:py-[45px] lg:px-[52px] mx-[20px] lg:mx-0'
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <div className='uppercase font-bold text-[24px] mx-auto w-[140px] lg:w-full lg:text-[30px] leading-[110%] lg:leading-[100%] text-center'>
            связаться с нами
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 lg:grid-cols-5 gap-[10px] lg:gap-[24px] mt-[16px] lg:mt-[20px]'>
            <div className='lg:col-span-2'>
              <Input<ContactForm> name='fio' register={register} errors={errors} label='ФИО' required />
            </div>
            <div className='lg:col-span-3'>
              <Select<ContactForm>
                label='Продукты'
                options={[
                  { value: 'FITRoller', label: 'FITRoller' },
                  { value: 'Унилифт', label: 'Унилифт' },
                ]}
                required
                name='product'
                register={register}
                errors={errors}
              />
            </div>

            <div className='lg:col-span-1'>
              <Input<ContactForm> name='phone' register={register} errors={errors} label='Телефон' required />
            </div>
            <div className='lg:col-span-2'>
              <Input<ContactForm> name='mail' register={register} errors={errors} label='E-mail' required />
            </div>
            <div className='lg:col-span-1'>
              <Input<ContactForm> name='city' register={register} errors={errors} label='Город' />
            </div>
            <div className='lg:col-span-1 flex flex-row items-end'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='mt-[8px] lg:mt-0 bg-blue w-full rounded-[18px] lg:rounded-[24px] text-[16px] uppercase font-bold h-[60px] lg:h-[48px] disabled:opacity-50 disabled:cursor-not-allowed!'
              >
                отправить
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}
