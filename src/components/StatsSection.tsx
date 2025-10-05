import { AnimatedSection } from "./AnimatedSection";
import { Users, Briefcase, Rocket } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5",
    label: "Advisory Board",
    description: "Distinguished members guiding our vision",
    color: "from-primary to-primary/80"
  },
  {
    icon: Briefcase,
    number: "8",
    label: "Team Members",
    description: "Dedicated professionals transforming innovation",
    color: "from-secondary to-secondary/80"
  },
  {
    icon: Rocket,
    number: "3",
    label: "Core Programs",
    description: "Labs, Hackathons, and Wellness initiatives",
    color: "from-accent to-accent/80"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection 
                key={stat.label} 
                delay={index * 100}
                className="group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-border transition-all hover-lift shadow-lg hover:shadow-2xl">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="mb-3">
                    <span className="text-6xl font-black bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
