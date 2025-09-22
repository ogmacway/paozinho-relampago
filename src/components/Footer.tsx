import { Button } from "@/components/ui/button";
import paozinhoHeadline from "@/assets/paozinho-relampago-headline.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="max-w-sm mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src={paozinhoHeadline} 
              alt="Pãozinho Relâmpago" 
              className="w-64 mx-auto"
            />
          </div>
          
          <div className="mb-6">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-base py-4 px-6 rounded-xl w-full bg-success hover:bg-success-light text-success-foreground font-bold"
              onClick={() => {
                document.getElementById('offer-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              QUERO FAZER MEU PÃOZINHO!
            </Button>
          </div>
          
          <div className="border-t border-background/20 pt-4">
            <p className="text-background/80 text-sm">
              © PÃOZINHO RELÂMPAGO 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;