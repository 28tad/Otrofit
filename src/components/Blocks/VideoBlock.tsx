function getVideoIdFromLink(link: string) {
  const match = link.match(/\/video\/([a-f0-9]+)/)
  return match ? match[1] : ''
}

export default function VideoBlock({ link }: { link?: string }) {
  return (
    <div className='pb-[30px] lg:pb-[70px]'>
      <div className='block pb-[16px] text-[20px] font-medium uppercase lg:hidden'>
        Видео-отзывы
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[32px]'>
        <div className='bg-light flex h-[193px] items-center justify-center rounded-tr-[42px] lg:h-[300px] lg:rounded-tr-[65px]'>
          {link ? (
            <iframe
              className='bg-light h-full w-full rounded-tr-[42px] lg:rounded-tr-[65px]'
              src={`https://rutube.ru/play/embed/${getVideoIdFromLink(link)}`}
              allow='autoplay; fullscreen'
              allowFullScreen
              sandbox='allow-same-origin allow-scripts allow-popups allow-presentation'
              referrerPolicy='strict-origin-when-cross-origin'
            />
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='56'
              height='63'
              viewBox='0 0 56 63'
              fill='none'
            >
              <path
                d='M54.375 29.4516C56 30.3898 56 32.7353 54.375 33.6735L4.40625 62.523C2.78125 63.4611 0.749997 62.2884 0.749997 60.412L0.75 2.71309C0.75 0.836701 2.78125 -0.336049 4.40625 0.602145L54.375 29.4516Z'
                fill='white'
              />
            </svg>
          )}
        </div>
        <div className='flex items-center'>
          <div>
            <div className='hidden text-[20px] font-medium uppercase lg:block'>Видео-отзывы</div>
            <div className='mt-[16px] text-[18px] font-light lg:mt-[24px]'>
              Безопасная тренировка прямо в инвалидной коляске без дополнительной фиксации
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
