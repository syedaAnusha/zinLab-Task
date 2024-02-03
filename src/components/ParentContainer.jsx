import React from "react";
import styles from "@/styles/parentContainer.module.css";
import AppBar from "./AppBar";
import Aboutus from "./Aboutus";
const ParentContainer = () => {
  return (
    <div className={styles.parent__container}>
      <AppBar />
      <Aboutus />
    </div>
  );
};

export default ParentContainer;
