/* eslint-disable max-len */
import React from "react";

export default function VisiMisi() {
  return (
    <div className="flex bg-red-800 text-center items-center text-white flex-col">
      <div className="flex flex-col text-center tracking-wider lg:text-2xl px-4 lg:px-0">
        <h3 className="font-bold lg:text-4xl text-2xl lg:my-14 my-8">Visi Cantigi Kulon</h3>
        <p>“Membentuk masyarakat yang berakhlak, bertaqwa dan berpendidikan dengan</p>
        <p>penyempurnaan dalam tatanan lembaga pemerintah desa untuk mewujudkan Cantigi</p>
        <p>Kulon Maju dan Terdepan”</p>
      </div>
      <div className="flex flex-col justify-center items-center lg:mt-24 mt-12">
        <h3 className="font-bold text-center lg:text-4xl text-2xl">Misi Cantigi Kulon</h3>
        <div className="lg:max-w-screen-xl w-[90%] lg:mb-24 mb-10 lg:mt-12 mt-6 p-4 lg:p-0 lg:text-2xl">
          <div className="font-bold text-left lg:mb-10 mb-6 lg:-ml-8 -ml-4">“Sapta Nata Kriya Kencana”</div>
          <ol className="list-decimal text-start">
            <li>Meningkatkan fasiltas sarana dan prasarana ibadah untuk kekushyu&apos;an dan kenyamanan masyarakat dalam beribadah.</li>
            <li>Membangun infrastuktur penunjang ekonomi masyarakat Cantigi Kulon.</li>
            <li>Membenahi pelayanan masyarakat pada bidang pendidikan, kesehatan layanan publik dan mengedepankan sistem pemerintahan yang transparan</li>
            <li>Membangun sosial budaya masyarakat dengan prinsip kebersamaan dan gotong royong untuk Desa Cantigi Kulon.</li>
            <li>Meningkatkan Sumber Daya Manusia (SDM) di masyarakat dengan pendidikan formal maupun non-formal.</li>
            <li>Meningkatkan Perekonomian dalam sektor Pertanian, Kelautan dan Perdagangan.</li>
            <li>Menjaga dan melestarikan Seni dan Budaya masyarakat Cantigi Kulon.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
