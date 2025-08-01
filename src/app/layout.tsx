import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import { ToastContainer } from 'react-toastify'
import Footer from '@/components/Footer/Footer'
import SectionOS from '@/features/SectionOS'
import { Analytics, type AnalyticsProps } from '@vercel/analytics/next'
import { Suspense } from 'react'
import { Metrika } from '@/components/Metrika'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

type EnvironmentMode = AnalyticsProps['mode']

const environment: EnvironmentMode = (process.env.ENVIRONMENT || 'development') as EnvironmentMode

export const metadata: Metadata = {
  title: 'Ортофит – реабилитационное оборудование для активной жизни',
  description:
    'Ортофит - Профессиональные решения: тренажёр FITRoller для колясочников и подъёмное кресло Унилифт. Помогаем восстановить mobility и самостоятельность. Доставка по России.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${roboto.className} antialiased`}>
        <ToastContainer position='top-center' autoClose={2000} />
        <Header />
        {children}
        <SectionOS />
        <Footer />
        <Analytics mode={environment} debug={false} />
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  )
}
