import React from "react";
import Image from "next/image";

const slides = [
  "/images/galeriDesa1.jpeg",
  "/images/galeriDesa2.jpeg",
  "/images/galeriDesa3.jpeg",
  "/images/galeriDesa4.jpeg",
  "/images/galeriDesa5.jpeg",
  "/images/galeriDesa6.jpeg",
];

export default function GaleriDesa() {
  return (
    <div className="flex flex-col w-full items-center justify-center lg:mt-16 py-4">
      <h4 className="lg:text-5xl text-2xl font-bold text-center mb-8">Galeri Desa</h4>
      <div className="grid gap-4 grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {
          slides.map((path, idx) => (
            <Image
              alt="galeri"
              className="object-cover"
              height={300}
              key={idx}
              src={path}
              width={500}
            />
          ))
        }
      </div>
    </div>
  );
}
