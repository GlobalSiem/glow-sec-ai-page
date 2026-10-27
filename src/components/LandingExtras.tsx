import { useEffect, useState } from "react";
import {
  ShieldCheck, Lock, Fingerprint, FileCheck2, X, Check,
  Stethoscope, ShoppingBag, Building2,
} from "lucide-react";

const ORANGE = "text-[oklch(0.85_0.2_55)]";
const CYAN = "text-[oklch(0.9_0.14_210)]";

export function StatsBar() {
  const stats = [
    { v: "99.98%", l: "Uptime protegido", c: ORANGE },
    { v: "< 300ms", l: "Mitigação média de ameaças", c: CYAN },
    { v: "24/7/365", l: "Monitoramento com IA", c: ORANGE },
    { v: "100%", l: "Conformidade LGPD", c: CYAN },
  ];
  return (
    <section className="relative px-6 -mt-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl border border-glow-cyan bg-card/60 backdrop-blur-md p-6 md:p-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <p className={`font-display text-3xl md:text-4xl font-bold ${s.c}`}>{s.v}</p>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustBadges() {
  const badges = [
    { icon: FileCheck2, t: "LGPD Compliant" },
    { icon: ShieldCheck, t: "NIST Framework" },
    { icon: Lock, t: "Criptografia AES-256" },
    { icon: Fingerprint, t: "Zero Trust Architecture" },
  ];
  return (
    <section className="px-6 pt-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
        {badges.map(({ icon: Icon, t }) => (
          <div key={t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/40 px-4 py-2 text-sm text-muted-foreground">
            <Icon size={16} className={CYAN} /> {t}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Comparison() {
  const rows = [
    ["Reage depois do ataque", "Prevê e bloqueia antes do impacto"],
    ["Análise manual de logs", "Correlação automática por IA"],
    ["Resposta em horas", "Mitigação em sub-segundos"],
    ["Relatórios atrasados", "Relatórios executivos em tempo real"],
    ["Atendimento em horário comercial", "Agentes de IA 24/7"],
  ];
  return (
    <section className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className={`text-sm font-semibold uppercase tracking-widest ${ORANGE}`}>Por que a Global Siem?</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Segurança tradicional <span className="text-muted-foreground">vs.</span> <span className="glow-cyan">com IA</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/10 bg-card/30 p-7">
            <p className="font-display font-semibold text-lg text-muted-foreground mb-5">Tradicional</p>
            <ul className="space-y-4">
              {rows.map(([a]) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <X size={18} className="mt-0.5 shrink-0 text-destructive" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-glow-cyan bg-card/60 p-7 shadow-glow-cyan">
            <p className="font-display font-semibold text-lg mb-5">Global Siem <span className={CYAN}>+ IA</span></p>
            <ul className="space-y-4">
              {rows.map(([a, b]) => (
                <li key={a} className="flex items-start gap-3">
                  <Check size={18} className={`mt-0.5 shrink-0 ${CYAN}`} /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Segments() {
  const segs = [
    { icon: Stethoscope, t: "Clínicas & Hospitais", d: "Proteção de prontuários e dados sensíveis de pacientes, em conformidade com a LGPD, e agentes de IA para agendamento." },
    { icon: ShoppingBag, t: "Lojas & E-commerces", d: "Load balance para picos de venda, zero queda e atendimento automatizado com IA para seus clientes." },
    { icon: Building2, t: "Escritórios & Indústrias", d: "VPN segura para trabalho remoto, firewall corporativo e monitoramento contínuo da rede." },
  ];
  const [active, setActive] = useState(0);
  const S = segs[active];
  return (
    <section className="px-6 pb-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className={`text-sm font-semibold uppercase tracking-widest ${CYAN}`}>Segmentos Atendidos</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Feito sob medida para o <span className="glow-orange">seu negócio</span></h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {segs.map((s, i) => (
            <button
              key={s.t}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition border ${i === active ? "bg-gradient-orange text-primary-foreground shadow-glow-orange border-transparent" : "border-white/15 text-muted-foreground hover:text-foreground"}`}
            >
              {s.t}
            </button>
          ))}
        </div>
        <div key={S.t} className="mt-8 rounded-3xl border border-glow-cyan bg-card/60 backdrop-blur-md p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 shrink-0 rounded-2xl grid place-items-center bg-[oklch(0.82_0.16_210/0.12)] border border-[oklch(0.82_0.16_210/0.3)]">
            <S.icon size={30} className={CYAN} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold">{S.t}</h3>
            <p className="mt-3 text-muted-foreground text-lg leading-relaxed">{S.d}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const EVENTS = [
  { m: "Tentativa de brute-force SSH bloqueada", k: "orange" },
  { m: "Anomalia na porta 443 mitigada", k: "orange" },
  { m: "Tráfego VPN validado", k: "cyan" },
  { m: "Malware zero-day isolado em endpoint", k: "orange" },
  { m: "Regra de firewall gerada pela IA", k: "cyan" },
  { m: "Varredura de portas detectada e bloqueada", k: "orange" },
  { m: "Backup de logs concluído", k: "cyan" },
  { m: "Phishing bloqueado no gateway de e-mail", k: "orange" },
];

type Line = { id: number; time: string; ip: string; m: string; k: string };

function makeLine(id: number): Line {
  const e = EVENTS[Math.floor(Math.random() * EVENTS.length)];
  const ip = `${Math.floor(Math.random() * 223) + 1}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  return { id, time: new Date().toLocaleTimeString("pt-BR"), ip, ...e };
}

export function LiveThreatFeed() {
  const [lines, setLines] = useState<Line[]>([]);
  const [count, setCount] = useState(18432);

  useEffect(() => {
    let id = 0;
    setLines(Array.from({ length: 5 }, () => makeLine(id++)));
    const t = setInterval(() => {
      setLines((prev) => [makeLine(id++), ...prev].slice(0, 6));
      setCount((c) => c + Math.floor(Math.random() * 7) + 1);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-background/50 border border-white/5 px-4 py-3">
          <p className="text-xs text-muted-foreground font-mono">Ameaças bloqueadas hoje</p>
          <p className={`mt-1 text-xl font-bold font-mono ${ORANGE}`}>{count.toLocaleString("pt-BR")}</p>
        </div>
        <div className="rounded-lg bg-background/50 border border-white/5 px-4 py-3">
          <p className="text-xs text-muted-foreground font-mono">Tráfego analisado</p>
          <p className={`mt-1 text-xl font-bold font-mono ${CYAN}`}>1.2 TB/h</p>
        </div>
      </div>
      <div className="rounded-lg bg-background/70 border border-white/5 p-3 h-56 overflow-hidden font-mono text-xs space-y-2">
        {lines.map((l, i) => (
          <div key={l.id} className={`flex gap-2 animate-in fade-in slide-in-from-top-1 duration-500 ${i === 0 ? "" : "opacity-80"}`}>
            <span className="text-muted-foreground shrink-0">{l.time}</span>
            <span className={`shrink-0 ${l.k === "orange" ? ORANGE : CYAN}`}>{l.ip}</span>
            <span className="text-foreground/85 truncate">{l.m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
