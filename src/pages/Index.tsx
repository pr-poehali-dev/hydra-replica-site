import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
