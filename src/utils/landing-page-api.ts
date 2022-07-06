/* eslint-disable import/prefer-default-export */
import React from "react";

import { Genders, Banners, Profile } from "constant/types/state";
import { getDataGenders } from "api/data-desa";
import { getDataBanners } from "api/data-banners";
import { getProfileDesa } from "api/profile-desa";

type ISetGenders = {
  setGenders: React.Dispatch<React.SetStateAction<Genders>>
}

type ISetBanners = {
  setBanners: React.Dispatch<React.SetStateAction<Banners[]>>
}

type ISetProfile = {
  setProfile: React.Dispatch<React.SetStateAction<Profile>>
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

export const dataProfile = async ({ setProfile }: ISetProfile) => {
  const res = await getProfileDesa();
  if (res.callback) {
    setProfile(res.callback);
  }
};
