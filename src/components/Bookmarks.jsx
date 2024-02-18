import React from "react";
import styles from "@/styles/bookmarks.module.css";

import CardForPDF2 from "./CardForPDF2";
import { card3 } from "./index";

const Bookmarks = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.heading2}>Your Bookmarks</h2>
          <section className={styles.card}>
            {card3.map((item, index) => (
              <CardForPDF2
                key={index}
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
