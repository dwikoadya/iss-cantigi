import React from "react";

export default function DataDesa() {
  return (
    <div className="flex h-[400px] bg-red-800 justify-center place-items-center">
      <div className="flex flex-col h-[203px] w-[1139px] justify-between">
        <div className="flex justify-center">
          <div className="flex text-white items-center font-bold text-5xl">
            Data Desa
          </div>
        </div>
        <div className="flex w-full justify-between ">
          <div className="border-black">
            <div className="flex text-white font-bold text-5xl justify-center">
              527
            </div>
            <div className="flex text-white font-medium justify-center">
              Luas Desa/Kelurahan [Ha]
            </div>
          </div>
          <div className="border-black">
            <div className="flex text-white font-bold text-5xl justify-center">
              2,484
            </div>
            <div className="flex text-white font-medium justify-center">
              Jumlah Penduduk Laki-Laki
            </div>
          </div>
          <div className="border-black">
            <div className="flex text-white font-bold text-5xl justify-center">
              2,470
            </div>
            <div className="flex text-white font-medium justify-center">
              Jumlah Penduduk Perempuan
            </div>
          </div>
          <div className="border-black">
            <div className="flex text-white font-bold text-5xl justify-center">
              1,418
            </div>
            <div className="flex text-white font-medium justify-center">
              Jumlah Kepala Keluarga
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
