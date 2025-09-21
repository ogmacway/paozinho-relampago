import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SimplificationSection from "@/components/SimplificationSection";
import TestimonialSection from "@/components/TestimonialSection";
import BonusSection from "@/components/BonusSection";
import PriceCTASection from "@/components/PriceCTASection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <SimplificationSection />
      <TestimonialSection />
      <BonusSection />
      <PriceCTASection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
