import React from "react";
import styles from "@/styles/bookmarks.module.css";

const Bookmarks = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.heading2}>Your Bookmarks</h2>
          <section className={styles.card}></section>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
