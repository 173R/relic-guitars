import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import Menu from "../menu";
import ModalWindow from "../modal-window";

import logo from '../../img/logo/main-icon.png'
import favorites from '../../img/icons/favorites.svg';
import home from '../../img/icons/home.svg';
import cart from '../../img/icons/cart.svg';
import burger from '../../img/icons/burger.svg';

import styles from './shop-header.module.scss';
import RegLogForm from "../reg-log-form";

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

  const [menuActive, setMenuActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const countItemsInCart = useSelector(({cartReducer}) => {
    return Object.keys(cartReducer.cart).reduce((acc,cur) => {
      return acc + cartReducer.cart[cur][1];
    }, 0)
  });

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
                <img className={styles.icon} src={cart} alt="cart"/>
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
                <img className={styles.icon} src={favorites} alt="favorites"/>
                <span>Избранное</span>
              </Link>
            </li>
            <li>
              <a onClick={() => setModalActive(true)}>
                <img className={styles.icon} src={home} alt="home"/>
                <span>Вход</span>
              </a>
            </li>
          </ul>
        </nav>
        <div onClick={() => setMenuActive(!menuActive)} className={styles.burgerMenu}>
          <img src={burger} alt="burger"/>
        </div>
      </div>
    <Menu active = {menuActive} setActive={setMenuActive} items = {links}/>
      <ModalWindow active = {modalActive} setActive = {setModalActive}>
        <RegLogForm/>
      </ModalWindow>
  </>
  )
};

export default ShopHeader;