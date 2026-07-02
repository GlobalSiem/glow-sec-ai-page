import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Shield, Lock, Network, ServerCog, Activity, Scale, Bug, Database, BrainCircuit,
  ArrowRight, MessageCircle, Sparkles, ChevronDown, X, Menu,
} from "lucide-react";

import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import neural from "@/assets/neural.png";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Siem — Segurança da Informação com IA" },
      { name: "description", content: "Proteção avançada com Firewalls, VPN, Antivírus e Monitoramento de Rede otimizados por Inteligência Artificial proprietária." },
      { property: "og:title", content: "Global Siem — Segurança da Informação com IA" },
      { property: "og:description", content: "Eleve sua segurança a um nível inteligente. Monitoramento em tempo real, IA proprietária e conformidade LGPD." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Shield, title: "Firewalls Inteligentes Next-Gen", desc: "Barreira adaptativa com regras dinâmicas geradas em tempo real pela nossa IA." },
  { icon: Lock, title: "VPN End-to-End", desc: "Criptografia ponta-a-ponta para acesso remoto seguro a qualquer infraestrutura." },
  { icon: Scale, title: "Load Balance", desc: "Distribuição inteligente de carga com previsão de tráfego e auto-escala." },
  { icon: Bug, title: "Antivírus Next-Gen", desc: "Detecção comportamental de ameaças zero-day com modelos treinados continuamente." },
  { icon: Network, title: "Monitoramento de Rede", desc: "Visibilidade 360° do tráfego com alertas preditivos e correlação de eventos." },
  { icon: ServerCog, title: "Servidores Gerenciados", desc: "Hardening, patching e observabilidade de servidores 24/7 com SLA garantido." },
  { icon: Activity, title: "Análise de Tráfego", desc: "Inspeção profunda de pacotes com machine learning para identificar anomalias." },
  { icon: Database, title: "Armazenamento de Logs", desc: "Coleta, retenção segura e análise centralizada de logs para auditoria, forense e correlação de eventos pela IA." },
  { icon: BrainCircuit, title: "IA como Serviço", desc: "Terceirize a inteligência artificial do seu negócio: atendimento automatizado, análise de dados e automações sob medida para clínicas, lojas, escritórios e mais." },
];

