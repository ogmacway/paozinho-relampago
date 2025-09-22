import { Button } from "@/components/ui/button";
import heroBreadBackground from "@/assets/hero-bread-closeup.jpg";
import paozinhoVideo from "@/assets/paozinho-relampago-video.mp4";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${heroBreadBackground})`,
        filter: 'blur(0px)', // We'll apply blur via pseudo-element
      }}
    >
      {/* Blurred overlay for better text readability */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-sm mx-auto px-4">
        {/* Video */}
        <div className="mb-6">
          <video 
            src={paozinhoVideo}
            className="w-full max-w-xs mx-auto drop-shadow-2xl rounded-lg"
            controls={false}
            autoPlay
            muted
            playsInline
          />
        </div>
        
        {/* Headline */}
        <p className="text-base text-foreground font-medium leading-relaxed mb-8 bg-primary-light/90 p-4 rounded-lg shadow-lg">
          Levante suas manhãs, ou de quem você ama, com cheirinho de pão fresco ao acordar!{" "}
          <span className="text-secondary font-semibold">E sem fazer sujeira...</span>
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="cta" 
          size="lg" 
          className="bg-success hover:bg-success-light text-success-foreground font-bold py-4 px-8 rounded-xl"
          onClick={() => {
            document.getElementById('solution-title')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          QUERO FAZER MEU PÃOZINHO!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;