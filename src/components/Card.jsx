import { useState, useEffect } from "react";
import Image from "next/image";
import { GoBookmarkFill } from "react-icons/go";
import styles from "@/styles/card.module.css";

const Card = ({ src, alt, title, description }) => {
  const [isBookmarked, setBookmarked] = useState(false);

  function handler() {
    setBookmarked(!isBookmarked);
  }

  return (
    <>
      <div className={styles.main}>
        <span className={styles.span}>
          <GoBookmarkFill
            className={styles.bookmark}
            size={20}
            fill={isBookmarked ? "#333" : "lightslategrey"}
            onClick={handler}
          />
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
