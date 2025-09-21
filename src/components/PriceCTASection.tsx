import { Button } from "@/components/ui/button";
import productBreadBasket from "@/assets/product-bread-basket.jpg";
const PriceCTASection = () => {
  return <section className="py-12 bg-background">
      <div className="max-w-sm mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-success mb-8">
          Garanta agora as Receitas Pãozinho Relâmpago!
        </h2>
        
        {/* Product Image */}
        <div className="mb-8">
          <img src={productBreadBasket} alt="Pãozinho Relâmpago - Pães frescos na cesta" className="w-full rounded-2xl shadow-xl" />
        </div>
        
        {/* Pricing */}
        <div className="mb-8">
          <div className="mb-3">
            <span className="text-lg text-muted-foreground line-through">
              De R$ 97,90
            </span>
          </div>
          
          <div className="mb-4">
            <span className="text-4xl font-bold text-secondary">
              R$ 27,90
            </span>
          </div>
          
          {/* Offer Badge */}
          <div className="inline-block bg-primary p-3 rounded-lg mb-6">
            <span className="text-foreground font-bold text-sm">
              🔥 Oferta por tempo limitado!
            </span>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button variant="cta" size="lg" className="text-base py-4 px-6 rounded-xl w-full bg-success hover:bg-success-light text-success-foreground font-bold">
          QUERO FAZER MEU PÃOZINHO!
        </Button>
        
        
      </div>
    </section>;
};
export default PriceCTASection;