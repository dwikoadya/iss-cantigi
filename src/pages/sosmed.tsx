import React from "react";
import clsx from "clsx";

const socmed = [
  () => <i className="bx bxl-facebook-square text-lg text-white" />,
  () => <i className="bx bxl-twitter text-lg text-white" />,
  () => <i className="bx bxl-instagram text-lg text-white" />,
];

export default function Socmed() {
  return (
    <nav className="flex justify-end items-center py-2.5 px-[65px] border border-b border-gray-100">
      <div className="flex w-[105px] justify-between">
        {socmed.map((item, idx) => (
          <div
            className={clsx(
              "h-[30px] cursor-pointer hover:bg-hover-color w-[30px]",
              "rounded-full bg-gray-600 justify-center items-center flex",
            )}
            key={idx}
          >
            {item()}
          </div>
        ))}
      </div>
    </nav>
  );
}
