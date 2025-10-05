import { ValueCard } from "./ValueCard";
import { ScrollReveal } from "./ScrollReveal";

export const CoreValuesSection = () => {
  const values = [
    {
      index: "01",
      title: "Inclusivity",
      description: "We center African women's voices and experiences in every aspect of technology innovation, ensuring representation at the heart of creation.",
      visual: "network" as const,
      accentColor: "hsl(340, 82%, 52%)", // coral
    },
    {
      index: "02",
      title: "Innovation",
      description: "We foster creative solutions that challenge existing systems and build technology that truly serves diverse communities and addresses real-world needs.",
      visual: "spark" as const,
      accentColor: "hsl(25, 95%, 53%)", // peach
    },
    {
      index: "03",
      title: "Justice",
      description: "We are committed to equity and fairness, creating technology that addresses systemic inequalities and empowers marginalized communities.",
      visual: "balance" as const,
      accentColor: "hsl(271, 91%, 65%)", // purple/primary
    },
    {
      index: "04",
      title: "Empowerment",
      description: "We provide resources, mentorship, and platforms that enable women to lead, innovate, and transform the technology landscape.",
      visual: "growth" as const,
      accentColor: "hsl(340, 100%, 70%)", // coral-glow
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(var(--warm-bg))] to-background"></div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[hsl(var(--coral))]/10 to-[hsl(var(--peach))]/10 rounded-full border border-[hsl(var(--coral))]/20 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--coral))]"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] bg-clip-text text-transparent uppercase tracking-wider">
                Guiding Principles
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span 
                className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--coral-glow))] to-[hsl(var(--peach))] bg-clip-text text-transparent animate-shimmer"
                style={{ 
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Our Core Values
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric staggered grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* First row - 2 cards */}
            <ScrollReveal delay={0} className="lg:col-span-7">
              <ValueCard {...values[0]} className="h-[500px]" />
            </ScrollReveal>
            
            <ScrollReveal delay={100} className="lg:col-span-5">
              <ValueCard {...values[1]} className="h-[500px]" />
            </ScrollReveal>
            
            {/* Second row - 2 cards (reversed sizes) */}
            <ScrollReveal delay={200} className="lg:col-span-5">
              <ValueCard {...values[2]} className="h-[500px]" />
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="lg:col-span-7">
              <ValueCard {...values[3]} className="h-[500px]" />
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom decorative line */}
        <ScrollReveal delay={400}>
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--coral))] to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--coral))]"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--peach))] to-transparent"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
