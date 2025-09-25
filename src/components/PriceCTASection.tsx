import { Button } from "@/components/ui/button";
import capaProduct from "@/assets/capa_paozinho_relampago.png";
const PriceCTASection = () => {
  return <section id="offer-section" className="py-12 bg-background">
      <div className="max-w-sm mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-success mb-8">
          Garanta agora as Receitas Pãozinho Relâmpago!
        </h2>
        
        {/* Product Image */}
        <div className="mb-8">
          <img src={capaProduct} alt="Pãozinho Relâmpago - Receitas únicas" className="w-full rounded-2xl shadow-xl" />
        </div>
        
        {/* Pricing Copy */}
        <div className="mb-4">
          <p className="text-foreground mb-4 leading-relaxed text-base">
            As receitas são únicas e estudadas para cada tipo de pãozinho, seu valor normal é de{" "}
            <span className="text-destructive font-bold line-through whitespace-nowrap text-2xl">R$ 27,90</span>
          </p>
          
          <p className="text-foreground text-base mb-6 leading-relaxed">
            Aproveite a promoção por tempo limitado e adquira suas receitas por apenas{" "}
            <span className="text-2xl font-bold text-success whitespace-nowrap">APENAS R$ 9,90  </span>
          </p>
        </div>
        
        {/* CTA Button */}
        <Button variant="cta" size="lg" className="text-base py-4 px-6 rounded-xl w-full bg-success hover:bg-success-light text-success-foreground font-bold" onClick={() => window.open('https://go.pepperpay.com.br/d5wmw', '_blank')}>
          QUERO FAZER MEU PÃOZINHO!
        </Button>
        
        
      </div>
    </section>;
};
export default PriceCTASection;