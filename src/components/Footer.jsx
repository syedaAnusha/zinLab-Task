import React from "react";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.logo__title}>
          <Image
            src="/zintools-logo.jpg"
            alt="Zintools logo"
            className={styles.zintoolsLogo}
            width={25}
            height={25}
            priority
          />
          <h1 className={styles.title}>ZinTools</h1>
        </section>

        <section className={styles.terms__conditions}>
          <ul className={styles.terms__items}>
            <li className={styles.terms__links}>Privacy Policy</li>
            <li className={styles.terms__links}>Terms and Conditions</li>
            <li className={styles.terms__links}>Cookies Policy</li>
            <li className={styles.terms__links}>About us</li>
            <li className={styles.terms__links}>EULA</li>
            <li className={styles.terms__links}>Contact</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Footer;
