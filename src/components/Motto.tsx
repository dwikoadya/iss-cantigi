import React from "react";

type IMotto = {
  slogan: string
}

type ISiteName = {
  site_tagline: string
}

type MixinType = IMotto & ISiteName

export default function Motto({ slogan, site_tagline }: MixinType) {
  return (
    <div className="flex flex-col text-center lg:my-20 my-8 gap-x-10 px-2">
      <h4 className="font-bold lg:text-4xl text-2xl lg:mb-10 mb-4">Motto</h4>
      <span className="font-bold lg:text-3xl text-xl lg:mb-10 mb-4">{site_tagline}</span>
      <p className="lg:text-lg lg:tracking-wider">{slogan}</p>
    </div>
  );
}
