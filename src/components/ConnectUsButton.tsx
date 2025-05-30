export default function ConnectUsButton({ className }: { className?: string }) {
  return (
    <button
      className={`bg-blue font-bold text-white uppercase ${className} h-[60px] w-full rounded-[18px] lg:w-[240px] lg:rounded-[28px]`}
    >
      связаться с нами
    </button>
  )
}
