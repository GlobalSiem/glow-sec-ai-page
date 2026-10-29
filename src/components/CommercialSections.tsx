import { MessageCircle, Search, FileText, Settings2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  { icon: MessageCircle, title: "Conversa inicial", text: "Você conta o que seu negócio precisa — agentes de IA, cibersegurança ou as duas frentes — e entendemos sua rotina." },
  { icon: Search, title: "Avaliação", text: "Analisamos objetivos, ambiente atual, sistemas utilizados e integrações necessárias." },
  { icon: FileText, title: "Proposta", text: "Você recebe escopo, investimento, prazos e condições de atendimento por escrito antes de decidir." },
  { icon: Settings2, title: "Implantação", text: "Configuramos, testamos e validamos a solução com você, conforme o escopo acordado." },
];

const faqs = [
  { q: "Posso contratar agentes de IA sem contratar cibersegurança?", a: "Sim. As duas frentes podem ser contratadas separadamente ou em conjunto. Na conversa inicial entendemos sua necessidade e montamos uma proposta apenas com o que faz sentido para o seu negócio." },
  { q: "Quais tarefas um agente de IA pode atender?", a: "Os usos mais comuns são responder dúvidas frequentes, fazer o atendimento inicial, coletar dados de contato, organizar solicitações de agendamento e automatizar tarefas repetitivas. Avaliamos com você quais processos fazem sentido automatizar e quais devem continuar com sua equipe." },
  { q: "O agente de IA substitui minha equipe de atendimento?", a: "A proposta é apoiar sua equipe: o agente cuida das demandas repetitivas e encaminha para uma pessoa os casos que precisam de atenção humana, liberando tempo para o que realmente importa." },
  { q: "A solução pode se integrar aos sistemas que já utilizo?", a: "Na etapa de avaliação verificamos as ferramentas que você usa, os acessos disponíveis e os requisitos de segurança. Assim, você sabe antes da contratação quais integrações são viáveis no seu cenário." },
  { q: "Como fica a segurança e a privacidade dos dados?", a: "Segurança é a nossa origem. As soluções são planejadas considerando boas práticas de proteção de dados e os princípios da LGPD, com definição clara de quais informações são tratadas e quem tem acesso a elas." },
  { q: "Como são definidos o investimento e o prazo?", a: "Cada cenário é diferente. Escopo, integrações, volume de uso e necessidades de implantação são considerados para montar uma proposta personalizada, com valores e prazos definidos antes de qualquer contratação." },
  { q: "Como funciona o suporte?", a: "Canais, horários de atendimento e responsabilidades ficam descritos na proposta e no contrato. Converse com a equipe para definir a cobertura ideal para sua operação." },
];

export function HiringSections() {
  return (
    <>
      <section id="contratacao" className="relative px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Como contratar</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Do primeiro contato à <span className="glow-cyan">sua solução</span></h2>
          <div className="relative mt-14">
          <div aria-hidden="true" className="hidden lg:block absolute top-[3.25rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/0 via-accent/60 to-primary/0" />
          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-7 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
                <span aria-hidden="true" className="absolute -right-2 -top-4 font-display text-8xl font-bold text-foreground/5 group-hover:text-accent/10 transition-colors">0{i + 1}</span>
                <div className="relative">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-accent/10 border border-accent/30 text-accent group-hover:shadow-glow-cyan transition"><Icon size={22} aria-hidden="true" /></div>
                  <p className="mt-5 font-mono text-xs text-accent tracking-widest">ETAPA 0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          </div>
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