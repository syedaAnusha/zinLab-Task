import React from "react";
import Image from "next/image";
import styles from "@/styles/Mobile styles/headerMob.module.css";

const HeaderMobile = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <section className={styles.hero__text}>
            <svg
              className={styles.menu__hamburger}
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
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
                height="26"
                viewBox="0 -960 960 960"
                width="26"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
