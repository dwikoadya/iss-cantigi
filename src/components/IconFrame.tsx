import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
}

export default function IconFrame({ children }: Props) {
  const [color, setColor] = useState(true);

  return (
    <div className="bg-white rounded-full h-12 w-12 flex-center text-2xl text-default">
      <button
        className={`flex-center ${color ? "bg-white" : "bg-buttonToggle"} ${color ? "text-default" : "text-white"}  h-10 w-10 rounded-full border border-default`}
        type="button"
        onClick={() => setColor(!color)}
      >
        {children}
      </button>
    </div>
  );
}
