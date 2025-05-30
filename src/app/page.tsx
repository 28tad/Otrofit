import SectionMain from '@/features/SectionMain'
import dynamic from 'next/dynamic'

const LazyCatalog = dynamic(() => import('@/features/SectionCatalog'))
const LazySolution = dynamic(() => import('@/features/SectionSolution'))

export default function Home() {
  return (
    <>
      <SectionMain />
      <LazyCatalog />
      <LazySolution />
    </>
  )
}
