import SectionCatalog from '@/features/SectionCatalog'
import SectionMain from '@/features/SectionMain'
import SectionOS from '@/features/SectionOS'
import SectionSolution from '@/features/SectionSolution'

export default function Home() {
  return (
    <>
      <SectionMain />
      <SectionCatalog />
      <SectionSolution />
      <SectionOS />
    </>
  )
}
