import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatCard } from "@/components/StatCard";
import { PillarCard } from "@/components/PillarCard";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, RefreshCw, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";
import handsCollaborate from "@/assets/hands-collaborate.svg";
import handsIdea from "@/assets/hands-idea.svg";
import handsHeart from "@/assets/hands-heart.svg";
import innofemmeLabs from "@/assets/innofemme-labs.jpg";
import hack4equity from "@/assets/hack4equity.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="African women innovating with technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="hero-text text-primary-foreground mb-6">
              Centering African Women at the{" "}
              <span className="emphasized inline-block bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--yellow))] bg-clip-text text-transparent">
                Heart of Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
              Building a future where technology works for everyone through the power of Innofeminism
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="coral" size="lg">
                Join Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn About Innofeminism
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="section-title text-foreground">
              Technology shapes our world, but{" "}
              <span className="emphasized">who shapes technology?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Innofemme, we believe that innovation is incomplete without the voices, experiences, 
              and creative power of African women. We're pioneering <strong className="text-primary">Innofeminism</strong>—a 
              transformative approach that combines Afrofeminist 'motherist' principles with technological 
              innovation to create systems that truly serve everyone.
            </p>
            <p className="text-2xl font-bold text-primary">
              We don't just want women at the table. We're building new tables altogether.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StatCard
              number="5"
              label="Advisory Board"
              description="Distinguished members guiding our vision"
            />
            <StatCard
              number="8"
              label="Team Members"
              description="Dedicated professionals transforming innovation"
            />
            <StatCard
              number="3"
              label="Core Programs"
              description="Labs, Hackathons, and Wellness initiatives"
            />
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
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
              icon={<img src={handsCollaborate} alt="Collaborate" className="w-full h-full" />}
              title="Duplicate and Upgrade"
              description="We empower women to create alternatives to existing tech systems—alternatives built without the biases, exclusions, and oppressions embedded in current platforms."
            />
            <PillarCard
              icon={<RefreshCw className="w-16 h-16 text-primary" />}
              title="Reform from Within"
              description="We equip women working in tech with the tools, networks, and confidence to demand change in how systems are built, pushing for equity from the inside out."
            />
            <PillarCard
              icon={<img src={handsIdea} alt="Innovation" className="w-full h-full" />}
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
