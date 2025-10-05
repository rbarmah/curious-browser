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
                <div className="relative w-full">
                  <img
                    src={panel.image}
                    alt={`Comic panel ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                  
                  {/* Overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Text overlay - bottom positioned */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white">
                    <div className="w-full max-w-4xl">
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
      </Carousel>
    </div>
  );
};
