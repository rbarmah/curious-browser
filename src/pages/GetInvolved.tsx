import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Heart, HandHeart } from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-primary to-[hsl(var(--purple-light))] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="hero-text">Get Involved</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Join us in transforming innovation for African women
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Fellows & Professionals</h3>
              <p className="text-muted-foreground mb-6">
                Are you a software engineer, product designer, AI specialist, data scientist, or tech professional?
              </p>
              <Button variant="hero">
                Become a Fellow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <Briefcase className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Startups</h3>
              <p className="text-muted-foreground mb-6">
                Building a women-led startup and need technical support?
              </p>
              <Button variant="coral">
                Apply to Innofemme Labs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <HandHeart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Partners & Sponsors</h3>
              <p className="text-muted-foreground mb-6">
                Support programs that center African women's innovation.
              </p>
              <Button variant="outline">
                Partner with Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <Heart className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Everyone</h3>
              <p className="text-muted-foreground mb-6">
                Donate, subscribe, or attend our events and hackathons.
              </p>
              <Button variant="secondary">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
