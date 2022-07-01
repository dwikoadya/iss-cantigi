import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

import Card from "./Card";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
};

export default function Umkm() {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current !== null) {
      sliderRef.current.slickNext();
    }
  };

  const prev = () => {
    if (sliderRef.current !== null) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center mt-16">
      <h4 className="text-5xl font-bold text-center mb-8">UMKM</h4>
      <div className="max-w-screen-2xl relative">
        <button className="absolute -left-16 top-1/2 z-30" type="button" onClick={prev}>
          <i className="bx bx-chevron-left text-5xl" />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {Array(15).fill("0").map((_, idx) => (
            <Card idx={idx} key={idx} />
          ))}
        </Slider>
        <button className="absolute -right-16 top-1/2 z-30" type="button" onClick={next}>
          <i className="bx bx-chevron-right text-5xl" />
        </button>
      </div>
    </div>
  );
}
