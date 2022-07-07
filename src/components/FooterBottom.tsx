import React from "react";
import IconFrame from "./IconFrame";

type IProfile = {
  address: string
  pic_phone: string
}

type IContact = {
  contact: string
  email: string
  facebook: string
  instagram: string
  youtube: string
  tiktok: string
}

type MixinType = IProfile & IContact

export default function FooterBottom({
  address, pic_phone, contact, email, facebook, instagram, youtube, tiktok,
}: MixinType) {
  return (
    <div className="bg-default flex justify-evenly flex-col lg:flex-row">
      <div className="flex lg:w-1/2 w-full lg:p-24 p-12">
        <div className="lg:flex-row w-full flex-col flex md:gap-x-48 lg:gap-x-20">
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
                <p className="text-sm">{address}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white mt-8 lg:mt-0">
            <div className="flex flex-row mb-8">
              <i className="bx bx-phone mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Telepon 1</h3>
                <p className="text-sm">{contact}</p>
              </div>
            </div>
            <div className="flex flex-row mb-8">
              <i className="bx bx-phone mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Telepon 2</h3>
                <p className="text-sm">{pic_phone}</p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="bx bx-envelope mr-5 text-2xl -translate-y-1" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2.5">Email</h3>
                <p className="text-sm">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-24 p-12 text-white flex justify-center lg:justify-start lg:items-end items-center flex-col">
        <h3 className="font-bold mb-8 text-lg">Ikuti Kami</h3>
        <div className="flex flex-row lg:gap-9 gap-2 lg:mb-16 mb-8">
          <IconFrame link={instagram}>
            <i className="bx bxl-instagram" />
          </IconFrame>
          <IconFrame link={facebook}>
            <i className="bx bxl-facebook" />
          </IconFrame>
          <IconFrame link={tiktok}>
            <i className="bx bxl-twitter" />
          </IconFrame>
          <IconFrame link={youtube}>
            <i className="bx bxl-youtube" />
          </IconFrame>
        </div>
        <p className="text-sm lg:text-base text-center lg:text-base/">eDesa - Desa Cantigi Kulon © {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </div>
  );
}
