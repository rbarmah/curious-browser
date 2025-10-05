import { ReactNode } from "react";

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const PillarCard = ({ icon, title, description }: PillarCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-24 h-24 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
