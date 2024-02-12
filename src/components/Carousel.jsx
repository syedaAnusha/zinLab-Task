import React from "react";
import Image from "next/image";
import styles from "@/styles/carousel.module.css";

const Carousel = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.heading2}>Convert from PDF</h2>
        </div>
      </div>
    </>
  );
};

export default Carousel;
