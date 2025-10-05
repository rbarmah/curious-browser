import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatCardProps {
  number: string;
  label: string;
  description: string;
  image: string;
  size?: "small" | "medium" | "large" | "featured";
  delay?: number;
}

export const AnimatedStatCard = ({ 
  number, 
  label, 
  description, 
  image,
  size = "medium",
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
      {/* Simple background */}
      <div className="absolute inset-0 bg-card/95 backdrop-blur-sm"></div>
      
      {/* Border */}
      <div className="absolute inset-0 border border-border/50 rounded-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Image badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-2xl bg-muted/50 transition-all duration-500 group-hover:scale-110">
            <img src={image} alt="" className={cn(
              "transition-all duration-500 object-contain",
              size === "featured" ? "w-12 h-12" : size === "large" ? "w-10 h-10" : "w-8 h-8"
            )} />
          </div>
          
          {/* Decorative line */}
          <div className="h-px flex-1 ml-4 mt-6 bg-border"></div>
        </div>

        {/* Number with counter animation */}
        <div className="space-y-3">
          <div className={cn(
            "font-bold text-foreground",
            "transition-all duration-700 group-hover:scale-105",
            numberSizes[size]
          )}>
            {isVisible ? count : 0}{suffix}
          </div>
          
          {/* Progress indicator */}
          <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-foreground transition-all duration-2000 ease-out rounded-full"
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
      </div>
    </div>
  );
};
