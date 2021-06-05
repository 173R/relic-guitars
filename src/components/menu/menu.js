import React from 'react';
import {Link} from "react-router-dom";

import styles from './menu.module.scss';

const Menu = ({items, active, setActive}) => {

  return (
    <div className={active?styles.menu + ' ' + styles.active:styles.menu } onClick={() => setActive(false)}>
      <div className={styles.content}>
        <ul>
          {items.map((item, index) =>
            <li key = {index+item}>
              <Link to={item.link}>{item.value}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;