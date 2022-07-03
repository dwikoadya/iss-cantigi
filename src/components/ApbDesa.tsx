import React from "react";

const button = ["Pendapatan", "Belanja", "Pembiayaan"];

export default function ApbDesa() {
  return (
    <div className="bg-light text-center md:py-24 py-8">
      <h3 className="font-bold md:text-4xl text-2xl text-white md:mb-16 mb-8">Realisasi APB Desa</h3>
      <div className="flex flex-col md:flex-row justify-around md:max-w-screen-lg w-[90%] mx-auto gap-8">
        {
          button.map((item) => (
            <button className="rounded-lg bg-white text-light font-bold md:py-4 md:px-16 lg:px-24 py-2 px-8 text-lg" key={item} type="button">
              {item}
            </button>
          ))
        }
      </div>
    </div>
  );
}
