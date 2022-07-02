import Image from "next/image";
import React from "react";

export default function FooterTop() {
  return (
    <div className="bg-red-700 flex flex-col items-start">
      <div className="lg:w-[40%] w-full ">
        <Image
          alt="logoMobile"
          className="object-cover"
          height={436}
          src="/images/mobile.png"
          width={700}
        />
      </div>
      <div className="lg:w-[60%] w-full mt-[70px]">
        <h3 className="font-bold text-3xl text-white mb-2.5">Tertarik Untuk Menjelajah Lebih Jauh?</h3>
        <span className="font-bold text-2xl text-white mb-2.5">Download Aplikasi eDESA Cantigi Kulon!</span>
        <div className="text-lg text-white mb-2.5">
          <p>Desa Cantigi Kulon memiliki aplikasi digital desa yang dapat</p>
          <p>membantu memudahkan segala kebutuhan administrasi anda dan</p>
          <p>membantu mengembangkan UMKM Desa</p>
        </div>
        <button className="rounded-lg bg-white text-red-700 font-bold text-lg py-5 px-11" type="button">Download Disini</button>
      </div>
    </div>
  );
}
