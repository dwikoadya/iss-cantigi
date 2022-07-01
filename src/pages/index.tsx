import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/Header";
import Banner from "components/Banner";
import Kuwu from "components/Kuwu";
import DataDesa from "components/DataDesa";
import StrukturOrganisasi from "components/StrukturOrganisasi";
import VisiMisi from "components/VisiMisi";
import Motto from "components/Motto";
import ApbDesa from "components/ApbDesa";
import Umkm from "components/Umkm";

const Home: NextPage = () => (
  <div className="w-full">
    <Head>
      <title>Create Next App</title>
    </Head>
    <Header />
    <Banner />
    <Kuwu />
    <DataDesa />
    <StrukturOrganisasi />
    <VisiMisi />
    <Motto />
    <ApbDesa />
    <Umkm />
  </div>
);

export default Home;
