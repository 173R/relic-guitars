import React, {useEffect} from 'react';

import styles from './blank-page.module.scss';

const BlankPage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className={styles.text}>
      <img src="https://cdn.betterttv.net/emote/5a7efd784f0504541700f03b/3x" alt="sad pepe"/>
        Здесь пока ничего нет
    </div>
  );
};

export default BlankPage;