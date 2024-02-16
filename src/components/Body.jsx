import React from "react";
import CustomCarousel from "./CustomCarousel";
import ConvertToPdf from "./ConvertToPdf";
import styles from "@/styles/body.module.css";
import Bookmarks from "./Bookmarks";

const Body = () => {
  return (
    <>
      <div className={styles.main}>
        <CustomCarousel />
        <ConvertToPdf />
        <Bookmarks />
      </div>
    </>
  );
};

export default Body;
