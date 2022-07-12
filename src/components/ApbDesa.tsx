/* eslint-disable react/jsx-key */
import React, { useState } from "react";

export default function ApbDesa() {
  const [pendapatan, setPendapatan] = useState(true);
  const [belanja, setBelanja] = useState(true);
  const [pembiayaan, setPembiayaan] = useState(true);

  return (
    <div className="bg-light text-center md:py-24 py-8">
      <h3 className="font-bold md:text-4xl text-2xl text-white md:mb-16 mb-8">Realisasi APB Desa</h3>
      <div className="flex flex-col md:flex-row justify-around md:max-w-screen-lg w-[90%] mx-auto gap-8">
        <button
          className={`rounded-lg ${pendapatan ? "bg-white" : "bg-buttonToggle"} ${pendapatan ? "text-light" : "text-white"} font-bold md:py-4 md:px-16 lg:px-24 py-2 px-8 text-lg`}
          type="button"
          onClick={() => setPendapatan(!pendapatan)}
        >
          <a href="https://drive.google.com/file/d/10oD5l6VfdarbyT6xUHDiWTYgMwJl2Ksd/view?usp=sharing" rel="noreferrer" target="_blank">Pendapatan</a>
        </button>
        <button
          className={`rounded-lg ${belanja ? "bg-white" : "bg-buttonToggle"} ${belanja ? "text-light" : "text-white"} font-bold md:py-4 md:px-16 lg:px-24 py-2 px-8 text-lg`}
          type="button"
          onClick={() => setBelanja(!belanja)}
        >Belanja
        </button>
        <button
          className={`rounded-lg ${pembiayaan ? "bg-white" : "bg-buttonToggle"} ${pembiayaan ? "text-light" : "text-white"} font-bold md:py-4 md:px-16 lg:px-24 py-2 px-8 text-lg`}
          type="button"
          onClick={() => setPembiayaan(!pembiayaan)}
        >Pembiayaan
        </button>
      </div>
    </div>
  );
}
