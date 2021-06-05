import React from "react";

import instagram from '../../img/icons/instagram.svg';
import facebook from '../../img/icons/facebook.svg';
import youtube from '../../img/icons/youtube.svg';

import './footer.scss';

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer-major">
        <div className="footer-major__left">Relic Guitars</div>
        <div className="footer-major__center">
          <ul className="links">
            <li className="links__item">
              <a href="/">Доставка</a>
            </li>
            <li className="links__item">
              <a href="/">Оплата</a>
            </li>
            <li className="links__item">
              <a href="/">Гарантии</a>
            </li>
            <li className="links__item">
              <a href="/">Контакты</a>
            </li>
            <li className="links__item">
              <a href="/">Скидки</a>
            </li>
          </ul>
          <ul className="contacts">
            <li className="contacts__item">
              <p className="title">График работы:</p>
              <p className="content">12:00-20:00, пн-пт</p>
            </li>
            <li className="contacts__item">
              <p className="title">Адрес:</p>
              <p className="content">ул. Светланская 46</p>
            </li>
            <li className="contacts__item">
              <p className="title">телефон:</p>
              <p className="content">+7 (880) 555-35-35</p>
            </li>
          </ul>
        </div>
        <div className="footer-major__right">
          <ul className="icons">
            <li className="icons__item">
              <a href="/">
                <img src={instagram} alt=""/>
              </a>
            </li>
            <li className="icons__item">
              <a href="/">
                <img src={facebook} alt=""/>
              </a>
            </li>
            <li className="icons__item">
              <a href="/">
                <img src={youtube} alt=""/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-minor">
        © 2021 Relic Guitars
      </div>
    </div>
  );
}

export default Footer;