const lgpdItems = [
  { title: "Nosso Compromisso", body: "A privacidade de dados está no DNA da Global Siem. Tratamos os dados de cada usuário com o mesmo rigor que usamos para defender infraestruturas críticas — protocolos militares, criptografia de ponta e auditoria contínua." },
  { title: "Dados Coletados", body: "Coletamos apenas dados de contato fornecidos voluntariamente e cookies de navegação, com a única finalidade de responder solicitações comerciais e aprimorar nossos serviços de IA." },
  { title: "Segurança com IA", body: "Todos os dados coletados são protegidos pelo nosso próprio Firewall avançado, criptografia VPN end-to-end e monitoramento contínuo por Inteligência Artificial." },
  { title: "Seus Direitos (Art. 18 LGPD)", body: "Você tem direito de Acesso, Correção, Exclusão e Revogação do consentimento sobre seus dados a qualquer momento. Solicite através do nosso DPO." },
  { title: "Contato Encarregado (DPO)", body: "Para qualquer questão sobre privacidade ou exercício de direitos, contate nosso Encarregado de Proteção de Dados: dpo@globalsiem.com.br" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [cookieOpen, setCookieOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Nav */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 min-w-0">
            <img src={logo} alt="Global Siem" className="h-10 w-10 shrink-0 drop-shadow-[0_0_15px_oklch(0.74_0.21_48/0.5)]" width={40} height={40} />
            <span className="font-display font-bold text-lg tracking-tight truncate">
              Global <span className="text-[oklch(0.85_0.2_55)]">Siem</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#ia" className="hover:text-foreground transition">IA</a>
            <a href="#lgpd" className="hover:text-foreground transition">LGPD</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contato" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-orange hover:brightness-110 transition">
              Fale Conosco
            </a>
            <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#ia" onClick={() => setMenuOpen(false)}>IA</a>
            <a href="#lgpd" onClick={() => setMenuOpen(false)}>LGPD</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-32 px-6">
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        {/* Floating nodes */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[oklch(0.82_0.16_210)] shadow-glow-cyan animate-float" />
          <div className="absolute top-1/2 right-20 w-3 h-3 rounded-full bg-[oklch(0.74_0.21_48)] shadow-glow-orange animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-[oklch(0.82_0.16_210)] shadow-glow-cyan animate-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.74_0.21_48/0.4)] bg-[oklch(0.74_0.21_48/0.08)] px-4 py-1.5 text-sm text-[oklch(0.85_0.2_55)] mb-8">
            <Sparkles size={14} /> Segurança da Informação com IA Proprietária
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
            Eleve sua <span className="glow-orange">Segurança</span> a um<br />
            <span className="glow-cyan">Nível Inteligente</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Proteção avançada em todas as frentes: Firewalls, VPN, Antivírus, Monitoramento de Rede e Servidores, tudo otimizado por nossa Inteligência Artificial proprietária. Monitore seu tráfego em tempo real com confiança total.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#servicos" className="group inline-flex items-center gap-2 rounded-full bg-gradient-orange px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow-orange hover:brightness-110 hover:scale-[1.02] transition">
              Conheça Nossos Serviços
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a href="https://wa.me/5584988367436" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-base font-semibold border-glow-cyan text-[oklch(0.9_0.14_210)] hover:bg-[oklch(0.82_0.16_210/0.1)] transition">
              Falar com um Especialista
            </a>
          </div>
        </div>

        {/* Curved divider */}
        <svg className="absolute bottom-0 left-0 w-full text-background" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
      </section>

      {/* Services */}
      <section id="servicos" className="relative px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[oklch(0.9_0.14_210)] uppercase tracking-widest">Serviços Core</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Defesa <span className="glow-orange">completa</span>, orquestrada por <span className="glow-cyan">IA</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Cada serviço opera de forma integrada, alimentando nossos modelos para tornar sua infraestrutura mais inteligente a cada minuto.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isHero = i === 0;
              return (
                <div
                  key={s.title}
                  className={`group relative overflow-hidden rounded-2xl border bg-card/40 backdrop-blur-sm p-7 hover:border-[oklch(0.74_0.21_48/0.5)] hover:-translate-y-1 transition-all duration-300 ${isHero ? "lg:col-span-1 lg:row-span-1" : ""}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[oklch(0.74_0.21_48/0.08)] via-transparent to-[oklch(0.82_0.16_210/0.08)]" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[oklch(0.74_0.21_48/0.12)] border border-[oklch(0.74_0.21_48/0.3)] text-[oklch(0.85_0.2_55)] mb-5 group-hover:shadow-glow-orange transition">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI showcase */}
      <section id="ia" className="relative px-6 py-28 overflow-hidden">
        <img src={neural} alt="" aria-hidden className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] opacity-40 pointer-events-none animate-float" loading="lazy" width={1024} height={1024} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <p className="text-sm font-semibold text-[oklch(0.85_0.2_55)] uppercase tracking-widest">Núcleo de Inteligência</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Uma IA <span className="glow-cyan">proprietária</span> treinada para defender
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Nossos modelos processam bilhões de eventos por dia, aprendendo padrões de ataque antes mesmo que eles atinjam seu perímetro.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Correlação preditiva de ameaças em tempo real",
                "Resposta automatizada a incidentes sub-segundo",
                "Aprendizado contínuo sobre o tráfego do seu negócio",
                "Relatórios executivos gerados por linguagem natural",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[oklch(0.82_0.16_210)] shadow-glow-cyan shrink-0" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-glow-cyan bg-card/60 backdrop-blur-md p-8 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.74_0.21_48)] animate-pulse-glow" />
                  <span className="text-sm font-mono text-muted-foreground">ai-core.globalsiem</span>
                </div>
                <span className="text-xs text-[oklch(0.9_0.14_210)]">LIVE</span>
              </div>
              <div className="space-y-3">
                {[
                  { t: "Threat detected", v: "blocked", c: "orange" },
                  { t: "Anomaly score", v: "0.94", c: "cyan" },
                  { t: "Traffic analyzed", v: "1.2 TB/h", c: "cyan" },
                  { t: "Auto-mitigation", v: "active", c: "orange" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-background/50 border border-white/5 px-4 py-3 text-sm">
                    <span className="text-muted-foreground font-mono">{row.t}</span>
                    <span className={row.c === "orange" ? "text-[oklch(0.85_0.2_55)] font-semibold" : "text-[oklch(0.9_0.14_210)] font-semibold"}>{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LGPD */}
      <section id="lgpd" className="relative px-6 py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-sm font-semibold text-[oklch(0.85_0.2_55)] uppercase tracking-widest">Conformidade Legal</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold glow-cyan">
              Privacidade e Proteção de Dados (LGPD)
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              Esta página é mantida pela Global Siem para esclarecer as práticas de tratamento de dados de nossos serviços, em conformidade com a Lei 13.709/2018.
            </p>
          </div>

          <div className="mt-14 space-y-3">
            {lgpdItems.map((item, i) => {
              const open = openIdx === i;
              return (
                <div key={item.title} className={`rounded-2xl border bg-card/40 backdrop-blur-sm transition-all ${open ? "border-[oklch(0.82_0.16_210/0.5)]" : ""}`}>
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-semibold text-lg">{item.title}</span>
                    <ChevronDown size={20} className={`shrink-0 text-[oklch(0.9_0.14_210)] transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contato" className="relative px-6 py-28">
        <div className="max-w-4xl mx-auto rounded-3xl border border-glow-cyan bg-card/60 backdrop-blur-md p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[oklch(0.74_0.21_48)] opacity-20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[oklch(0.82_0.16_210)] opacity-20 blur-3xl" />
          <h2 className="relative text-3xl md:text-5xl font-bold">
            Pronto para elevar sua <span className="glow-orange">segurança</span>?
          </h2>
          <p className="relative mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
            Converse com um de nossos especialistas e descubra como nossa IA pode proteger seu negócio.
          </p>
          <a
            href="https://wa.me/5584988367436"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1FB855] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02] transition"
          >
            <MessageCircle size={18} /> Falar com Especialista
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 px-6 py-12 mt-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-9 w-9" width={36} height={36} loading="lazy" />
              <span className="font-display font-bold">Global Siem</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">Segurança da informação inteligente, movida por IA proprietária.</p>
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground mb-2">Empresa</p>
            <a href="#servicos" className="block hover:text-foreground">Serviços</a>
            <a href="#ia" className="block hover:text-foreground">IA</a>
            <a href="#contato" className="block hover:text-foreground">Contato</a>
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground mb-2">Legal</p>
            <a href="#lgpd" className="block hover:text-[oklch(0.9_0.14_210)] transition">Políticas de Privacidade & LGPD</a>
            <a href="mailto:dpo@globalsiem.com.br" className="block hover:text-foreground">dpo@globalsiem.com.br</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Global Siem. Todos os direitos reservados.</span>
          <span>CNPJ em conformidade • LGPD</span>
        </div>
      </footer>

      {/* Cookie banner */}
      {cookieOpen && (
        <div className="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:max-w-md z-40 rounded-2xl border border-glow-cyan bg-card/95 backdrop-blur-xl p-5 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-orange shadow-glow-orange shrink-0 grid place-items-center text-primary-foreground">
              <Shield size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm">Cookies & Privacidade</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar sua experiência e aprimorar nossos serviços de IA. Saiba mais em nossa{" "}
                <a href="#lgpd" className="text-[oklch(0.9_0.14_210)] underline">Política LGPD</a>.
              </p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => setCookieOpen(false)} className="rounded-full bg-gradient-orange px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow-orange">Aceitar</button>
                <button onClick={() => setCookieOpen(false)} className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium hover:bg-white/5">Recusar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ChatWidget />
    </div>
  );
}
