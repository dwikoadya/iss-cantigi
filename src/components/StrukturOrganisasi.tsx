import React from "react";
import Image from "next/image";

export default function StrukturOrganisasi() {
  return (
    <div className="flex flex-col justify-center items-center pb-10">
      <div className="text-center ">
        <h3 className="font-bold lg:text-4xl text-xl my-9 tracking-wider dark:text-white">Struktur Organisasi</h3>
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
