import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function ImageCarousel({
  images,
  scale,
  max_w,
  card_height,
}: {
  images: string[];
  scale?: boolean;
  max_w: string;
  card_height: string;
}) {
  const plugin = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin]}
      className={`w-full h-full ${max_w} flex items-center justify-center bg-transparent`}
    >
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index} className="">
            <div
              className={`p-1 rounded-2xl w-full ${card_height} overflow-hidden`}
            >
              <Image
                src={image}
                alt="Event"
                width={600}
                height={800}
                className={`object-cover h-full w-full ${scale ? "scale-120" : ""} transition-transform duration-300 hover:scale-110`}
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
