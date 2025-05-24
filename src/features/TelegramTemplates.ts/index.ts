import { ContactForm } from '../SectionOS'

export const orderTemplate = (body: ContactForm) => {
  const { fio, phone, mail, city, product } = body
  return `<b>Ortofit</b>
  📝 Продукт: ${product || ''}
  👤 ФИО: ${fio || ''}
  📞 Телефон: ${phone || ''}
  📧 Почта: ${mail || ''}
  🏢 Город: ${city || ''}
  `
}