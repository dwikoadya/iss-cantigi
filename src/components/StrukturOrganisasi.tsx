import React from "react";
import Image from "next/image";

export default function StrukturOrganisasi() {
  return (
    <div className="flex flex-col h-[917px] justify-center items-center">
      <div className="text-center ">
        <h3 className="font-bold text-4xl m-9 tracking-wider">Struktur Organisasi</h3>
        <Image
          alt="struktur"
          className="object-cover"
          height={667}
          quality="100"
          src="/images/struktur.png"
          width={1296}
        />
      </div>
    </div>
  );
}
