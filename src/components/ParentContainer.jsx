import React from "react";
import styles from "@/styles/parentContainer.module.css";
import AppBar from "./AppBar";
import AppBarMobile from "./Smaller Screen Components/AppBarMobile";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Body from "./Body";
import Aboutus from "./Aboutus";
import Footer from "./Footer";

const ParentContainer = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={styles.parent__container}>
      {width >= 1024 ? <AppBar /> : <AppBarMobile />}
      {/* Body component contains all the main body section that includes carousel, bookmarks  */}
      <Body />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default ParentContainer;
