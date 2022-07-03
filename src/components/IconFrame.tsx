import React from "react";

type Props = {
  children: React.ReactNode;
}

export default function IconFrame({ children }: Props) {
  return (
    <div className="bg-white rounded-full h-12 w-12 flex-center text-2xl text-dark">
      <div className="flex-center cursor-pointer bg-white h-10 w-10 rounded-full border border-dark">
        {children}
      </div>
    </div>
  );
}
