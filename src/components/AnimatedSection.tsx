import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "scale";
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "slide-up",
  delay = 0 
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(
                animation === "fade" ? "animate-fade-in" : 
                animation === "scale" ? "animate-scale-in" : 
                "animate-slide-up"
              );
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};
