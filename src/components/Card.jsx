import React from "react";
import Image from "next/image";
import styles from "@/styles/card.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.main}>
        <Image
          src="/images/pdf-word.svg"
          alt="pdf to word"
          className={styles.pdfToWord}
          width={70}
          height={70}
          loading="lazy"
        />
        <h2 className={styles.title}>PDF to Word</h2>
        <span className={styles.span}>
          Easily convert PDF to Word document.
        </span>
      </div>
    </>
  );
};

export default Card;
