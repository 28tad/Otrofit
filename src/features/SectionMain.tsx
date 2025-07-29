import { Container } from '@/components/Container'
import Image from 'next/image'
import image from '@/images/section_main.webp'
import image_mob from '@/images/section_main_mob.webp'
import ConnectUsButton from '@/components/ConnectUsButton'

export default function SectionMain() {
  return (
    <>
      {/* desktop */}
      <div className='mx-auto grid hidden h-[650px] max-w-[1920px] grid-cols-2 lg:grid'>
        <div className='bg-gray'>
          <div className='h-full w-full rounded-tr-[80px] bg-white pt-[40px] pr-[40px] pb-[60px]'>
            <div className='bg-blue h-full overflow-hidden rounded-tr-[80px] rounded-br-[80px]'>
              <Image src={image} alt='fitroller' className='h-full w-full object-cover' />
            </div>
          </div>
        </div>
        <div className='bg-gray flex justify-center rounded-bl-[80px] text-white'>
          <div className='flex flex-col items-end gap-[40px]'>
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
        <div className='bg-gray h-[210px] w-full rounded-b-[80px]'>
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
