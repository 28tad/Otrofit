import { Container } from '@/components/Container'
import Image from 'next/image'
import image from '@/images/section_main.webp'
import image_mob from '@/images/section_main_mob.webp'
import ConnectUsButton from '@/components/ConnectUsButton'

export default function SectionMain() {
  return (
    <>
      <div className='hidden lg:grid grid-cols-2 max-w-[1920px] mx-auto h-[540px] text-white bg-gray'>
        <div className='bg-white rounded-tr-[50px] lg:pt-[34px] lg:pr-[25px]'>
          <Image src={image} alt='fitroller' className='max-h-[500px]' />
        </div>
        <div className='rounded-bl-[50px] relative flex justify-center'>
          <div className='absolute bottom-[-55px] h-[167px] w-full bg-gray rounded-bl-[50px]' />
          <div className='flex flex-col items-end justify-center gap-[25px] z-[1]'>
            <h1 className='font-bold text-[60px] leading-[100%] text-right uppercase mt-[93px]'>
              Мы <br /> разрабатываем <br /> и подбираем <br />
              лучшие решения <br />
              на рынке
            </h1>
            <p className='text-right text-[16px]'>
              Чтобы вы могли жить так, как удобно <br /> именно вам — активно, комфортно и достойно!
            </p>
            <ConnectUsButton className='rounded-[28px] h-[60px] w-[240px]' />
          </div>
        </div>
      </div>

      <div className='block lg:hidden'>
        <div className='h-[210px] bg-gray rounded-b-[50px] w-full'>
          <div className='mx-[45px]'>
            <div className='w-[290px] h-[240px] bg-white rounded-t-[50px] pt-[15px] px-[15px] mx-auto'>
              <div className='rounded-[50px]'>
                <Image src={image_mob} alt='fitroller' className='object-fit rounded-[50px]' width={260} height={230} />
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className='mt-[65px]'>
            <h1 className='text-gray font-bold text-[24px] uppercase text-center'>мы разрабатываем и подбираем лучшие решения на рынке</h1>
            <p className='text-[16px] text-center max-w-[283px] mx-auto my-[30px]'>
              Чтобы вы могли жить так, как удобно именно вам — активно, комфортно и достойно!
            </p>
            <ConnectUsButton className='rounded-[18px] h-[60px] w-full' />
          </div>
        </Container>
      </div>
    </>
  )
}
