import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  accentColor?: string;
  className?: string;
  size?: "small" | "medium" | "large" | "featured";
  children?: ReactNode;
}

export const BentoCard = ({
  title,
  description,
  image,
  icon,
  accentColor = "hsl(var(--primary))",
  className,
  size = "medium",
  children,
}: BentoCardProps) => {
  const sizeClasses = {
    small: "md:col-span-4 md:row-span-1",
    medium: "md:col-span-6 md:row-span-1",
    large: "md:col-span-8 md:row-span-2",
    featured: "md:col-span-12 md:row-span-2",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-card border border-border/50",
        "transition-all duration-500 ease-out",
        "hover:shadow-[0_20px_60px_-15px] hover:border-border",
        "hover:-translate-y-1",
        sizeClasses[size],
        className
      )}
      style={{
        boxShadow: `0 8px 30px -12px ${accentColor}20`,
      }}
    >
      {/* Background Image with Gradient Overlay */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-500"
          />
        </div>
      )}

      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Accent Border Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${accentColor}30 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-end z-10">
        {/* Icon */}
        {icon && (
          <div
            className="w-12 h-12 md:w-16 md:h-16 mb-4 rounded-xl flex items-center justify-center backdrop-blur-sm transition-transform duration-500 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}20)`,
              border: `1px solid ${accentColor}30`,
            }}
          >
            <div className="text-2xl md:text-3xl">{icon}</div>
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            "font-bold mb-3 transition-all duration-500",
            size === "featured" || size === "large"
              ? "text-3xl md:text-4xl lg:text-5xl"
              : "text-xl md:text-2xl",
            image ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "transition-all duration-500 leading-relaxed",
            size === "featured" || size === "large"
              ? "text-base md:text-lg max-w-2xl"
              : "text-sm md:text-base",
            image ? "text-white/90" : "text-muted-foreground"
          )}
        >
          {description}
        </p>

        {/* Children (Buttons, etc.) */}
        {children && (
          <div className="mt-6 flex flex-wrap gap-3">{children}</div>
        )}

        {/* Decorative Corner Element */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150"
          style={{
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
      </div>
    </div>
  );
};
