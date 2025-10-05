import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  gradient?: string;
  buttons?: { label: string; variant?: "hero" | "coral" | "outline" }[];
}

export const ProgramCard = ({ title, description, image, gradient, buttons }: ProgramCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02]"
      style={{ 
        boxShadow: '0 2px 4px hsl(256, 35%, 40%, 0.05), 0 8px 16px hsl(256, 35%, 40%, 0.08), 0 16px 32px hsl(256, 35%, 40%, 0.12)',
        transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      {/* Decorative Corner Accent - Top Left */}
      <div className="absolute top-0 left-0 w-32 h-32 z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-white/80 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-white/80 to-transparent"></div>
        <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/60 group-hover:scale-150 transition-transform duration-500"></div>
      </div>

      {/* Decorative Corner Accent - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 z-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-l from-white/60 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1 h-16 bg-gradient-to-t from-white/60 to-transparent"></div>
      </div>

      {/* Badge */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
        <Sparkles className="w-4 h-4 text-white" />
        <span className="text-xs font-bold text-white uppercase tracking-wider">Program</span>
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
        <div className="absolute w-32 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -left-32 group-hover:left-full transition-all duration-1000 ease-out"></div>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 40px hsl(var(--coral-glow), 0.4), inset 0 0 40px hsl(var(--coral-glow), 0.1)',
        }}
      ></div>

      {/* Content */}
      <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-end text-white z-10">
        {/* Decorative Accent Bar */}
        <div className="w-20 h-1 bg-gradient-to-r from-white to-white/40 rounded-full mb-6 group-hover:w-32 transition-all duration-500"></div>

        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            {title}
          </h3>
          
          <p className="text-lg text-white/95 leading-relaxed max-w-2xl font-medium"
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            {description}
          </p>
          
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "outline"}
                  className={
                    button.variant === "outline" 
                      ? "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[hsl(var(--purple-deep))] transition-all duration-300 shadow-lg" 
                      : button.variant === "coral"
                      ? "bg-[hsl(var(--coral))] text-white border-2 border-[hsl(var(--coral))] hover:bg-white hover:text-[hsl(var(--coral))] hover:border-white transition-all duration-300 shadow-lg"
                      : ""
                  }
                >
                  {button.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
        <div className="absolute top-1/2 right-12 w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Bottom Inner Shadow for Depth */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};
