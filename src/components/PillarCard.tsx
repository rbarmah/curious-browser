import { ReactNode, useState } from "react";

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const PillarCard = ({ icon, title, description }: PillarCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="pillar-card-container h-80 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`pillar-card-inner ${isFlipped ? 'pillar-card-flipped' : ''}`}>
        {/* Front Side */}
        <div className="pillar-card-face pillar-card-front">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
            <div className="w-20 h-20 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-3xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground italic">Click to learn more</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="pillar-card-face pillar-card-back">
          <div className="absolute inset-0 bg-card rounded-2xl"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
