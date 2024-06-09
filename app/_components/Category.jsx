import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
const productImages = [
  "/images/f1.jpg",
  "/images/f2.jpg",
  "/images/f3.jpg",
  "/images/f4.jpg",
  "/images/f5.jpg",
  "/images/f6.jpg",
];

const productImages1 = [
  "/images/m1.jpg",
  "/images/m2.jpg",
  "/images/m3.jpg",
  "/images/m4.jpg",
  "/images/m5.jpg",
  "/images/m6.jpg",
];

const productImages2 = [
  "/images/g1.jpg",
  "/images/g2.jpg",
  "/images/g3.jpg",
  "/images/g4.jpg",
  "/images/g5.jpg",
  "/images/g6.jpg",
  "/images/g7.jpg",
];

const productImages3 = [
  "/images/k1.jpg",
  "/images/k2.jpg",
  "/images/k3.jpg",
  "/images/k4.jpg",
  "/images/k5.jpg",
];

const productPrices = [
  "$29.99",
  "$45.00",
  "$19.95",
  "$79.99",
  "$34.50",
  "$62.00",
];

const productPrices1 = [
  "$59.99",
  "$55.00",
  "$39.95",
  "$79.99",
  "$84.50",
  "$68.00",
];
const productPrices2 = [
  "$9.99",
  "$5.00",
  "$18.95",
  "$70.99",
  "$34.50",
  "$66.00",
  "$15.00"
];
const productPrices3 = [
  "$20.99",
  "$47.00",
  "$49.95",
  "$70.99",
  "$37.50",
  "$26.00",
];
function Category () {
  const itemCount = productImages.length;
  const itemCount1 = productImages1.length;
  const itemCount2 = productImages2.length;
  const itemCount3 = productImages3.length;
  return (
    <div>
      <div className="mt-5">
        <h2 className="text-blue-500 font-medium text-xl mb-4">Fashion</h2>
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {productImages.slice(0, itemCount).map((imageUrl, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 cursor-pointer">
                        <img
                          src={imageUrl}
                          alt={`Product ${index + 1}`}
                          className="w-full h-[250px] object-cover rounded-lg mb-2"
                        />
                        <span className="font-medium text-gray-800">
                          {productPrices[index]}
                        </span>
                        <button className="mt-2 text-sm font-medium bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Add to Cart
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
          </Carousel>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-blue-500 font-medium text-xl mb-4">
          Electronics & Mobile
        </h2>
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {productImages1.slice(0, itemCount1).map((imageUrl, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 cursor-pointer">
                        <img
                          src={imageUrl}
                          alt={`Product ${index + 1}`}
                          className="w-full h-[250px] object-cover rounded-lg mb-2"
                        />
                        <span className="font-medium text-gray-800">
                          {productPrices1[index]}
                        </span>
                        <button className="mt-2 text-sm font-medium bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Add to Cart
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
          </Carousel>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-blue-500 font-medium text-xl mb-4">Grocery</h2>
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {productImages2.slice(0, itemCount2).map((imageUrl, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 cursor-pointer">
                        <img
                          src={imageUrl}
                          alt={`Product ${index + 1}`}
                          className="w-full h-[250px] object-cover rounded-lg mb-2"
                        />
                        <span className="font-medium text-gray-800">
                          {productPrices2[index]}
                        </span>
                        <button className="mt-2 text-sm font-medium bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Add to Cart
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
          </Carousel>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-blue-500 font-medium text-xl mb-4">
          Home & Kitchen
        </h2>
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {productImages3.slice(0, itemCount3).map((imageUrl, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 cursor-pointer">
                        <img
                          src={imageUrl}
                          alt={`Product ${index + 1}`}
                          className="w-full h-[250px] object-cover rounded-lg mb-2"
                        />
                        <span className="font-medium text-gray-800">
                          {productPrices3[index]}
                        </span>
                        <button className="mt-2 text-sm font-medium bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Add to Cart
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-gray-700 text-white p-2 rounded-full hover:bg-white transition cursor-pointer z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Category;