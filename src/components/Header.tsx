import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between px-[100px] py-4 w-full">
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
      </div>
    </div>
  );
}
