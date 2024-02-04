import React from "react";
import styles from "@/styles/Mobile styles/mobilemenu.module.css";

const MobileMenu = (props) => {
  return (
    <>
      <div className={styles.main__container}>
        <ul className={styles.list}>
          <a href="/" className={styles.link__one}>
            <li className={styles.list_item}>WishList</li>
          </a>
          <li className={styles.list_item}>Movies</li>
          <li className={styles.list_item}>Tv Shows</li>
          <li className={styles.list_item}>Clips</li>
        </ul>

        <div className={styles.Cross__icon}>
          <svg
            onClick={props.showMobileMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            data-name="Layer 1"
            viewBox="0 0 48 48"
            fill="#4b4b4b"
          >
            <path d="m28.39 24 18.7-18.7A3.09 3.09 0 0 0 48 3.1a3 3 0 0 0-.91-2.19A3 3 0 0 0 44.9 0a3.09 3.09 0 0 0-2.2.91L24 19.61 5.3.91A3.09 3.09 0 0 0 3.1 0 3 3 0 0 0 .91.91 3 3 0 0 0 0 3.1a3.09 3.09 0 0 0 .91 2.2L19.61 24 .91 42.7A3.09 3.09 0 0 0 0 44.9a3 3 0 0 0 .91 2.19A3 3 0 0 0 3.1 48a3.09 3.09 0 0 0 2.2-.91L24 28.39l18.7 18.7a3.09 3.09 0 0 0 2.2.91 3.11 3.11 0 0 0 3.1-3.1 3.09 3.09 0 0 0-.91-2.2z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
