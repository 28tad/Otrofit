'use client'
import { anchors } from '@/app/links'
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
