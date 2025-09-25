import paozinhoHeadline from "@/assets/paozinho-relampago-headline-2.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import carrosel12graos from "@/assets/carrosel_12graos.png";
import carroselClassico from "@/assets/carrosel_classico.png";
import carroselDoce from "@/assets/carrosel_doce.png";
import carroselIntegral from "@/assets/carrosel_integral.png";
import carroselLowCarb from "@/assets/carrosel_low_carb.png";
import carroselQueijo from "@/assets/carrosel_queijo.png";
import carroselZeroLacto from "@/assets/carrosel_zero_lacto.png";
const SimplificationSection = () => {
  return <section className="py-12 bg-primary-light">
      <div className="max-w-sm mx-auto px-4">
        {/* Solution Title */}
        <div id="solution-title" className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Chega de desculpas! Suas manhãs merecem:
          </h3>
        </div>
        
        <div className="space-y-8">
          {/* Image */}
          <img src={paozinhoHeadline} alt="Pãozinho Relâmpago" className="w-full h-48 object-contain" />
          
          {/* Text Content */}
          <div>
            <h2 className="text-xl font-bold text-green-600 mb-6 leading-tight text-center">15 minutos e PRONTO... Isso é tudo que você precisa!</h2>
            
            <div className="space-y-4 text-sm text-foreground leading-relaxed">
              <p className="text-base">Quer ter seu pãozinho em menos de 15 minutos? Se não tiver panela, pode ser no micro-ondas também. Nosso mecanismo único de receitas foi desenvolvido pensando na praticidade, de forma que qualquer pessoa possa aplicar, independente da idade, ou se tem experiência com a cozinha.</p>
              
              <p className="text-base">Quando o assunto é cozinhar, é sempre aquele dilema: todos gostam do resultado, mas nem todos do processo. Esse "processo" é exatamente aonde se encaixa nosso PÃOZINHO RELÂMPAGO.</p>
              
              <p className="text-base">
                Estudando para ter o máximo de otimização nas receitas, aplicamos nosso modelo aos seguintes sabores até o momento:
              </p>
              
              <div className="mt-6">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    <CarouselItem className="pl-2 md:pl-4 basis-4/5">
                      <img src={carroselClassico} alt="Pão Clássico" className="w-full h-64 object-contain rounded-xl shadow-lg bg-card" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 basis-4/5">
                      <img src={carroselIntegral} alt="Pão Integral" className="w-full h-64 object-contain rounded-xl shadow-lg bg-card" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 basis-4/5">
                      <img src={carroselZeroLacto} alt="Pão Zero Lactose" className="w-full h-64 object-contain rounded-xl shadow-lg bg-card" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 basis-4/5">
                      <img src={carroselLowCarb} alt="Pão Low Carb" className="w-full h-64 object-contain rounded-xl shadow-lg bg-card" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 basis-4/5">
                      <img src={carroselDoce} alt="Pão Doce" className="w-full h-64 object-contain rounded-xl shadow-lg bg-card" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 basis-4/5">
                      <img src={carrosel12graos} alt="Pão 12 Grãos" className="w-full h-64 object-contain rounded-xl shadow-lg bg-card" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 basis-4/5">
                      <img src={carroselQueijo} alt="Pão de Queijo" className="w-full h-64 object-contain rounded-xl shadow-lg bg-card" />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                <p className="text-destructive text-base font-medium mt-6 text-center leading-relaxed">
                  Estamos sempre recolhendo feedback dos clientes para incrementar mais sabores ao modelo PÃOZINHO RELÂMPAGO! Não fique de fora, faça seu pãozinho amanhã de manhã.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SimplificationSection;