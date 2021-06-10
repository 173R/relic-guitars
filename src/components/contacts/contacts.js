import React from "react";

import styles from  './contacts.module.scss';

const Contacts = () => {

  return (
    <div className={styles.contacts}>
      <img className={styles.background} src='https://loud-lemon.com/catalog/view/theme/default/images/homepage/store_photo.jpg' alt="Контакты"/>
      <ul className={styles.info}>
        <li className={styles.element}>
          <p className={styles.title}>График работы:</p>
          <p className={styles.content}>12:00-20:00, пн-пт</p>
        </li>
        <li className={styles.element}>
          <p className={styles.title}>Адрес:</p>
          <p className={styles.content}>Владивосток, ул. Светланская, 46</p>
        </li>
        <li className={styles.element}>
          <p className={styles.title}>Телефон:</p>
          <p className={styles.content}>+7 (880) 555-35-35</p>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;