import { MessageCircle, Search, FileText, Settings2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  { icon: MessageCircle, title: "Conversa inicial", text: "Conte o que seu negócio precisa: agentes de IA, cibersegurança ou as duas frentes." },
  { icon: Search, title: "Avaliação", text: "Alinhamento dos objetivos, do ambiente atual e das integrações necessárias." },
  { icon: FileText, title: "Proposta", text: "Definição de escopo, investimento, prazos e condições de atendimento antes da contratação." },
  { icon: Settings2, title: "Implantação", text: "Configuração e validação da solução conforme o escopo acordado." },
];

const faqs = [
  { q: "Posso contratar agentes de IA sem contratar cibersegurança?", a: "Converse com a equipe sobre a frente que você precisa. A proposta deve definir os serviços e as integrações adequados ao seu negócio." },
  { q: "Quais tarefas um agente de IA pode atender?", a: "Atendimento inicial, agendamento, organização de informações e automações são exemplos. A viabilidade de cada tarefa depende dos processos e sistemas do seu negócio." },
  { q: "A solução pode se integrar aos sistemas que já utilizo?", a: "As integrações são avaliadas conforme as ferramentas utilizadas, os acessos disponíveis e os requisitos de segurança. Conte à equipe quais sistemas fazem parte da sua operação." },
  { q: "Como são definidos o investimento e o prazo?", a: "Solicite uma proposta para o seu cenário. Escopo, integrações, volume de uso e necessidades de implantação devem ser considerados antes de definir valores e prazos." },
  { q: "Como funciona o suporte?", a: "Canais, horários de atendimento e responsabilidades devem constar na proposta e no contrato. Confirme com a equipe a cobertura necessária para sua operação." },
];

export function HiringSections() {
  return (
    <>
      <section id="contratacao" className="relative px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">DO PRIMEIRO CONTATO À IMPLANTAÇÃO</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Do primeiro contato à sua solução</h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="group rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-center justify-between text-accent"><span className="font-mono text-sm">0{i + 1}</span><Icon size={22} aria-hidden="true" /></div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="perguntas" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center"><p className="text-sm font-semibold text-accent uppercase tracking-widest">Antes de começar</p><h2 className="mt-3 text-4xl md:text-5xl font-bold">Perguntas <span className="glow-cyan">frequentes</span></h2></div>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map(({ q, a }, i) => <AccordionItem key={q} value={`faq-${i}`} className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm px-6 data-[state=open]:border-accent/50"><AccordionTrigger className="text-lg font-display text-left py-5">{q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>
    </>
  );
}