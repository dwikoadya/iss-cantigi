import Image from "next/image";
import React from "react";

type Props = {
  poto: string;
  title: string;
  desc: string
}

export default function Card({ poto, title, desc }: Props) {
  return (
    <div className="w-full px-2 cursor-grab">
      <Image
        alt="umkm"
        className="object-cover"
        height={300}
        src={poto}
        width={350}
      />
      <div className="p-1 h-[200px] overflow-hidden">
        <h5 className="font-bold lg:text-xl">{title}</h5>
        <p className="lg:text-base text-sm">{desc}</p>
      </div>
    </div>
  );
}
