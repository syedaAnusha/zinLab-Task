import React from "react";
import Image from "next/image";
import styles from "@/styles/custom carousel styles/customLeftArrow.module.css";

const LeftArrow = ({ onClick }) => {
  // const {
  //   onMove,
  //   carouselState: { currentSlide, deviceType },
  // } = rest;
  return (
    <>
      <div className={styles.main}>
        <Image
          src="/icons/arrow-left.svg"
          alt="left arrow"
          // className={styles.main}
          width={25}
          height={25}
          priority
          onClick={() => onClick()}
        />
      </div>
    </>
  );
};

export default LeftArrow;
