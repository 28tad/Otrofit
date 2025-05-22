import SectionCatalog from '@/features/SectionCatalog'
import SectionMain from '@/features/SectionMain'
import SectionSolution from '@/features/SectionSolution'

export default function Home() {
  return (
    <>
      <SectionMain />
      <SectionCatalog />
      <SectionSolution />
    </>
  )
}
