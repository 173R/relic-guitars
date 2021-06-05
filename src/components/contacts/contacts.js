import React from "react";

import './contacts.scss';
import contactImg from '../../img/background/contacts.jpg'
const Contacts = () => {

  return (
    <div className='contacts'>
      <img src='https://loud-lemon.com/catalog/view/theme/default/images/homepage/store_photo.jpg' alt="Контакты"/>
      {/*<img src={contactImg} alt="Контакты"/>*/}
        <ul className='contacts__info'>
          <li className='contacts__elem'>
            <p className='title'>График работы</p>
            <p className='content'>12:00-20:00, пн-пт</p>
          </li>
          <li className='contacts__elem'>
            <p className='title'>Адрес:</p>
            <p className='content'>Владивосток, ул. Светланская, 46</p>
          </li>
          <li className='contacts__elem'>
            <p className='title'>телефон:</p>
            <p className='content'>+7 (880) 555-35-35</p>
          </li>
        </ul>

    </div>
  );
}

export default Contacts;