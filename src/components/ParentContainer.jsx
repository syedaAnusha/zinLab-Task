import React from "react";
import styles from "@/styles/parentContainer.module.css";
import AppBar from "./AppBar";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
const ParentContainer = () => {
  return (
    <div className={styles.parent__container}>
      <AppBar />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default ParentContainer;
