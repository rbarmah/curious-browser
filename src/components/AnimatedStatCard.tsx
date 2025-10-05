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
    small: "col-span-1 row-span-1 p-4",
    medium: "col-span-1 row-span-1 p-5",
    large: "col-span-1 md:col-span-2 row-span-1 p-6",
    featured: "col-span-1 md:col-span-2 row-span-2 p-6 md:p-8"
  };

  const numberSizes = {
    small: "text-3xl md:text-4xl",
    medium: "text-4xl md:text-5xl",
    large: "text-5xl md:text-6xl",
    featured: "text-6xl md:text-7xl"
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
      <div className="relative z-10 h-full flex flex-col justify-between overflow-hidden">
        {/* Image badge */}
        <div className="flex justify-between items-start mb-3 flex-shrink-0">
          <div className="rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-110 flex-shrink-0">
            <img src={image} alt="" className={cn(
              "transition-all duration-500 object-cover",
              size === "featured" ? "w-12 h-12 md:w-14 md:h-14" : size === "large" ? "w-10 h-10 md:w-12 md:h-12" : "w-10 h-10"
            )} />
          </div>
          
          {/* Decorative line */}
          <div className="h-px flex-1 ml-4 mt-5 bg-border"></div>
        </div>

        {/* Number with counter animation */}
        <div className="space-y-2 flex-grow overflow-hidden flex flex-col justify-end">
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
            "font-semibold text-foreground transition-colors line-clamp-2",
            size === "featured" ? "text-lg md:text-xl" : size === "large" ? "text-base md:text-lg" : "text-base"
          )}>
            {label}
          </div>
          
          <p className={cn(
            "text-muted-foreground leading-relaxed line-clamp-3",
            size === "featured" ? "text-sm md:text-base" : "text-xs md:text-sm"
          )}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
