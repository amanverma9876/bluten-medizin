"use client";
import noUiSlider from "nouislider";
import styles from "./Slider.module.css";
import { useEffect, useRef } from "react";
const Slider = ({ start = [20, 80], min = 0, max = 100 }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      noUiSlider.create(sliderRef.current, {
        start,
        connect: true,
        range: {
          min,
          max,
        },
      });
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, [start, min, max]);

  return <div ref={sliderRef} style={{ width: "100%", height: "10px" }}></div>;
};

export default Slider;
