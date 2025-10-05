import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Heart, CheckCircle } from "lucide-react";
import innofemmeLabs from "@/assets/innofemme-labs.jpg";
import hack4equity from "@/assets/hack4equity.jpg";
import handsHeart from "@/assets/hands-heart.svg";

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-[hsl(var(--purple-light))] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="hero-text">Our Programs</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Empowering African women through training, hackathons, and holistic wellness support
            </p>
          </div>
        </div>
      </section>

      {/* Innofemme Labs */}
      <section id="innofemme-labs" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Flagship Program</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Innofemme Labs: <span className="text-primary">Building the Future, Together</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our flagship training and incubation program that connects talented women technologists 
                  with women-led startups that need them.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={innofemmeLabs} alt="Innofemme Labs" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-card to-[hsl(var(--warm-bg))] p-8 md:p-12 rounded-3xl shadow-lg border border-border space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">How It Works</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We recruit <strong>Innofemme Fellows</strong>—software engineers, product designers, AI engineers, 
                  data scientists, and other tech professionals—and provide them with cutting-edge training and mentorship. 
                  Simultaneously, we open applications for women-led startups seeking to build software systems.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Here's where the magic happens: Our fellows build these systems for startups completely free of charge, 
                  gaining real-world experience while ensuring women entrepreneurs have access to the technology they need to succeed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Current Project: Inploy</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  A revolutionary job search and applicant tracking portal featuring:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background p-6 rounded-xl shadow-md">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold mb-2">Transparency</h4>
                    <p className="text-sm text-muted-foreground">
                      Applicants can see their qualification scores and keyword matches exactly as employers see them
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-md">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold mb-2">Bias Evaluation</h4>
                    <p className="text-sm text-muted-foreground">
                      Understand how your demographics might disadvantage you in the hiring process
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-md">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold mb-2">Equity by Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Built from the ground up to expose and combat systemic biases in recruitment
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg">
                  Join as a Fellow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Apply as a Startup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hack4Equity */}
      <section id="hack4equity" className="py-20 bg-gradient-to-b from-background to-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
                <img src={hack4equity} alt="Hack4Equity Hackathon" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                  <Zap className="h-5 w-5 text-secondary" />
                  <span className="font-semibold text-secondary">Community Impact</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Hack4Equity: <span className="text-secondary">Hackathons with Purpose</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our series of targeted hackathons designed to bring women together to address the issues 
                  they face using their collective skills and lived experiences.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Mobile Money Fraud Hackathon */}
              <div className="bg-card p-8 md:p-12 rounded-3xl shadow-lg border border-border">
                <h3 className="text-3xl font-bold mb-4 text-primary">Mobile Money Fraud Hackathon</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                    When: April 2026
                  </span>
                  <span className="px-4 py-2 bg-secondary/10 rounded-full text-sm font-semibold text-secondary">
                    In Partnership With: MTN Mobile Money Ltd.
                  </span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Mobile money has transformed financial inclusion across Africa, but with it comes new vulnerabilities. 
                  This hackathon challenges participants to develop innovative solutions to combat mobile money fraud, 
                  protecting the financial security of millions of African women who rely on these systems.
                </p>
              </div>

              {/* Rural Women Hackathon */}
              <div className="bg-gradient-to-br from-secondary/10 to-[hsl(var(--yellow))]/10 p-8 md:p-12 rounded-3xl shadow-lg border border-secondary/20">
                <h3 className="text-3xl font-bold mb-4 text-secondary">Rural Women Hackathon</h3>
                <p className="text-xl font-semibold text-foreground mb-6">
                  Our Bold Challenge: We reject the assumption that women with little to no formal education 
                  lack the understanding to solve their own problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We identify the most pressing challenges facing rural women—irrigation in agriculture, energy access, 
                  food preservation, and more. Then we bring together the women most affected by these issues and pair 
                  them with women who have formal training in relevant fields. Together, they plan and build viable, 
                  community-centered solutions.
                </p>
                <p className="text-lg font-semibold text-foreground mb-6">
                  This isn't charity. This is recognition that rural women are innovators, problem-solvers, 
                  and experts in their own lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="coral" size="lg">
                    Nominate a Challenge
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Participate as a Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gurlz Wellness */}
      <section id="gurlz-wellness" className="py-20 bg-[hsl(var(--warm-bg))]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary">Holistic Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Gurlz Wellness: <span className="text-primary">Innovation Starts with Wellbeing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Physical, mental, and sexual reproductive health barriers should never impede African women's 
                ability to innovate. Gurlz Wellness ensures that women have the support they need to thrive 
                in every dimension of their lives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Monthly Gurlz Connect */}
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <div className="mb-6">
                  <img src={handsHeart} alt="Community Support" className="w-20 h-20" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Monthly Gurlz Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Safe, supportive spaces where urban women gather to discuss their shared challenges with 
                  expert facilitators. From menstrual health to mental wellness, workplace stress to reproductive 
                  rights—no topic is off-limits. These monthly gatherings build community, break isolation, 
                  and provide access to professional guidance.
                </p>
                <Button variant="hero">
                  RSVP for Next Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Gurlz Wellness App */}
              <div className="bg-gradient-to-br from-primary to-[hsl(var(--purple-light))] p-8 rounded-2xl shadow-lg text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Gurlz Wellness App</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  Your anonymous companion for holistic health. The Gurlz Wellness app provides:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span><strong>Anonymous Chat:</strong> Share your story and get support without fear of judgment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span><strong>Community Stories:</strong> Read about other women's experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span><strong>Expert Resources:</strong> Educational content on physical, mental, and reproductive health</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span><strong>Professional Help:</strong> Connect with healthcare providers and counselors</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
                    Download on iOS
                  </Button>
                  <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
                    Download on Android
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-foreground">
                Because wellness isn't a luxury—it's a prerequisite for innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
