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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
            <div className="w-32 h-32 flex items-center justify-center p-4 rounded-full bg-background/80 backdrop-blur-sm shadow-lg">
              {icon}
            </div>
            <h3 className="text-3xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground/80 italic">Click to learn more</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="pillar-card-face pillar-card-back">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4 opacity-60">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-white/90 leading-relaxed">{description}</p>
            <p className="text-sm text-white/60 italic mt-4">Click to go back</p>
          </div>
        </div>
      </div>
    </div>
  );
};
