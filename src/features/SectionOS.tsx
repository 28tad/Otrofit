'use client'

import { Container } from '@/components/Container'
import bg from '@/images/section_os_bg.webp'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { sendTgMessage } from '@/lib/api'
import { orderTemplate } from './TelegramTemplates.ts'
import { anchors } from '@/app/links'
import { Select } from '@/components/Select/Select'
import { cityOptions } from '@/components/Select/cityOptions'

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
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const { toast } = await import('react-toastify')
    try {
      await sendTgMessage({ message: orderTemplate(data) })
      toast.success('Успешно отправлено')
      reset({
        city: '',
      })
    } catch (error) {
      toast.error((error as Error).message || 'Что-то пошло не так...')
    }
  }

  return (
    <div className='relative h-[618px] overflow-hidden lg:h-[458px]' id={anchors.os}>
      <div className='absolute inset-0 -z-10'>
        <Image
          src={bg}
          alt='fitroller_bg'
          fill
          className='object-cover object-center opacity-100 lg:object-[center_65%]'
          quality={100}
          priority
        />
        <div className='absolute inset-0 bg-black/40' />
      </div>

      <Container className='h-full pt-[40px] text-white lg:py-[40px] lg:py-[67px]'>
        <div
          className='mx-[20px] h-full rounded-t-[65px] bg-black/50 px-[15px] py-[14px] lg:mx-0 lg:px-[52px] lg:py-[45px]'
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <div className='mx-auto w-[140px] text-center text-[24px] leading-[110%] font-bold uppercase lg:w-full lg:text-[30px] lg:leading-[100%]'>
            связаться с нами
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-[16px] grid grid-cols-1 gap-[10px] lg:mt-[20px] lg:grid-cols-5 lg:gap-[24px]'
          >
            <div className='lg:col-span-2'>
              <Input<ContactForm>
                name='fio'
                register={register}
                errors={errors}
                label='ФИО'
                required
              />
            </div>
            <div className='lg:col-span-3'>
              <Select<ContactForm>
                name='product'
                control={control}
                label='Продукты'
                required
                options={[
                  { value: 'FITRoller', label: 'FITRoller' },
                  { value: 'Унилифт', label: 'Унилифт' },
                ]}
                errors={errors}
              />
            </div>

            <div className='lg:col-span-1'>
              <Input<ContactForm>
                name='phone'
                register={register}
                errors={errors}
                label='Телефон'
                required
              />
            </div>
            <div className='lg:col-span-2'>
              <Input<ContactForm>
                name='mail'
                register={register}
                errors={errors}
                label='E-mail'
                required
              />
            </div>
            <div className='lg:col-span-1'>
              <Select<ContactForm>
                name='city'
                control={control}
                label='Город'
                options={cityOptions}
                errors={errors}
                isCreatable
              />
            </div>
            <div className='flex flex-row items-end lg:col-span-1'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-blue mt-[8px] h-[60px] w-full rounded-[18px] text-[16px] font-bold uppercase disabled:cursor-not-allowed! disabled:opacity-50 lg:mt-0 lg:h-[48px] lg:rounded-[24px]'
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
