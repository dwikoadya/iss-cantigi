/* eslint-disable no-console */
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import { login } from "api/auth";
import { dataGender, dataBanner, dataProfile } from "utils/landing-page-api";
import { Banners, Genders, Profile } from "constant/types/state";

import Header from "components/Header";
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
          }, 500);
        }
      };
      data();
    } else {
      dataGender({ setGenders });
      dataBanner({ setBanners });
      dataProfile({ setProfile });
    }
  }, []);

  return (
    <div className="w-full">
      <Head>
        <title>Cantigi Kulon</title>
      </Head>
      <Header />
      <Banner banners={banners} />
      <Kuwu {...profile} />
      <DataDesa {...genders} />
      <StrukturOrganisasi />
      <VisiMisi />
      <Motto {...profile} />
      <ApbDesa />
      <Umkm />
      <GaleriDesa />
      <FooterTop />
      <FooterBottom {...profile} />
      {/* <Contoh /> */}
    </div>
  );
};

export default Home;
