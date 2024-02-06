import React from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "@/styles/Mobile styles/drawerMob.module.css";
import MobileMenu from "./MobileMenu";

const DrawerMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleToParent = () => {
    toggleDrawer();
  };
  return (
    <>
      <svg
        className={styles.menu__hamburger}
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        viewBox="0 -960 960 960"
        width="40"
        onClick={toggleDrawer}
        fill="#4b4b4b"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="100vw"
        className="bla bla bla"
        lockBackgroundScroll={true}
      >
        <MobileMenu showMobileMenu={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default DrawerMobile;
