import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  initials: string;
  image?: string;
  onClick: () => void;
  index: number;
}

export const TeamMemberCard = ({ 
  name, 
  role, 
  initials, 
  image,
  onClick, 
  index 
}: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative cursor-pointer",
        "transition-all duration-500 ease-out",
        "animate-fade-in",
        isHovered && "z-10"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${name}'s profile`}
    >
      {/* Animated gradient border background */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-all duration-500",
          "bg-gradient-to-br from-[hsl(var(--coral))] via-[hsl(var(--peach))] to-[hsl(var(--coral-light))]",
          "group-hover:opacity-100 group-hover:animate-spin-slow",
          "blur-sm"
        )}
        style={{
          animation: isHovered ? "spin 8s linear infinite" : "none",
          transform: isHovered ? `rotate(${index * 45}deg)` : "rotate(0deg)",
        }}
      />

      {/* Card content */}
      <div
        className={cn(
          "relative bg-card rounded-2xl p-8",
          "border border-border/50",
          "backdrop-blur-sm",
          "shadow-[var(--shadow-soft)]",
          "transition-all duration-500 ease-out",
          "group-hover:shadow-[var(--shadow-colored)]",
          "group-hover:scale-[1.02]",
          "group-hover:border-[hsl(var(--coral))]/30",
          "group-focus-visible:ring-2 group-focus-visible:ring-[hsl(var(--coral))] group-focus-visible:ring-offset-2"
        )}
        style={{
          transform: isHovered 
            ? `translateY(-8px) rotateX(${(mousePosition.y - 150) / 30}deg) rotateY(${(mousePosition.x - 150) / 30}deg)`
            : "translateY(0) rotateX(0) rotateY(0)",
        }}
      >
        {/* Magnetic glow effect */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--coral-glow)), transparent 60%)`,
            }}
          />
        )}

        <div className="relative flex flex-col items-center text-center space-y-5">
          {/* Avatar with gradient border */}
          <div className="relative">
            <div 
              className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))]",
                "transition-all duration-500",
                "group-hover:scale-110 group-hover:blur-md group-hover:opacity-75"
              )}
            />
            <Avatar className={cn(
              "relative w-32 h-32 border-4 border-card",
              "transition-all duration-500",
              "group-hover:scale-105"
            )}>
              {image ? (
                <AvatarImage src={image} alt={name} className="object-cover" />
              ) : null}
              <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))] text-white text-3xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name and role */}
          <div className="space-y-2">
            <h3 
              className={cn(
                "text-xl font-bold text-foreground",
                "transition-all duration-300",
                "group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--coral))] group-hover:to-[hsl(var(--peach))]",
                "group-hover:bg-clip-text group-hover:text-transparent"
              )}
            >
              {name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {role}
            </p>
          </div>

          {/* "View Bio" indicator */}
          <div
            className={cn(
              "flex items-center gap-2 text-xs font-medium",
              "transition-all duration-300",
              "opacity-0 group-hover:opacity-100",
              "text-[hsl(var(--coral))]",
              "transform translate-y-2 group-hover:translate-y-0"
            )}
          >
            <span>View Full Bio</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Corner accent decoration */}
        <div 
          className={cn(
            "absolute top-4 right-4 w-2 h-2 rounded-full",
            "bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))]",
            "transition-all duration-500",
            "group-hover:scale-150 group-hover:opacity-100",
            "opacity-30"
          )}
        />
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div 
            className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[hsl(var(--coral))]/40 blur-sm animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div 
            className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-[hsl(var(--peach))]/30 blur-sm animate-float"
            style={{ animationDelay: "0.5s" }}
          />
        </>
      )}
    </div>
  );
};
