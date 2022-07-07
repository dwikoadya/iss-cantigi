import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function FooterTop() {
  const [color, setColor] = useState(true);
  return (
    <div className="bg-light flex flex-col lg:flex-row lg:items-start items-center py-10">
      <div className="lg:w-[40%] lg:ml-9 mb-4">
        <Image
          alt="logoMobile"
          className="object-cover"
          height={436}
          src="/images/mobile.png"
          width={700}
        />
      </div>
      <div className="lg:w-[60%] lg:mt-16 lg:tracking-widest lg:-ml-20 text-left px-4 ">
        <h3 className="font-bold text-xl text-white mb-2.5 lg:text-4xl">Tertarik Untuk Menjelajah Lebih Jauh?</h3>
        <p className="font-medium text-lg text-white lg:text-3xl mb-2.5">Download Aplikasi eDESA Cantigi Kulon!</p>
        <div className="text-sm text-white mb-4 lg:text-base">
          <p>Desa Cantigi Kulon memiliki aplikasi digital desa yang dapat</p>
          <p>membantu memudahkan segala kebutuhan administrasi anda dan</p>
          <p>membantu mengembangkan UMKM Desa</p>
        </div>
        <button
          className={`rounded-lg ${ color ? "bg-white" : "bg-buttonToggle"} ${color ? "text-light" : "text-white"} font-bold py-2 px-10 w-full lg:w-auto`}
          type="button"
          onClick={() => setColor(!color)}
        >
          <Link href="https://play.google.com/store/apps/details?id=com.edesatsm">
            <a target="_blank">
              Download Disini
            </a>
          </Link>
        </button>
      </div>
    </div>
  );
}
