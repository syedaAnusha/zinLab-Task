import React from "react";
import Image from "next/image";

import styles from "@/styles/card.module.css";

const CardForPDF2 = ({ src, alt, title, description }) => {
  return (
    <>
      <div className={`${styles.main} ${styles.card__item}`}>
        <Image
          src={src}
          alt={alt}
          className={styles.pdf2}
          width={65}
          height={65}
          priority
        />
        <h3 className={styles.title2}>{title}</h3>
        <div className={`${styles.span2} ${styles.overflow__hidden}`}>
          {description}
        </div>
      </div>
    </>
  );
};

export default CardForPDF2;
