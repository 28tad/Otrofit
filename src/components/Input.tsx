interface Props {
  label: string
}

export default function Input({ label }: Props) {
  return (
    <div className='flex flex-col gap-[6px]'>
      <label className="text-[14px] lg:text-[16px] font-normal">{label}</label>
      <div className='bg-white/80 text-black rounded-[16px] h-[40px] lg:h-[48px] px-[22px] flex items-center'>
        <input className='bg-transparent border-b-1 border-gray/30 outline-none w-full' />
      </div>
    </div>
  )
}
