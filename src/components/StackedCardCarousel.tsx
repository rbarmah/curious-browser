import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProgramCard {
  id: number;
  title: string;
  description: string;
  image: string;
  accentColor: string;
  icon?: ReactNode;
  stats: { value: string; label: string }[];
  buttons: { label: string; variant?: "default" | "outline" | "secondary"; onClick?: () => void }[];
  type?: "program" | "cta";
  collageImages?: string[];
}

interface StackedCardCarouselProps {
  programs: ProgramCard[];
}

export const StackedCardCarousel = ({ programs }: StackedCardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % programs.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const getCardStyle = (index: number) => {
    const position = index - activeIndex;
    const isActive = position === 0;
    
    // Calculate stacking positions
    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    let zIndex = 0;
    let opacity = 1;
    let rotateY = 0;

    if (position === 0) {
      // Active card - front and center
      translateX = 0;
      translateY = 0;
      scale = 1;
      zIndex = 30;
      opacity = 1;
      rotateY = 0;
    } else if (position > 0) {
      // Cards to the right (stacked behind)
      translateX = 20 + (position - 1) * 10;
      translateY = 10 + (position - 1) * 5;
      scale = 1 - position * 0.05;
      zIndex = 30 - position;
      opacity = Math.max(0.3, 1 - position * 0.2);
      rotateY = -5 * Math.min(position, 3);
    } else {
      // Cards to the left (hidden)
      translateX = -100;
      translateY = 0;
      scale = 0.9;
      zIndex = 0;
      opacity = 0;
      rotateY = 15;
    }

    return {
      transform: `translateX(${translateX}%) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    };
  };

  return (
    <div className="relative w-full py-20">
      {/* Card Stack Container */}
      <div className="relative h-[600px] md:h-[700px] max-w-6xl mx-auto px-4">
        <div
          className="relative w-full h-full"
          style={{ perspective: "2000px" }}
        >
          {programs.map((program, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={program.id}
                className="absolute inset-0 w-full"
                style={style}
              >
                {program.type === "cta" ? (
                  // CTA Card - Explore All Programs
                  <div
                    className={cn(
                      "relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2",
                      "transition-all duration-500"
                    )}
                    style={{
                      transformStyle: "preserve-3d",
                      borderColor: isActive ? program.accentColor : "transparent",
                      boxShadow: isActive
                        ? `0 30px 90px -20px ${program.accentColor}60`
                        : "0 20px 60px -15px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Collage Background */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1 bg-black">
                      {program.collageImages?.map((img, idx) => (
                        <div
                          key={idx}
                          className={cn(
                            "relative overflow-hidden transition-all duration-700",
                            isActive && "scale-100 opacity-100",
                            !isActive && "scale-95 opacity-60"
                          )}
                          style={{
                            transitionDelay: isActive ? `${idx * 50}ms` : "0ms",
                          }}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80" />
                        </div>
                      ))}
                    </div>

                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent backdrop-blur-[2px]" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-center items-center text-center p-8 md:p-12 lg:p-16">
                      {/* Decorative Element */}
                      <div
                        className={cn(
                          "w-20 h-20 md:w-24 md:h-24 rounded-full mb-6 flex items-center justify-center transition-all duration-700 border-2",
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        )}
                        style={{
                          background: `linear-gradient(135deg, ${program.accentColor}30, ${program.accentColor}10)`,
                          borderColor: program.accentColor,
                          boxShadow: `0 0 40px ${program.accentColor}60`,
                        }}
                      >
                        <ArrowRight
                          className="w-10 h-10 md:w-12 md:h-12"
                          style={{ color: program.accentColor }}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className={cn(
                          "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700",
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        )}
                        style={{
                          transitionDelay: isActive ? "200ms" : "0ms",
                        }}
                      >
                        {program.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={cn(
                          "text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed transition-all duration-700",
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        )}
                        style={{
                          transitionDelay: isActive ? "300ms" : "0ms",
                        }}
                      >
                        {program.description}
                      </p>

                      {/* Button */}
                      <div
                        className={cn(
                          "transition-all duration-700",
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        )}
                        style={{
                          transitionDelay: isActive ? "400ms" : "0ms",
                        }}
                      >
                       {program.buttons.map((button, idx) => (
                          <Button
                            key={idx}
                            variant={button.variant || "default"}
                            size="lg"
                            className="text-lg px-8 py-6"
                            onClick={button.onClick}
                            asChild={!button.onClick}
                          >
                            {button.onClick ? (
                              <span className="flex items-center">
                                {button.label}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              </span>
                            ) : (
                              <a href="/programs" className="group">
                                {button.label}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              </a>
                            )}
                          </Button>
                        ))}
                      </div>

                      {/* Decorative Grid Pattern */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="w-full h-full" style={{
                          backgroundImage: `radial-gradient(circle, ${program.accentColor} 1px, transparent 1px)`,
                          backgroundSize: "40px 40px"
                        }} />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular Program Card
                  <div
                  className={cn(
                    "relative w-full h-full rounded-3xl overflow-hidden shadow-2xl",
                    "transition-shadow duration-500",
                    isActive && "shadow-[0_30px_90px_-20px]"
                  )}
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: isActive
                      ? `0 30px 90px -20px ${program.accentColor}60`
                      : "0 20px 60px -15px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={program.image}
                      alt={program.title}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-700",
                        isActive && "scale-105"
                      )}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">

                    {/* Program Number */}
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-6 w-fit transition-all duration-700",
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{
                        background: `linear-gradient(135deg, ${program.accentColor}20, ${program.accentColor}10)`,
                        borderColor: `${program.accentColor}40`,
                        transitionDelay: isActive ? "100ms" : "0ms",
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: program.accentColor }}
                      >
                        {index + 1}
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider text-white"
                      >
                        Program
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={cn(
                        "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700",
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{
                        transitionDelay: isActive ? "200ms" : "0ms",
                      }}
                    >
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={cn(
                        "text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed transition-all duration-700",
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{
                        transitionDelay: isActive ? "300ms" : "0ms",
                      }}
                    >
                      {program.description}
                    </p>


                    {/* Buttons */}
                    <div
                      className={cn(
                        "flex flex-wrap gap-4 transition-all duration-700",
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{
                        transitionDelay: isActive ? "500ms" : "0ms",
                      }}
                    >
                       {program.buttons.map((button, idx) => (
                        <Button
                          key={idx}
                          variant={button.variant || "default"}
                          size="lg"
                          className={cn(
                            button.variant === "outline" &&
                              "border-white text-white hover:bg-white hover:text-foreground"
                          )}
                          onClick={button.onClick}
                        >
                          {button.label}
                        </Button>
                      ))}
                    </div>

                    {/* Decorative Gradient */}
                    <div
                      className="absolute bottom-0 left-0 w-64 h-64 blur-3xl opacity-30 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${program.accentColor} 0%, transparent 70%)`,
                      }}
                    />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-0 md:-mx-20 pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 pointer-events-auto shadow-xl"
            aria-label="Previous program"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 pointer-events-auto shadow-xl"
            aria-label="Next program"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {programs.map((program, index) => (
          <button
            key={program.id}
            onClick={() => setActiveIndex(index)}
            className="group relative"
            aria-label={`Go to ${program.title}`}
          >
            <div
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-500",
                index === activeIndex ? "w-12" : "w-3"
              )}
              style={{
                background:
                  index === activeIndex
                    ? program.accentColor
                    : "hsl(var(--border))",
              }}
            />
          </button>
        ))}
      </div>

      {/* Background Gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl blur-3xl opacity-20 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle, ${programs[activeIndex].accentColor} 0%, transparent 70%)`,
          transition: "background 0.6s ease",
        }}
      />
    </div>
  );
};
