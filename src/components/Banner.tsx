import clsx from "clsx";
import Image from "next/image";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

const slides = [
  "/images/sliderCantigi1.png",
  "/images/sliderCantigi2.png",
  "/images/sliderCantigi3.png",
];

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function Banner() {
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
    <div>
      <button
        className={clsx(
          "absolute left-5 top-[calc(50%+20px)] z-30 h-[45px] w-[45px]",
          "hidden md:flex justify-center items-center",
        )}
        type="button"
        onClick={prev}
      >
        <i className="bx bx-chevron-left text-5xl text-white" />
      </button>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((path, idx) => (
          <div className="flex-center bg-light w-full relative sm:h-[720px] h-[300px]" key={idx}>
            <Image
              alt="slider"
              className="object-contain"
              layout="fill"
              src={path}
            />
          </div>
        ))}
      </Slider>
      <button
        className={clsx(
          "absolute right-[30px] top-[calc(50%+20px)] z-30 h-[45px] w-[45px]",
          "hidden md:flex justify-center items-center",
        )}
        type="button"
        onClick={next}
      >
        <i className="bx bx-chevron-right text-5xl text-white" />
      </button>
    </div>
  );
}
