import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

const managementTeam: TeamMember[] = [
  { name: "Ruthie Armah", role: "Executive Director", initials: "RA" },
  { name: "Emmanuella Brown", role: "Director, Partnerships", initials: "EB" },
  { name: "Grazia Graham", role: "Director, Research and Intelligence", initials: "GG" },
  { name: "Gloria Graham", role: "Director, Product and Engineering", initials: "GG" },
  { name: "Dr. Chantelle Kanamintie", role: "Director, Gurlz Wellness Program", initials: "CK" },
  { name: "Diane Ndur-Buabeng", role: "Deputy Director, Gurlz Wellness Program", initials: "DN" },
  { name: "Pearl Frempong-Smart", role: "Director, Hack4Equity", initials: "PF" },
  { name: "Douglas Kofi Baidoo", role: "Creative Designer", initials: "DK" },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--warm-bg))]/30 via-background to-background"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--coral-glow))] to-[hsl(var(--peach))] bg-clip-text text-transparent">
                  Our Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Meet the passionate leaders driving innovation and empowerment across Africa
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Management Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {managementTeam.map((member, index) => (
              <ScrollReveal key={index}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--coral))]/20 to-[hsl(var(--peach))]/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                  <div className="relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-24 h-24 border-4 border-[hsl(var(--coral))]/20">
                        <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))] text-white text-2xl font-bold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {member.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-[hsl(var(--warm-bg))]/20 to-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Advisory Board
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] mx-auto rounded-full mb-8"></div>
              <div className="bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-[hsl(var(--coral))]/10">
                <p className="text-2xl text-muted-foreground italic">
                  To be announced soon
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
