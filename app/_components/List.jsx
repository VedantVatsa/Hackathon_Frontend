import React from 'react'

const productImages = [
  "/images/c1.png",
  "/images/c2.png",
  "/images/c3.png",
  "/images/c4.png",
  "/images/c5.png",
  "/images/c6.png",
  "/images/c7.png",
];

const productNames= [
  "Fashion",
  "Footwear",
  "Mobiles",
  "Laptop & Gadgets",
  "Furniture",
  "Home Appliances",
  "Kitchen ware",
];

function List() {
  const itemCount = productImages.length;
  return (
    <div className="mt-5">
      <h2 className="text-primary font-md text-xl">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 mt-4 cursor-pointer">
        {productNames.map((name, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-blue-50 gap-2 p-4 rounded-lg group hover:bg-blue-100"
          >
            <img
              src={productImages[index]} // Assuming you have an array of image URLs called "imageUrls"
              width={50}
              height={50}
              alt={`Product ${index + 1}`}
              className="group-hover:scale-125 transition-all ease-in"
            />
            <h2 className="text-center text-black text-xl">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List
