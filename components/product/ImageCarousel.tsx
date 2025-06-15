"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Image } from "@/lib/generated/prisma";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: Image[];
  title: string;
}

const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = images.map((img) => img.url).filter(Boolean) as string[];

  return (
    <div className="w-full space-y-4">
      <Carousel className="w-full">
        <CarouselContent>
          {imageUrls.map((imgSrc, index) => (
            <CarouselItem
              key={index}
              className={index === currentIndex ? "block" : "hidden"}
            >
              <div className="relative aspect-square">
                <img
                  src={imgSrc}
                  alt={`${title} Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {imageUrls.map((imgSrc, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 border-2 transition-all duration-200",
              currentIndex === index
                ? "border-black"
                : "border-transparent hover:border-gray-300"
            )}
          >
            <img
              src={imgSrc}
              alt={`${title} Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
