import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SplitScreenProgramProps {
  title: string;
  description: string;
  image: string;
  accentColor: string;
  icon?: ReactNode;
  index: number;
  children?: ReactNode;
}

export const SplitScreenProgram = ({
  title,
  description,
  image,
  accentColor,
  icon,
  index,
  children,
}: SplitScreenProgramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / windowHeight)
      );
      setScrollProgress(progress);
    };

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
      style={{
        background: `linear-gradient(to bottom, hsl(var(--background)) 0%, ${accentColor}05 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Decorative Background Elements */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          transform: `scale(${0.8 + scrollProgress * 0.4})`,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Visual with Parallax */}
          <div
            className={cn(
              "relative order-2 lg:order-1 transition-all duration-1000 ease-out",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            )}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {/* Main Image Container with Parallax */}
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              style={{
                transform: `translateY(${scrollProgress * -30}px)`,
                boxShadow: `0 25px 60px -15px ${accentColor}40`,
              }}
            >
              {/* Image */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              />

              {/* Floating Icon Badge */}
              {icon && (
                <div
                  className="absolute top-6 right-6 w-16 h-16 rounded-2xl backdrop-blur-xl flex items-center justify-center border transition-transform duration-500 hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}60, ${accentColor}30)`,
                    borderColor: `${accentColor}40`,
                    boxShadow: `0 8px 24px ${accentColor}30`,
                  }}
                >
                  <div className="text-3xl text-white">{icon}</div>
                </div>
              )}

              {/* Decorative Corner Elements */}
              <div
                className="absolute bottom-0 left-0 w-32 h-32 blur-3xl opacity-60"
                style={{
                  background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
                }}
              />
            </div>

            {/* Floating Accent Card */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl backdrop-blur-xl border transition-all duration-700 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${accentColor}20, transparent)`,
                borderColor: `${accentColor}30`,
                transform: `translateY(${scrollProgress * 20}px) rotate(${scrollProgress * 5}deg)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full opacity-40 blur-2xl"
                  style={{ background: accentColor }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content with Staggered Reveals */}
          <div
            className={cn(
              "relative order-1 lg:order-2 space-y-8 transition-all duration-1000 ease-out",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            )}
            style={{
              transitionDelay: `${index * 100 + 200}ms`,
            }}
          >
            {/* Program Number Badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full backdrop-blur-sm border transition-all duration-500 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
                borderColor: `${accentColor}30`,
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ background: accentColor }}
              >
                {index + 1}
              </div>
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                Featured Program
              </span>
            </div>

            {/* Title with Gradient */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span
                className="inline-block bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${accentColor}, hsl(var(--primary)))`,
                }}
              >
                {title}
              </span>
            </h3>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Divider */}
            <div
              className="h-1 w-24 rounded-full transition-all duration-700"
              style={{
                background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                width: isVisible ? "96px" : "0px",
              }}
            />

            {/* Action Buttons */}
            {children && (
              <div className="flex flex-wrap gap-4 pt-4">{children}</div>
            )}

            {/* Stats or Additional Info */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "500+", label: "Participants" },
                { value: "50+", label: "Startups" },
                { value: "95%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${600 + idx * 100}ms`,
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: accentColor }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition-all duration-500"
              style={{
                background:
                  i === index ? accentColor : "hsl(var(--border))",
                transform: i === index ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
