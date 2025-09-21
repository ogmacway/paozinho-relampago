import bonus1Icon from "@/assets/bonus-1-icon.png";
import bonus2Icon from "@/assets/bonus-2-icon.png";

const BonusCard = ({
  icon: Icon,
  image,
  title,
  description
}: {
  icon?: any;
  image?: string;
  title: string;
  description: string;
}) => <div className="bg-card p-6 rounded-2xl shadow-lg text-center">
    <div className="w-24 h-32 mx-auto mb-4">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg shadow-md" />
      ) : Icon ? (
        <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
          <Icon className="w-8 h-8 text-secondary-foreground" />
        </div>
      ) : null}
    </div>
    <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
    <p className="text-sm text-foreground leading-relaxed">{description}</p>
  </div>;
const BonusSection = () => {
  return <section className="py-12 bg-primary-light">
      <div className="max-w-sm mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-success mb-3">
            E tem mais pra quem levar hoje!
          </h2>
          <p className="text-foreground text-base">Receba estes 2 BÔNUS especiais ao garantir seu acesso hoje.</p>
        </div>
        
        <div className="space-y-6">
          <BonusCard image={bonus1Icon} title="Bônus 1: Como Economizar com Ingredientes" description="Aprenda a otimizar a compra de ingredientes, evitando o desperdício e economizando dinheiro, sem abrir mão da qualidade. Um guia prático para manter sua paixão por pães acessível." />
          
          <BonusCard image={bonus2Icon} title="Bônus 2: Pãozinho do Amor" description="Uma receita extra, secreta e exclusiva, perfeita para surpreender quem você ama. Aquele toque especial para momentos inesquecíveis." />
        </div>
      </div>
    </section>;
};
export default BonusSection;