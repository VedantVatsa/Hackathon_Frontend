import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productImages = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
];

function Slider() {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {productImages.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <img
              src={imageUrl}
              alt={`Product ${index + 1}`}
              className="w-full h-[200px] md:h-[350px] object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-white transition"
        aria-label="Previous slide"
      />
      <CarouselNext
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-white transition"
        aria-label="Next slide"
      />
    </Carousel>
  );
}

export default Slider;
