import React from "react";
import styles from "@/styles/custom carousel styles/customArrow.module.css";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const CustomButtonArrowGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <>
      <div className={styles.main}>
        <button className={styles.left__arrow} onClick={() => previous()}>
          <FaArrowLeft className={styles.arrowIcon} />
        </button>
        <button className={styles.right__arrow} onClick={() => next()}>
          <FaArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </>
  );
};

export default CustomButtonArrowGroup;
