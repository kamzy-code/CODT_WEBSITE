"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function ImageSlider({
  images,
  scale,
  size
}: {
  images: string[];
  scale?: boolean;
  size?: string;
}) {
  const plugin = useRef(Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  }));
  return (
    <Carousel opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}  className={`w-full h-full flex items-center justify-center bg-transparent`}>
      <CarouselContent className="-ml-4">
        {images.map((url, idx) => (
          <CarouselItem key={idx} className="pl-4 md:basis-1/3 lg:basis-1/4">
            <Image
              src={url}
              alt={`Slide ${idx}`}
              width={500}
              height={800}
              className={`${size? size : "w-full h-full"} rounded object-cover`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white" />
      <CarouselNext className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white" />
    </Carousel>
  );
}
