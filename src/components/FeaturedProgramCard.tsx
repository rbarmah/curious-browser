import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FeaturedProgramCardProps {
  title: string;
  description: string;
  image: string;
  gradient?: string;
  buttons?: { label: string; variant?: "hero" | "coral" | "outline" }[];
}

export const FeaturedProgramCard = ({ title, description, image, gradient, buttons }: FeaturedProgramCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.01]"
      style={{ 
        boxShadow: '0 4px 8px hsl(256, 35%, 40%, 0.08), 0 12px 24px hsl(256, 35%, 40%, 0.12), 0 24px 48px hsl(256, 35%, 40%, 0.16)',
        transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
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

      {/* Badge */}
      <div className="absolute top-8 right-8 z-20 flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
        <Sparkles className="w-5 h-5 text-white" />
        <span className="text-sm font-bold text-white uppercase tracking-wider">Featured Program</span>
      </div>

      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Gradient Overlay - More Subtle */}
      <div className={`absolute inset-0 ${gradient || "bg-gradient-to-t from-[hsl(var(--purple-deep))]/80 via-[hsl(var(--purple-deep))]/40 to-transparent"}`}></div>

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
            {title}
          </h3>
          
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium"
            style={{
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
            }}
          >
            {description}
          </p>
          
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-6">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "outline"}
                  size="lg"
                  className={
                    button.variant === "outline" 
                      ? "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[hsl(var(--purple-deep))] transition-all duration-300 shadow-lg text-base" 
                      : button.variant === "coral"
                      ? "bg-[hsl(var(--coral))] text-white border-2 border-[hsl(var(--coral))] hover:bg-white hover:text-[hsl(var(--coral))] hover:border-white transition-all duration-300 shadow-lg text-base"
                      : ""
                  }
                >
                  {button.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-white/40 animate-pulse"></div>
        <div className="absolute top-1/2 right-16 w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Bottom Inner Shadow for Depth */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </div>
  );
};