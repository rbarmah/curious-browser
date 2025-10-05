import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillarCard } from "@/components/PillarCard";
import { ProgramCard } from "@/components/ProgramCard";
import { ScrollReveal } from "@/components/ScrollReveal";
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

      {/* Introduction Section - Scroll-Triggered Story */}
      <section className="py-32 bg-gradient-to-b from-background via-[hsl(var(--warm-bg))] to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-32">
            
            {/* Act 1: The Problem - 3D Animated Card */}
            <ScrollReveal delay={0}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full border border-destructive/20">
                    <span className="text-sm font-semibold text-destructive uppercase tracking-wider">The Reality</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                    Technology<br />
                    <span className="text-muted-foreground">Isn't Neutral.</span>
                  </h2>
                </div>
                <div 
                  className="group relative perspective-1000"
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative bg-gradient-to-br from-destructive/5 to-destructive/10 border-l-4 border-destructive p-8 rounded-r-xl shadow-xl transform transition-all duration-700 hover:scale-105 hover:rotate-y-2 hover:shadow-2xl"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateY(-5deg) rotateX(2deg)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-r-xl"></div>
                    <p className="relative text-xl md:text-2xl text-foreground font-medium leading-relaxed"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      Too much of today's tech was built without women—especially African women—in mind.
                    </p>
                    <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-destructive/10 rounded-full blur-2xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Act 2: The Solution - Bold Statement */}
            <ScrollReveal delay={200}>
              <div className="text-center space-y-8 py-16">
                <div className="space-y-4">
                  <h3 className="text-5xl md:text-7xl font-bold emphasized leading-tight">
                    It's Time to<br />Rebuild It.
                  </h3>
                  <div className="h-1 w-32 bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--teal))] mx-auto rounded-full"></div>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  At Innofemme, innovation is incomplete without the voices, experiences, and creative power of African women.
                </p>
              </div>
            </ScrollReveal>

            {/* Act 3: The Methodology - Featured Card */}
            <ScrollReveal delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-[hsl(var(--coral))]/20 to-[hsl(var(--teal))]/20 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-background to-muted border border-primary/20 rounded-3xl p-12 md:p-16 shadow-2xl">
                  <div className="text-center space-y-8">
                    <div className="inline-flex items-center gap-3 px-8 py-3 bg-primary rounded-full shadow-lg">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                      <span className="text-xl font-bold text-primary-foreground">Innofeminism</span>
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed">
                      Our transformative approach combines{" "}
                      <strong className="text-primary">Afrofeminist 'motherist' principles</strong>{" "}
                      with technological innovation to create systems that truly serve everyone.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Act 4: The Vision - Grand Finale */}
            <ScrollReveal delay={400}>
              <div className="text-center py-16 space-y-8">
                <h3 className="text-4xl md:text-7xl font-bold leading-tight">
                  <span className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--teal))] bg-clip-text text-transparent">
                    Technology reclaimed.
                  </span>
                  <br />
                  <span className="text-foreground">By women.</span>
                  <br />
                  <span className="text-muted-foreground">For everyone.</span>
                </h3>
                <div className="flex justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--coral))] animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--teal))] animate-pulse" style={{ animationDelay: "0.4s" }}></div>
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

      {/* Programs Preview Section */}
      <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future together through Labs, Hackathons, and Wellness
            </p>
          </div>

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
