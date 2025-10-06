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
import chantelleKanamintiePhoto from "@/assets/chantelle-kanamintie.jpg";
import dianaNdurBuabengPhoto from "@/assets/diana-ndur-buabeng.jpg";
import pearlFrempongSmartPhoto from "@/assets/pearl-frempong-smart.png";
import douglasBaidooPhoto from "@/assets/douglas-baidoo.jpg";
import teamHeroAbstract from "@/assets/team-hero-abstract.jpg";

const managementTeam: TeamMember[] = [
  { 
    name: "Ruthie Armah", 
    role: "Executive Director", 
    initials: "RA",
    image: ruthieArmahPhoto,
    bio: "Ruthie is an AI/ML Engineer in the Fintech space. She is a PhD student with KNUST and the Technical University of Munich. She also has an Executive Education in Business Administration from the Accra Business School. With over 5 years of project-management experience, she has designed and scaled digital interventions for government agencies, health-service providers, and research institutions, and driven technology solutions across a number of startups. As a committed mentor, Ruthie has guided many women into tech careers. At InnoFemme, she brings her cross-sectoral expertise to drive the team towards accelerated innovation for equity in technology and innovation.",
    specialization: ["AI/ML Engineering", "Fintech", "Project Management", "Mentorship"],
  },
  { 
    name: "Emmanuella Brown", 
    role: "Director, Partnerships", 
    initials: "EB",
    image: emmanuellaAsieduPhoto,
    bio: "Emmanuella is InnoFemme's Business Development Lead & currently an Renewable Energy Intern at the World Bank Group, Namibia. Trained in sustainable business modeling and strategic planning at the Technical University of Munich's School of Management. An expert in lead generation, partnership negotiation, and market expansion in Africa, she is building our go-to-market framework: driving early visibility, forging strategic alliances, and mapping revenue pathways to ensure InnoFemme's scalable growth and lasting impact.",
    specialization: ["Business Development", "Strategic Planning", "Partnership Negotiation", "Market Expansion"],
  },
  { 
    name: "Grazia Graham", 
    role: "Director, Research and Data Intelligence", 
    initials: "GG",
    image: graziaAmenuPhoto,
    bio: "Grazia is a Certified Data Scientist, who was a GIZ-Blossom Academy AI Fellow, and the Womanium Quantum AI Fellowship. With experience as a Technical Project Manager, Data Analyst, and Data Management Associate, she's designed end-to-end data pipelines, overseen research analytics, and turned complex datasets into clear, actionable insights. As InnoFemme's Data Lead, Grazia applies market-research and analytics to inform project planning, prioritization, and shape partner engagement.",
    specialization: ["Data Science", "AI", "Technical Project Management", "Research Analytics"],
  },
  { 
    name: "Gloria Graham", 
    role: "Director, Products and Engineering", 
    initials: "GG",
    image: gloriaGyamfiPhoto,
    bio: "Gloria is a computer engineer and researcher specializing in biomedical signal processing, assistive robotics, and inclusive technology design. A graduate researcher at KNUST's Responsible AI Lab and ETH Zurich, she has sharpened her skills through prestigious fellowships, most notably the ETH Zurich Robotics Students Fellowship, where she optimized real-time sensor-signal pipelines, designed artifact-removal algorithms, and co-developed a feature-extraction toolbox for activity recognition. At Innofemme, she leads initiatives to repurpose and imagine tech tools.",
    specialization: ["Computer Engineering", "Biomedical Signal Processing", "Assistive Robotics", "AI Research"],
  },
  { 
    name: "Dr. Deborah Chantelle Terkperkie Kanamitie", 
    role: "Director, Gurlz Wellness Program", 
    initials: "CK",
    image: chantelleKanamintiePhoto,
    bio: "Dr. Deborah Chantelle Terkperkie Kanamitie is a public health and patient safety specialist and implementation lead (Director) for the Gurlz Wellness programme at InnoFemme. She coordinates the program's rollout across Ghana, ensuring culturally grounded, data-driven SRH and wellness services reach young women. Deborah brings over five years' clinical experience, a pioneer in telemedicine and integrated care. As a digital health advocate, she champions user safety, community engagement, and quality in Gurlz's safe spaces.",
    specialization: ["Public Health", "Patient Safety", "Telemedicine", "Digital Health"],
  },
  { 
    name: "Diana Ndur-Buabeng", 
    role: "Deputy Director, Gurlz Wellness Program", 
    initials: "DN",
    image: dianaNdurBuabengPhoto,
    bio: "Diana Ndur-Buabeng is a Registered Midwife and Sexual Reproductive Health (SRH) specialist, serving as Co-Implementation Lead for the Gurlz Wellness Programme at InnoFemme. She brings extensive experience in adolescent health and family planning, having led workshops and clinical sessions that reached hundreds of young people across Ghana. Her empathy, expertise, and trusted communication style make her a respected voice in the SRH community. As an advocate for youth-friendly healthcare, Diana focuses on creating safe, judgment-free spaces where young women can access accurate information and support through the Gurlz Wellness programme.",
    specialization: ["Midwifery", "Sexual Reproductive Health", "Adolescent Health", "Family Planning"],
  },
  { 
    name: "Pearl Frempong-Smart", 
    role: "Director, Hack4Equity", 
    initials: "PF",
    image: pearlFrempongSmartPhoto,
    bio: "Pearl Frempong-Smart is the Implementation lead for Hack 4 Equity at InnoFemme. In this role, she is spearheading the development of InnoFemme's Hack 4 Equity programme, which will serve as a platform for women and male allies to collaborate, innovate, and build solutions that address barriers to equity and inclusion. Pearl brings her skills in user research, innovation, and community-centered design to shape hackathons that are impactful and youth-driven. Her vision is to create inclusive spaces where young women and underrepresented groups can engage in problem-solving, share ideas, and co-create tools that advance fairness and equity.",
    specialization: ["User Research", "Innovation", "Community-Centered Design", "Hackathon Design"],
  },
  { 
    name: "Douglas Kofi Baidoo", 
    role: "Creative Designer", 
    initials: "DK",
    image: douglasBaidooPhoto,
    bio: "Douglas Kofi Baidoo is a creative designer and visual communicator with a strong background in branding, digital media, and marketing design. At InnoFemme, he serves as the Creative Designer, producing visuals that reflect the team's vision of addressing biases and communicating its message with clarity. His work ensures that every design supports brand goals, engages audiences, and maintains consistent quality across platforms.",
    specialization: ["Branding", "Digital Media", "Marketing Design", "Visual Communication"],
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
