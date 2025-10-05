import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillarCard } from "@/components/PillarCard";
import { RefreshCw, Lightbulb, Heart } from "lucide-react";
import handsCollaborate from "@/assets/hands-collaborate.svg";
import handsIdea from "@/assets/hands-idea.svg";
import handsHeart from "@/assets/hands-heart.svg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-[hsl(var(--purple-light))] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="hero-text">About Innofemme</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              A non-profit organization committed to centering the innovative capacity of women, 
              ensuring that technology and innovation works for everyone—not just the privileged few.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="section-title text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Innofemme is a non-profit organization committed to centering the innovative capacity of women, 
                ensuring that technology and innovation works for everyone—not just the privileged few.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[hsl(var(--warm-bg))] to-card p-8 md:p-12 rounded-3xl shadow-lg border border-border">
              <h3 className="text-3xl font-bold mb-6 text-primary">What is Innofeminism?</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Innofeminism is our unique praxis that empowers African women to harness their afrofeminist 
                'motherist' innovative capacity to transform technology from the ground up. We believe African 
                women possess not only the skills but the ethical framework needed to build a more just 
                technological future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Three-Pillar Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering African women to transform technology through creation, reform, and justice-driven innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <PillarCard
              icon={<img src={handsCollaborate} alt="Collaborate" className="w-full h-full" />}
              title="Duplicate and Upgrade"
              description="We empower women to create alternatives to existing tech systems—alternatives built without the biases, exclusions, and oppressions embedded in current platforms."
            />
            <PillarCard
              icon={<RefreshCw className="w-16 h-16 text-primary" />}
              title="Reform from Within"
              description="African women working in tech and innovation spaces shouldn't have to accept the status quo. We equip them with the tools, networks, and confidence to demand change."
            />
            <PillarCard
              icon={<img src={handsIdea} alt="Innovation" className="w-full h-full" />}
              title="Invent for Justice"
              description="Profit isn't the only measure of value. We ensure African women can create innovations that address neglected social issues—the problems others overlook."
            />
          </div>

          {/* Detailed Explanations */}
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
              <h4 className="text-2xl font-bold mb-4 text-primary">1. Duplicate and Upgrade</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Can we redesign social media algorithms that amplify rather than erase marginalized voices? 
                Yes, we can, and we will. We empower women to create alternatives to existing tech systems—alternatives 
                built without the biases, exclusions, and oppressions embedded in current platforms.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
              <h4 className="text-2xl font-bold mb-4 text-primary">2. Reform from Within</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                African women working in tech and innovation spaces shouldn't have to accept the status quo. 
                We equip them with the tools, networks, and confidence to demand change in how systems are built, 
                pushing for equity and the dismantling of algorithmic oppression from the inside out.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
              <h4 className="text-2xl font-bold mb-4 text-primary">3. Invent for Justice</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Profit isn't the only measure of value. We ensure African women can create innovations that 
                address neglected social issues—the problems others overlook because they're not "marketable." 
                Innovation should serve justice, not just venture capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="section-title">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <div className="text-6xl font-bold text-primary mb-4">5</div>
                <h3 className="text-2xl font-bold mb-2">Advisory Board Members</h3>
                <p className="text-muted-foreground">
                  Distinguished leaders guiding our strategic vision and ensuring our work creates lasting impact.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <div className="text-6xl font-bold text-secondary mb-4">8</div>
                <h3 className="text-2xl font-bold mb-2">Team Professionals</h3>
                <p className="text-muted-foreground">
                  Dedicated experts committed to transforming the innovation landscape for African women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
