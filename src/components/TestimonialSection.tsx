import { Star } from "lucide-react";
const RatingStars = () => <div className="flex justify-center gap-1 mb-4">
    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-secondary text-secondary" />)}
  </div>;
const TestimonialCard = ({
  text,
  name
}: {
  text: string;
  name: string;
}) => {};
const TestimonialSection = () => {
  const testimonials = [{
    text: "Incrível! Nunca imaginei que fazer pão pudesse ser tão simples. Em 15 minutos tenho pão fresquinho na mesa, sem bagunça nenhuma!",
    name: "Maria Silva"
  }, {
    text: "As receitas são muito fáceis de seguir. Meus filhos adoram acordar com o cheiro de pão fresco pela manhã. Recomendo muito!",
    name: "Carlos Santos"
  }, {
    text: "Como alguém que não sabia nem fazer um ovo frito, consegui fazer pães perfeitos logo na primeira tentativa. Sensacional!",
    name: "Ana Costa"
  }];
  return <section className="py-12 bg-background">
      <div className="max-w-sm mx-auto px-4">
        <h2 className="text-xl font-bold text-center text-foreground mb-8">
          O que nossos clientes estão dizendo...
        </h2>
        
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} text={testimonial.text} name={testimonial.name} />)}
        </div>
      </div>
    </section>;
};
export default TestimonialSection;