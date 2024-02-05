import React from "react";
import styles from "@/styles/Mobile styles/showcategories.module.css";
import Image from "next/image";

const ShowCategories = (props) => {
  const data = "This is data from Child Component to the Parent Component.";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sub__container}>
          <section className={styles.logo__title}>
            <Image
              src="/zintools-logo.jpg"
              alt="Zintools logo"
              className={styles.zintoolsLogo}
              width={15}
              height={15}
              priority
            />
            <h1 className={styles.title}>ZinTools</h1>
          </section>
          <svg
            onClick={props.mainMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            data-name="Layer 1"
            viewBox="0 0 48 48"
            fill="#CCCCCC"
          >
            <path d="m28.39 24 18.7-18.7A3.09 3.09 0 0 0 48 3.1a3 3 0 0 0-.91-2.19A3 3 0 0 0 44.9 0a3.09 3.09 0 0 0-2.2.91L24 19.61 5.3.91A3.09 3.09 0 0 0 3.1 0 3 3 0 0 0 .91.91 3 3 0 0 0 0 3.1a3.09 3.09 0 0 0 .91 2.2L19.61 24 .91 42.7A3.09 3.09 0 0 0 0 44.9a3 3 0 0 0 .91 2.19A3 3 0 0 0 3.1 48a3.09 3.09 0 0 0 2.2-.91L24 28.39l18.7 18.7a3.09 3.09 0 0 0 2.2.91 3.11 3.11 0 0 0 3.1-3.1 3.09 3.09 0 0 0-.91-2.2z"></path>
          </svg>
        </div>

        <section className={styles.heading__category}>
          <svg
            className={styles.left__arrow}
            tabIndex=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 24"
            role="img"
            aria-label="Arrow left"
            width="10"
            height="10"
            onClick={props.goBack}
          >
            <path d="M14 24c-.2 0-.5-.1-.6-.2l-13-11c-.3-.2-.4-.5-.4-.8 0-.3.1-.6.4-.8l13-11c.4-.4 1.1-.3 1.4.1.4.4.3 1.1-.1 1.4L2.5 12l12.1 10.2c.4.4.5 1 .1 1.4-.1.3-.4.4-.7.4z"></path>
          </svg>
          <h5 className={styles.text__category}>All categories</h5>
        </section>
        <div>
          <ul className={styles.list}>
            <li className={styles.list__item}>Stock Video</li>
            <li className={styles.list__item}> Video Templates</li>
            <li className={styles.list__item}>Music </li>
            <li className={styles.list__item}>Sound Effects</li>
            <li className={styles.list__item}>Graphic Templates</li>
            <li className={styles.list__item}>Graphics</li>
            <li className={styles.list__item}>Presentation Templates</li>
            <li className={styles.list__item}>Photos</li>
            <li className={styles.list__item}>Fonts</li>
            <li className={styles.list__item}>Add-ons</li>
            <li className={styles.list__item}>More</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowCategories;
