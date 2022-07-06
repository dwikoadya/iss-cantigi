import React from "react";
import Image from "next/image";
import clsx from "clsx";

import useDarkMode from "hooks/useDarkMode";

export default function Header() {
  const { theme, setTheme } = useDarkMode();

  const onChangeTheme = () => (theme === "dark" ? setTheme("light") : setTheme("dark"));

  console.log(theme);

  return (
    <div className="flex dark:bg-light justify-between pl-4 xl:px-[100px] py-4 w-full transition-all">
      <div className="flex items-center">
        <Image
          alt="logo"
          className="object-cover"
          height={100}
          src={theme === "dark" ? "/images/logoCantigiDark.png" : "/images/logoCantigi.png"}
          width={367}
        />
      </div>
      <div className="flex items-center mb-[9px]">
        <div className="mr-10">
          <Image
            alt="logo"
            className="object-cover"
            height={75}
            src={theme === "dark" ? "/images/logoEDesaDark.png" : "/images/logoEDesa.png"}
            width={75}
          />
        </div>
        <button
          className="items-center flex flex-col justify-center -mt-2"
          type="button"
          onClick={onChangeTheme}
        >
          <p className="font-semibold cursor-default dark:text-white">Mode Gelap</p>
          <div className="lg:w-24 lg:h-9 w-10 h-6 flex items-center bg-light dark:bg-white rounded-full">
            <div className={clsx(
              "bg-white dark:bg-light md:w-6 md:h-6 h-7 w-7 rounded-full transition-all",
              theme === "dark" && "translate-x-[66px]",
              theme === "light" && "translate-x-1.5",
            )}
            />
            <p className={clsx(
              "text-white dark:text-light font-semibold mt-1 opacity-0 transition-all",
              theme === "dark" && "opacity-100 -translate-x-[4px]",
            )}
            >ON
            </p>
            <p className={clsx(
              "text-white dark:text-light font-semibold mt-1 opacity-0 transition-all",
              theme === "light" && "opacity-100 -translate-x-[10px]",
            )}
            >OFF
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
