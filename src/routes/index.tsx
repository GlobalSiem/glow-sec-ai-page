import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Shield, Lock, Network, ServerCog, Activity, Scale, Bug, Database, BrainCircuit, MessageSquare, CalendarCheck, Workflow,
  ArrowRight, MessageCircle, Sparkles, ChevronDown, X, Menu,
} from "lucide-react";

import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import neural from "@/assets/neural.png";
import { ChatWidget } from "@/components/ChatWidget";
import { StatsBar, TrustBadges, Comparison, Segments, LiveThreatFeed } from "@/components/LandingExtras";
import { HiringSections } from "@/components/CommercialSections";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { readCookieChoice, saveCookieChoice, type CookieChoice } from "@/lib/cookie-preferences";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Siem — Cibersegurança com IA, SIEM, Firewall e VPN" },
      { name: "description", content: "Proteção avançada com Firewall Next-Gen, VPN, Antivírus, SIEM e Monitoramento de Rede 24/7 potencializados por IA proprietária. Conformidade LGPD e agentes de IA sob medida." },
      { name: "keywords", content: "cibersegurança, SIEM, firewall next-gen, VPN, antivírus empresarial, monitoramento de rede, SOC 24/7, análise de tráfego, LGPD, proteção de dados, IA proprietária, agente de IA, automação com IA, IA como serviço, servidores gerenciados, load balance, Global Siem" },
      { property: "og:title", content: "Global Siem — Cibersegurança com IA, SIEM, Firewall e VPN" },
      { property: "og:description", content: "Eleve sua segurança a um nível inteligente. Monitoramento em tempo real, IA proprietária, agentes de IA e conformidade LGPD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Global Siem — Cibersegurança com IA" },
      { name: "twitter:description", content: "SIEM, Firewall Next-Gen, VPN, monitoramento 24/7 e agentes de IA." },
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
  { icon: ServerCog, title: "Virtualização", desc: "Ambientes virtualizados de alta performance com isolamento seguro, alta disponibilidade e gestão centralizada." },
  { icon: Activity, title: "Análise de Tráfego", desc: "Inspeção profunda de pacotes com machine learning para identificar anomalias." },
  { icon: Database, title: "Armazenamento de Logs", desc: "Coleta, retenção segura e análise centralizada de logs para auditoria, forense e correlação de eventos pela IA." },
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
  const [cookieOpen, setCookieOpen] = useState(false);
  const [cookieChoice, setCookieChoice] = useState<CookieChoice | null>(null);
  const [cookieError, setCookieError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let saved: CookieChoice | null = null;
    try { saved = readCookieChoice(window.localStorage); } catch { /* Storage may be blocked. */ }
    setCookieChoice(saved);
    setCookieOpen(saved === null);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const decideCookies = (choice: CookieChoice) => {
    let saved = false;
    try { saved = saveCookieChoice(window.localStorage, choice); } catch { /* Keep this visit usable. */ }
    setCookieChoice(choice);
    setCookieError(!saved);
    if (saved) setCookieOpen(false);
  };

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
            <a href="#servicos" className="hover:text-foreground transition">Cibersegurança</a>
            <a href="#agentes-ia" className="hover:text-foreground transition">Agentes de IA</a>
            <a href="#lgpd" className="hover:text-foreground transition">LGPD</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contato" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-orange hover:brightness-110 transition">
              Fale Conosco
            </a>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu de navegação" aria-expanded={menuOpen} aria-controls="mobile-navigation">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Cibersegurança</a>
            <a href="#agentes-ia" onClick={() => setMenuOpen(false)}>Agentes de IA</a>
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
            <Sparkles size={14} className="shrink-0" /> Cibersegurança e Agentes de IA
          </div>
          <h1 className="hero-headline font-display font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.12]">
            Eleve sua <span className="glow-orange">Segurança</span>{" "}
            <span className="whitespace-nowrap">a um</span>{" "}
            <span className="glow-cyan">Nível Inteligente</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Cibersegurança para proteger sua empresa e agentes de IA para transformar o atendimento. Firewalls, VPN e monitoramento de rede, junto a automações sob medida para clínicas, lojas e escritórios.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <Button asChild className="group rounded-full bg-gradient-orange h-14 w-full px-4 text-sm sm:text-base font-semibold shadow-glow-orange hover:brightness-110">
              <a href="#servicos">Conheça Nossos Serviços <ArrowRight aria-hidden="true" /></a>
            </Button>
            <Button variant="outline" onClick={() => window.dispatchEvent(new Event("open-ai-chat"))} className="rounded-full border-2 h-14 w-full px-4 text-sm sm:text-base font-semibold border-accent text-accent hover:bg-accent/10 hover:text-accent">
              Falar com um Especialista
            </Button>
          </div>
        </div>

        {/* Curved divider */}
        <svg className="absolute bottom-0 left-0 w-full text-background" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
      </section>

      <StatsBar />
      <TrustBadges />

      {/* Services */}
      <section id="servicos" className="relative px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[oklch(0.9_0.14_210)] uppercase tracking-widest">Cibersegurança</p>
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

      <Comparison />
      {/* AI showcase */}
      <section id="ia" className="relative px-6 py-28 overflow-hidden">
        <img src={neural} alt="" aria-hidden className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] opacity-40 pointer-events-none animate-float" loading="lazy" width={1024} height={1024} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <p className="text-sm font-semibold text-[oklch(0.85_0.2_55)] uppercase tracking-widest">Inteligência para Cibersegurança</p>
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
              <LiveThreatFeed />
            </div>
          </div>
        </div>
      </section>


      <section id="agentes-ia" className="relative px-6 py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">IA como Serviço</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-3xl">Agentes de <span className="glow-cyan">IA</span> para transformar seu <span className="glow-orange">negócio</span></h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">Terceirize a inteligência artificial com atendimento, agendamentos e automações sob medida para clínicas, lojas e escritórios.</p>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { icon: MessageSquare, title: "Atendimento inteligente", text: "Respostas a dúvidas e organização das primeiras informações dos seus clientes." },
              { icon: CalendarCheck, title: "Agendamento automatizado", text: "Agentes para solicitações de horários e acompanhamento do atendimento." },
              { icon: Workflow, title: "Automações e dados", text: "Apoio à análise de informações e a tarefas repetitivas, conforme as integrações disponíveis." },
            ].map(({ icon: Icon, title, text }) => <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-7 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"><div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" /><div className="relative"><div className="w-12 h-12 grid place-items-center rounded-xl bg-accent/10 border border-accent/30 text-accent mb-5 group-hover:shadow-glow-cyan transition"><Icon size={22} aria-hidden="true" /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p></div></div>)}
          </div>
          <Button asChild variant="outline" className="mt-10 rounded-full border-accent text-accent h-auto min-h-12 px-6 whitespace-normal hover:bg-accent/10 hover:text-accent"><a href="https://wa.me/5584988367436?text=Tenho%20interesse%20em%20agentes%20de%20IA" target="_blank" rel="noopener noreferrer"><BrainCircuit aria-hidden="true" /> Conversar sobre agentes de IA <ArrowRight aria-hidden="true" /></a></Button>
        </div>
      </section>
      <Segments />

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
                  <Button variant="ghost" id={`lgpd-trigger-${i}`} aria-expanded={open} aria-controls={`lgpd-panel-${i}`}
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full h-auto whitespace-normal flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-accent/5"
                  >
                    <span className="font-display font-semibold text-lg">{item.title}</span>
                    <ChevronDown size={20} className={`shrink-0 text-[oklch(0.9_0.14_210)] transition-transform ${open ? "rotate-180" : ""}`} />
                  </Button>
                  {open && (
                    <div id={`lgpd-panel-${i}`} role="region" aria-labelledby={`lgpd-trigger-${i}`} className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HiringSections />

      {/* Contact CTA */}
      <section id="contato" className="relative px-6 py-28">
        <div className="max-w-4xl mx-auto rounded-3xl border border-glow-cyan bg-card/60 backdrop-blur-md p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[oklch(0.74_0.21_48)] opacity-20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[oklch(0.82_0.16_210)] opacity-20 blur-3xl" />
          <h2 className="relative text-3xl md:text-5xl font-bold">
            Qual o próximo passo para o seu <span className="glow-orange">negócio</span>?
          </h2>
          <p className="relative mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
            Fale com nossa equipe sobre cibersegurança ou agentes de IA. Vamos entender o que sua empresa precisa.
          </p>
          <a
            href="https://wa.me/5584988367436"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1FB855] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02] transition"
          >
            <MessageCircle size={18} /> Fale com a nossa equipe
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
            <a href="#servicos" className="block hover:text-foreground">Cibersegurança</a>
            <a href="#agentes-ia" className="block hover:text-foreground">Agentes de IA</a>
            <a href="#contato" className="block hover:text-foreground">Contato</a>
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground mb-2">Legal</p>
            <a href="#lgpd" className="block hover:text-[oklch(0.9_0.14_210)] transition">Políticas de Privacidade & LGPD</a>
            <a href="mailto:dpo@globalsiem.com.br" className="block hover:text-foreground">dpo@globalsiem.com.br</a>
            <Button variant="link" className="block p-0 h-auto text-muted-foreground font-normal whitespace-normal text-left hover:text-foreground" onClick={() => { setCookieError(false); setCookieOpen(true); }}>Preferências de cookies</Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Global Siem. Todos os direitos reservados.</span>
          <span>CNPJ em conformidade • LGPD</span>
        </div>
      </footer>

      {/* Cookie banner */}
      <Dialog open={cookieOpen} onOpenChange={setCookieOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-lg border-accent/40 bg-card">
          <DialogTitle>Cookies & Privacidade</DialogTitle>
          <DialogDescription>Sua escolha fica salva neste navegador e pode ser alterada em “Preferências de cookies” no rodapé.</DialogDescription>
          <p className="text-sm text-muted-foreground leading-relaxed">Este site registra sua preferência no armazenamento local. Nenhum rastreador opcional é ativado por esta escolha.</p>
          {cookieChoice && <p className="text-sm">Escolha atual: <strong>{cookieChoice === "accepted" ? "Aceitar" : "Recusar"}</strong>.</p>}
          <a href="#lgpd" onClick={() => setCookieOpen(false)} className="text-sm text-accent underline">Política LGPD</a>
          {cookieError && <p role="alert" className="text-sm text-foreground">Seu navegador não permitiu salvar a escolha. Ela vale nesta visita, mas poderá ser solicitada novamente.</p>}
          <div className="grid grid-cols-2 gap-3">
            <Button onClick={() => decideCookies("accepted")}>Aceitar</Button>
            <Button variant="outline" onClick={() => decideCookies("rejected")}>Recusar</Button>
          </div>
        </DialogContent>
      </Dialog>

      <ChatWidget />
    </div>
  );
}
