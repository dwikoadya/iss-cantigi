import React from "react";

const data = [{
  value: "527Ha",
  title: "Luas Desa/Kelurahan (Ha)",
}, {
  value: "2,484",
  title: "Jumlah Penduduk Laki-Laki",
}, {
  value: "2,470",
  title: "Jumlah Penduduk Perempuan",
}, {
  value: "1,418",
  title: "Jumlah Kepala Keluarga",
}];

export default function DataDesa() {
  return (
    <div className="flex h-[400px] bg-red-800 justify-center items-center lg:px-48 w-full">
      <div className="flex items-center flex-col w-full">
        <h3 className="font-bold lg:text-5xl text-2xl text-white lg:mb-20 mb-4">Data Desa</h3>
        <div className="flex flex-col gap-x-8 lg:flex-row text-center text-white justify-around w-full">
          {data.map((item, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-2xl lg:text-5xl">{item.value}</h3>
              <p className="mb-3.5 lg:mt-3.5">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
