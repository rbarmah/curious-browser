import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TeamMemberDialog, TeamMember } from "@/components/TeamMemberDialog";
import ruthieArmahPhoto from "@/assets/ruthie-armah.png";
import teamHeroAbstract from "@/assets/team-hero-abstract.jpg";

const managementTeam: TeamMember[] = [
  { 
    name: "Ruthie Armah", 
    role: "Executive Director", 
    initials: "RA",
    image: ruthieArmahPhoto,
    bio: "Ruthie Armah is a visionary leader dedicated to empowering women and girls across Africa through technology and innovation. With over a decade of experience in nonprofit leadership and social entrepreneurship, she has championed numerous initiatives that bridge the gender gap in STEM fields.\n\nUnder her leadership, InnoFemme has grown from a grassroots organization to a continent-wide movement, impacting thousands of lives through education, mentorship, and community building. Her approach combines strategic thinking with deep empathy, creating programs that are both scalable and deeply personal.\n\nRuthie believes that true innovation comes from diversity of thought and lived experience, and she works tirelessly to create spaces where African women can lead, innovate, and transform their communities.",
    achievements: [
      "Led InnoFemme to impact over 5,000 women and girls across 8 African countries",
      "Established partnerships with major tech companies and international development organizations",
      "Recognized as one of Africa's Top 40 Under 40 Social Innovators",
      "Published research on women's empowerment and technology adoption in developing nations"
    ],
    specialization: ["Leadership", "Social Innovation", "Women's Empowerment", "Strategic Partnerships"],
  },
  { 
    name: "Emmanuella Brown", 
    role: "Director, Partnerships", 
    initials: "EB",
    bio: "Emmanuella Brown is a strategic partnership expert with a proven track record of building sustainable collaborations between nonprofit organizations, corporations, and government entities. Her work focuses on creating mutually beneficial relationships that advance InnoFemme's mission while delivering value to partner organizations.\n\nWith a background in international development and corporate social responsibility, Emmanuella brings a unique perspective to partnership development. She understands both the social impact sector and corporate landscape, enabling her to bridge these worlds effectively.\n\nHer collaborative approach has resulted in groundbreaking partnerships that have expanded InnoFemme's reach and resources, making our programs more accessible to women and girls across the continent.",
    achievements: [
      "Secured over $2M in partnership funding and in-kind support",
      "Developed strategic alliances with 15+ major technology companies",
      "Created innovative public-private partnership models for women's empowerment",
      "Built a network of 50+ corporate mentors for InnoFemme programs"
    ],
    specialization: ["Strategic Partnerships", "Corporate Relations", "Fundraising", "Stakeholder Engagement"],
  },
  { 
    name: "Grazia Graham", 
    role: "Director, Research and Intelligence", 
    initials: "GG",
    bio: "Grazia Graham leads InnoFemme's research and intelligence efforts, ensuring that all our programs are grounded in rigorous data and evidence-based practices. Her work involves conducting impact assessments, analyzing trends in women's technology adoption, and translating complex data into actionable insights.\n\nWith a PhD in Development Studies and extensive experience in quantitative and qualitative research methodologies, Grazia brings academic rigor to our work while maintaining a practical focus on real-world impact. She is passionate about using data to tell stories that drive policy change and resource allocation.\n\nHer research has informed program design across InnoFemme and has been cited in policy documents by international development agencies and African governments.",
    achievements: [
      "Published 10+ peer-reviewed articles on women in technology and innovation",
      "Led comprehensive impact studies across all InnoFemme programs",
      "Developed monitoring and evaluation frameworks adopted by similar organizations",
      "Presented research findings at international conferences and policy forums"
    ],
    specialization: ["Research Design", "Impact Assessment", "Data Analytics", "Policy Analysis"],
  },
  { 
    name: "Gloria Graham", 
    role: "Director, Product and Engineering", 
    initials: "GG",
    bio: "Gloria Graham is a seasoned software engineer and product leader who oversees the development of InnoFemme's digital platforms and technical training programs. Her expertise spans full-stack development, UX design, and agile product management.\n\nWith 12 years of experience in the tech industry, including roles at leading technology companies, Gloria brings cutting-edge technical knowledge to InnoFemme while ensuring our programs remain accessible and relevant to participants at all skill levels.\n\nShe is passionate about demystifying technology and creating pathways for women to enter and excel in the tech industry. Her leadership has transformed InnoFemme's technical offerings, making them some of the most comprehensive and effective in the region.",
    achievements: [
      "Built and scaled InnoFemme's digital learning platform to 10,000+ users",
      "Developed curriculum for 8 technical training programs from beginner to advanced levels",
      "Led engineering teams at Fortune 500 companies before joining InnoFemme",
      "Mentored 200+ women into successful tech careers"
    ],
    specialization: ["Software Engineering", "Product Management", "Technical Training", "UX Design"],
  },
  { 
    name: "Dr. Chantelle Kanamintie", 
    role: "Director, Gurlz Wellness Program", 
    initials: "CK",
    bio: "Dr. Chantelle Kanamintie is a clinical psychologist and wellness advocate who founded and leads InnoFemme's Gurlz Wellness Program. Recognizing that mental health and overall wellbeing are critical to women's success in any field, she developed a holistic program that addresses physical health, mental wellness, and emotional resilience.\n\nWith extensive experience in adolescent psychology and community health, Dr. Kanamintie has created culturally appropriate wellness interventions that resonate with African women and girls. Her approach integrates traditional healing practices with evidence-based psychological interventions.\n\nUnder her leadership, the Gurlz Wellness Program has become a model for holistic women's empowerment, addressing not just skills and knowledge but also the mental and emotional foundation needed for lasting success.",
    achievements: [
      "Developed comprehensive wellness curriculum serving 3,000+ participants",
      "Trained 50+ peer wellness counselors across 6 countries",
      "Published groundbreaking research on mental health among young African women in STEM",
      "Created culturally adapted mental health resources in 5 African languages"
    ],
    specialization: ["Clinical Psychology", "Wellness Program Design", "Mental Health Advocacy", "Youth Development"],
  },
  { 
    name: "Diane Ndur-Buabeng", 
    role: "Deputy Director, Gurlz Wellness Program", 
    initials: "DN",
    bio: "Diane Ndur-Buabeng works alongside Dr. Kanamintie to implement and scale the Gurlz Wellness Program across InnoFemme's operating countries. With a background in public health and community organizing, she brings operational excellence and grassroots connectivity to the wellness initiative.\n\nDiane's strength lies in building sustainable community-based wellness systems that continue to support women and girls long after formal programs end. She trains local facilitators, develops peer support networks, and creates resource materials that are accessible and culturally relevant.\n\nHer work ensures that wellness support reaches even the most marginalized communities, breaking down barriers to access and creating safe spaces for women to prioritize their health and wellbeing.",
    achievements: [
      "Established 25+ community wellness hubs across West Africa",
      "Trained 100+ community health workers in mental health first aid",
      "Created peer support networks reaching 2,000+ young women",
      "Developed low-cost wellness intervention models replicable in resource-limited settings"
    ],
    specialization: ["Public Health", "Community Organizing", "Program Implementation", "Peer Support Systems"],
  },
  { 
    name: "Pearl Frempong-Smart", 
    role: "Director, Hack4Equity", 
    initials: "PF",
    bio: "Pearl Frempong-Smart leads InnoFemme's flagship innovation program, Hack4Equity, where participants tackle real-world challenges facing African communities through technology and creative problem-solving. Her vision is to position African women as leaders in social innovation and tech entrepreneurship.\n\nWith experience in startup ecosystems, venture capital, and technology education, Pearl has created a program that not only teaches technical skills but also fosters entrepreneurial mindset and provides pathways to funding and market access for participants' innovations.\n\nHer leadership has transformed Hack4Equity into a launchpad for women-led startups, with numerous alumni going on to secure funding, scale their ventures, and create employment in their communities.",
    achievements: [
      "Supported 50+ women-led startups through ideation to market launch",
      "Secured $500K in seed funding for Hack4Equity alumni ventures",
      "Organized 12 successful hackathons with 1,000+ participants",
      "Created accelerator program with 85% participant success rate"
    ],
    specialization: ["Innovation Management", "Entrepreneurship", "Hackathon Design", "Startup Acceleration"],
  },
  { 
    name: "Douglas Kofi Baidoo", 
    role: "Creative Designer", 
    initials: "DK",
    bio: "Douglas Kofi Baidoo is InnoFemme's creative visionary, responsible for all visual communications, brand identity, and user experience design. His work ensures that InnoFemme's message is not only heard but felt, creating emotional connections that inspire action and engagement.\n\nWith a background in graphic design, digital media, and brand strategy, Douglas brings artistic excellence and strategic thinking to every project. He understands that powerful design can break down complex ideas, make information accessible, and create inclusive spaces where everyone feels welcome.\n\nHis creative work has elevated InnoFemme's brand, making it one of the most recognizable and respected women's empowerment organizations in Africa.",
    achievements: [
      "Redesigned InnoFemme brand identity, increasing recognition by 300%",
      "Created award-winning campaign materials for major initiatives",
      "Led design of digital platforms with 95% user satisfaction ratings",
      "Mentored 30+ young designers through InnoFemme's creative labs"
    ],
    specialization: ["Graphic Design", "Brand Strategy", "UX/UI Design", "Digital Media"],
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img src={teamHeroAbstract} alt="Abstract representation of leadership" className="w-full h-full object-cover" />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--coral)) 1px, transparent 1px),
                              radial-gradient(circle at 80% 80%, hsl(var(--peach)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Text Overlay at Left */}
        <div className="absolute inset-y-0 left-0 flex items-center container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--peach))]"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Meet Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="inline-block text-[hsl(var(--peach-light))] animate-typing">
                The Leaders
              </span>{" "}
              <span className="inline-block text-white animate-typing" style={{ animationDelay: "0.5s" }}>
                Behind the Mission
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Meet the passionate leaders driving innovation and empowerment across Africa, 
              dedicated to creating opportunities for women in technology and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Transition Zone */}
      <div className="h-32 bg-gradient-to-b from-[hsl(var(--peach))]/40 via-[hsl(var(--purple-deep))]/20 to-background"></div>

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
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  image={member.image}
                  onClick={() => handleMemberClick(member)}
                  index={index}
                />
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

      {/* Team Member Dialog */}
      <TeamMemberDialog
        member={selectedMember}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <Footer />
    </div>
  );
};

export default Team;
