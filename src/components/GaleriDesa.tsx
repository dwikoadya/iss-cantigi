import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import clsx from "clsx";

import { slideGaleri } from "constant/slide";
import Card from "./Card";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function GaleriDesa() {
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
    <div className="flex flex-col w-full py-4 items-center justify-center lg:mt-16 mt-8 dark:text-white mb-10 lg:mb-20">
      <h4 className="lg:text-5xl text-2xl font-bold text-center mb-8">Galeri Desa</h4>
      <div className="w-full lg:max-w-screen-2xl relative sm:p-3">
        <button
          className={clsx(
            "absolute -left-20 top-[calc(15%+20px)]",
            "hidden md:flex justify-center items-center",
          )}
          type="button"
          onClick={prev}
        >
          <i className="bx bx-chevron-left text-7xl text-black dark:text-white" />
        </button>
        <div className="px-4">
          <Slider ref={sliderRef} {...settings}>
            {slideGaleri.map((obj, idx) => (
              <Card
                classCard="overflow-hidden flex flex-col gap-3 mt-3"
                classDesc="lg:text-lg text-base"
                classTitle="font-bold lg:text-3xl"
                desc={obj.desc}
                height={900}
                key={idx}
                poto={obj.image}
                time={obj.time}
                title={obj.title}
                type="GALERI_DESA"
                width={1500}
              />
            ))}
          </Slider>
        </div>
        <button
          className={clsx(
            "absolute -right-20 top-[calc(15%+20px)]",
            "hidden md:flex justify-center items-center",
          )}
          type="button"
          onClick={next}
        >
          <i className="bx bx-chevron-right text-7xl text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
