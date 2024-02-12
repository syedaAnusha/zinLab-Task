import React from "react";
import Carousel from "./Carousel";
import styles from "@/styles/body.module.css";

const Body = () => {
  return (
    <>
      <div className={styles.main}>
        <Carousel />
      </div>
    </>
  );
};

export default Body;
