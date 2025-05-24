export default function VideoBlock() {
  return (
    <>
      <div className='block lg:hidden text-[20px] uppercase font-medium pb-[16px]'>Видео-отзывы</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[32px]'>
        <div className='h-[193px] lg:h-[300px] bg-light rounded-tr-[42px] lg:rounded-tr-[65px] flex items-center justify-center'>
          <svg xmlns='http://www.w3.org/2000/svg' width='56' height='63' viewBox='0 0 56 63' fill='none'>
            <path
              d='M54.375 29.4516C56 30.3898 56 32.7353 54.375 33.6735L4.40625 62.523C2.78125 63.4611 0.749997 62.2884 0.749997 60.412L0.75 2.71309C0.75 0.836701 2.78125 -0.336049 4.40625 0.602145L54.375 29.4516Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='flex items-center'>
          <div>
            <div className='hidden lg:block text-[20px] uppercase font-medium'>Видео-отзывы</div>
            <div className='text-[18px] mt-[16px] lg:mt-[24px] font-light'>
              Безопасная тренировка прямо в инвалидной коляске без дополнительной фиксации
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
