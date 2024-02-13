import React from "react";
import Image from "next/image";
import styles from "@/styles/card.module.css";

const Card = ({ src, alt, title, description }) => {
  return (
    <>
      <div className={styles.main}>
        <Image
          src="/icons/bookmark.svg"
          alt="Bookmark icon"
          className={styles.bookmark}
          width={20}
          height={20}
          priority
        />
        <Image
          src={src}
          alt={alt}
          className={styles.pdfToWord}
          width={65}
          height={65}
          priority
        />
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.span}>{description}</span>
      </div>
    </>
  );
};

export default Card;
