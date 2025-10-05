import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Heart, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { InnofemmeCarousel } from "@/components/InnofemmeCarousel";
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
      <section id="hack4equity" className="py-32 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/20 to-[hsl(var(--yellow))]/20 rounded-full border border-secondary/20">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Community Impact
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-secondary">Hack4Equity:</span>
                <br />
                <span className="text-foreground">Hackathons with Purpose</span>
              </h2>
              
              <div className="h-1 w-32 bg-gradient-to-r from-secondary via-[hsl(var(--yellow))] to-secondary mx-auto rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Our series of targeted hackathons designed to bring women together to address the issues 
                they face using their collective skills and lived experiences.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto space-y-12">
            <ScrollReveal delay={200}>
              <BentoGrid>
                {/* Mobile Money Fraud Hackathon */}
                <BentoCard
                  size="medium"
                  title="Mobile Money Fraud Hackathon"
                  description="Mobile money has transformed financial inclusion across Africa, but with it comes new vulnerabilities. This hackathon challenges participants to develop innovative solutions to combat mobile money fraud, protecting the financial security of millions of African women."
                  icon={<Zap className="w-10 h-10 text-[hsl(var(--coral))]" />}
                  accentColor="hsl(var(--coral))"
                  className="bg-gradient-to-br from-card to-[hsl(var(--coral))]/5"
                >
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                      When: April 2026
                    </span>
                    <span className="px-4 py-2 bg-secondary/10 rounded-full text-sm font-semibold text-secondary">
                      Partner: MTN Mobile Money Ltd.
                    </span>
                  </div>
                </BentoCard>

                {/* Rural Women Hackathon */}
                <BentoCard
                  size="medium"
                  title="Rural Women Hackathon"
                  description="We reject the assumption that women with little to no formal education lack the understanding to solve their own problems. We identify pressing challenges facing rural women and pair them with women who have formal training in relevant fields. Together, they build viable, community-centered solutions."
                  icon={<Users className="w-10 h-10 text-secondary" />}
                  accentColor="hsl(var(--yellow))"
                  className="bg-gradient-to-br from-secondary/5 to-[hsl(var(--yellow))]/5"
                >
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button variant="coral" size="lg">
                      Nominate a Challenge
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Participate as Mentor
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </BentoCard>
              </BentoGrid>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  This isn't charity. This is recognition that rural women are innovators, problem-solvers, 
                  and experts in their own lives.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-background via-[hsl(var(--purple-deep))]/10 to-[hsl(var(--warm-bg))] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Gurlz Wellness Section */}
      <section id="gurlz-wellness" className="py-32 bg-[hsl(var(--warm-bg))] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Holistic Support
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--peach))] bg-clip-text text-transparent animate-shimmer"
                  style={{ 
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Gurlz Wellness
                </span>
              </h2>
              
              <div className="h-1 w-32 bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--peach))] mx-auto rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Physical, mental, and sexual reproductive health barriers should never impede African women's 
                ability to innovate. Gurlz Wellness ensures that women have the support they need to thrive 
                in every dimension of their lives.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto space-y-12">
            <ScrollReveal delay={200}>
              <BentoGrid>
                {/* Monthly Gurlz Connect */}
                <BentoCard
                  size="medium"
                  title="Monthly Gurlz Connect"
                  description="Safe, supportive spaces where urban women gather to discuss their shared challenges with expert facilitators. From menstrual health to mental wellness, workplace stress to reproductive rights—no topic is off-limits. These monthly gatherings build community, break isolation, and provide access to professional guidance."
                  icon={<img src={handsHeart} alt="Community Support" className="w-16 h-16" />}
                  accentColor="hsl(var(--coral))"
                  className="bg-gradient-to-br from-card to-[hsl(var(--peach))]/5"
                >
                  <Button variant="hero" className="mt-4">
                    RSVP for Next Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </BentoCard>

                {/* Gurlz Wellness App */}
                <BentoCard
                  size="medium"
                  title="Gurlz Wellness App"
                  description="Your anonymous companion for holistic health. The Gurlz Wellness app provides anonymous chat support, community stories, expert resources on physical, mental, and reproductive health, plus connections to healthcare providers and counselors."
                  icon={<Heart className="w-10 h-10 text-white" />}
                  accentColor="hsl(var(--primary))"
                  image={innofemmeLabs}
                  className="bg-gradient-to-br from-primary to-[hsl(var(--purple-light))]"
                >
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
                      Download on iOS
                    </Button>
                    <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
                      Download on Android
                    </Button>
                  </div>
                </BentoCard>
              </BentoGrid>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="text-center max-w-3xl mx-auto mt-16">
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  Because wellness isn't a luxury—it's a prerequisite for innovation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;