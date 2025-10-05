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

      {/* Comic Strip Section */}
      <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">The Algorithm Knows</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A visual story about algorithmic bias and why diverse voices in technology matter
            </p>
          </div>
          <ComicCarousel panels={comicPanels} />
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
