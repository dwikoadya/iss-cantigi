import React from "react";
import IconFrame from "./IconFrame";

export default function FooterBottom() {
  return (
    <div className="bg-default flex justify-evenly flex-col lg:flex-row">
      <div className="flex lg:w-1/2 w-full lg:p-24 p-12">
        <div className="lg:flex-row w-full flex-col flex md:gap-x-48 lg:gap-x-30">
          <div className="flex flex-col text-white">
            <div className="flex flex-row mb-8">
              <i className="bx bx-time-five mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Jam Operasional</h3>
                <p className="text-sm">Senin - Jumat, Pukul 08.00 - 16.00 WIB</p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="bx bx-location-plus mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Alamat Kantor Desa</h3>
                <p className="text-sm">M67G+P3V, Cantigi Kulon, Kec. Cantigi,</p>
                <p className="text-sm">Kab. Indramayu, Jawa Barat 45258</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white mt-8 lg:mt-0">
            <div className="flex flex-row mb-8">
              <i className="bx bx-phone mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Telepon 1</h3>
                <p className="text-sm">0819-1141-7230</p>
              </div>
            </div>
            <div className="flex flex-row mb-8">
              <i className="bx bx-phone mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Telepon 2</h3>
                <p className="text-sm">0896-1956-7260 </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="bx bx-envelope mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Email</h3>
                <p className="text-sm">cantigi@edesa.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-24 p-12 text-white flex justify-center lg:items-end items-center flex-col">
        <h3 className="font-bold mb-8 text-lg">Ikuti Kami</h3>
        <div className="flex flex-row lg:gap-9 gap-2 lg:mb-16 mb-8">
          <IconFrame>
            <i className="bx bxl-instagram" />
          </IconFrame>
          <IconFrame>
            <i className="bx bxl-facebook" />
          </IconFrame>
          <IconFrame>
            <i className="bx bxl-twitter" />
          </IconFrame>
          <IconFrame>
            <i className="bx bxl-youtube" />
          </IconFrame>
        </div>
        <p className="text-sm lg:text-base text-center lg:text-base/">eDesa - Desa Cantigi Kulon © {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </div>
  );
}
