import React from "react";
import Image from "next/image";
import { GoBookmarkFill } from "react-icons/go";
import styles from "@/styles/card.module.css";
import { Unbounded } from "next/font/google";

const Card = ({ src, alt, title, description }) => {
  return (
    <>
      <div className={styles.main}>
        <span className={styles.bookmark}>
          <GoBookmarkFill className={styles.bookmark} size={20} />
        </span>
        <Image
          src={src}
          alt={alt}
          className={styles.pdf}
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
