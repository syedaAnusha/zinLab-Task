import React from "react";
import Image from "next/image";
import styles from "@/styles/custom carousel styles/customLeftArrow.module.css";

const LeftArrow = () => {
  return (
    <>
      <div className={styles.main}>
        <Image
          src="/icons/arrow-left.svg"
          alt="left arrow"
          className={styles.main}
          width={70}
          height={70}
          priority
        />
      </div>
    </>
  );
};

export default LeftArrow;
