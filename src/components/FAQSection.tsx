import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter experiência para usar as Receitas do Pãozinho Relâmpago?",
      answer: "De jeito nenhum! As Receitas do Pãozinho Relâmpago foram desenvolvidas pensando em quem não tem nenhuma experiência em panificação, ou até mesmo em quem nunca cozinhou antes. As instruções são super simples, passo a passo, e garantem que qualquer um consiga fazer pães deliciosos e perfeitos desde a primeira tentativa."
    },
    {
      question: "As receitas realmente são rápidas e não fazem bagunça, como prometido?",
      answer: "Sim, absolutamente! Esse é o nosso grande diferencial. Nossas receitas utilizam técnicas inteligentes que minimizam o tempo de preparo e a quantidade de louça suja. Você vai se surpreender como é possível ter pão fresco e quentinho em minutos, sem espalhar farinha por toda a cozinha. Chega de bagunça, só sabor!"
    },
    {
      question: "Vou precisar de equipamentos caros ou uma batedeira especial?",
      answer: "Não mesmo! As Receitas do Pãozinho Relâmpago são pensadas para serem acessíveis. Você não precisará de equipamentos profissionais caros ou de uma batedeira planetária. A maioria das receitas pode ser feita com utensílios básicos de cozinha que você provavelmente já tem em casa, como uma tigela, uma colher e uma panela."
    },
    {
      question: "As receitas incluem opções para diferentes dietas, como sem glúten, sem lactose ou low carb?",
      answer: "Com certeza! Sabemos que cada um tem suas preferências e necessidades. Por isso, incluímos uma variedade de receitas que atendem a diferentes paladares e restrições alimentares. Você encontrará opções de pães sem glúten, integrais, sem lactose, low carb e até pães doces, tudo para que você possa desfrutar de pães frescos do seu jeito."
    },
    {
      question: "E se eu não gostar das receitas ou não conseguir fazer os pães?",
      answer: "Sua satisfação é a nossa prioridade! Temos tanta confiança na facilidade e no sabor das nossas receitas que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar 100% satisfeito(a) ou não conseguir fazer os pães, basta nos enviar um e-mail dentro desse período e devolveremos seu dinheiro, sem perguntas."
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-sm mx-auto px-4">
        <h2 className="text-xl font-bold text-center text-foreground mb-8">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-secondary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;