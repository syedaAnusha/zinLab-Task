import React from "react";
import Image from "next/image";
import styles from "@/styles/Mobile styles/headerMob.module.css";
import DrawerMobile from "./DrawerMobile";

const HeaderMobile = ({ navigateToHeaderMobile }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <section className={styles.hero__text}>
            <DrawerMobile />
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
          </section>

          <section className={styles.hero__icon}>
            <div className={styles.svg__tag}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20.004"
                fill="#4b4b4b"
              >
                <path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path>
              </svg>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
