import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80"></div>
        <img
          src={heroImage}
          alt="African women innovating with technology"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Eyebrow text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-slide-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-white tracking-wide">Pioneering Innofeminism</span>
          </div>

          {/* Main headline */}
          <h1 className="mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-4">
              Centering
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-4">
              <span className="text-white">African Women</span>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
              <span className="inline-block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                at the Heart of Innovation
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Building a future where technology works for <span className="font-bold text-accent">everyone</span> through the power of Innofeminism
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="secondary" 
              size="lg" 
              className="group text-lg px-8 py-7 shadow-2xl hover:shadow-accent/50 transition-all"
            >
              Join Our Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              className="group text-lg px-8 py-7 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl transition-all"
            >
              Learn About Innofeminism
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
