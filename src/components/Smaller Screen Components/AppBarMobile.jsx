import React from "react";
import styles from "@/styles/appbarMob.module.css";

const AppBarMobile = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sub__container}>
          <svg
            className={styles.menu__hamburger}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AppBarMobile;
