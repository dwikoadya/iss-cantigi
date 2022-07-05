/* eslint-disable no-console */
import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";

interface User {
  name: string
  username: string
  email: string
}

export default function Contoh() {
  useEffect(() => {
    axios.get<User[]>("https://api.edesa.co.id/client/graphics/genders", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response: AxiosResponse) => {
        console.log("response: ", response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div />
  );
}
// useEffect dibawah token
// const dataGender = async () => {
//   const res = await dataDesa();
//   if (res.callback) {
//     setGenders({
//       male: res.callback.male,
//       female: res.callback.female,
//     });
//   }
// };

// dibawah setItem
// dataGender();

// dibawah home
// const [genders, setGenders] = useState<{
//   male: number,
//   female: number
// }>({
//   male: 0,
//   female: 0,
// });
