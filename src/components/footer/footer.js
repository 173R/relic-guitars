import React from "react";

import instagram from '../../img/icons/instagram.svg';
import facebook from '../../img/icons/facebook.svg';
import youtube from '../../img/icons/youtube.svg';

import styles from './footer.module.scss';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <span className={styles.logo}>Relic Guitars</span>
        <div className={styles.midWrapper}>
          <ul className={styles.links}>
            <li>
              <a href="/">Доставка</a>
            </li>
            <li>
              <a href="/">Оплата</a>
            </li>
            <li>
              <a href="/">Гарантии</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
            <li>
              <a href="/">Скидки</a>
            </li>
          </ul>
          <ul className={styles.contacts}>
            <li>
              <p className={styles.title}>График работы:</p>
              <p className={styles.content}>12:20-20:00, ПН-ПТ</p>
            </li>
            <li>
              <p className={styles.title}>Адрес:</p>
              <p className={styles.content}>УЛ.СВЕТЛАНСКАЯ 46</p>
            </li>
            <li>
              <p className={styles.title}>Телефон:</p>
              <p className={styles.content}>+7 (880) 555-35-35</p>
            </li>
          </ul>
        </div>
        <ul className={styles.socials}>
          <li>
            <a href="/">
              <img src={instagram} alt="instagram"/>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={facebook} alt="facebook"/>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={youtube} alt="youtube"/>
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.bottom}>
        © 2021 Relic Guitars
      </p>
    </footer>
  );
}

export default Footer;