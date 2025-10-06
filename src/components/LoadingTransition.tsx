import { useEffect, useState } from "react";
import logo from "@/assets/innofemme-logo.png";

interface LoadingTransitionProps {
  onComplete: () => void;
}

export const LoadingTransition = ({ onComplete }: LoadingTransitionProps) => {
  const [phase, setPhase] = useState<"logo" | "text" | "ready" | "exit">("logo");
  const [displayedText, setDisplayedText] = useState("");
  const [showSkip, setShowSkip] = useState(false);
  const fullText = "Tech is about to work for us all.";
  
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Show skip button after 2s
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    // Logo phase: 0-1200ms
    const logoTimer = setTimeout(() => setPhase("text"), 1200);

    // Text typing phase: 1200-5700ms (much slower character typing)
    const textTimers: NodeJS.Timeout[] = [];
    fullText.split("").forEach((char, index) => {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + char);
      }, 1200 + index * 120);
      textTimers.push(timer);
    });

    // Ready phase: 6200ms (500ms pause after text completes)
    const readyTimer = setTimeout(() => setPhase("ready"), 6200);

    // Exit phase: 7800ms
    const exitTimer = setTimeout(() => setPhase("exit"), 7800);

    // Complete: 9000ms
    const completeTimer = setTimeout(() => onComplete(), 9000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(logoTimer);
      clearTimeout(readyTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      textTimers.forEach(clearTimeout);
    };
  }, [onComplete, prefersReducedMotion, fullText]);

  const handleSkip = () => {
    onComplete();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleSkip();
    }
  };

  if (prefersReducedMotion) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-loading ${
        phase === "exit" ? "animate-zoom-out" : "animate-zoom-in"
      }`}
      role="alert"
      aria-live="polite"
      aria-label="Loading Innofemme"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1 w-3 h-3 rounded-full bg-coral/40 absolute top-1/4 left-1/4" />
        <div className="particle particle-2 w-2 h-2 rounded-full bg-peach/40 absolute top-1/3 right-1/4" />
        <div className="particle particle-3 w-4 h-4 rounded-full bg-coral-glow/30 absolute bottom-1/4 left-1/3" />
        <div className="particle particle-4 w-2.5 h-2.5 rounded-full bg-peach/40 absolute bottom-1/3 right-1/3" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Logo */}
        <div className={`mb-8 ${phase === "logo" ? "animate-logo-entrance" : ""}`}>
          <img
            src={logo}
            alt="Innofemme Logo"
            className="w-32 h-32 mx-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Text */}
        {phase !== "logo" && (
          <div className="space-y-6">
            <p className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {displayedText.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-char-appear"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>

            {phase === "ready" && (
              <p className="text-5xl md:text-6xl font-black text-white animate-pulse-ready mt-8">
                Ready?
              </p>
            )}
          </div>
        )}
      </div>

      {/* Skip Button */}
      {showSkip && (
        <button
          onClick={handleSkip}
          onKeyDown={handleKeyDown}
          className="absolute bottom-8 right-8 text-white/70 hover:text-white transition-colors text-sm font-medium animate-fade-in"
          aria-label="Skip loading animation"
        >
          Skip →
        </button>
      )}
    </div>
  );
};
