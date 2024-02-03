import React from "react";
import styles from "@/styles/appbar.module.css";
import Header from "./Header";

const AppBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sub__container}>
          <Header />
        </div>
      </div>
    </>
  );
};

export default AppBar;
