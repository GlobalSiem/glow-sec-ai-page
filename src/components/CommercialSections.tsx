import { BrainCircuit, ShieldCheck, ArrowRight, MessageCircle, Search, FileText, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function SolutionPaths() {
  return (
    <section aria-label="Soluções da Global Siem" className="px-6 pt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="border-t border-accent/50 pt-6">
          <BrainCircuit className="text-accent mb-4" size={28} aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-bold">Agentes de IA para o seu negócio</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Atendimento automatizado, agendamentos e automações sob medida para clínicas, lojas e escritórios.</p>
          <Button asChild variant="link" className="mt-4 px-0 h-auto text-accent whitespace-normal text-left justify-start"><a href="#agentes-ia">Conheça os agentes de IA <ArrowRight aria-hidden="true" /></a></Button>
        </div>
        <div className="border-t border-primary/50 pt-6">
          <ShieldCheck className="text-primary mb-4" size={28} aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-bold">Cibersegurança para sua empresa</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Firewall, VPN, monitoramento e análise de logs para proteger sua infraestrutura e seus dados.</p>
          <Button asChild variant="link" className="mt-4 px-0 h-auto whitespace-normal text-left justify-start"><a href="#servicos">Conheça a proteção <ArrowRight aria-hidden="true" /></a></Button>
        </div>
      </div>
    </section>
  );
}

export function HiringSections() {
  return (
    <>
      <section id="contratacao" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent">DO PRIMEIRO CONTATO À IMPLANTAÇÃO</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Uma solução alinhada ao seu negócio</h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="border-t border-border pt-5">
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
          <h2 className="text-3xl md:text-4xl font-bold">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map(({ q, a }, i) => <AccordionItem key={q} value={`faq-${i}`}><AccordionTrigger className="text-base text-left">{q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>
    </>
  );
}