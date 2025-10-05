import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

interface ComicPanel {
  image: string;
  narration: string;
  data?: string;
}

interface ComicCarouselProps {
  panels: ComicPanel[];
}

export const ComicCarousel = ({ panels }: ComicCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {panels.map((panel, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden border-2 border-primary/20">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-background to-muted">
                  <img
                    src={panel.image}
                    alt={`Comic panel ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-card space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary">
                      Panel {index + 1} of {panels.length}
                    </span>
                    {panel.data && (
                      <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {panel.data}
                      </span>
                    )}
                  </div>
                  <p className="text-base text-foreground leading-relaxed italic">
                    "{panel.narration}"
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
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
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to panel ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
