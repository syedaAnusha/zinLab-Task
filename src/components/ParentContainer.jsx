import React from "react";
import styles from "@/styles/parentContainer.module.css";
import Header from "./Header";

const ParentContainer = () => {
  return (
    <div className={styles.parent__container}>
      <Header />
    </div>
  );
};

export default ParentContainer;
