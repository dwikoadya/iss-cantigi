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
      <h4 className="lg:text-5xl text-2xl font-bold text-center mb-8">UMKM</h4>
      <div className="w-full lg:max-w-screen-2xl relative sm:p-3">
        <button
          className={clsx(
            "absolute left-5 top-[calc(50%+20px)] z-30 h-[45px] w-[45px]",
            "rounded-full bg-opacity-60 bg-black",
            "hidden md:flex justify-center items-center",
          )}
          type="button"
          onClick={prev}
        >
          <i className="bx bx-chevron-left text-5xl text-white" />
        </button>
        <div className="px-4">
          <Slider ref={sliderRef} {...settings}>
            {slide.map((obj, idx) => (
              <button key={idx} type="button" onClick={() => setIsOpen(!isOpen)}>
                <Card desc={obj.desc} poto={obj.poto} title={obj.title} />
              </button>
            ))}
          </Slider>
        </div>
        <button
          className={clsx(
            "absolute right-[30px] top-[calc(50%+20px)] z-30 h-[45px] w-[45px]",
            "rounded-full bg-opacity-60 bg-black",
            "hidden md:flex justify-center items-center",
          )}
          type="button"
          onClick={next}
        >
          <i className="bx bx-chevron-right text-5xl text-white" />
        </button>
      </div>
    </div>
  );
}
