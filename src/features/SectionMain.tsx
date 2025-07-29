import { Container } from '@/components/Container'
import Image from 'next/image'
import image from '@/images/section_main.webp'
import image_mob from '@/images/section_main_mob.webp'
import ConnectUsButton from '@/components/ConnectUsButton'

export default function SectionMain() {
  return (
    <>
      {/* desktop */}
      <div className='bg-gray mx-auto hidden h-[540px] max-w-[1920px] grid-cols-2 text-white lg:grid'>
        <div className='rounded-tr-[50px] bg-white lg:pt-[34px] lg:pr-[25px]'>
          <Image src={image} alt='fitroller' />
        </div>
        <div className='relative flex justify-center rounded-bl-[50px]'>
          <div className='bg-gray absolute bottom-[-55px] h-[167px] w-full rounded-bl-[50px]' />
          <div className='z-[1] flex flex-col items-end justify-center gap-[25px]'>
            <h1 className='mt-[93px] text-right text-[60px] leading-[100%] font-bold uppercase'>
              Мы <br /> разрабатываем <br /> и подбираем <br />
              лучшие решения <br />
              на рынке
            </h1>
            <p className='text-right text-[16px]'>
              Чтобы вы могли жить так, как удобно <br /> именно вам — активно, комфортно и достойно!
            </p>
            <ConnectUsButton />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='block lg:hidden'>
        <div className='bg-gray h-[210px] w-full rounded-b-[50px]'>
          <div className='mx-[45px]'>
            <div className='mx-auto h-[240px] w-[290px] rounded-t-[50px] bg-white px-[15px] pt-[15px]'>
              <Image
                src={image_mob}
                alt='fitroller'
                className='h-[230px] w-[260px] object-contain'
              />
            </div>
          </div>
        </div>
        <Container>
          <div className='mt-[65px]'>
            <h1 className='text-gray mx-auto w-[283px] text-center text-[24px] leading-[100%] font-bold uppercase'>
              мы разрабатываем и подбираем лучшие решения на рынке
            </h1>
            <p className='mx-auto my-[30px] w-[283px] text-[16px] font-light'>
              Чтобы вы могли жить так, как удобно именно вам — активно, комфортно и достойно!
            </p>
            <ConnectUsButton />
          </div>
        </Container>
      </div>
    </>
  )
}
