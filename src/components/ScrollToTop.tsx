import React from "react";
import useScrollToTop from "hooks/useScrollToTop";

export default function ScrollToTop() {
  const { visible, scrollToTop } = useScrollToTop();

  if (visible) {
    return (
      <button
        className="bg-light rounded text-white lg:px-4 lg:py-3 px-2 py-1.5  text-xl fixed z-10 bottom-4 right-4"
        type="button"
        onClick={scrollToTop}
      >
        <i className="bx bxs-chevrons-up" />
      </button>
    );
  }
  return null;
}
