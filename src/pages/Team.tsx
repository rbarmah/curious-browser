import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TeamMemberDialog, TeamMember } from "@/components/TeamMemberDialog";
import ruthieArmahPhoto from "@/assets/ruthie-armah.png";
import emmanuellaAsieduPhoto from "@/assets/emmanuella-asiedu.png";
import gloriaGyamfiPhoto from "@/assets/gloria-gyamfi.png";
import graziaAmenuPhoto from "@/assets/grazia-amenu.png";
import teamHeroAbstract from "@/assets/team-hero-abstract.jpg";

const managementTeam: TeamMember[] = [
  { 
    name: "Ruthie Armah", 
    role: "Executive Director & AI/ML Engineer", 
    initials: "RA",
    image: ruthieArmahPhoto,
    bio: "Ruthie is an AI/ML Engineer in the Fintech space. She is a PhD student with KNUST and the Technical University of Munich. She also has an Executive Education in Business Administration from the Accra Business School. With over 5 years of project-management experience, she has designed and scaled digital interventions for government agencies, health-service providers, and research institutions, and driven technology solutions across a number of startups. As a committed mentor, Ruthie has guided many women into tech careers. At InnoFemme, she brings her cross-sectoral expertise to drive the team towards accelerated innovation for equity in technology and innovation.",
    specialization: ["AI/ML Engineering", "Fintech", "Project Management", "Mentorship"],
  },
  { 
    name: "Emmanuella Asiedu", 
    role: "Business Development Lead", 
    initials: "EA",
    image: emmanuellaAsieduPhoto,
    bio: "Emmanuella is InnoFemme's Business Development Lead & currently an Renewable Energy Intern at the World Bank Group, Namibia. Trained in sustainable business modeling and strategic planning at the Technical University of Munich's School of Management. An expert in lead generation, partnership negotiation, and market expansion in Africa, she is building our go-to-market framework: driving early visibility, forging strategic alliances, and mapping revenue pathways to ensure InnoFemme's scalable growth and lasting impact.",
    specialization: ["Business Development", "Strategic Planning", "Partnership Negotiation", "Market Expansion"],
  },
  { 
    name: "Grazia Amenu", 
    role: "Data Lead", 
    initials: "GA",
    image: graziaAmenuPhoto,
    bio: "Grazia is a Certified Data Scientist, who was a GIZ-Blossom Academy AI Fellow, and the Womanium Quantum AI Fellowship. With experience as a Technical Project Manager, Data Analyst, and Data Management Associate, she's designed end-to-end data pipelines, overseen research analytics, and turned complex datasets into clear, actionable insights. As InnoFemme's Data Lead, Grazia applies market-research and analytics to inform project planning, prioritization, and shape partner engagement.",
    specialization: ["Data Science", "AI", "Technical Project Management", "Research Analytics"],
  },
  { 
    name: "Gloria Gyamfi", 
    role: "Technology Lead", 
    initials: "GG",
    image: gloriaGyamfiPhoto,
    bio: "Gloria is a computer engineer and researcher specializing in biomedical signal processing, assistive robotics, and inclusive technology design. A graduate researcher at KNUST's Responsible AI Lab and ETH Zurich, she has sharpened her skills through prestigious fellowships, most notably the ETH Zurich Robotics Students Fellowship, where she optimized real-time sensor-signal pipelines, designed artifact-removal algorithms, and co-developed a feature-extraction toolbox for activity recognition. At Innofemme, she leads initiatives to repurpose and imagine tech tools.",
    specialization: ["Computer Engineering", "Biomedical Signal Processing", "Assistive Robotics", "AI Research"],
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
