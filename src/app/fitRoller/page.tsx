import ConnectUsButton from '@/components/ConnectUsButton'
import { Container } from '@/components/Container'
import { List } from '@/components/List'
import { Paragraph } from '@/components/Paragraph'
import { Story } from '@/components/Story'
import VideoBlock from '@/components/VideoBlock'
import { ItemCarusel } from '@/features/ItemCarusel'
import { Metadata } from 'next'
import Image from 'next/image'
import left_chair from '@/images/left_chair.webp'
import section_catalog_fitroller from '@/images/section_catalog_fitroller.webp'
import right_chair from '@/images/right_chair.webp'
import fitroller_tech from '@/images/section_fitroller_tech.webp'

export const metadata: Metadata = {
  title: 'Ортофит | FitRoller',
  description:
    'Ортофит - FITRoller - профессиональный тренажёр для инвалидных колясок (цена от 2 000 000 ₽). Российская разработка для активной реабилитации, тренировок дома и в центрах ЛФК. Улучшает координацию, сжигает 350 ккал/30 мин, нагрузка до 150 кг. Безопасная конструкция из стали и алюминия, портативный (30 кг), бесшумный. Для спортивной подготовки, восстановления после травм и поддержания формы.',
}

const List1 = [
  'Подходит для индивидуальных тренировок в домашних условиях и профессионального использования',
  'Безопасная тренировка прямо в инвалидной коляске без дополнительной фиксации',
  'Улучшает координацию и контроль движений верхней части тела',
]

const List2 = [
  'Домашние тренировки для поддержания физической активности',
  'Реабилитационные программы в медицинских учреждениях',
  'Подготовка к спортивным соревнованиям для пользователей инвалидных колясок',
  'Общая физическая подготовка и укрепление сердечно-сосудистой системы',
  'Контроль веса и улучшение сердечно-сосудистой активности',
  'Производство и сборка на территории России',
  'Занятия в домашних условиях для поддержания физической активности',
  'Восстановительная терапия в клиниках и реабилитационных центрах',
  'Подготовка к параспортивным соревнованиям',
  'Общая физическая нагрузка для укрепления выносливости',
  'Улучшение метаболизма и работы сердечно-сосудистой системы',
]

const List3 = [
  <>
    <span className='font-bold'>Универсальность:</span> Подходит для всех типов инвалидных колясок и уровней подготовки пользователей
  </>,
  <>
    <span className='font-bold'>Эффективность:</span> Помогает сжигать до 350 ккал за 30 минут тренировки
  </>,
  <>
    <span className='font-bold'>Безопасность:</span> Обеспечивает устойчивость и безопасность во время занятий
  </>,
  <>
    <span className='font-bold'>Компактность:</span> Лёгкая и портативная конструкция, удобная для хранения и транспортировки
  </>,
  <>
    <span className='font-bold'>Портативность и лёгкость:</span> легко разбирается и занимает минимум места
  </>,
  <>
    <span className='font-bold'>Тренировка каждой руки отдельно:</span> четыре независимых ролика обеспечивают полноценную нагрузку на обе руки
  </>,
  <>
    <span className='font-bold'>Тихая работа:</span> тренажёр не издаёт шума при использовании, подходит для занятий в домашних условиях и
    многоквартирных домах
  </>,
]

const List4 = [
  <>
    <span className='font-bold'>Максимальная нагрузка:</span> до 150 кг
  </>,
  <>
    <span className='font-bold'>Материалы:</span> люминий и высокопрочная сталь
  </>,
  <>
    <span className='font-bold'>Размеры:</span> 130 x 110 x 52 см
  </>,
  <>
    <span className='font-bold'>Максимальная нагрузка:</span> до 150 кг
  </>,
  <>
    <span className='font-bold'>Вес:</span> около 30 кг
  </>,
]

export default function FitRoller() {
  return (
    <>
      <Container>
        <div className='text-[24px] lg:text-[36px] font-bold uppercase pt-[34px] pb-[16px] lg:pt-[67px] lg:pb-[34px]'>FITRoller</div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[29px]'>
          <div>
            <ItemCarusel items={[section_catalog_fitroller, ...new Array(4).fill(section_catalog_fitroller)]} />
          </div>
          <div>
            <div className='flex justify-between text-blue text-[20px] lg:text-[39px] font-bold uppercase italic mb-[18px]'>
              цена
              <div>ОТ 2 000 000 ₽</div>
            </div>
            <Story>
              <span className='font-bold'> Тренажёр для колясочной езды FitRoller —</span>
              инновационный тренажёр, специально разработанный для пользователей инвалидных колясок. Он позволяет поддерживать физическую форму,
              улучшать баланс и технику передвижения, а также способствует снижению веса и укреплению мышц
            </Story>
            <div className='my-[18px] lg:mb-[33px]'>
              <List items={List1} />
            </div>
            <div className='flex lg:justify-end'>
              <ConnectUsButton />
            </div>
          </div>
        </div>
      </Container>

      <div className='relative'>
        <Image src={left_chair} alt='left_chair_bg' className='hidden lg:block absolute top-[-188px] z-[-1]' />
        <Container>
          <div className='text-[20px] uppercase font-bold mt-[60px] lg:mt-[120px]'>описание</div>
          <Paragraph>
            Универсальная и прочная стальная конструкция <span className='font-bold'>FITRoller</span>, рассчитанная на рабочую нагрузку до 150 кг,
            позволяет использовать устройство максимально безопасно и удобно для пациента
          </Paragraph>
          <Story>
            Тренажёр применяется в домашних условиях, реабилитационных учреждениях и центрах адаптивной физкультуры. Он эффективен как для регулярных
            занятий, так и для восстановительной терапии
          </Story>
          <Paragraph>
            <span className='font-bold'>Не требует дополнительных креплений к полу или стенам</span> — устойчивая конструкция надёжно фиксируется на
            поверхности и остаётся стабильной во время активных занятий
          </Paragraph>
          <Story>
            Лёгкая разборная конструкция позволяет быстро собрать и использовать устройство без специальных навыков. При необходимости тренажёр удобно
            транспортируется и не требует подключения к электросети
          </Story>

          <div className='text-[20px] uppercase font-bold pt-[60px] pb-[16px] lg:pt-[24px] lg:pb-[30px]'>области применения</div>
          <List items={List2} />
          <div className='text-[20px] uppercase font-bold pt-[60px] pb-[16px] lg:pt-[24px] lg:pb-[30px]'>Преимущества унилифт</div>
          <div className='pb-[16px] lg:pb-[24px]'>
            <List items={List3} listDecimal />
          </div>
        </Container>
        <Image src={right_chair} alt='right_chair_bg' className='hidden lg:block absolute top-[329px] right-0 z-[-1]' />
      </div>

      <Container>
        <div className='text-[20px] uppercase font-bold pt-[60px] pb-[16px] lg:pt-[24px] lg:pb-[30px]'>Технические характеристики</div>
        <div className='flex justify-center mt-[16px] mb-[67px] lg:mt-[38px] lg:mb-[72px]'>
          <Image src={fitroller_tech} alt='unilift_tech' className='w-[336px] h-[249px] lg:w-[543px] lg:h-[403px]' />
        </div>
        <div>
          <List items={List4} />
        </div>
      </Container>

      <Container>
        <div className='py-[60px] lg:pt-[60px] lg:pb-[100px]'>
          <VideoBlock />
        </div>
      </Container>
    </>
  )
}
