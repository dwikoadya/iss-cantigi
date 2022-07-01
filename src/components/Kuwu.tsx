import React from "react";
import Image from "next/image";

export default function Kuwu() {
  return (
    // 641
    <div className="h-[720px] flex">
      <div className="w-1/2 text-lg">
        <div className="flex flex-col justify-center items-center h-full mx-auto bg-purple-900">
          <h3 className="font-bold text-5xl">Desa Cantigi Kulon</h3>
          <p>Mawaddah Adil Jaya Unggul,</p>
          <p>Beriman Humanis Ikhlas Jujur</p>
          <p>Amanah dan Bermartabat</p>
        </div>
      </div>
      <div className="relative w-1/2 flex justify-center items-end">
        <div className="rounded-full absolute bg-red-500 -z-20 h-[600px] w-[600px] flex -bottom-[80px]" />
        <Image
          alt="kuwu"
          className="object-cover translate-y-4"
          height={700}
          src="/images/kuwu.png"
          width={450}
        />
        <div className="bg-white rounded-lg absolute p-2 bottom-10 w-[450px] flex justify-center">
          <span className="font-bold">CHAEROTUNNISA, S.Pd.I</span>
        </div>
      </div>
    </div>
  );
}
