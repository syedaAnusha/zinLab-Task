import React from "react";
import CustomCarousel from "./CustomCarousel";
import styles from "@/styles/body.module.css";

const Body = () => {
  return (
    <>
      <div className={styles.main}>
        <CustomCarousel />
      </div>
    </>
  );
};

export default Body;
