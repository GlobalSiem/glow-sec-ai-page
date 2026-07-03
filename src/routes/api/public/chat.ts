import { createFileRoute } from '@tanstack/react-router'

const N8N_WEBHOOK =
  process.env.N8N_CHAT_WEBHOOK_URL ||
  'https://n8n.globalsiem.online/webhook-test/d7f55146-0f44-4ff8-87d5-811ee970e04a'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function pickReply(payload: unknown): string {
  if (typeof payload === 'string') return payload
  if (payload && typeof payload === 'object') {
    const p = payload as Record<string, unknown>
    for (const k of ['response', 'output', 'text', 'message', 'answer', 'reply']) {
      const v = p[k]
      if (typeof v === 'string' && v.trim()) return v
    }
    return ''
  }
  return ''
}

export const Route = createFileRoute('/api/public/chat')({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, { status: 204, headers: corsHeaders }),

      POST: async ({ request }) => {
        const jsonHeaders = { 'Content-Type': 'application/json', ...corsHeaders }
        try {
          const body = await request.json().catch(() => ({} as Record<string, unknown>))
          const b = body as Record<string, unknown>
          const message =
            (typeof b.message === 'string' && b.message) ||
            (typeof b.chatInput === 'string' && (b.chatInput as string)) ||
            (typeof b.text === 'string' && (b.text as string)) ||
            ''
          const sessionId =
            typeof b.sessionId === 'string' && (b.sessionId as string).trim()
              ? (b.sessionId as string)
              : `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`

          if (!message.trim()) {
            return new Response(
              JSON.stringify({ response: '', error: 'message is required', fallback: true }),
              { status: 200, headers: jsonHeaders },
            )
          }

          const controller = new AbortController()
          const timeout = setTimeout(() => controller.abort(), 45000)

          let upstream: Response
          try {
            upstream = await fetch(N8N_WEBHOOK, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                message,
                chatInput: message,
                sessionId,
                action: 'sendMessage',
              }),
              signal: controller.signal,
            })
          } catch (err) {
            clearTimeout(timeout)
            return new Response(
              JSON.stringify({
                response:
                  'Nosso assistente está temporariamente indisponível. Tente novamente em instantes.',
                fallback: true,
                error: err instanceof Error ? err.message : 'network_error',
              }),
              { status: 200, headers: jsonHeaders },
            )
          }
          clearTimeout(timeout)

          const ct = upstream.headers.get('content-type') || ''
          let payload: unknown
          try {
            payload = ct.includes('application/json')
              ? await upstream.json()
              : await upstream.text()
          } catch {
            payload = ''
          }

          const reply = pickReply(payload)

          if (!upstream.ok) {
            return new Response(
              JSON.stringify({
                response:
                  reply ||
                  'Nosso assistente está temporariamente indisponível. Tente novamente em instantes.',
                fallback: true,
                sessionId,
              }),
              { status: 200, headers: jsonHeaders },
            )
          }

          return new Response(
            JSON.stringify({
              response: reply || 'Recebi sua mensagem, mas não obtive uma resposta agora.',
              sessionId,
            }),
            { status: 200, headers: jsonHeaders },
          )
        } catch (err) {
          return new Response(
            JSON.stringify({
              response: 'Erro inesperado no assistente. Tente novamente.',
              fallback: true,
              error: err instanceof Error ? err.message : String(err),
            }),
            { status: 200, headers: jsonHeaders },
          )
        }
      },
    },
  },
})
