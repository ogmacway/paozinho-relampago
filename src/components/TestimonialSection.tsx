import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const RatingStars = () => (
  <div className="flex justify-center gap-1 mb-4">
    {[1, 2, 3, 4, 5].map(star => (
      <Star key={star} className="w-5 h-5 fill-secondary text-secondary" />
    ))}
  </div>
);

const TestimonialCard = ({ image, name }: { image: string; name: string }) => (
  <div className="bg-card rounded-xl shadow-lg p-4 h-full">
    <RatingStars />
    <div className="mb-4">
      <img 
        src={image} 
        alt={`Depoimento de ${name}`}
        className="w-full h-auto rounded-lg shadow-sm"
      />
    </div>
    <p className="text-center text-sm text-muted-foreground font-medium">
      Depoimento real de {name}
    </p>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: "Monique Ávila"
    },
    {
      image: testimonial2,
      name: "Arthur Conci"
    },
    {
      image: testimonial3,
      name: "Jair Campos"
    },
    {
      image: testimonial4,
      name: "Luiza Belggio"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-sm mx-auto px-4">
        <h2 className="text-xl font-bold text-center text-foreground mb-8">
          O que nossos clientes estão dizendo...
        </h2>
        
        <div className="mt-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                  <TestimonialCard 
                    image={testimonial.image}
                    name={testimonial.name}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;