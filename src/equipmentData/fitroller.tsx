import { Equipment } from '@/app/types/equipment'
import fitroller_characteristic_img from '@/images/section_fitroller_tech.webp'
import roller_slider_0 from '@/images/roller_slider_0.webp'
import roller_slider_1 from '@/images/roller_slider_1.webp'
import roller_slider_2 from '@/images/roller_slider_2.webp'
import roller_slider_3 from '@/images/roller_slider_3.webp'

export const fitRoller: Equipment = {
  title: 'ОРТОФИТ РОЛЛЕР',
  blocks: [
    {
      type: 'slider',
      images: [
        {
          url: roller_slider_0,
          alt: 'ортофит роллер',
        },
        {
          url: roller_slider_1,
          alt: 'ортофит роллер',
        },
        {
          url: roller_slider_2,
          alt: 'ортофит роллер',
        },
        {
          url: roller_slider_3,
          alt: 'ортофит роллер',
        },
      ],
      // price: 'от 2 000 000 ₽',
      story: {
        type: 'story',
        content: (
          <>
            <span className='font-bold'>Тренажёр для колясочной езды FitRoller —</span>
            инновационный тренажёр, специально разработанный для пользователей инвалидных колясок.
            Он позволяет поддерживать физическую форму, улучшать баланс и технику передвижения, а
            также способствует снижению веса и укреплению мышц
          </>
        ),
      },
      list: {
        type: 'list',
        items: [
          'Подходит для индивидуальных тренировок в домашних условиях и профессионального использования',
          'Безопасная тренировка прямо в инвалидной коляске без дополнительной фиксации',
          'Улучшает координацию и контроль движений верхней части тела',
        ],
      },
    },
    {
      type: 'paragraph',
      title: 'Описание',
      content: (
        <>
          Универсальная и прочная стальная конструкция <span className='font-bold'>FITRoller</span>,
          рассчитанная на рабочую нагрузку до 150 кг, позволяет использовать устройство максимально
          безопасно и удобно для пациента
        </>
      ),
    },
    {
      type: 'story',
      content: (
        <>
          Тренажёр применяется в домашних условиях, реабилитационных учреждениях и центрах
          адаптивной физкультуры. Он эффективен как для регулярных занятий, так и для
          восстановительной терапии
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <span className='font-bold'>Не требует дополнительных креплений к полу или стенам</span> —
          устойчивая конструкция надёжно фиксируется на поверхности и остаётся стабильной во время
          активных занятий
        </>
      ),
    },
    {
      type: 'story',
      content: (
        <>
          Лёгкая разборная конструкция позволяет быстро собрать и использовать устройство без
          специальных навыков. При необходимости тренажёр удобно транспортируется и не требует
          подключения к электросети
        </>
      ),
    },
    {
      type: 'list',
      title: 'области применения',
      items: [
        'Домашние тренировки для поддержания физической активности',
        'Подготовка к спортивным соревнованиям для пользователей инвалидных колясок',
        'Реабилитационные программы в медицинских учреждениях',
        'Общая физическая подготовка и укрепление сердечно-сосудистой системы',
        'Контроль веса и улучшение сердечно-сосудистой активности',
        'Производство и сборка на территории России',
        'Занятия в домашних условиях для поддержания физической активности',
        'Восстановительная терапия в клиниках и реабилитационных центрах',
        'Подготовка к параспортивным соревнованиям',
        'Общая физическая нагрузка для укрепления выносливости',
        'Улучшение метаболизма и работы сердечно-сосудистой системы',
      ],
    },
    {
      type: 'list',
      title: 'Преимущества ортофит роллер',
      listDecimal: true,
      items: [
        <>
          <span className='font-bold'>Универсальность:</span> Подходит для всех типов инвалидных
          колясок и уровней подготовки пользователей
        </>,
        <>
          <span className='font-bold'>Эффективность:</span> Помогает сжигать до 350 ккал за 30 минут
          тренировки
        </>,
        <>
          <span className='font-bold'>Безопасность:</span> Обеспечивает устойчивость и безопасность
          во время занятий
        </>,
        <>
          <span className='font-bold'>Компактность:</span> Лёгкая и портативная конструкция, удобная
          для хранения и транспортировки
        </>,
        <>
          <span className='font-bold'>Портативность и лёгкость:</span> легко разбирается и занимает
          минимум места
        </>,
        <>
          <span className='font-bold'>Тренировка каждой руки отдельно:</span> четыре независимых
          ролика обеспечивают полноценную нагрузку на обе руки
        </>,
        <>
          <span className='font-bold'>Тихая работа:</span> тренажёр не издаёт шума при
          использовании, подходит для занятий в домашних условиях и многоквартирных домах
        </>,
      ],
    },
    {
      type: 'image',
      src: fitroller_characteristic_img,
      title: 'Технические характеристики ',
      alt: 'Технические характеристики ортофит роллер',
    },
    {
      type: 'list',
      items: [
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
      ],
    },
    {
      type: 'video',
      videoLink: 'https://rutube.ru/video/32a7df2da889e276f6f25d7d41a98ea9/',
    },
  ],
}
