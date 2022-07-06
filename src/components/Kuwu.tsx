import React from "react";
import Image from "next/image";
import clsx from "clsx";

type IMotto = {
  slogan: string
}

export default function Kuwu({ slogan }: IMotto) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full text-lg">
        <div className="flex flex-col lg:w-1/2 text-left justify-center items-center h-full mx-auto">
          <div className="flex flex-col text-center lg:text-left mt-10 lg:mt-0">
            <h3 className="font-bold text-3xl lg:text-5xl mb-8">Desa Cantigi Kulon</h3>
            <div className="lg:text-3xl text-center lg:text-left">
              <p>{slogan}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center items-end">
        <div className={clsx(
          "rounded-full absolute bg-default -z-20",
          "xl:h-[600px] xl:w-[600px] flex -bottom-[80px]",
          "h-[200px] w-[200px] hidden xl:flex",
        )}
        />
        <Image
          alt="kuwu"
          className="object-cover translate-y-4"
          height={700}
          src="/images/kuwu.png"
          width={450}
        />
        <div className="bg-white rounded-lg absolute p-2 bottom-0 lg:bottom-10 w-full lg:w-[450px] flex justify-center">
          <span className="font-bold">CHAEROTUNNISA, S.Pd.I</span>
        </div>
      </div>
    </div>
  );
}
