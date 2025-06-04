import { notFound } from 'next/navigation'

import type { Metadata } from 'next'

import { Suspense } from 'react'
import { equipmentData, EquipmentKey } from '@/equipmentData'
import Equipment from '@/features/Equipment/Equipment'

interface Props {
  params: Promise<{ equipment: EquipmentKey }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { equipment } = await params
  const data = equipmentData[equipment]

  if (!data) return {}

  return {
    title: data.title,
    description: data.description,
  }
}

async function EquipmentPage({ params }: Props) {
  const { equipment } = await params

  const data = equipmentData[equipment]

  if (!data) return notFound()

  return <Equipment data={data.data} />
}

export default async function SuspenseEquipmentPage(props: Props) {
  return (
    <Suspense>
      <EquipmentPage {...props} />
    </Suspense>
  )
}
