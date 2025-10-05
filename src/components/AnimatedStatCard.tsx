import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedStatCardProps {
  number: string;
  label: string;
  description: string;
  icon: LucideIcon;
  size?: "small" | "medium" | "large" | "featured";
  accentColor?: string;
  delay?: number;
}

export const AnimatedStatCard = ({ 
  number, 
  label, 
  description, 
  icon: Icon,
  size = "medium",
  accentColor = "from-primary/20 to-secondary/20",
  delay = 0
}: AnimatedStatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Extract numeric value for animation
  const numericValue = parseInt(number.replace(/\D/g, '')) || 0;
  const prefix = number.match(/^[^\d]*/)?.[0] || '';
  const suffix = number.match(/[\D]+$/)?.[0] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = numericValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(stepValue * currentStep));
      } else {
        setCount(numericValue);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  const sizeClasses = {
    small: "col-span-1 row-span-1 p-6",
    medium: "col-span-1 row-span-1 p-8",
    large: "col-span-1 md:col-span-2 row-span-1 p-10",
    featured: "col-span-1 md:col-span-2 row-span-2 p-12"
  };

  const numberSizes = {
    small: "text-4xl md:text-5xl",
    medium: "text-5xl md:text-6xl",
    large: "text-6xl md:text-7xl",
    featured: "text-7xl md:text-8xl"
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        "relative group overflow-hidden rounded-3xl",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
        sizeClasses[size]
      )}
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-xl"></div>
      
      {/* Gradient border */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500",
        accentColor
      )}></div>
      
      {/* Inner card */}
      <div className="absolute inset-[1px] bg-gradient-to-br from-card/95 via-card/90 to-card/95 rounded-3xl backdrop-blur-xl"></div>
      
      {/* Floating particles */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Icon badge */}
        <div className="flex justify-between items-start mb-4">
          <div className={cn(
            "p-3 rounded-2xl bg-gradient-to-br transition-all duration-500",
            accentColor,
            "group-hover:scale-110 group-hover:rotate-3"
          )}>
            <Icon className={cn(
              "transition-all duration-500",
              size === "featured" ? "w-8 h-8" : size === "large" ? "w-7 h-7" : "w-6 h-6",
              "text-primary group-hover:text-secondary"
            )} />
          </div>
          
          {/* Decorative line */}
          <div className="h-px flex-1 ml-4 mt-6 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </div>

        {/* Number with counter animation */}
        <div className="space-y-3">
          <div className={cn(
            "font-bold bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent",
            "transition-all duration-700 group-hover:scale-105",
            numberSizes[size]
          )}>
            {prefix}{isVisible ? count : 0}{suffix}
          </div>
          
          {/* Progress indicator */}
          <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-2000 ease-out rounded-full"
              style={{ 
                width: isVisible ? '100%' : '0%',
                transitionDelay: `${delay}ms`
              }}
            ></div>
          </div>
          
          <div className={cn(
            "font-semibold text-foreground transition-colors",
            size === "featured" ? "text-2xl" : size === "large" ? "text-xl" : "text-lg"
          )}>
            {label}
          </div>
          
          <p className={cn(
            "text-muted-foreground leading-relaxed",
            size === "featured" ? "text-base" : "text-sm"
          )}>
            {description}
          </p>
        </div>

        {/* Hover reveal - additional context */}
        <div className={cn(
          "mt-4 pt-4 border-t border-border/50",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        )}>
          <p className="text-xs text-muted-foreground italic">
            Making measurable impact in tech equity
          </p>
        </div>
      </div>

      {/* 3D hover effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 rounded-3xl"></div>
      </div>
    </div>
  );
};
