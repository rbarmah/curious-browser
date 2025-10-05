import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PillarCard } from "@/components/PillarCard";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, Code2, Lightbulb } from "lucide-react";
import handsCollaborate from "@/assets/hands-collaborate.svg";
import handsIdea from "@/assets/hands-idea.svg";
import innofemmeLabs from "@/assets/innofemme-labs.jpg";
import hack4equity from "@/assets/hack4equity.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />

      {/* Introduction Section */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-balance">
              Technology shapes our world, but{" "}
              <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                who shapes technology?
              </span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                At Innofemme, we believe that innovation is incomplete without the voices, experiences, 
                and creative power of African women. We're pioneering <strong className="text-primary font-bold">Innofeminism</strong>—a 
                transformative approach that combines Afrofeminist 'motherist' principles with technological 
                innovation to create systems that truly serve everyone.
              </p>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl blur-xl"></div>
                <p className="relative text-2xl md:text-3xl font-black text-primary bg-card/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20">
                  We don't just want women at the table. <br className="hidden md:block" />
                  We're building new tables altogether.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <StatsSection />

      {/* Three Pillars Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance">
              Our Three-Pillar Approach
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering African women to transform technology through creation, reform, and justice-driven innovation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AnimatedSection delay={0}>
              <PillarCard
                icon={<Code2 className="w-20 h-20 text-primary" />}
                title="Duplicate and Upgrade"
                description="We empower women to create alternatives to existing tech systems—alternatives built without the biases, exclusions, and oppressions embedded in current platforms."
                color="from-primary via-primary/80 to-primary/60"
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <PillarCard
                icon={<RefreshCw className="w-20 h-20 text-secondary" />}
                title="Reform from Within"
                description="We equip women working in tech with the tools, networks, and confidence to demand change in how systems are built, pushing for equity from the inside out."
                color="from-secondary via-secondary/80 to-secondary/60"
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <PillarCard
                icon={<Lightbulb className="w-20 h-20 text-accent" />}
                title="Invent for Justice"
                description="We ensure African women can create innovations that address neglected social issues—the problems others overlook because they're not 'marketable.'"
                color="from-accent via-accent/80 to-accent/60"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance">
              Our Programs
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Building the future together through Labs, Hackathons, and Wellness
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <ProgramCard
              title="Innofemme Labs"
              description="Our flagship training and incubation program connecting talented women technologists with women-led startups that need them."
              image={innofemmeLabs}
              gradient="bg-gradient-to-t from-[hsl(var(--teal-deep))]/95 via-[hsl(var(--teal-deep))]/70 to-transparent"
              buttons={[
                { label: "Join as a Fellow", variant: "coral" },
                { label: "Apply as a Startup", variant: "outline" },
              ]}
            />

            <ProgramCard
              title="Hack4Equity"
              description="Targeted hackathons designed to bring women together to address the issues they face using their collective skills and lived experiences."
              image={hack4equity}
              gradient="bg-gradient-to-t from-[hsl(var(--coral))]/95 via-[hsl(var(--coral))]/70 to-transparent"
              buttons={[
                { label: "View Hackathons", variant: "outline" },
              ]}
            />
          </div>

          <AnimatedSection className="text-center mt-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group shadow-2xl hover:shadow-primary/20 px-10 py-7 text-lg"
              asChild
            >
              <a href="/programs">
                Explore All Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to Transform Innovation?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Join us in centering African women at the heart of technological innovation. 
              Whether you're a tech professional, entrepreneur, or supporter—there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="group shadow-2xl hover:shadow-secondary/50 px-10 py-7 text-lg"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl px-10 py-7 text-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
