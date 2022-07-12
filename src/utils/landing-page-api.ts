/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import React from "react";

import {
  Genders, Banners, Profile, Configs, Cards,
} from "constant/types/state";
import { getDataGenders } from "api/data-desa";
import { getDataBanners } from "api/data-banners";
import { getProfileDesa } from "api/profile-desa";
import { getDataConfigs } from "api/data-config";
import { getDataNews } from "api/berita-desa";
import { slideGaleri } from "constant/slide";

type ISetGenders = {
  setGenders: React.Dispatch<React.SetStateAction<Genders>>
}

type ISetBanners = {
  setBanners: React.Dispatch<React.SetStateAction<Banners[]>>
}

type ISetProfile = {
  setProfile: React.Dispatch<React.SetStateAction<Profile>>
}

type ISetConfigs = {
  setConfigs: React.Dispatch<React.SetStateAction<Configs>>
}

type ISetNews = {
  setNews: React.Dispatch<React.SetStateAction<Cards[]>>
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

export const dataConfigs = async ({ setConfigs }: ISetConfigs) => {
  const res = await getDataConfigs();
  if (res.callback) {
    setConfigs(res.callback);
  }
};

export const dataNews = async ({ setNews }: ISetNews) => {
  const res = await getDataNews();
  if (res.callback) {
    const data = res.callback.data.map((item: any, index: number) => ({
      title: item.title,
      created_date: item.created_date,
      images: item.images[0]?.img_url,
      desc: item?.desc || slideGaleri[index].desc,
    }));
    setNews(data);
  }
};
