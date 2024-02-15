import React from "react";
import CustomCarousel from "./CustomCarousel";
import ConvertToPdf from "./ConvertToPdf";
import styles from "@/styles/body.module.css";

const Body = () => {
  return (
    <>
      <div className={styles.main}>
        <CustomCarousel />
        <ConvertToPdf />
      </div>
    </>
  );
};

export default Body;
