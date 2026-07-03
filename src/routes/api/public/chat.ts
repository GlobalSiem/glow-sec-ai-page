import { createFileRoute } from '@tanstack/react-router'

const N8N_WEBHOOK =
  process.env.N8N_CHAT_WEBHOOK_URL ||
  'http://ian8n.ddns.net:5678/webhook/0cbb88e8-9fe2-4f81-8019-4a7781cd2eff/chat'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export const Route = createFileRoute('/api/public/chat')({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, { status: 204, headers: corsHeaders }),

      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => ({}))
          const sessionId =
            typeof body?.sessionId === 'string' && body.sessionId.trim()
              ? body.sessionId
              : `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`
          const chatInput =
            typeof body?.chatInput === 'string' ? body.chatInput : ''

          if (!chatInput.trim()) {
            return new Response(
              JSON.stringify({ error: 'chatInput is required' }),
              {
                status: 400,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
              },
            )
          }

          const upstream = await fetch(N8N_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId,
              chatInput,
              action: 'sendMessage',
            }),
          })

          const ct = upstream.headers.get('content-type') || ''
          const payload = ct.includes('application/json')
            ? await upstream.json()
            : await upstream.text()

          let reply = ''
          if (typeof payload === 'string') {
            reply = payload
          } else if (payload && typeof payload === 'object') {
            const p = payload as Record<string, unknown>
            for (const k of [
              'output',
              'text',
              'message',
              'response',
              'answer',
              'reply',
            ]) {
              const v = p[k]
              if (typeof v === 'string') {
                reply = v
                break
              }
            }
            if (!reply) reply = JSON.stringify(payload)
          }

          return new Response(JSON.stringify({ reply, sessionId }), {
            status: upstream.ok ? 200 : 502,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          })
        } catch (err) {
          return new Response(
            JSON.stringify({
              error: 'Upstream chat webhook unreachable',
              detail: err instanceof Error ? err.message : String(err),
            }),
            {
              status: 502,
              headers: { 'Content-Type': 'application/json', ...corsHeaders },
            },
          )
        }
      },
    },
  },
})
