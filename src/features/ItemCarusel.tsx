'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

export function ItemCarusel({ items }: { items: StaticImageData[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [slides, setSlides] = useState<StaticImageData[]>([])

  useEffect(() => {
    if (items.length <= 4 && items.length !== 1) {
      setSlides([...items, ...items])
    } else {
      setSlides(items)
    }
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      {/* main slide */}
      <div className='flex h-[340px] w-[340px] lg:w-[520px] lg:h-[440px] flex items-center justify-center rounded-tl-[65px] mx-auto'>
        {slides[current] && <Image src={slides[current]} alt='slide_img' className='h-full lg:max-h-[440px] w-fit' width={520} height={440} />}
      </div>
      {slides.length === 1 && (
        <div className='block lg:hidden w-[165px] h-[183px] flex items-center justify-center p-[10px] bg-gray'>
          <Image src={slides[current]} alt='slide_img' className='max-h-[183px] w-fit' />
        </div>
      )}
      {slides.length > 1 && (
        <Carousel opts={{ loop: true }} setApi={setApi} className='max-w-[250px] lg:max-w-[430px] ml-[50px]  mt-[18px] lg:mt-[33px] mx-auto'>
          <CarouselContent>
            {slides.map((item, index) => (
              <CarouselItem key={index} className='basis-1/3 cursor-pointer' onClick={() => setCurrent(index)}>
                <div
                  data-active={index === current}
                  className='flex items-center justify-center size-[70px] lg:size-[120px] rounded-tl-[15px] lg:rounded-tl-[24px]'
                >
                  <Image src={item} alt={`carusel_item_${index}`} className='size-[70px] lg:size-[120px]' />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className=''>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      )}
    </>
  )
}
