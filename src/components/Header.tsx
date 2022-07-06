import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between pl-4 xl:px-[100px] py-4 w-full">
      <div className="flex items-center">
        <Image
          alt="logo"
          className="object-cover"
          height={100}
          src="/images/logoCantigi.png"
          width={367}
        />
      </div>
      <div className="flex items-center mb-[9px]">
        <Image
          alt="logo"
          className="object-cover"
          height={100}
          src="/images/logoEDesa.png"
          width={200}
        />
        <div className="items-center flex flex-col justify-center">
          <p className="font-semibold">Mode Gelap</p>
          <div className="lg:w-24 lg:h-9 w-10 h-6 flex items-center bg-light rounded-full cursor-pointer">
            <div className="bg-white md:w-6 md:h-6 h-8 w-8 rounded-full mx-2 " />
            <p className="text-white font-semibold mt-1">OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
