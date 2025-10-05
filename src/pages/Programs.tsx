import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Heart, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { InnofemmeCarousel } from "@/components/InnofemmeCarousel";
import { Hack4EquityCarousel } from "@/components/Hack4EquityCarousel";
import { EquityClinicCarousel } from "@/components/EquityClinicCarousel";
import { GurlzWellnessCarousel } from "@/components/GurlzWellnessCarousel";
import { InterestModal } from "@/components/InterestModal";
import innofemmeLabs from "@/assets/innofemme-labs.jpg";
import handsHeart from "@/assets/hands-heart.svg";
import programsHeroAbstract from "@/assets/programs-hero-abstract.jpg";

const Programs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"fellow" | "startup">("fellow");

  const handleOpenModal = (type: "fellow" | "startup") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <InterestModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        type={modalType}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img src={programsHeroAbstract} alt="Abstract representation of innovation and technology programs" className="w-full h-full object-cover" />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="hero-text text-white">Our Programs</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Empowering African women through training, hackathons, and holistic wellness support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-black/40 via-[hsl(var(--purple-deep))]/20 to-background"></div>

      {/* Innofemme Labs Section */}
      <section id="innofemme-labs" className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))] relative overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="absolute top-40 left-20 w-3 h-3 rounded-full bg-[hsl(var(--coral))]/40 animate-pulse"></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 rounded-full bg-[hsl(var(--peach))]/50 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <InnofemmeCarousel 
              onJoinAsFellow={() => handleOpenModal("fellow")}
              onApplyAsStartup={() => handleOpenModal("startup")}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-[hsl(var(--warm-bg))] via-[hsl(var(--warm-bg))]/50 to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hack4Equity Section */}
      <section id="hack4equity" className="py-20 bg-background relative overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="absolute top-40 left-20 w-3 h-3 rounded-full bg-secondary/40 animate-pulse"></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 rounded-full bg-[hsl(var(--yellow))]/50 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <Hack4EquityCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-background via-[hsl(var(--purple-deep))]/10 to-[hsl(var(--warm-bg))] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Equity Clinic Section */}
      <section id="equity-clinic" className="py-20 bg-[hsl(var(--warm-bg))] relative overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="absolute top-40 left-20 w-3 h-3 rounded-full bg-primary/40 animate-pulse"></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 rounded-full bg-[hsl(var(--purple-light))]/50 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <EquityClinicCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-[hsl(var(--warm-bg))] via-[hsl(var(--coral))]/10 to-[hsl(var(--warm-bg))] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Gurlz Wellness Section */}
      <section id="gurlz-wellness" className="py-20 bg-[hsl(var(--warm-bg))] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <GurlzWellnessCarousel />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;