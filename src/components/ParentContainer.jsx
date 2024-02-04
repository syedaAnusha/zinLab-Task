import React from "react";
import styles from "@/styles/parentContainer.module.css";
import AppBar from "./AppBar";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import AppBarMobile from "./Smaller Screen Components/AppBarMobile";
import useWindowDimensions from "../hooks/useWindowDimensions";

const ParentContainer = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className={styles.parent__container}>
      <AppBar />
      {/* <AppBarMobile /> */}
      <Aboutus />
      <Footer />
    </div>
  );
};

export default ParentContainer;
