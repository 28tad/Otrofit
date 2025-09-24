import { EQUIPMENT_KEYS } from '@/equipmentData'

export const contacts = {
  number: '+7 495 797 08 31',
  mail: 'Info@gmail.com',
}

export const anchors = {
  os: 'os',
}

export const frontendRoutes = {
  main: '/',
  unilift: `/${EQUIPMENT_KEYS.UNILIFT}`,
  fitRoller: `/${EQUIPMENT_KEYS.FITROLLER}`,
  gantry_m: `/${EQUIPMENT_KEYS.GANTRY_M}`,
  gantry_e: `/${EQUIPMENT_KEYS.GANTRY_E}`,
  transformer: `/${EQUIPMENT_KEYS.TRANSFORMER}`,
  about: '/about',
}

export const catalogItemsDTO = [
  { title: 'Роллер', href: frontendRoutes.fitRoller },
  { title: 'Унилифт', href: frontendRoutes.unilift },
  { title: 'Ассистент', href: frontendRoutes.gantry_m },
  { title: 'Ассистент Электра', href: frontendRoutes.gantry_e },
  { title: 'Кресло-Трансформер', href: frontendRoutes.transformer },
]
