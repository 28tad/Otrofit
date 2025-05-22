import { Container } from '@/components/Container'

const steps = [
  'Мы разрабатываем и поставляем продукцию, которая помогает улучшить качество жизни независимо от возраста и физических возможностей',
  'В нашем ассортименте — функциональные устройства, созданные с учётом реальных задач: от повседневного ухода до активного восстановления',
]

export default function SectionSolution() {
  return (
    <Container className='mt-[100px]'>
      <div className='text-[24px] lg:text-[36px] uppercase text-gray font-bold lg:text-left text-center mb-[30px] lg:mb-[60px]'>
        лучшие решения на рынке
      </div>
      <div className='flex flex-col lg:flex-row gap-[30px]'>
        {steps.map((s, i) => (
          <div className='flex items-center gap-[20px]' key={i}>
            <div className='text-blue text-[60px] lg:text-[77px] font-light leading-[100%]'>{i + 1}</div>
            <p className='text-[16px] lg:text-[20px] font-light'>{s}</p>
          </div>
        ))}
      </div>
      <div></div>
    </Container>
  )
}
