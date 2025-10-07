import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  initials: string;
  image?: string;
  imagePosition?: string;
  onClick: () => void;
  index: number;
}

export const TeamMemberCard = ({ 
  name, 
  role, 
  initials, 
  image,
  imagePosition = "center",
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
        "group relative cursor-pointer h-full",
        "transition-all duration-700 ease-out",
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
      {/* Outer glow effect */}
      <div 
        className={cn(
          "absolute -inset-4 rounded-3xl opacity-0 transition-all duration-700 blur-2xl",
          "bg-gradient-to-br from-[hsl(var(--coral))]/30 via-[hsl(var(--peach))]/20 to-[hsl(var(--coral-light))]/30",
          "group-hover:opacity-100"
        )}
      />

      {/* Main card container with sophisticated frame */}
      <div
        className={cn(
          "relative h-full rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-card via-card to-card/95",
          "border-2 border-transparent",
          "shadow-[var(--shadow-soft)]",
          "transition-all duration-700 ease-out",
          "group-hover:shadow-[var(--shadow-layered)]",
          "group-hover:scale-[1.03]",
          "group-focus-visible:ring-2 group-focus-visible:ring-[hsl(var(--coral))] group-focus-visible:ring-offset-2",
          "backdrop-blur-sm"
        )}
        style={{
          transform: isHovered 
            ? `translateY(-12px) perspective(1000px) rotateX(${(mousePosition.y - 200) / 50}deg) rotateY(${(mousePosition.x - 150) / 50}deg)`
            : "translateY(0) perspective(1000px) rotateX(0) rotateY(0)",
          borderImage: isHovered 
            ? "linear-gradient(135deg, hsl(var(--coral)), hsl(var(--peach)), hsl(var(--coral-light))) 1"
            : "none",
        }}
      >
        {/* Animated gradient border */}
        <div 
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-700",
            "bg-gradient-to-br from-[hsl(var(--coral))]/20 via-[hsl(var(--peach))]/20 to-transparent",
            "group-hover:opacity-100"
          )}
          style={{
            background: isHovered 
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--coral-glow) / 0.3), transparent 70%)`
              : undefined,
          }}
        />

        {/* Full-size cartoonized profile image */}
        <div className="relative w-full h-80 overflow-hidden">
          {/* Gradient overlay for depth */}
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/50",
              "transition-opacity duration-700",
              "group-hover:to-card/30 z-10"
            )}
          />
          
          {image ? (
            <img 
              src={image} 
              alt={name}
              className={cn(
                "w-full h-full object-cover transition-all duration-700",
                "group-hover:scale-110"
              )}
              style={{ 
                objectPosition: imagePosition
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))] flex items-center justify-center">
              <span className="text-white text-7xl font-bold">{initials}</span>
            </div>
          )}
        </div>

        {/* Content container */}
        <div className="relative p-8 flex flex-col items-center text-center flex-1">

          {/* Name and role with elegant spacing */}
          <div className="space-y-3 mb-4">
            <h3 
              className={cn(
                "text-2xl font-bold text-foreground",
                "transition-all duration-500",
                "group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--coral))] group-hover:to-[hsl(var(--peach))]",
                "group-hover:bg-clip-text group-hover:text-transparent",
                "leading-tight"
              )}
            >
              {name}
            </h3>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2">
              <div className={cn(
                "h-px bg-gradient-to-r from-transparent via-[hsl(var(--coral))]/30 to-transparent transition-all duration-500",
                "group-hover:via-[hsl(var(--coral))]/60",
                "w-12"
              )} />
            </div>
            
            <p className="text-sm font-medium text-muted-foreground leading-relaxed px-2">
              {role}
            </p>
          </div>

          {/* "View Bio" call to action */}
          <div
            className={cn(
              "mt-auto flex items-center gap-2 text-sm font-semibold",
              "px-6 py-3 rounded-full",
              "transition-all duration-500",
              "opacity-0 group-hover:opacity-100",
              "transform translate-y-4 group-hover:translate-y-0",
              "bg-gradient-to-r from-[hsl(var(--coral))]/10 to-[hsl(var(--peach))]/10",
              "border border-[hsl(var(--coral))]/20",
              "text-[hsl(var(--coral))]"
            )}
          >
            <span>View Full Profile</span>
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

        {/* Decorative geometric accents */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--coral))] to-transparent rounded-bl-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--peach))] to-transparent rounded-tr-full" />
        </div>
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div 
            className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[hsl(var(--coral))]/50 blur-sm animate-float"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <div 
            className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-[hsl(var(--peach))]/40 blur-sm animate-float"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          />
          <div 
            className="absolute top-1/4 -right-4 w-3 h-3 rounded-full bg-[hsl(var(--coral-light))]/50 blur-sm animate-float"
            style={{ animationDelay: "1s", animationDuration: "3.5s" }}
          />
        </>
      )}
    </div>
  );
};
