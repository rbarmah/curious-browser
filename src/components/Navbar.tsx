import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/innofemme-logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const leftLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
  ];

  const rightLinks = [
    { name: "Team", path: "/team" },
    { name: "Get Involved", path: "/get-involved" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center h-24 relative max-w-5xl mx-auto">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-1 mr-8">
            {leftLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  group relative px-4 py-2.5 rounded-full font-medium transition-all duration-300
                  ${isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                  }
                `}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`
                  absolute inset-0 rounded-full transition-all duration-500 ease-out
                  ${isActive(link.path)
                    ? "bg-primary/10 scale-100"
                    : "bg-primary/5 scale-0 group-hover:scale-100"
                  }
                `} />
                <div className={`
                  absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-500
                  bg-gradient-to-r from-transparent via-primary to-transparent
                  ${isActive(link.path)
                    ? "w-3/4 opacity-100"
                    : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                  }
                `} />
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link 
            to="/" 
            className="group flex items-center justify-center relative"
          >
            <div className="
              relative w-20 h-20 rounded-full 
              bg-gradient-to-br from-primary via-secondary to-accent
              p-0.5
              shadow-lg
              transition-all duration-500 ease-out
              group-hover:shadow-2xl group-hover:shadow-primary/30
              group-hover:scale-110
              before:absolute before:inset-0 before:rounded-full
              before:bg-gradient-to-br before:from-primary before:to-secondary
              before:blur-xl before:opacity-0 before:transition-opacity before:duration-500
              group-hover:before:opacity-60
            ">
              <div className="
                w-full h-full rounded-full bg-background 
                flex items-center justify-center
                overflow-hidden
                transition-transform duration-700 ease-out
                group-hover:rotate-12
              ">
                <img 
                  src={logo} 
                  alt="Innofemme" 
                  className="w-16 h-16 object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-secondary/40 animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }} />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-accent/40 animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }} />
              <div className="absolute top-1/2 right-0 w-1 h-1 rounded-full bg-primary/40 animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }} />
            </div>
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-1 ml-8">
            {rightLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  group relative px-4 py-2.5 rounded-full font-medium transition-all duration-300
                  ${isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                  }
                `}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`
                  absolute inset-0 rounded-full transition-all duration-500 ease-out
                  ${isActive(link.path)
                    ? "bg-primary/10 scale-100"
                    : "bg-primary/5 scale-0 group-hover:scale-100"
                  }
                `} />
                <div className={`
                  absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-500
                  bg-gradient-to-r from-transparent via-primary to-transparent
                  ${isActive(link.path)
                    ? "w-3/4 opacity-100"
                    : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                  }
                `} />
              </Link>
            ))}
          </div>

          {/* Donate Button - Desktop */}
          <div className="hidden lg:block ml-6">
            <Button 
              variant="coral" 
              size="default" 
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Donate</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute right-0 p-2 rounded-full hover:bg-muted/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2 animate-in slide-in-from-top duration-300">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-5 py-3 rounded-xl font-medium transition-all duration-300
                  ${isActive(link.path)
                    ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary"
                    : "text-foreground/80 hover:bg-muted/50 hover:text-primary hover:translate-x-1"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="coral" 
              size="default" 
              className="w-full mt-4"
            >
              Donate
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
