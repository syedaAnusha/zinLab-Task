import React from "react";
import styles from "@/styles/Mobile styles/mobilemenu.module.css";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import ShowCategories from "./ShowCategories";
import HeaderMobile from "./HeaderMobile";

const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.wishlist}>
          <p className={styles.txt_submenu}>Wishlist</p>
          <svg
            onClick={props.showMobileMenu}
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

        <ul className={styles.list}>
          <li className={styles.list_item}>Movies</li>
          <li className={styles.list_item}>Tv Shows</li>
          <li className={styles.list_item}>Clips</li>
        </ul>

        <div className={styles.wishlist}>
          <h5 className={styles.txt_category}>All Categories</h5>
          <svg
            className={styles.right_arrow}
            tabIndex=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 24"
            role="img"
            width="12"
            height="12"
            aria-label="Arrow right"
            onClick={toggleDrawer}
          >
            <path d="M1 24c-.3 0-.6-.1-.8-.4-.4-.4-.3-1.1.1-1.4L12.5 12 .4 1.8C0 1.4-.1.8.3.4c.4-.4 1-.5 1.4-.1l13 11c.2.2.4.5.4.8 0 .3-.1.6-.4.8l-13 11c-.2 0-.5.1-.7.1z"></path>
          </svg>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          size="100vw"
          className="bla bla bla"
          lockBackgroundScroll={true}
        >
          <ShowCategories goBack={toggleDrawer} mainMenu={toggleDrawer} />
        </Drawer>
        <ul className={styles.list}>
          <li className={styles.list_item}>Liscence</li>
          <li className={styles.list_item}>Pricing</li>
          <li className={styles.list_item}>Support Us</li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
