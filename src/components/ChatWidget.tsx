import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const CHAT_ENDPOINT = "/api/public/chat";

type Msg = { role: "user" | "bot"; text: string };

function extractReply(data: unknown): string {
  if (typeof data === "string") return data;
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    for (const k of ["output", "text", "message", "response", "answer", "reply"]) {
      const v = d[k];
      if (typeof v === "string") return v;
    }
    return JSON.stringify(data);
  }
  return String(data ?? "");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Olá! Seja muito bem-vindo(a) à Global SIEM. Eu sou a GiSa. Em que posso ajudar você hoje?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-ai-chat", openChat);
    return () => window.removeEventListener("open-ai-chat", openChat);
  }, []);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, chatInput: text, action: "sendMessage" }),
      });
      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json") ? await res.json() : await res.text();
      setMessages((m) => [...m, { role: "bot", text: extractReply(data) || "..." }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Não consegui conectar à IA agora. Tente novamente em instantes." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir chat com IA"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-orange shadow-glow-orange grid place-items-center text-primary-foreground hover:scale-105 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[600px] rounded-2xl border border-glow-cyan bg-card/95 backdrop-blur-xl shadow-[var(--shadow-card)] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-background/60">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.82_0.16_210)] animate-pulse-glow" />
              <div>
                <p className="text-sm font-semibold leading-none">GiSa</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Online • powered by Global Siem</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fechar" className="text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-gradient-orange text-primary-foreground rounded-br-sm"
                      : "bg-background/70 border border-white/10 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-background/70 border border-white/10 rounded-2xl px-3.5 py-2 text-sm text-muted-foreground flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin" /> pensando...
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="border-t border-white/10 p-3 flex items-center gap-2 bg-background/60"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva sua mensagem..."
              className="flex-1 bg-background/70 border border-white/10 rounded-full px-4 py-2 text-sm outline-none focus:border-[oklch(0.82_0.16_210/0.6)]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="h-9 w-9 shrink-0 rounded-full bg-gradient-orange grid place-items-center text-primary-foreground disabled:opacity-40 shadow-glow-orange"
              aria-label="Enviar"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
