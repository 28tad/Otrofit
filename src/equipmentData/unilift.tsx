import { Equipment } from '@/app/types/equipment'
import slider_unilift from '@/images/section_catalog_unilift.webp'
import unilift_tech_characteristics from '@/images/section_unilift_tech.webp'
import unilift_slider_m1 from '@/images/unilift_slider_m_1.webp'
import unilift_slider_m2 from '@/images/unilift_slider_m_2.webp'
import unilift_slider_m3 from '@/images/unilift_slider_m_3.webp'
import unilift_slider_p1 from '@/images/unilift_slider_p_1.webp'
import unilift_slider_p2 from '@/images/unilift_slider_p_2.webp'
import unilift_slider_p3 from '@/images/unilift_slider_p_3.webp'
import unilift_slider_p4 from '@/images/unilift_slider_p_4.webp'
import unilift_slider_s1 from '@/images/unilift_slider_s_1.webp'
import unilift_slider_s2 from '@/images/unilift_slider_s_2.webp'
import unilift_slider_s3 from '@/images/unilift_slider_s_3.webp'
import unilift_slider_s4 from '@/images/unilift_slider_s_4.webp'
import unilift_slider_s5 from '@/images/unilift_slider_s_5.webp'
import configuration_meha from '@/images/configuration_meha.webp'
import configuration_podves from '@/images/configuration_podves.webp'
import configuration_sanitar from '@/images/configuration_sanitar.webp'
import configuration_elektro from '@/images/configuration_elektro.webp'

export const unilift: Equipment = {
  title: 'унилифт',
  blocks: [
    {
      type: 'slider',
      story: {
        type: 'story',
        content: (
          <>
            <span className='font-bold'>Унилифт</span> — вспомогательное техническое средство,
            предназначенное для подъема и перемещения лиц с ограниченными возможностями и проведения
            гигиенических процедур.
          </>
        ),
      },
      // price: 'от 2 000 000 ₽',
      images: [
        {
          url: slider_unilift,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_m1,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_m2,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_m3,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_p1,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_p2,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_p3,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_p4,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_s1,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_s2,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_s3,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_s4,
          alt: 'Унилифт',
        },
        {
          url: unilift_slider_s5,
          alt: 'Унилифт',
        },
      ],
      list: {
        type: 'list',
        items: [
          'Автономность и мобильность кресла благодаря встроенному аккумулятору',
          'Электронная регулировка высоты и удобные ручки для перемещения',
          'Раздвижной механизм сиденья и спинки, упрощающий посадку пациента',
          'Снижение нагрузки на медицинский и ухаживающий персонал',
          'Наличие сиденья с санитарным оснащением',
        ],
      },
    },
    {
      type: 'paragraph',
      title: 'описание',
      content: (
        <>
          Универсальная и прочная стальная конструкция <span className='font-bold'>Унилифт</span>,
          рассчитанная на рабочую нагрузку до 120 кг, позволяет использовать устройство максимально
          безопасно и удобно для пациента
        </>
      ),
    },
    {
      type: 'story',
      content: (
        <>
          Техническое средство подходит для применения в больницах, комплексных центрах социального
          обеспечения, реабилитационных центрах, домах престарелых, а также для индивидуального
          использования на дому
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          Удобные ручки устройства позволяют использовать его не только как автономное санитарное
          кресло, но и также для вертикализации и перемещения пациента с помощью сопровождающего
          персонала
        </>
      ),
    },
    {
      type: 'story',
      content: (
        <>
          Конструкция <span className='font-bold'>Унилифт</span> разборная, что упрощает сборку,
          транспортировку и хранение. Качественная обивка на сиденье и подлокотниках, ножной тормоз,
          электронная регулировка высоты и раздвижная спинка обеспечивают комфорт и удобство
          использования
        </>
      ),
    },
    {
      type: 'list',
      title: 'показание к применению',
      items: [
        'Необходимость вертикализации и перемещения с применением минимальных физических усилий в максимально безопасных условиях',
        'Подъем и перемещение из кровати в коляску и обратно',
        'Отправление естественных надобностей',
        'Комбинированное использование',
      ],
    },
    {
      type: 'list',
      title: 'Преимущества унилифт',
      listDecimal: true,
      items: [
        <>Произведено в России</>,
        <>
          Адаптировано <span className='font-bold'>под взрослых и детей</span>
        </>,
        <>
          <span className='font-bold'>Раздвижной механизм</span> сиденья и спинки
        </>,
        <>
          <span className='font-bold'>Электронная регулировка</span>Электронная регулировка высоты
          кресла
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
      ],
    },
    {
      type: 'story',
      content: (
        <>
          Уникальность и главное преимущество <span className='font-bold'>Унилифт</span> перед
          аналогами — электроподъемник со встроенным аккумулятором на 2,2 Ампер-часа, значительно
          повышающий мобильность и упрощающий использование кресла при перемещении, а также
          возможность кресла снижать нагрузку на медицинский и ухаживающий персонал
        </>
      ),
    },
    {
      title: 'Технические характеристики',
      type: 'image',
      src: unilift_tech_characteristics,
      alt: 'Технические характеристики Унилифт',
      className: 'h-[356px] w-[328px] lg:h-[600px] lg:w-[553px]',
    },
    {
      type: 'configuration',
      configurations: [
        {
          title: 'Унилифт Меха',
          subTitle: 'Механический подьменик',
          description: <>Регулировка высоты вручную, подъём за счёт вращения ручек</>,
          img: {
            src: configuration_meha,
          },
        },
        {
          title: 'Унилифт Электро',
          subTitle: 'Электрический подьменик',
          description: <>Управление высотой с пульта, встроенный аккумулятор</>,
          img: {
            src: configuration_elektro,
          },
        },
        {
          title: 'Унилифт Санитар',
          subTitle: 'С функцией вертикализации таза',
          description: <>Позволяет приподнять тазовую область для проведения санитарных процедур</>,
          img: {
            src: configuration_sanitar,
          },
        },
        {
          title: 'Унилифт Подвес',
          subTitle: 'С функцией вертикализации',
          description: (
            <>Дополнительно оснащается подвесом — для перемещения и поддержки при вставании</>
          ),
          img: {
            src: configuration_podves,
          },
        },
      ],
    },
  ],
}
