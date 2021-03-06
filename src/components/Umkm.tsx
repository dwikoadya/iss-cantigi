import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import Lightbox from "react-image-lightbox";

import slide from "constant/slide";
import Card from "./Card";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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

export default function Umkm() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center lg:mt-16 mt-8 dark:text-white">
      {isOpen && (
        <Lightbox
          imageCaption={slide[photoIndex].desc}
          imageTitle={slide[photoIndex].title}
          mainSrc={slide[photoIndex].poto}
          nextSrc={slide[(photoIndex + 1) % slide.length].poto}
          prevSrc={slide[(photoIndex + slide.length - 1) % slide.length].poto}
          onCloseRequest={() => setIsOpen(false)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % slide.length)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + slide.length - 1) % slide.length)}
        />
      )}
      <h4 className="lg:text-5xl text-2xl font-bold text-center mb-8">Potensi Desa</h4>
      <div className="w-full lg:max-w-screen-2xl relative sm:p-3">
        <button
          className={clsx(
            "absolute -left-20 top-[calc(25%+20px)]",
            "hidden md:flex justify-center items-center",
          )}
          type="button"
          onClick={prev}
        >
          <i className="bx bx-chevron-left text-7xl text-black dark:text-white" />
        </button>
        <div className="px-4">
          <Slider ref={sliderRef} {...settings}>
            {slide.map((obj, idx) => (
              <button key={idx} type="button" onClick={() => setIsOpen(!isOpen)}>
                <Card
                  classCard="overflow-hidden flex flex-col gap-3 mt-3"
                  classDesc="lg:text-base text-sm"
                  classTitle="font-bold lg:text-xl"
                  desc={obj.desc}
                  height={300}
                  poto={obj.poto}
                  time={new Date()}
                  title={obj.title}
                  width={350}
                />
              </button>
            ))}
          </Slider>
        </div>
        <button
          className={clsx(
            "absolute -right-20 top-[calc(25%+20px)] h-[45px]",
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
