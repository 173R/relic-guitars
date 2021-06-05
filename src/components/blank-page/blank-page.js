import React from 'react';

import styles from './blank-page.module.scss';
const BlankPage = () => {
  return (
    <div className={styles.text}>
      <img src="https://cdn.betterttv.net/emote/5a7efd784f0504541700f03b/3x" alt="image"/>
      Для доступа вам нужно авторизироваться но бэкенд украли....
    </div>
  );
};

export default BlankPage;