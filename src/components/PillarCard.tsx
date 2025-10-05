import { ReactNode } from "react";

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
}

export const PillarCard = ({ icon, title, description, color = "from-primary to-primary/80" }: PillarCardProps) => {
  return (
    <div className="group relative p-10 rounded-3xl bg-card border-2 border-border/50 hover:border-transparent transition-all hover-lift overflow-hidden">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
      
      {/* Icon */}
      <div className="relative mb-8 w-24 h-24 mx-auto transform group-hover:scale-110 group-hover:-rotate-3 transition-all">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`}></div>
        <div className="relative w-full h-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-2xl font-black mb-4 text-center text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-center leading-relaxed text-base">
          {description}
        </p>
      </div>
      
      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center rounded-b-3xl`}></div>
    </div>
  );
};
