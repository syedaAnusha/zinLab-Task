import React from "react";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import styles from "@/styles/card.module.css";

const Card = ({ src, alt, title, description }) => {
  return (
    <>
      <div className={styles.main}>
        <span className={styles.bookmark}>
          <FaRegBookmark />
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
