import { useState } from "react";
import heroCollage1 from "@/assets/hero-collage-1.jpg";
import heroCollage2 from "@/assets/hero-collage-2.jpg";
import heroCollage3 from "@/assets/hero-collage-3.jpg";

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
        
        {/* LEFT SIDE: Abstract Visual with Flowing Shapes */}
        <div className="relative overflow-hidden p-12 flex items-center justify-center">
          {/* Flowing SVG Blobs with Images */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Clip paths for images */}
              <clipPath id="blob-clip-1">
                <path d="M150,50 Q250,80 280,150 T200,280 Q120,260 80,180 T150,50" />
              </clipPath>
              <clipPath id="blob-clip-2">
                <path d="M280,100 Q350,140 340,220 T240,340 Q160,320 120,240 T280,100" />
              </clipPath>
              <clipPath id="blob-clip-3">
                <path d="M200,150 Q260,180 250,240 T180,320 Q120,300 100,230 T200,150" />
              </clipPath>
            </defs>
            
            {/* Blob 1 with Image */}
            <g className="animate-[float_8s_ease-in-out_infinite]" style={{ transformOrigin: 'center' }}>
              <image 
                href={heroCollage1}
                x="50" 
                y="20" 
                width="250" 
                height="280" 
                clipPath="url(#blob-clip-1)"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            
            {/* Blob 2 with Image */}
            <g className="animate-[float_10s_ease-in-out_infinite_reverse]" style={{ transformOrigin: 'center', animationDelay: '1s' }}>
              <image 
                href={heroCollage2}
                x="90" 
                y="70" 
                width="280" 
                height="300" 
                clipPath="url(#blob-clip-2)"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            
            {/* Blob 3 with Image */}
            <g className="animate-[float_12s_ease-in-out_infinite]" style={{ transformOrigin: 'center', animationDelay: '2s' }}>
              <image 
                href={heroCollage3}
                x="70" 
                y="120" 
                width="210" 
                height="220" 
                clipPath="url(#blob-clip-3)"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>

          {/* Flowing Animated Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            <path 
              d="M50,200 Q150,150 250,200 T450,200" 
              stroke="hsl(var(--coral-light))" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.3"
              className="animate-[float_6s_ease-in-out_infinite]"
            />
            <path 
              d="M50,250 Q150,300 250,250 T450,250" 
              stroke="hsl(var(--teal))" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.3"
              className="animate-[float_8s_ease-in-out_infinite_reverse]"
            />
          </svg>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="relative p-12 md:p-16 flex flex-col justify-center space-y-8">
          {/* Decorative Accent Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--peach))] to-[hsl(var(--teal))] rounded-full"></div>
          
          {/* Main Typography - "Innofeminism" */}
          <div className="space-y-4">
            <h3 className="text-6xl md:text-7xl font-bold leading-none text-foreground">
              Innofeminism
            </h3>
            
            {/* Decorative Underline */}
            <div className="relative w-48 h-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--coral))] via-[hsl(var(--peach))] to-transparent rounded-full"></div>
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