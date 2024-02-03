import React from "react";
import styles from "@/styles/parentContainer.module.css";
import Header from "./Header";
import Aboutus from "./Aboutus";
const ParentContainer = () => {
  return (
    <div className={styles.parent__container}>
      <Header />
      <Aboutus />
    </div>
  );
};

export default ParentContainer;
