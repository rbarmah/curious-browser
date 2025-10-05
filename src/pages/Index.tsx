import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillarCard } from "@/components/PillarCard";
import { ProgramCard } from "@/components/ProgramCard";
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

      {/* Introduction Section - Animated Reveal */}
      <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            
            {/* First Reveal - The Problem */}
            <div className="text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Technology Isn't Neutral.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Too much of today's tech was built without women—especially African women—in mind.
              </p>
            </div>

            {/* Second Reveal - The Solution */}
            <div className="text-center space-y-6 animate-fade-in">
              <h3 className="text-2xl md:text-4xl font-bold emphasized">
                It's Time to Rebuild It.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At Innofemme, innovation is incomplete without the voices and creative power of African women.
              </p>
            </div>

            {/* Third Reveal - The Approach */}
            <div className="bg-gradient-to-r from-primary/10 via-[hsl(var(--coral))]/10 to-[hsl(var(--teal))]/10 rounded-2xl p-8 md:p-12 animate-fade-in">
              <div className="text-center space-y-6">
                <div className="inline-block px-6 py-2 bg-primary/20 rounded-full">
                  <span className="text-lg font-semibold text-primary">Innofeminism</span>
                </div>
                <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
                  Our transformative approach combines <strong className="text-primary">Afrofeminist 'motherist' principles</strong> with technological innovation to create systems that truly serve everyone.
                </p>
              </div>
            </div>

            {/* Fourth Reveal - The Vision */}
            <div className="text-center animate-fade-in">
              <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--primary))] to-[hsl(var(--teal))] bg-clip-text text-transparent">
                Technology reclaimed. By women. For everyone.
              </h3>
            </div>

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
