import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import Menu from "../menu";

import logo from '../../img/logo/main-icon.png'
import favorites from '../../img/icons/favorites.svg';
import home from '../../img/icons/home.svg';
import cart from '../../img/icons/cart.svg';
import burger from '../../img/icons/burger.svg';

import styles from './shop-header.module.scss';

const ShopHeader = () => {

  const links = [
    {value:'Гитары', link: "/guitars/"},
    {value:'Бас-гитары', link: "/bass/"},
    {value:'Эффекты', link: "/pedals/"},
    {value:'Усиление', link: "/amps/"},
    {value:'Аксессуары', link: "/accessories/"},
    {value:'Custom Shop', link: "/custom_shop/"},
    {value:'Ремонт', link: "/repair/"},
  ];

  const countItemsInCart = useSelector(({cartReducer}) => cartReducer.cart.length);
  const [menuActive, setMenuActive] = useState(false);

  const renderMainNav = () => {
    return Array(links.length).fill(0).map((_,index) => {
      return (
        <li key={links[index].link}>
            <Link to = {links[index].link} >{links[index].value}</Link>
        </li>
      )
    });
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Relic Guitars"/>
          </Link>
        </div>
        <nav className={styles.mainNav}>
          <ul>
            {renderMainNav()}
          </ul>
        </nav>
        <nav className={styles.userNav}>
          <ul >
            <li>
              <Link className={styles.link}  to="/cart/">
                <img className={styles.icon} src={cart} alt=""/>
                <span>Корзина</span>
                  {
                    countItemsInCart?(
                      <div className={styles.notice}>
                        <span>{countItemsInCart}</span>
                      </div>): ''
                  }
              </Link>
            </li>
            <li>
              <Link to="/favorite/">
                <img className={styles.icon} src={favorites} alt=""/>
                <span>Избранное</span>
              </Link>
            </li>
            <li>
              <Link to="/home/">
                <img className={styles.icon} src={home} alt=""/>
                <span>Вход</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div onClick={() => setMenuActive(!menuActive)} className={styles.burgerMenu}>
          <img src={burger} alt="burger"/>
        </div>
      </div>
    <Menu active = {menuActive} setActive={setMenuActive} items = {links}/>
  </>
  )
};

export default ShopHeader;