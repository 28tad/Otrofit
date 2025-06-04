import { Equipment } from '@/app/types/equipment'
import { fitRoller } from './fitroller'
import { unilift } from './unilift'

export const EQUIPMENT_KEYS = {
  FITROLLER: 'fitRoller',
  UNILIFT: 'unilift',
} as const

export type EquipmentKey = (typeof EQUIPMENT_KEYS)[keyof typeof EQUIPMENT_KEYS]
interface EquipmentRow {
  data: Equipment
  title: string
  description: string
}

export const equipmentData: Record<EquipmentKey, EquipmentRow> = {
  [EQUIPMENT_KEYS.FITROLLER]: {
    data: fitRoller,
    title: 'Ортофит | FitRoller',
    description:
      'Ортофит - FITRoller - профессиональный тренажёр для инвалидных колясок (цена от 2 000 000 ₽). Российская разработка для активной реабилитации, тренировок дома и в центрах ЛФК. Улучшает координацию, сжигает 350 ккал/30 мин, нагрузка до 150 кг. Безопасная конструкция из стали и алюминия, портативный (30 кг), бесшумный. Для спортивной подготовки, восстановления после травм и поддержания формы.',
  },
  [EQUIPMENT_KEYS.UNILIFT]: {
    data: unilift,
    title: 'Ортофит | Унилифт',
    description:
      'Ортофит - Унилифт - мобильное подъемное кресло с электроприводом для ухода за лежачими больными. Произведено в России, нагрузка 120 кг, автономная работа от аккумулятора. Используется в медучреждениях и дома: пересадка в коляску, гигиенические процедуры, вертикализация. Цена от 2 млн рублей. Доставка по всей России.',
  },
}
