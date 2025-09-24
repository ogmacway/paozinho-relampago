import garantiaImage from "@/assets/7-dias-garantia.png";
const GuaranteeSection = () => {
  return <section className="py-12 bg-primary-light">
      <div className="max-w-sm mx-auto px-4 text-center">
        <div className="bg-card p-8 rounded-2xl shadow-xl">
          <div className="w-32 h-32 mx-auto mb-6">
            <img src={garantiaImage} alt="7 dias de garantia" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="text-xl font-bold text-foreground mb-6">
            Sua satisfação, nossa garantia.
          </h2>
          
          <p className="text-foreground leading-relaxed text-base">
            Se por qualquer motivo você não ficar 100% satisfeito(a) com as receitas em até 7 dias, 
            nós devolvemos seu dinheiro. Sem perguntas. <strong className="text-success">Seu risco é zero.</strong>
          </p>
        </div>
      </div>
    </section>;
};
export default GuaranteeSection;