import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/home/restoration_25.png",
  "/home/worship_experience.png",
  "/home/october.png",
];

export function EventCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xs bg-transparent"
    >
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
             <Image
                    src={image}
                    alt="Event"
                    width={600}
                    height={800}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white" />
      <CarouselNext className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white" />
    </Carousel>
  );
}
