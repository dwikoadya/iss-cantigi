/* eslint-disable import/prefer-default-export */
import { getDataGenders } from "api/data-desa";
import React from "react";

import { Genders } from "constant/types/state";

type ISetGenders = {
  setGenders: React.Dispatch<React.SetStateAction<Genders>>
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
