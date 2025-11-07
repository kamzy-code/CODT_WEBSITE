import { ImageSlider } from "../imageSlider";

const pastorImages = [
  "/about/pastor/PHOTO-2024-06-17-13-08-26.jpg",
  "/about/pastor/IMG-20250621-WA0026.jpg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.45.jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.46 (1).jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.46 (2).jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.47 (1).jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.47 (2).jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.47.jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.48 (1).jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.48 (2).jpeg",
  "/about/pastor/WhatsApp Image 2025-11-06 at 13.10.48.jpeg",
];

export function PastorsImageSlider() {
  return (
    <section className="flex items-center justify-center section-padding">
      <div className="container-max space-y-8">
        <div className="scale-80 sm:scale-90 lg:scale-85 xl:scale-95 shrink-0">
          <ImageSlider images={pastorImages} size="h-full w-full md:w-200 md:h-120"></ImageSlider>
        </div>
      </div>
    </section>
  );
}
