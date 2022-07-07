/* eslint-disable no-console */
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { login } from "api/auth";
import {
  dataGender, dataBanner, dataProfile, dataConfigs,
} from "utils/landing-page-api";
import {
  Banners, Genders, Profile, Configs,
} from "constant/types/state";

import Banner from "components/Banner";
import Kuwu from "components/Kuwu";
import DataDesa from "components/DataDesa";
import StrukturOrganisasi from "components/StrukturOrganisasi";
import VisiMisi from "components/VisiMisi";
import Motto from "components/Motto";
import ApbDesa from "components/ApbDesa";
import Umkm from "components/Umkm";
import GaleriDesa from "components/GaleriDesa";
import FooterTop from "components/FooterTop";
import FooterBottom from "components/FooterBottom";
import ScrollToTop from "components/ScrollToTop";

const Header = dynamic(
  () => import("../components/Header"),
  { ssr: false },
);

const Home: NextPage = () => {
  const [genders, setGenders] = useState<Genders>({
    male: 0,
    female: 0,
  });

  const [banners, setBanners] = useState<Banners[]>([]);
  const [profile, setProfile] = useState<Profile>({
    address: "",
    slogan: "",
    pic_phone: "",
  });
  const [configs, setConfigs] = useState<Configs>({
    site_name: "",
    site_tagline: "",
    contact: "",
    email: "",
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      const data = async () => {
        const res = await login();
        if (res.callback) {
          localStorage.setItem("access_token", res.callback.accessToken);
          setTimeout(() => {
            dataGender({ setGenders });
            dataBanner({ setBanners });
            dataProfile({ setProfile });
            dataConfigs({ setConfigs });
          }, 500);
        }
      };
      data();
    } else {
      dataGender({ setGenders });
      dataBanner({ setBanners });
      dataProfile({ setProfile });
      dataConfigs({ setConfigs });
    }
  }, []);

  return (
    <div className="w-full">
      <Head>
        <title>Cantigi Kulon</title>
      </Head>
      <Header />
      <Banner banners={banners} />
      <Kuwu {...profile} {...configs} />
      <DataDesa {...genders} />
      <StrukturOrganisasi />
      <VisiMisi />
      <Motto {...profile} {...configs} />
      <ApbDesa />
      <Umkm />
      <GaleriDesa />
      <FooterTop />
      <FooterBottom {...profile} {...configs} />
      <ScrollToTop />
    </div>
  );
};

export default Home;
