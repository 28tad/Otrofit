import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const token = process.env.TG_TOKEN
  const chatId = process.env.TG_CHAT_ID
  const message_thread_id = process.env.THREAD_ID ? Number(process.env.THREAD_ID) : undefined
  if (!token || !chatId) {
    return NextResponse.json({ error: 'Missing Telegram config' }, { status: 500 })
  }
  console.log(message_thread_id, chatId, token)
  try {
    const body = await req.json()

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: body.message,
        message_thread_id: message_thread_id,
        parse_mode: 'HTML',
      }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      return NextResponse.json({ error: 'Telegram API error', details: errorData }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Telegram send error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
