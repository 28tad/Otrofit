import ConnectUsButton from '@/components/ConnectUsButton'
import { Container } from '@/components/Container'
import { List } from '@/components/List'
import { Paragraph } from '@/components/Paragraph'
import { Story } from '@/components/Story'
import VideoBlock from '@/components/VideoBlock'
import { Metadata } from 'next'
import left_chair from '@/images/left_chair.webp'
import section_catalog_unilift from '@/images/section_catalog_unilift.webp'
import right_chair from '@/images/right_chair.webp'
import unilift_tech from '@/images/section_unilift_tech.webp'
import Image from 'next/image'
import UniliftConfigurations from '@/features/UniliftConfigurations'
import { ItemCarusel } from '@/features/ItemCarusel'

export const metadata: Metadata = {
  title: 'Ортофит | Унилифт',
  description:
    'Ортофит - Унилифт - мобильное подъемное кресло с электроприводом для ухода за лежачими больными. Произведено в России, нагрузка 120 кг, автономная работа от аккумулятора. Используется в медучреждениях и дома: пересадка в коляску, гигиенические процедуры, вертикализация. Цена от 2 млн рублей. Доставка по всей России.',
}

const List1 = [
  'Автономность и мобильность кресла благодаря встроенному аккумулятору',
  'Электронная регулировка высоты и удобные ручки для перемещения',
  'Раздвижной механизм сиденья и спинки, упрощающий посадку пациента',
  'Снижение нагрузки на медицинский и ухаживающий персонал',
  'Наличие сиденья с санитарным оснащением',
]

const List2 = [
  'Необходимость вертикализации и перемещения с применением минимальных физических усилий в максимально безопасных условиях',
  'Подъем и перемещение из кровати в коляску и обратно',
  'Отправление естественных надобностей',
  'Комбинированное использование',
]

const List3 = [
  <>Произведено в России</>,
  <>
    Адаптировано <span className='font-bold'>под взрослых и детей</span>
  </>,
  <>
    <span className='font-bold'>Раздвижной механизм</span> сиденья и спинки
  </>,
  <>
    <span className='font-bold'>Электронная регулировка</span>Электронная регулировка высоты кресла
  </>,
  <>
    <span className='font-bold'>Автономность питания</span> за счёт аккумуляторной батареи
  </>,
  <>
    <span className='font-bold'>Устойчивость</span> стула благодаря независимым колесам с
    блокировкой колес
  </>,
  <>
    <span className='font-bold'>Износостойкие материалы,</span> пригодные для многократной
    санитарной обработки
  </>,
  <>Индивидуальное использование и применение в медицинских учреждениях</>,
  <>Сиденье с санитарным оснащением</>,
]

export default function Unilift() {
  return (
    <>
      <Container>
        <div className='pt-[34px] pb-[16px] text-[24px] font-bold uppercase lg:pt-[67px] lg:pb-[34px] lg:text-[36px]'>
          унилифт
        </div>

        <div className='grid grid-cols-1 gap-[29px] lg:grid-cols-2'>
          <div>
            <ItemCarusel
              items={[section_catalog_unilift, ...new Array(4).fill(section_catalog_unilift)]}
            />
          </div>
          <div>
            <div className='text-blue mb-[18px] flex justify-between text-[20px] font-bold uppercase italic lg:text-[39px]'>
              цена
              <div>ОТ 2 000 000 ₽</div>
            </div>
            <Story>
              <span className='font-bold'>Унилифт</span> — вспомогательное техническое средство,
              предназначенное для подъема и перемещения лиц с ограниченными возможностями и
              проведения гигиенических процедур.
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
        <Image
          src={left_chair}
          alt='left_chair_bg'
          className='absolute top-[-188px] z-[-1] hidden lg:block'
        />
        <Container>
          <div className='mt-[60px] text-[20px] font-bold uppercase lg:mt-[120px]'>описание</div>
          <Paragraph>
            Универсальная и прочная стальная конструкция <span className='font-bold'>Унилифт</span>,
            рассчитанная на рабочую нагрузку до 120 кг, позволяет использовать устройство
            максимально безопасно и удобно для пациента
          </Paragraph>
          <Story>
            Техническое средство подходит для применения в больницах, комплексных центрах
            социального обеспечения, реабилитационных центрах, домах престарелых, а также для
            индивидуального использования на дому
          </Story>
          <Paragraph>
            Удобные ручки устройства позволяют использовать его не только как автономное санитарное
            кресло, но и также для вертикализации и перемещения пациента с помощью сопровождающего
            персонала
          </Paragraph>
          <Story>
            Конструкция <span className='font-bold'>Унилифт</span> разборная, что упрощает сборку,
            транспортировку и хранение. Качественная обивка на сиденье и подлокотниках, ножной
            тормоз, электронная регулировка высоты и раздвижная спинка обеспечивают комфорт и
            удобство использования
          </Story>

          <div className='pt-[60px] pb-[16px] text-[20px] font-bold uppercase lg:pt-[24px] lg:pb-[30px]'>
            показание к применению
          </div>
          <List items={List2} />
          <div className='pt-[60px] pb-[16px] text-[20px] font-bold uppercase lg:pt-[24px] lg:pb-[30px]'>
            Преимущества унилифт
          </div>
          <div className='pb-[16px] lg:pb-[24px]'>
            <List items={List3} listDecimal />
          </div>

          <Story>
            Уникальность и главное преимущество <span className='font-bold'>Унилифт</span> перед
            аналогами — электроподъемник со встроенным аккумулятором на 2,2 Ампер-часа, значительно
            повышающий мобильность и упрощающий использование кресла при перемещении, а также
            возможность кресла снижать нагрузку на медицинский и ухаживающий персонал
          </Story>
        </Container>
        <Image
          src={right_chair}
          alt='right_chair_bg'
          className='absolute top-[329px] right-0 z-[-1] hidden lg:block'
        />
      </div>

      <Container>
        <div className='pt-[60px] pb-[16px] text-[20px] font-bold uppercase lg:pt-[24px] lg:pb-[30px]'>
          Технические характеристики
        </div>
        <div className='mt-[16px] mb-[67px] flex justify-center lg:mt-[38px] lg:mb-[72px]'>
          <Image
            src={unilift_tech}
            alt='unilift_tech'
            className='h-[356px] w-[328px] lg:h-[600px] lg:w-[553px]'
          />
        </div>
        <div className='pt-[16px] text-[20px] font-bold uppercase lg:pt-[30px]'>конфигурации</div>

        <div className='pt-[16px] lg:pt-[30px]'>
          <UniliftConfigurations />
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
