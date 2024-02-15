import React from "react";
import styles from "@/styles/convertTopdf.module.css";

import { card2 } from "./index";
import CardForPDF2 from "./CardForPDF2";

const ConvertToPdf = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.heading2}>Convert to PDF</h2>
          <section className={styles.card}>
            {card2.map((item, index) => (
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

export default ConvertToPdf;
