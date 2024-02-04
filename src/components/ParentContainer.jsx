import React from "react";
import styles from "@/styles/parentContainer.module.css";
import AppBar from "./AppBar";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import AppBarMobile from "./Smaller Screen Components/AppBarMobile";
import useWindowDimensions from "../hooks/useWindowDimensions";

const ParentContainer = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={styles.parent__container}>
      {width >= 1024 ? <AppBar /> : <AppBarMobile />}
      <Aboutus />
      <Footer />
    </div>
  );
};

export default ParentContainer;
