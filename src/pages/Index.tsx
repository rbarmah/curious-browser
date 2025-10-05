import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillarCard } from "@/components/PillarCard";
import { FeaturedProgramCard } from "@/components/FeaturedProgramCard";
import { SupportingProgramCard } from "@/components/SupportingProgramCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ManifestoCard } from "@/components/ManifestoCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, RefreshCw, Sparkles } from "lucide-react";
import heroCollage1 from "@/assets/hero-collage-1.jpg";
import heroCollage2 from "@/assets/hero-collage-2.jpg";
import heroCollage3 from "@/assets/hero-collage-3.jpg";
import heroCollage4 from "@/assets/hero-collage-4.jpg";
import heroCollage5 from "@/assets/hero-collage-5.jpg";
import heroCollage6 from "@/assets/hero-collage-6.jpg";
import heroCollage7 from "@/assets/hero-collage-7.jpg";
import heroCollage8 from "@/assets/hero-collage-8.jpg";
import pillarDuplicate from "@/assets/pillar-duplicate.png";
import pillarReform from "@/assets/pillar-reform.png";
import pillarJustice from "@/assets/pillar-justice.png";
import innofemmeLabs from "@/assets/innofemme-labs.jpg";
import hack4equity from "@/assets/hack4equity.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        {/* Collage Background */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
          <img src={heroCollage1} alt="Software Engineer" className="w-full h-full object-cover" />
          <img src={heroCollage2} alt="Mechanical Engineer" className="w-full h-full object-cover" />
          <img src={heroCollage3} alt="Construction Engineer" className="w-full h-full object-cover" />
          <img src={heroCollage4} alt="Electrical Engineer" className="w-full h-full object-cover" />
          <img src={heroCollage5} alt="Data Scientist" className="w-full h-full object-cover" />
          <img src={heroCollage6} alt="Civil Engineer" className="w-full h-full object-cover" />
          <img src={heroCollage7} alt="Robotics Engineer" className="w-full h-full object-cover" />
          <img src={heroCollage8} alt="Biomedical Engineer" className="w-full h-full object-cover" />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Text Overlay at Bottom Left */}
        <div className="absolute inset-y-0 left-0 flex items-center container mx-auto px-4">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="inline-block text-[hsl(var(--peach-light))] animate-typing">
                Centering
              </span>{" "}
              <span className="inline-block text-[hsl(var(--coral))] animate-typing" style={{ animationDelay: "0.5s" }}>
                African
              </span>{" "}
              <span className="inline-block text-[hsl(var(--peach))] animate-typing" style={{ animationDelay: "1s" }}>
                Women
              </span>{" "}
              <span className="inline-block text-[hsl(var(--coral-light))] animate-typing" style={{ animationDelay: "1.5s" }}>
                at the
              </span>{" "}
              <span className="inline-block text-[hsl(var(--peach-light))] animate-typing" style={{ animationDelay: "2s" }}>
                Heart
              </span>{" "}
              <span className="inline-block text-[hsl(var(--coral))] animate-typing" style={{ animationDelay: "2.5s" }}>
                of Innovation
              </span>
              <span className="inline-block text-[hsl(var(--peach))] animate-typing" style={{ animationDelay: "3s" }}>
                .
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Gradient Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-black/60 via-[hsl(var(--purple-deep))]/40 to-[hsl(var(--warm-bg))]"></div>

      {/* Introduction Section - Scroll-Triggered Story */}
      <section className="relative py-32 bg-gradient-to-b from-[hsl(var(--warm-bg))] via-background to-background overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img src={heroCollage2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--warm-bg))] via-background/95 to-background"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-32">
            
            {/* Act 1: The Problem - Enhanced 3D Card with Particles */}
            <ScrollReveal delay={0}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[hsl(var(--coral))]/10 to-[hsl(var(--peach))]/10 rounded-full border border-[hsl(var(--coral))]/20 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--coral))]"></div>
                    <span className="text-sm font-semibold bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] bg-clip-text text-transparent uppercase tracking-wider">The Reality</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--coral-glow))] to-[hsl(var(--peach))] bg-clip-text text-transparent animate-shimmer" 
                      style={{ 
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Technology
                    </span>
                    <br />
                    <span className="text-muted-foreground">Isn't Neutral.</span>
                  </h2>
                </div>
                <div 
                  className="group relative"
                  style={{ perspective: "1200px" }}
                >
                  {/* Floating Particles */}
                  <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-[hsl(var(--coral))] animate-particle"></div>
                  <div className="absolute top-10 -right-6 w-2 h-2 rounded-full bg-[hsl(var(--peach))] animate-particle" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-6 left-10 w-4 h-4 rounded-full bg-[hsl(var(--coral-glow))] animate-particle" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/2 -left-8 w-2 h-2 rounded-full bg-[hsl(var(--peach))] animate-particle" style={{ animationDelay: '1.5s' }}></div>

                  {/* 3D Card */}
                  <div className="relative bg-gradient-to-br from-[hsl(var(--coral))]/5 via-[hsl(var(--peach))]/5 to-[hsl(var(--coral))]/10 border-l-4 border-[hsl(var(--coral))] p-10 rounded-r-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 group-hover:shadow-[0_20px_60px_-10px_hsl(var(--coral-glow)/0.4)]"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateY(-3deg) rotateX(1deg)",
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--coral))]/20 via-transparent to-[hsl(var(--peach))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-r-2xl animate-shimmer" 
                      style={{ backgroundSize: '200% 200%' }}
                    ></div>
                    
                    {/* Content */}
                    <p className="relative text-xl md:text-2xl text-foreground font-medium leading-relaxed"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      Too much of today's tech was built without women—especially African women—in mind.
                    </p>
                    
                    {/* Glow Elements */}
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[hsl(var(--coral))]/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:bg-[hsl(var(--coral-glow))]/30 transition-all duration-700"></div>
                    <div className="absolute -left-4 -top-4 w-24 h-24 bg-[hsl(var(--peach))]/15 rounded-full blur-2xl"></div>
                  </div>

                  {/* Decorative Lines */}
                  <svg className="absolute -bottom-8 -right-8 w-24 h-24 text-[hsl(var(--coral))]/20" viewBox="0 0 100 100">
                    <circle cx="10" cy="10" r="2" fill="currentColor" className="animate-pulse" />
                    <circle cx="30" cy="20" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <circle cx="20" cy="35" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  </svg>
                </div>
              </div>
            </ScrollReveal>

            {/* Act 2: The Solution - Bold Statement */}
            <ScrollReveal delay={200}>
              <div className="text-center space-y-8 py-16">
                <div className="space-y-4">
                  <h3 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                    It's Time to<br />Rebuild It.
                  </h3>
                  <div className="h-1 w-32 bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--peach))] mx-auto rounded-full"></div>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  At Innofemme, innovation is incomplete without the voices, experiences, and creative power of African women.
                </p>
              </div>
            </ScrollReveal>

            {/* Act 3: The Methodology - Split Layout Manifesto Card */}
            <ScrollReveal delay={300}>
              <ManifestoCard />
            </ScrollReveal>

            {/* Act 4: The Vision - Grand Finale */}
            <ScrollReveal delay={400}>
              <div className="text-center py-16 space-y-8">
                <h3 className="text-4xl md:text-7xl font-bold leading-tight">
                  <span className="text-primary">Technology</span>{" "}
                  <span className="text-primary">reclaimed.</span>
                  <br />
                  <span className="text-[hsl(var(--coral))]">By</span>{" "}
                  <span className="text-[hsl(var(--coral))]">women.</span>
                  <br />
                  <span className="text-[hsl(var(--peach))]">For</span>{" "}
                  <span className="text-[hsl(var(--peach))]">everyone.</span>
                </h3>
                <div className="flex justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--coral))] animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--peach))] animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Three-Pillar Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering African women to transform technology through creation, reform, and justice-driven innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PillarCard
              icon={<img src={pillarDuplicate} alt="Duplicate and Upgrade" className="w-full h-full object-cover rounded-full" />}
              title="Duplicate and Upgrade"
              description="We empower women to create alternatives to existing tech systems—alternatives built without the biases, exclusions, and oppressions embedded in current platforms."
            />
            <PillarCard
              icon={<img src={pillarReform} alt="Reform from Within" className="w-full h-full object-cover rounded-full" />}
              title="Reform from Within"
              description="We equip women working in tech with the tools, networks, and confidence to demand change in how systems are built, pushing for equity from the inside out."
            />
            <PillarCard
              icon={<img src={pillarJustice} alt="Invent for Justice" className="w-full h-full object-cover rounded-full" />}
              title="Invent for Justice"
              description="We ensure African women can create innovations that address neglected social issues—the problems others overlook because they're not 'marketable.'"
            />
          </div>
        </div>
      </section>

      {/* Programs Preview Section - Featured + Supporting Layout */}
      <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future together through Labs, Hackathons, and Wellness
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* Featured Program Card */}
            <FeaturedProgramCard
              title="Innofemme Labs"
              description="Our flagship training and incubation program connecting talented women technologists with women-led startups that need them."
              image={innofemmeLabs}
              gradient="bg-gradient-to-t from-primary/95 via-primary/70 to-transparent"
              buttons={[
                { label: "Join as a Fellow", variant: "coral" },
                { label: "Apply as a Startup", variant: "outline" },
              ]}
            />

            {/* Supporting Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SupportingProgramCard
                title="Hack4Equity"
                description="Targeted hackathons designed to bring women together to address the issues they face using their collective skills and lived experiences."
                image={hack4equity}
                gradient="bg-gradient-to-t from-[hsl(var(--coral))]/90 via-[hsl(var(--coral))]/60 to-transparent"
                accentColor="hsl(var(--coral))"
                button={{ label: "View Hackathons", variant: "outline" }}
              />

              <SupportingProgramCard
                title="Wellness & Community"
                description="Holistic support programs ensuring mental wellness, community building, and sustainable growth for women in tech."
                image={innofemmeLabs}
                gradient="bg-gradient-to-t from-[hsl(var(--peach))]/90 via-[hsl(var(--peach))]/60 to-transparent"
                accentColor="hsl(var(--peach))"
                button={{ label: "Learn More", variant: "outline" }}
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="/programs">
                Explore All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="section-title">Ready to Transform Innovation?</h2>
            <p className="text-xl text-primary-foreground/90">
              Join us in centering African women at the heart of technological innovation. 
              Whether you're a tech professional, entrepreneur, or supporter—there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
