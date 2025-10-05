import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, ChevronLeft, ChevronRight } from "lucide-react";
import innofemmeLabs from "@/assets/innofemme-labs.jpg";

interface InnofemmeCarouselProps {
  onJoinAsFellow: () => void;
  onApplyAsStartup: () => void;
}

export const InnofemmeCarousel = ({ onJoinAsFellow, onApplyAsStartup }: InnofemmeCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      type: "main",
      title: "Innofemme Labs",
      description: "Our flagship training and incubation program connecting talented women technologists with women-led startups.",
    },
    {
      type: "how-it-works",
      title: "How It Works",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Main Card Slide */}
        {activeIndex === 0 && (
          <div 
            className="group relative overflow-hidden rounded-3xl transition-all duration-700"
            style={{ 
              boxShadow: '0 4px 8px hsl(256, 35%, 40%, 0.08), 0 12px 24px hsl(256, 35%, 40%, 0.12), 0 24px 48px hsl(256, 35%, 40%, 0.16)',
            }}
          >
            {/* Decorative Corner Accent - Top Left */}
            <div className="absolute top-0 left-0 w-40 h-40 z-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-white/90 to-transparent"></div>
              <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-white/90 to-transparent"></div>
              <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-white/70 group-hover:scale-150 transition-transform duration-500"></div>
            </div>

            {/* Decorative Corner Accent - Bottom Right */}
            <div className="absolute bottom-0 right-0 w-40 h-40 z-20 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-white/70 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-t from-white/70 to-transparent"></div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={innofemmeLabs}
                alt="Innofemme Labs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/90 via-[hsl(var(--primary))]/50 to-transparent"></div>

            {/* Glassmorphism Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent backdrop-blur-[0.5px]"></div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
              <div className="absolute w-40 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -left-40 group-hover:left-full transition-all duration-1000 ease-out"></div>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.15), 0 0 50px hsl(var(--coral-glow), 0.5), inset 0 0 50px hsl(var(--coral-glow), 0.15)',
              }}
            ></div>

            {/* Content */}
            <div className="relative p-10 md:p-16 min-h-[500px] lg:min-h-[600px] flex flex-col justify-end text-white z-10">
              {/* Decorative Accent Bar */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-white to-white/40 rounded-full mb-8 group-hover:w-40 transition-all duration-500"></div>

              <div className="space-y-6 max-w-3xl">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {slides[0].title}
                </h3>
                
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {slides[0].description}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button
                    variant="coral"
                    size="lg"
                    onClick={onJoinAsFellow}
                    className="bg-[hsl(var(--coral))] text-white border-2 border-[hsl(var(--coral))] hover:bg-white hover:text-[hsl(var(--coral))] hover:border-white transition-all duration-300 shadow-lg text-base"
                  >
                    Join as a Fellow
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onApplyAsStartup}
                    className="border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[hsl(var(--purple-deep))] transition-all duration-300 shadow-lg text-base"
                  >
                    Apply as a Startup
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-white/40 animate-pulse"></div>
              <div className="absolute top-1/2 right-16 w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Bottom Inner Shadow for Depth */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>
        )}

        {/* How It Works Slide */}
        {activeIndex === 1 && (
          <div 
            className="group relative"
            style={{ perspective: "1200px" }}
          >
            {/* Floating Particles */}
            <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-[hsl(var(--coral))] animate-pulse"></div>
            <div className="absolute top-10 -right-6 w-2 h-2 rounded-full bg-[hsl(var(--peach))] animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative bg-gradient-to-br from-[hsl(var(--coral))]/5 via-[hsl(var(--peach))]/5 to-[hsl(var(--coral))]/10 border-l-4 border-[hsl(var(--primary))] p-10 md:p-12 rounded-r-2xl shadow-2xl transform transition-all duration-700 hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-10px_hsl(var(--coral-glow)/0.4)] min-h-[500px] lg:min-h-[600px] flex flex-col justify-center">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--coral))]/20 via-transparent to-[hsl(var(--peach))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-r-2xl" 
                style={{ 
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              ></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--coral))] flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    How It Works
                  </h3>
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Innofemme Labs operates on a dual-track model that creates value for both emerging tech talent and women-led startups. 
                  We recruit talented technologists—including software engineers, product designers, AI engineers, and data scientists—and 
                  provide them with industry-relevant training, mentorship, and hands-on project experience.
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Concurrently, we partner with women-led startups that need technical systems built. Our fellows collaborate with these 
                  startups to develop their software solutions at no cost, gaining real-world experience while helping women entrepreneurs 
                  access the technology infrastructure essential for growth and success.
                </p>
              </div>

              {/* Glow Elements */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[hsl(var(--primary))]/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:bg-[hsl(var(--coral-glow))]/30 transition-all duration-700"></div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrev}
        className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white/80 hover:bg-white shadow-lg"
      >
        <ChevronLeft className="h-6 w-6 text-[hsl(var(--primary))]" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white/80 hover:bg-white shadow-lg"
      >
        <ChevronRight className="h-6 w-6 text-[hsl(var(--primary))]" />
      </Button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[hsl(var(--primary))] w-8"
                : "bg-[hsl(var(--primary))]/30 hover:bg-[hsl(var(--primary))]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
