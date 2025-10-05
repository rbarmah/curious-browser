import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillarCard } from "@/components/PillarCard";
import { ComicCarousel } from "@/components/ComicCarousel";
import { RefreshCw, Lightbulb, Heart } from "lucide-react";
import handsCollaborate from "@/assets/hands-collaborate.svg";
import handsIdea from "@/assets/hands-idea.svg";
import handsHeart from "@/assets/hands-heart.svg";
import comicPanel1 from "@/assets/comic-panel-1.jpg";
import comicPanel2 from "@/assets/comic-panel-2.jpg";
import comicPanel3 from "@/assets/comic-panel-3.jpg";
import comicPanel4 from "@/assets/comic-panel-4.jpg";
import comicPanel5 from "@/assets/comic-panel-5.jpg";
import comicPanel6 from "@/assets/comic-panel-6.jpg";
import comicPanel7 from "@/assets/comic-panel-7.jpg";
import comicPanel8 from "@/assets/comic-panel-8.jpg";
import comicPanel9 from "@/assets/comic-panel-9.jpg";
import comicPanel10 from "@/assets/comic-panel-10.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const comicPanels = [
  {
    image: comicPanel1,
    narration: "Let me tell you about the algorithms that run our world. They decide who gets hired, who receives healthcare, who gets a loan, whose voice is heard online. They're supposed to be neutral, objective, fair. They're none of those things. And I can prove it.",
  },
  {
    image: comicPanel2,
    narration: "Facial recognition. The technology fails to recognize Black women 35% of the time. For white men? Less than 1%. That's not a small bug. That's a 43-fold difference. When the tech can't see you, you become invisible to systems that use it - from your phone to police surveillance.",
    data: "35% vs 0.8% error rate",
  },
  {
    image: comicPanel3,
    narration: "Amazon built an AI to hire software engineers. It trained on ten years of resumes - mostly from men. Know what it learned? That male equals qualified. It automatically rejected resumes with the word 'women's' anywhere on them. Women's chess club. Women's college. Automatic rejection.",
    data: "Trained on male-dominated data = Gender bias at scale",
  },
  {
    image: comicPanel4,
    narration: "Healthcare algorithms predict who needs help. But they use spending as a proxy for sickness. Here's the problem: Black patients spend less not because they're healthier, but because they have less access to care. Result? The algorithm denies care to the people who need it most. Over 50% of eligible Black patients are excluded.",
    data: "Millions denied care by biased algorithms",
  },
  {
    image: comicPanel5,
    narration: "Social media algorithms are supposed to remove hate speech. Instead, they flag Black people's speech as 'toxic' twice as often. Indigenous activists sharing stories about Missing and Murdered Indigenous Women? Deleted. Black creators posting about their experiences? Suppressed by 50%. The algorithm silences the very voices that need amplifying.",
    data: "2x more likely to be flagged | 50% less reach",
  },
  {
    image: comicPanel6,
    narration: "Credit algorithms decide who gets loans. Same income, same job, better credit score? Women still get denied more often. Why? The algorithm learned from decades of banks discriminating against women. Now it just automates the bias. There's a 1.7 trillion dollar financing gap between male and female-owned businesses.",
    data: "$1.7 trillion gap",
  },
  {
    image: comicPanel7,
    narration: "So why are all these systems broken? Look at who's building them. Women make up only 22% of AI professionals globally. At the leadership level? Just 10%. When 88% of AI researchers are men, and most are white, they build systems that work for people like them. Everyone else becomes an afterthought.",
    data: "22% women in AI | 10% in leadership",
  },
  {
    image: comicPanel8,
    narration: "It's a cycle. Historical discrimination creates biased data. Teams that all look the same build algorithms on that data. Those algorithms discriminate at massive scale. That creates new biased data. And the cycle continues, getting worse with each loop. This isn't accidental. This is algorithmic oppression.",
    data: "The cycle amplifies itself",
  },
  {
    image: comicPanel9,
    narration: "But here's the hope: When diverse teams build algorithms, bias drops by 84%. Not because we're magical. Because we ask different questions. We test on different faces. We remember that real people are affected by these systems. The solution isn't complicated. It's about who's in the room.",
    data: "84% bias reduction with diverse teams",
  },
  {
    image: comicPanel10,
    narration: "This is why Innofemme exists. African women aren't the problem with technology - we're the solution. We're not asking for seats at their broken tables. We're building new ones. Tables where everyone is seen, heard, and valued. The future of technology can't be coded without us. Join us.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img src={aboutHero} alt="African women in technology" className="w-full h-full object-cover" />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Text Overlay at Left */}
        <div className="absolute inset-y-0 left-0 flex items-center container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--peach))]"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="inline-block text-[hsl(var(--peach-light))] animate-typing">
                About
              </span>{" "}
              <span className="inline-block text-[hsl(var(--coral))] animate-typing" style={{ animationDelay: "0.5s" }}>
                Innofemme
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              A non-profit collective committed to centering the innovative capacity of women, 
              ensuring that technology and innovation works for everyone—not just the privileged few.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-black/60 via-[hsl(var(--purple-deep))]/40 to-background"></div>

      {/* Comic Strip Section */}
      <section className="relative py-32 bg-gradient-to-b from-background via-[hsl(var(--warm-bg))] to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[hsl(var(--coral))]/10 to-[hsl(var(--peach))]/10 rounded-full border border-[hsl(var(--coral))]/20 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--coral))]"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] bg-clip-text text-transparent uppercase tracking-wider">Visual Story</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--coral-glow))] to-[hsl(var(--peach))] bg-clip-text text-transparent animate-shimmer" 
                style={{ 
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                The Algorithm
              </span>
              <br />
              <span className="text-foreground">Knows</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A visual story about algorithmic bias and why diverse voices in technology matter
            </p>
          </div>
          <ComicCarousel panels={comicPanels} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-32 bg-background overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img src={aboutHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-32">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[hsl(var(--coral))]/10 to-[hsl(var(--peach))]/10 rounded-full border border-[hsl(var(--coral))]/20 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--peach))]"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] bg-clip-text text-transparent uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-primary">Innovation</span>
                <br />
                <span className="text-muted-foreground">For Everyone.</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--peach))] mx-auto rounded-full"></div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Innofemme is a non-profit collective committed to centering the innovative capacity of women, 
                ensuring that technology and innovation works for everyone—not just the privileged few.
              </p>
            </div>

            <div 
              className="group relative max-w-5xl mx-auto"
              style={{ perspective: "1200px" }}
            >
              {/* Floating Particles */}
              <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-[hsl(var(--coral))] animate-particle"></div>
              <div className="absolute top-10 -right-6 w-2 h-2 rounded-full bg-[hsl(var(--peach))] animate-particle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 left-10 w-4 h-4 rounded-full bg-[hsl(var(--coral-glow))] animate-particle" style={{ animationDelay: '2s' }}></div>

              {/* 3D Card */}
              <div className="relative bg-gradient-to-br from-[hsl(var(--coral))]/5 via-[hsl(var(--peach))]/5 to-[hsl(var(--coral))]/10 border-l-4 border-[hsl(var(--primary))] p-10 md:p-12 rounded-r-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 group-hover:shadow-[0_20px_60px_-10px_hsl(var(--coral-glow)/0.4)]"
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
                <h3 className="relative text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--peach))] bg-clip-text text-transparent"
                  style={{ transform: "translateZ(30px)" }}
                >
                  What is Innofeminism?
                </h3>
                <p className="relative text-lg md:text-2xl text-foreground font-medium leading-relaxed"
                  style={{ transform: "translateZ(30px)" }}
                >
                  Innofeminism is our unique praxis that empowers African women to harness their afrofeminist 
                  'motherist' innovative capacity to transform technology from the ground up. We believe African 
                  women possess not only the skills but the ethical framework needed to build a more just 
                  technological future.
                </p>
                
                {/* Glow Elements */}
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[hsl(var(--primary))]/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:bg-[hsl(var(--coral-glow))]/30 transition-all duration-700"></div>
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
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-32 bg-gradient-to-b from-background via-[hsl(var(--warm-bg))] to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Our Three-Pillar</span>
              <br />
              <span className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--coral-glow))] to-[hsl(var(--peach))] bg-clip-text text-transparent animate-shimmer" 
                style={{ 
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Approach
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
      <section className="relative py-32 bg-gradient-to-b from-background via-[hsl(var(--warm-bg))] to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[hsl(var(--coral))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-primary">Our</span>{" "}
                <span className="inline-block bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--coral-glow))] to-[hsl(var(--peach))] bg-clip-text text-transparent animate-shimmer" 
                  style={{ 
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Team
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--peach))] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[hsl(var(--coral))]/5 via-[hsl(var(--peach))]/5 to-card p-8 md:p-10 rounded-3xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 group">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[hsl(var(--coral))] to-primary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">5</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Advisory Board Members</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Distinguished leaders guiding our strategic vision and ensuring our work creates lasting impact.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[hsl(var(--peach))]/5 via-[hsl(var(--coral))]/5 to-card p-8 md:p-10 rounded-3xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 group">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[hsl(var(--peach))] to-[hsl(var(--coral))] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">8</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Team Professionals</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
