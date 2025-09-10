import { Equipment } from '@/app/types/equipment'
import transformer_1 from '@/images/transformer/transformer_1.webp'
import transformer_2 from '@/images/transformer/transformer_2.webp'
import transformer_3 from '@/images/transformer/transformer_3.webp'
import transformer_4 from '@/images/transformer/transformer_4.webp'
import transformer_5 from '@/images/transformer/transformer_5.webp'
import transformer_6 from '@/images/transformer/transformer_6.webp'
import transformer_7 from '@/images/transformer/transformer_7.webp'
import transformer_8 from '@/images/transformer/transformer_8.webp'
import transformer_9 from '@/images/transformer/transformer_9.webp'
import transformer_10 from '@/images/transformer/transformer_10.webp'
import transformer_11 from '@/images/transformer/transformer_11.webp'
import transformer_12 from '@/images/transformer/transformer_12.webp'
import transformer_13 from '@/images/transformer/transformer_13.webp'

export const transformerChair: Equipment = {
  title: 'ОРТОФИТ КРЕСЛО-ТРАНСФОРМЕР',
  blocks: [
    {
      type: 'slider',
      story: {
        type: 'story',
        content: (
          <>
            Кресло-трансформер для настройки удобной позы, ухода и безопасной пересадки человека.
            Принимает три стабильных положения и оснащено откидными боковыми створками («крыльями»)
            — они опускаются вровень с плоскостью кресла и открывают боковой доступ к матрасу для
            быстрого и аккуратного переноса на/с кровати.
          </>
        ),
      },
      images: [
        { url: transformer_1, alt: 'transformer' },
        { url: transformer_2, alt: 'transformer' },
        { url: transformer_3, alt: 'transformer' },
        { url: transformer_4, alt: 'transformer' },
        { url: transformer_5, alt: 'transformer' },
        { url: transformer_6, alt: 'transformer' },
        { url: transformer_7, alt: 'transformer' },
        { url: transformer_8, alt: 'transformer' },
        { url: transformer_9, alt: 'transformer' },
        { url: transformer_10, alt: 'transformer' },
        { url: transformer_11, alt: 'transformer' },
        { url: transformer_12, alt: 'transformer' },
        { url: transformer_13, alt: 'transformer' },
      ],
      list: {
        type: 'list',
        items: [
          '3 режима: вертикализация; полусидя + вертикальные ноги; полусидя + опущенные ноги',
          'Откидные боковые створки («крылья») для боковой пересадки с/на кровать',
          'Независимые регулировки спинки, сиденья и ножных секций',
          'Мягкие опоры и точки фиксации для безопасной посадки',
          'Мобильная база с поворотными колёсами и тормозами',
        ],
      },
    },

    {
      type: 'paragraph',
      title: 'описание',
      content: (
        <>
          <b>Ортофит Кресло-трансформер</b> помогает быстро и безопасно менять положение человека —
          из лежачего в сидячее и обратно; упрощает проведение процедур и делает пересадку на/с
          кровати понятной и посильной как для медперсонала, так и для родственников при уходе дома.
          Откидные «крылья» создают широкую боковую зону доступа к матрасу. Кресло легко подкатить
          вплотную, зафиксировать тормозами и выполнить перенос без лишних усилий и риска травм.
        </>
      ),
    },

    {
      type: 'story',
      content: (
        <>
          <b>Режимы работы.</b> Полностью вертикальное положение — для упражнений, физиотерапии и
          вертикализации; «приподнятая спинка + вертикальные ноги» — удобно для работы с нижними
          конечностями; «приподнятая спинка + опущенные ноги» — комфортно для кормления, общения и
          длительного пребывания.
        </>
      ),
    },

    {
      type: 'story',
      content: (
        <>
          <b>Крылья вместо бортиков.</b> В отличие от стационарных ограждений, боковые створки
          быстро опускаются одной рукой и фиксируются. Гладкие кромки и мягкие панели снижают риск
          зацепов одежды и контактных травм при переносе.
        </>
      ),
    },

    {
      type: 'list',
      title: 'Режимы',
      items: [
        '1) Полностью вертикальное',
        '2) Приподнятая спинка и вертикальные ноги',
        '3) Приподнятая спинка и опущенные ноги',
      ],
    },

    {
      type: 'list',
      title: 'Области применения',
      items: [
        'Реабилитационные центры и отделения ЛФК',
        'Физиотерапевтические кабинеты',
        'Долгосрочный и паллиативный уход, стационары',
        'Домашний уход после травм и операций',
        'Кабинеты перевязок, массажа и процедурные',
      ],
    },

    {
      type: 'list',
      title: 'Преимущества кресла-трансформера',
      listDecimal: true,
      items: [
        <>Произведено в России.</>,
        <>
          <span className='font-bold'>Три положения:</span> вертикализация, полусидя с вертикальными
          ногами, полусидя с опущенными ногами.
        </>,
        <>
          <span className='font-bold'>Откидные «крылья»:</span> боковые створки опускаются вровень
          для быстрой и безопасной пересадки с/на кровать.
        </>,
        <>
          <span className='font-bold'>Регулировки:</span> независимая настройка секций спинки,
          сиденья и ног; подлокотники/опоры.
        </>,
        <>
          <span className='font-bold'>Фиксация и комфорт:</span> мягкие валики и точки крепления
          ремней для безопасного позиционирования.
        </>,
        <>
          <span className='font-bold'>Мобильность:</span> поворотные колёса с индивидуальными
          тормозами.
        </>,
        <>
          <span className='font-bold'>Гигиена:</span> медицинская обивка устойчива к дезсредствам и
          влаге.
        </>,
      ],
    },
  ],
}
