'use client'
import { anchors } from '@/app/links'
import { PhoneIcon } from '@/icons/PhoneIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ConnectUsButton({ className }: { className?: string }) {
  const pathname = usePathname()
  const href = pathname === '/' ? `#${anchors.os}` : `${pathname}#${anchors.os}`

  return (
    <Link
      href={href}
      className={`bg-blue font-bold text-white uppercase ${className} flex h-[60px] w-full items-center justify-center rounded-[18px] lg:w-[240px] lg:rounded-[28px]`}
    >
      связаться с нами
    </Link>
  )
}

export const ButtonCallUs = () => {
  const pathname = usePathname()
  const href = pathname === '/' ? `#${anchors.os}` : `${pathname}#${anchors.os}`
  return (
    <Link
      href={href}
      className='flex size-[60px] shrink-0 items-center justify-center rounded-full bg-[#B1B5FF] text-white'
    >
      <PhoneIcon className='h-[27px] w-[30px]' />
    </Link>
  )
}
