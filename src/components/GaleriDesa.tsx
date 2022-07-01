import React from "react";
import Image from "next/image";

export default function GaleriDesa() {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 py-4">
      <h4 className="text-5xl font-bold text-center mb-8">Galeri Desa</h4>
      <div className="grid gap-4 grid-cols-3 grid-rows-2">
        {
          Array(6).fill("0").map((_, idx) => (
            <Image
              alt="galeri"
              className="object-cover"
              height={300}
              key={idx}
              src="/images/umkm1.jpeg"
              width={500}
            />
          ))
        }
      </div>
    </div>
  );
}
