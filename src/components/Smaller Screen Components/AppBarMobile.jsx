import React from "react";
import styles from "@/styles/Mobile styles/appbarMob.module.css";
import HeaderMobile from "./HeaderMobile";

const AppBarMobile = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sub__container}>
          <HeaderMobile />
        </div>
      </div>
    </>
  );
};

export default AppBarMobile;
