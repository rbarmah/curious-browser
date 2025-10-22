import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import gurlzWellnessIntro from "@/assets/gurlz-wellness-intro.jpg";
import gurlzConnect from "@/assets/gurlz-connect.jpg";
import gurlzWellnessApp from "@/assets/gurlz-wellness-app.jpg";

export const GurlzWellnessCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      type: "intro",
      title: "Gurlz Wellness",
    },
    {
      type: "connect",
      title: "Monthly Gurlz Connect",
      description: "Safe, supportive spaces where urban women gather to discuss their shared challenges with expert facilitators. From menstrual health to mental wellness, workplace stress to reproductive rights—no topic is off-limits.",
    },
    {
      type: "app",
      title: "Gurlz Wellness App",
      description: "Your anonymous companion for holistic health. The Gurlz Wellness app provides anonymous chat support, community stories, expert resources on physical, mental, and reproductive health, plus connections to healthcare providers and counselors.",
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
        {/* Intro Slide */}
        {activeIndex === 0 && (
          <div 
            className="group relative overflow-hidden rounded-3xl transition-all duration-700"
            style={{ 
              boxShadow: '0 4px 8px hsl(var(--coral), 0.08), 0 12px 24px hsl(var(--coral), 0.12), 0 24px 48px hsl(var(--coral), 0.16)',
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
                src={gurlzWellnessIntro}
                alt="Gurlz Wellness - Holistic support for African women"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--coral))]/95 via-[hsl(var(--coral))]/60 to-transparent"></div>

            {/* Glassmorphism Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent backdrop-blur-[0.5px]"></div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
              <div className="absolute w-40 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -left-40 group-hover:left-full transition-all duration-1000 ease-out"></div>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.15), 0 0 50px hsl(var(--coral), 0.5), inset 0 0 50px hsl(var(--coral), 0.15)',
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
                  Gurlz Wellness
                </h3>
                
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  Physical, mental, and sexual reproductive health barriers should never impede African women's 
                  ability to innovate. Gurlz Wellness ensures that women have the support they need to thrive 
                  in every dimension of their lives.
                </p>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  Because wellness isn't a luxury—it's a prerequisite for innovation.
                </p>

                <div className="pt-6">
                  <a href="https://gurlz.innofemme.org" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-[hsl(var(--coral))] border-2 border-white hover:bg-[hsl(var(--coral))] hover:text-white hover:border-white transition-all duration-300 shadow-lg text-base"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
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

        {/* Monthly Gurlz Connect Slide */}
        {activeIndex === 1 && (
          <div 
            className="group relative overflow-hidden rounded-3xl transition-all duration-700"
            style={{ 
              boxShadow: '0 4px 8px hsl(var(--coral), 0.08), 0 12px 24px hsl(var(--coral), 0.12), 0 24px 48px hsl(var(--coral), 0.16)',
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
                src={gurlzConnect}
                alt="Monthly Gurlz Connect community gathering"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--coral))]/90 via-[hsl(var(--coral))]/50 to-transparent"></div>

            {/* Glassmorphism Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent backdrop-blur-[0.5px]"></div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
              <div className="absolute w-40 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -left-40 group-hover:left-full transition-all duration-1000 ease-out"></div>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.15), 0 0 50px hsl(var(--coral), 0.5), inset 0 0 50px hsl(var(--coral), 0.15)',
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
                  {slides[1].title}
                </h3>
                
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {slides[1].description}
                </p>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  These monthly gatherings build community, break isolation, and provide access to professional guidance.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button
                    variant="coral"
                    size="lg"
                    className="bg-white text-[hsl(var(--coral))] border-2 border-white hover:bg-[hsl(var(--coral))] hover:text-white hover:border-white transition-all duration-300 shadow-lg text-base"
                  >
                    RSVP for Next Session
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

        {/* Gurlz Wellness App Slide */}
        {activeIndex === 2 && (
          <div 
            className="group relative overflow-hidden rounded-3xl transition-all duration-700"
            style={{ 
              boxShadow: '0 4px 8px hsl(var(--primary), 0.08), 0 12px 24px hsl(var(--primary), 0.12), 0 24px 48px hsl(var(--primary), 0.16)',
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
                src={gurlzWellnessApp}
                alt="Gurlz Wellness App interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>

            {/* Glassmorphism Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent backdrop-blur-[0.5px]"></div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
              <div className="absolute w-40 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -left-40 group-hover:left-full transition-all duration-1000 ease-out"></div>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.15), 0 0 50px hsl(var(--primary), 0.5), inset 0 0 50px hsl(var(--primary), 0.15)',
              }}
            ></div>

            {/* Content */}
            <div className="relative p-10 md:p-16 min-h-[500px] lg:min-h-[600px] flex flex-col justify-end text-white z-10">
              {/* Decorative Accent Bar */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-white to-white/40 rounded-full mb-8 group-hover:w-40 transition-all duration-500"></div>

              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {slides[2].title}
                </h3>
                
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {slides[2].description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-primary border-2 border-white hover:bg-white/90 hover:text-primary transition-all duration-300 shadow-lg text-base"
                  >
                    Download on iOS
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-primary border-2 border-white hover:bg-white/90 hover:text-primary transition-all duration-300 shadow-lg text-base"
                  >
                    Download on Android
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
                ? "bg-[hsl(var(--coral))] w-8"
                : "bg-[hsl(var(--coral))]/30 hover:bg-[hsl(var(--coral))]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
