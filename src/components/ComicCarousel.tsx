import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface ComicPanel {
  image: string;
  narration: string;
  data?: string;
}

interface ComicCarouselProps {
  panels: ComicPanel[];
}

const TypewriterText = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setShowCursor(true);
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export const ComicCarousel = ({ panels }: ComicCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (isExpanded && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  if (!isExpanded) {
    return (
      <div className="w-full max-w-6xl mx-auto text-center py-12">
        <Button
          onClick={handleExpand}
          size="lg"
          className="gap-2 text-lg px-8 py-6"
        >
          <Play className="w-6 h-6" />
          Experience Our Visual Story
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <audio
        ref={audioRef}
        loop
        src="/thoughtful-music.mp3"
      />
      
      <Button
        onClick={handleClose}
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 z-50"
      >
        <X className="w-5 h-5" />
      </Button>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {panels.map((panel, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden border-2 border-primary/20">
                <div className="relative w-full max-h-[70vh] bg-gradient-to-br from-background to-muted">
                  <img
                    src={panel.image}
                    alt={`Comic panel ${index + 1}`}
                    className="w-full h-full max-h-[70vh] object-contain"
                  />
                  
                  {/* Overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Text overlay - bottom positioned */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white">
                    <div className="w-full max-w-4xl space-y-4">
                      <div className="hidden md:flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold bg-primary/90 text-white px-4 py-2 rounded-full">
                          Panel {index + 1} of {panels.length}
                        </span>
                        {panel.data && (
                          <span className="text-sm font-bold bg-white/90 text-black px-4 py-2 rounded-full">
                            {panel.data}
                          </span>
                        )}
                      </div>
                      <div className="text-xs md:text-xl lg:text-2xl font-medium leading-relaxed italic px-2">
                        {currentIndex === index && (
                          <TypewriterText text={`"${panel.narration}"`} delay={30} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-4" />
        <CarouselNext className="hidden md:flex right-4" />
      </Carousel>
      
      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {panels.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to panel ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
