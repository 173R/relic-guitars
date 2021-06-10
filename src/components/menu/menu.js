import React from 'react';
import {Link} from "react-router-dom";

import styles from './menu.module.scss';
import cart from "../../img/icons/cart.svg";
import favorites from "../../img/icons/favorites.svg";
import home from "../../img/icons/home.svg";

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
          <ul className={styles.icons} >
            <li >
              <Link to="/cart/">
                <img className={styles.icon} src={cart} alt="cart"/>
              </Link>
            </li>
            <li>
              <Link  to="/favorite/">
                <img className={styles.icon} src={favorites} alt="favorites"/>
              </Link>
            </li>
            <li>
              <a>
                <img className={styles.icon} src={home} alt="home"/>
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Menu;