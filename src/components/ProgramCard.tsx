import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  gradient?: string;
  buttons?: { label: string; variant?: "hero" | "coral" | "outline" }[];
}

export const ProgramCard = ({ title, description, image, gradient, buttons }: ProgramCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 ${gradient || "bg-gradient-to-t from-primary/90 via-primary/60 to-transparent"}`}></div>
      </div>

      {/* Content */}
      <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-end text-white">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl">{description}</p>
          
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "outline"}
                  className={button.variant === "outline" ? "border-white text-white hover:bg-white hover:text-primary" : ""}
                >
                  {button.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
