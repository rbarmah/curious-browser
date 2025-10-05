import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Scale, FileCheck, Users, TrendingUp } from "lucide-react";
import equityClinic from "@/assets/equity-clinic.jpg";

export const EquityClinicCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Equity Clinic",
      subtitle: "Build Equity In From Day One",
      description: "Rapid-response service for startups and leadership teams who want to build fairness into their foundations—not bolt it on later. We help you identify and eliminate bias before you scale it.",
      image: equityClinic,
    },
    {
      id: 2,
      title: "How It Works",
      content: "Half-day intensive audits covering code & data pipelines, hiring processes, pay structures, and product features for bias detection.",
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {/* Slide 1: Main Program Card */}
          <div className="min-w-full">
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
                  src={equityClinic}
                  alt="Equity Clinic: Building fair systems from day one"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
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
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                    style={{
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    Equity Clinic
                  </h3>
                  
                  <p className="text-2xl md:text-3xl text-white/90 font-semibold leading-tight"
                    style={{
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    Build Equity In From Day One
                  </p>
                  
                  <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium"
                    style={{
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    Rapid-response service for startups and leadership teams who want to build fairness into their foundations—not bolt it on later. We help you identify and eliminate bias before you scale it.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-6">
                    <Button
                      variant="coral"
                      size="lg"
                      className="bg-[hsl(var(--coral))] text-white border-2 border-[hsl(var(--coral))] hover:bg-white hover:text-[hsl(var(--coral))] hover:border-white transition-all duration-300 shadow-lg text-base"
                    >
                      Request an Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 shadow-lg text-base"
                    >
                      Learn More
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
          </div>

          {/* Slide 2: How It Works */}
          <div className="min-w-full">
            <div 
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[hsl(var(--purple-deep))] to-[hsl(var(--purple-light))] p-10 md:p-16 min-h-[500px] lg:min-h-[600px] flex flex-col justify-center"
              style={{ 
                boxShadow: '0 4px 8px hsl(var(--primary), 0.08), 0 12px 24px hsl(var(--primary), 0.12), 0 24px 48px hsl(var(--primary), 0.16)',
              }}
            >
              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="relative z-10 space-y-8 max-w-3xl text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Scale className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    How It Works
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  Half-Day Intensive Audits
                </h3>
                
                <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                  We conduct rapid, comprehensive reviews designed specifically for early-stage startups and leadership teams ready to take action.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {/* Audit Areas */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <FileCheck className="w-8 h-8 mb-4" />
                    <h4 className="text-xl font-bold mb-3">What We Audit</h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• Code & data pipelines</li>
                      <li>• Hiring & screening processes</li>
                      <li>• Pay structures</li>
                      <li>• Product features</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <TrendingUp className="w-8 h-8 mb-4" />
                    <h4 className="text-xl font-bold mb-3">What You Get</h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• Written audit report</li>
                      <li>• Actionable recommendations</li>
                      <li>• Bias-detection tools</li>
                      <li>• Implementation support</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Users className="w-8 h-8 mb-4" />
                  <h4 className="text-xl font-bold mb-3">Who This Serves</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-white/90">
                    <div>
                      <strong className="text-white">For Startups:</strong> Build equity into your foundation before you scale. Avoid costly mistakes and attract diverse talent.
                    </div>
                    <div>
                      <strong className="text-white">For Leadership:</strong> Translate your values into actionable plans with measurable outcomes and drive real accountability.
                    </div>
                  </div>
                </div>

                <p className="text-2xl font-bold pt-4">
                  The best time to build equity in was at founding. The second best time is now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-12 bg-primary' 
                : 'w-3 bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
