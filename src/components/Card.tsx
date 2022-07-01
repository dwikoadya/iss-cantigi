import Image from "next/image";
import React from "react";

type Props = {
  idx: number;
}

export default function Card({ idx }: Props) {
  return (
    <div className="bg-white w-[350px]">

      <Image
        alt="umkm1"
        className="object-cover"
        height={300}
        src="/images/umkm1.jpeg"
        width={350}
      />
      <div className="p-3 w-full h-[200px] overflow-hidden">
        <h5>Ikan Asin {idx}</h5>
        <p>Lorem ipsum dolor
          sit amet consectetur,
          adipisicing elit. Dolores voluptas a,
          officia nostrum saepe reprehenderit ex.
          Optio obcaecati blanditiis possimus esse, non,
          libero modi omnis tempora,
          illo accusantium vero minima.
        </p>
      </div>
    </div>
  );
}
