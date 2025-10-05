import { Sparkles } from "lucide-react";

export const ManifestoCard = () => {
  return (
    <div className="relative group">
      {/* Flowing Background Blobs */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <svg className="absolute w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="blob-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--coral))', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--peach))', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="blob-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--teal))', stopOpacity: 0.12 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--purple-deep))', stopOpacity: 0.08 }} />
            </linearGradient>
          </defs>
          
          {/* Animated Blob 1 */}
          <path
            d="M 100 150 Q 200 100 300 150 T 500 150 Q 600 180 650 250 T 700 350 Q 600 380 500 350 T 300 350 Q 200 320 150 250 T 100 150 Z"
            fill="url(#blob-gradient-1)"
            className="animate-[float_8s_ease-in-out_infinite]"
          />
          
          {/* Animated Blob 2 */}
          <path
            d="M 200 250 Q 300 200 400 250 T 600 250 Q 700 280 750 350 T 700 420 Q 600 450 500 420 T 300 420 Q 200 390 180 320 T 200 250 Z"
            fill="url(#blob-gradient-2)"
            className="animate-[float_10s_ease-in-out_infinite_reverse]"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Main Card with Glassmorphism */}
      <div className="relative backdrop-blur-xl bg-background/40 border border-primary/20 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
        
        {/* Decorative Quote Marks */}
        <div className="absolute top-8 left-8 text-[120px] leading-none font-serif text-primary/10 select-none">
          "
        </div>
        <div className="absolute bottom-8 right-8 text-[120px] leading-none font-serif text-coral/10 select-none rotate-180">
          "
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-12 right-16 w-16 h-16 border-2 border-coral/20 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-16 left-12 w-12 h-12 border-2 border-teal/20 rounded-full animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        
        {/* Sparkle Particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-coral animate-pulse"></div>
        <div className="absolute bottom-24 right-1/3 w-2 h-2 rounded-full bg-teal animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-20 w-1.5 h-1.5 rounded-full bg-peach animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Content Container */}
        <div className="relative z-10 text-center space-y-8">
          
          {/* Badge with Parallax Effect */}
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-primary via-coral to-primary rounded-full shadow-lg border border-primary-foreground/10 transform group-hover:scale-105 transition-transform duration-500">
            <Sparkles className="w-5 h-5 text-primary-foreground animate-pulse" />
            <span className="text-xl font-bold text-primary-foreground tracking-wide">Innofeminism</span>
            <Sparkles className="w-5 h-5 text-primary-foreground animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main Quote - Bold Typography */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl text-foreground font-medium leading-relaxed">
              Our transformative approach combines{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-bold bg-gradient-to-r from-coral via-primary to-teal bg-clip-text text-transparent">
                  Afrofeminist 'motherist' principles
                </span>
                {/* Underline Animation */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-primary to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full"></span>
              </span>
              {" "}with technological innovation to create systems that truly serve everyone.
            </p>
          </div>

          {/* Decorative Accent Line */}
          <div className="flex justify-center items-center gap-2 pt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-coral"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-r from-coral via-primary to-teal"></div>
            <div className="w-2 h-2 rounded-full bg-coral animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal"></div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-coral/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-teal/20 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none rounded-3xl mix-blend-overlay">
          <svg width="100%" height="100%">
            <filter id="noise-manifesto">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-manifesto)"/>
          </svg>
        </div>
      </div>

      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-primary/10 to-teal/10 blur-2xl -z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
    </div>
  );
};
