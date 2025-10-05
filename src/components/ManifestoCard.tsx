import { Heart, Zap, Users } from "lucide-react";
import { useState } from "react";
import heroWomenEngineers from "@/assets/hero-women-engineers.jpg";

export const ManifestoCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-background/40 via-background/30 to-background/40"></div>
      
      {/* Grid Layout: Left Visual | Right Content */}
      <div className="relative grid md:grid-cols-2 gap-0 min-h-[500px]">
        
        {/* LEFT SIDE: Image with Flowing Shapes Overlay */}
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <img 
            src={heroWomenEngineers} 
            alt="African women in technology" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent"></div>

          {/* Flowing SVG Blobs Overlay */}
          <svg className="absolute inset-0 w-full h-full mix-blend-soft-light" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blob-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--coral))', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--peach))', stopOpacity: 0.3 }} />
              </linearGradient>
              <linearGradient id="blob-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--peach-light))', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--coral-light))', stopOpacity: 0.3 }} />
              </linearGradient>
              <linearGradient id="blob-gradient-3" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--peach))', stopOpacity: 0.35 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--coral-glow))', stopOpacity: 0.25 }} />
              </linearGradient>
            </defs>
            
            {/* Blob 1 - Coral/Peach */}
            <path 
              d="M150,50 Q250,80 280,150 T200,280 Q120,260 80,180 T150,50" 
              fill="url(#blob-gradient-1)"
              className="animate-[float_8s_ease-in-out_infinite]"
              style={{ transformOrigin: 'center' }}
            />
            
            {/* Blob 2 - Peach Light */}
            <path 
              d="M280,100 Q350,140 340,220 T240,340 Q160,320 120,240 T280,100" 
              fill="url(#blob-gradient-2)"
              className="animate-[float_10s_ease-in-out_infinite_reverse]"
              style={{ transformOrigin: 'center', animationDelay: '1s' }}
            />
            
            {/* Blob 3 - Peach/Coral */}
            <path 
              d="M200,150 Q260,180 250,240 T180,320 Q120,300 100,230 T200,150" 
              fill="url(#blob-gradient-3)"
              className="animate-[float_12s_ease-in-out_infinite]"
              style={{ transformOrigin: 'center', animationDelay: '2s' }}
            />
          </svg>

          {/* Floating Icon Elements with Parallax */}
          <div className="relative z-10 p-12 space-y-8 h-full flex flex-col justify-center">
            {/* Hands/Connection Icon */}
            <div 
              className="transition-transform duration-700"
              style={{ 
                transform: isHovered ? 'translateX(-10px) translateY(-5px)' : 'translateX(0) translateY(0)'
              }}
            >
              <div className="relative">
                <Users className="w-24 h-24 text-white/80" strokeWidth={1.5} />
                {/* Connecting Lines */}
                <svg className="absolute -right-8 top-1/2 w-16 h-16" viewBox="0 0 60 60">
                  <path 
                    d="M10,30 Q30,10 50,30" 
                    stroke="hsl(var(--coral-light))" 
                    strokeWidth="2" 
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            {/* Heart/Circuit Icon */}
            <div 
              className="transition-transform duration-700 pl-16"
              style={{ 
                transform: isHovered ? 'translateX(10px) translateY(-8px)' : 'translateX(0) translateY(0)',
                transitionDelay: '100ms'
              }}
            >
              <div className="relative">
                <Heart className="w-20 h-20 text-white/70 fill-white/20" strokeWidth={1.5} />
                {/* Circuit Lines */}
                <div className="absolute -left-6 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-[hsl(var(--peach))]"></div>
                <div className="absolute -left-6 top-1/2 w-2 h-2 rounded-full bg-[hsl(var(--peach))] animate-pulse"></div>
              </div>
            </div>

            {/* Innovation/Energy Icon */}
            <div 
              className="transition-transform duration-700 pl-8"
              style={{ 
                transform: isHovered ? 'translateX(-5px) translateY(10px)' : 'translateX(0) translateY(0)',
                transitionDelay: '200ms'
              }}
            >
              <Zap className="w-16 h-16 text-white/60 fill-white/10" strokeWidth={1.5} />
            </div>
          </div>

          {/* Flowing Animated Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            <path 
              d="M50,200 Q150,150 250,200 T450,200" 
              stroke="hsl(var(--coral-light))" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.4"
              className="animate-[float_6s_ease-in-out_infinite]"
            />
            <path 
              d="M50,250 Q150,300 250,250 T450,250" 
              stroke="hsl(var(--peach))" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.4"
              className="animate-[float_8s_ease-in-out_infinite_reverse]"
            />
          </svg>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="relative p-12 md:p-16 flex flex-col justify-center space-y-8">
          {/* Decorative Accent Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] rounded-full"></div>
          
          {/* Main Typography - "Innofeminism" */}
          <div className="space-y-4">
            <h3 className="text-6xl md:text-7xl font-bold leading-none text-[hsl(var(--coral))]">
              Innofeminism
            </h3>
            
            {/* Decorative Underline */}
            <div className="relative w-48 h-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--coral))] to-transparent rounded-full"></div>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--coral-glow))] to-transparent rounded-full transition-transform duration-500"
                style={{ 
                  transform: isHovered ? 'scaleX(1.2)' : 'scaleX(1)',
                  transformOrigin: 'left'
                }}
              ></div>
            </div>
          </div>

          {/* Definition Text */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Our transformative approach combines{" "}
              <strong className="text-[hsl(var(--coral))] font-semibold">
                Afrofeminist 'motherist' principles
              </strong>{" "}
              with technological innovation to create systems that truly serve everyone.
            </p>

            {/* Hidden Reveal on Hover */}
            <div 
              className="overflow-hidden transition-all duration-500"
              style={{ 
                maxHeight: isHovered ? '200px' : '0',
                opacity: isHovered ? 1 : 0 
              }}
            >
              <div className="pt-4 border-t border-[hsl(var(--coral))]/20">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We center the lived experiences of African women, weaving humanity, care, and collective power into every innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[hsl(var(--peach))]/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Border Glow on Hover */}
      <div 
        className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
        style={{ 
          opacity: isHovered ? 1 : 0,
          boxShadow: '0 0 0 1px hsl(var(--coral-light) / 0.3), 0 0 40px hsl(var(--coral-glow) / 0.2)'
        }}
      ></div>
    </div>
  );
};