interface SendTgMessageOptions {
  message: string
  message_thread_id?: number
}

export const sendTgMessage = async ({ message, message_thread_id }: SendTgMessageOptions) => {
  const res = await fetch('/api/send-tg-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, message_thread_id }),
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error?.error || 'Ошибка при отправке в Telegram')
  }
}
