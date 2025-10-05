import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SupportingProgramCardProps {
  title: string;
  description: string;
  image: string;
  gradient?: string;
  accentColor?: string;
  button?: { label: string; variant?: "hero" | "coral" | "outline" };
}

export const SupportingProgramCard = ({ title, description, image, gradient, accentColor = "hsl(var(--coral))", button }: SupportingProgramCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
      style={{ 
        boxShadow: '0 2px 4px hsl(256, 35%, 40%, 0.05), 0 6px 12px hsl(256, 35%, 40%, 0.08)',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${gradient || "bg-gradient-to-t from-[hsl(var(--purple-deep))]/85 via-[hsl(var(--purple-deep))]/50 to-transparent"}`}></div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
        <div className="absolute w-24 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -left-24 group-hover:left-full transition-all duration-700 ease-out"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8 min-h-[280px] flex flex-col justify-between text-white z-10">
        {/* Top accent */}
        <div className="w-16 h-1 rounded-full mb-4 group-hover:w-24 transition-all duration-500"
          style={{ background: `linear-gradient(to right, white, ${accentColor})` }}
        ></div>

        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            {title}
          </h3>
          
          <p className="text-base text-white/90 leading-relaxed"
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            {description}
          </p>
          
          {button && (
            <div className="pt-3">
              <Button
                variant={button.variant || "outline"}
                className={
                  button.variant === "outline" 
                    ? "border-2 border-white/70 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-[hsl(var(--purple-deep))] transition-all duration-300" 
                    : button.variant === "coral"
                    ? "bg-[hsl(var(--coral))] text-white border-2 border-[hsl(var(--coral))] hover:bg-white hover:text-[hsl(var(--coral))] hover:border-white transition-all duration-300"
                    : ""
                }
              >
                {button.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom shadow for depth */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};