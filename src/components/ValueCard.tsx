import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  index: string;
  title: string;
  description: string;
  visual: "network" | "spark" | "balance" | "growth";
  accentColor: string;
  className?: string;
}

export const ValueCard = ({ 
  index, 
  title, 
  description, 
  visual, 
  accentColor,
  className 
}: ValueCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !isHovered) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  const renderVisual = () => {
    switch (visual) {
      case "network":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {/* Interconnected nodes visualization */}
            <defs>
              <radialGradient id={`node-gradient-${index}`}>
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0.2" />
              </radialGradient>
            </defs>
            
            {/* Connection lines */}
            <g className="opacity-40">
              <line x1="50" y1="50" x2="100" y2="80" stroke={accentColor} strokeWidth="1" className="animate-pulse" />
              <line x1="150" y1="50" x2="100" y2="80" stroke={accentColor} strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
              <line x1="100" y1="80" x2="80" y2="130" stroke={accentColor} strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              <line x1="100" y1="80" x2="120" y2="130" stroke={accentColor} strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              <line x1="80" y1="130" x2="120" y2="130" stroke={accentColor} strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
              <line x1="50" y1="160" x2="80" y2="130" stroke={accentColor} strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
              <line x1="150" y1="160" x2="120" y2="130" stroke={accentColor} strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.8s' }} />
            </g>
            
            {/* Nodes */}
            <circle cx="50" cy="50" r="8" fill={`url(#node-gradient-${index})`} className="animate-float" />
            <circle cx="150" cy="50" r="8" fill={`url(#node-gradient-${index})`} className="animate-float" style={{ animationDelay: '0.5s' }} />
            <circle cx="100" cy="80" r="12" fill={`url(#node-gradient-${index})`} className="animate-float" style={{ animationDelay: '1s' }} />
            <circle cx="80" cy="130" r="10" fill={`url(#node-gradient-${index})`} className="animate-float" style={{ animationDelay: '1.5s' }} />
            <circle cx="120" cy="130" r="10" fill={`url(#node-gradient-${index})`} className="animate-float" style={{ animationDelay: '2s' }} />
            <circle cx="50" cy="160" r="8" fill={`url(#node-gradient-${index})`} className="animate-float" style={{ animationDelay: '2.5s' }} />
            <circle cx="150" cy="160" r="8" fill={`url(#node-gradient-${index})`} className="animate-float" style={{ animationDelay: '3s' }} />
          </svg>
        );
      
      case "spark":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <radialGradient id={`spark-gradient-${index}`}>
                <stop offset="0%" stopColor={accentColor} stopOpacity="1" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Center burst */}
            <circle cx="100" cy="100" r="15" fill={`url(#spark-gradient-${index})`} className="animate-pulse" />
            
            {/* Radiating particles */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const distance = 40 + (i % 3) * 15;
              const x = 100 + Math.cos(angle) * distance;
              const y = 100 + Math.sin(angle) * distance;
              const size = 3 + (i % 3);
              
              return (
                <circle 
                  key={i}
                  cx={x}
                  cy={y}
                  r={size}
                  fill={accentColor}
                  opacity="0.6"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              );
            })}
            
            {/* Outer ring */}
            <circle 
              cx="100" 
              cy="100" 
              r="70" 
              fill="none" 
              stroke={accentColor} 
              strokeWidth="2" 
              opacity="0.3"
              className="animate-pulse"
              strokeDasharray="5,5"
            />
          </svg>
        );
      
      case "balance":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <linearGradient id={`balance-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.6" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Central pivot */}
            <circle cx="100" cy="100" r="6" fill={accentColor} />
            <line x1="100" y1="100" x2="100" y2="60" stroke={accentColor} strokeWidth="3" />
            
            {/* Balance beam */}
            <line 
              x1="40" 
              y1="100" 
              x2="160" 
              y2="100" 
              stroke={accentColor} 
              strokeWidth="4"
              className="animate-float"
              style={{ transformOrigin: 'center' }}
            />
            
            {/* Left scale */}
            <path 
              d="M 40 100 L 30 120 L 50 120 Z" 
              fill={`url(#balance-gradient-${index})`}
              stroke={accentColor}
              strokeWidth="2"
              className="animate-float"
            />
            
            {/* Right scale */}
            <path 
              d="M 160 100 L 150 120 L 170 120 Z" 
              fill={`url(#balance-gradient-${index})`}
              stroke={accentColor}
              strokeWidth="2"
              className="animate-float"
              style={{ animationDelay: '0.5s' }}
            />
            
            {/* Equilibrium circles */}
            <circle cx="40" cy="130" r="4" fill={accentColor} opacity="0.6" className="animate-pulse" />
            <circle cx="160" cy="130" r="4" fill={accentColor} opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </svg>
        );
      
      case "growth":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <linearGradient id={`growth-gradient-${index}`} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.3" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Rising bars */}
            {[30, 50, 70, 90].map((height, i) => (
              <rect
                key={i}
                x={40 + i * 30}
                y={150 - height}
                width="20"
                height={height}
                fill={`url(#growth-gradient-${index})`}
                className="animate-scale-in"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  transformOrigin: 'bottom'
                }}
              />
            ))}
            
            {/* Upward arrow */}
            <path 
              d="M 150 40 L 170 60 L 160 60 L 160 90 L 140 90 L 140 60 L 130 60 Z"
              fill={accentColor}
              opacity="0.8"
              className="animate-float"
            />
            
            {/* Growth trajectory line */}
            <path 
              d="M 40 150 Q 80 120, 120 80 T 180 30"
              fill="none"
              stroke={accentColor}
              strokeWidth="3"
              strokeDasharray="5,5"
              opacity="0.5"
              className="animate-pulse"
            />
          </svg>
        );
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-700",
        "hover:scale-105 cursor-pointer",
        className
      )}
      style={{
        perspective: "1000px",
        transform: isHovered 
          ? `rotateX(${(mousePosition.y - 150) * 0.02}deg) rotateY(${(mousePosition.x - 150) * 0.02}deg)`
          : 'rotateX(0) rotateY(0)',
      }}
    >
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl border border-border/50"></div>
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Gradient mesh overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${accentColor}15, transparent 50%)`,
        }}
      ></div>

      {/* Border glow on hover */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          boxShadow: `0 0 40px ${accentColor}40, inset 0 0 40px ${accentColor}10`,
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
        {/* Large index number */}
        <div className="absolute top-6 right-6 text-8xl md:text-9xl font-black opacity-[0.03] select-none">
          {index}
        </div>

        {/* Visual illustration area */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 flex-shrink-0">
          <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            {renderVisual()}
          </div>
        </div>

        {/* Index badge */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border w-fit"
          style={{
            backgroundColor: `${accentColor}10`,
            borderColor: `${accentColor}30`,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
          <span className="text-xs font-bold tracking-wider" style={{ color: accentColor }}>
            {index}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed flex-grow">
          {description}
        </p>
      </div>

      {/* Floating decorative elements */}
      <div 
        className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        style={{ backgroundColor: accentColor }}
      ></div>
      <div 
        className="absolute -top-4 -left-4 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
        style={{ backgroundColor: accentColor }}
      ></div>
    </div>
  );
};
