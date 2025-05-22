import { Container } from '@/components/Container'
import Image from 'next/image'
import image from '@/images/section_main.webp'

export default function Home() {
  return (
    <div className='grid grid-cols-2 bg-gray max-w-[1920px] mx-auto h-[500px]'>
      <div className='bg-white  lg:pt-[35px] lg:pr-[25px] rounded-tr-[50px]'>
        {/* <Image src={image} alt='unilift' className='max-h-[800px] w-full' /> */}
      </div>
      <div className='relative'>
        <div className='absolute bg-gray w-full h-[67px] bottom-[-67px] rounded-bl-[50px]'/>
      </div>
    </div>
  )
}
