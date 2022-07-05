/* eslint-disable import/prefer-default-export */
import React from "react";

import { Genders, Banners } from "constant/types/state";
import { getDataGenders } from "api/data-desa";
import { getDataBanners } from "api/data-banners";

type ISetGenders = {
  setGenders: React.Dispatch<React.SetStateAction<Genders>>
}

type ISetBanners = {
  setBanners: React.Dispatch<React.SetStateAction<Banners[]>>
}

export const dataGender = async ({ setGenders }: ISetGenders) => {
  const res = await getDataGenders();
  if (res.callback) {
    setGenders({
      male: res.callback.male,
      female: res.callback.female,
    });
  }
};

export const dataBanner = async ({ setBanners }: ISetBanners) => {
  const res = await getDataBanners();
  if (res.callback) {
    setBanners(res.callback);
  }
};
