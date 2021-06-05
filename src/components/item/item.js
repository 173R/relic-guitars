import React from "react";
import { useHistory } from "react-router-dom";

import './item.scss';

const Item = ({item}) => {

  const history = useHistory();
  return (
    <div className='item'>
        <div className='item__cover'>
          <div onClick={() => history.push(item.id.toString())}>
            <img src={item.imgUrl} alt=""/>
          </div>
        </div>
      <div className='item__details'>
          <a href = '/' className='item__title'>{item.title}</a>
          <p className='item__price'>{`${(item.price>9999)?item.price/1000 + ' 000':item.price} руб.`}</p>
      </div>
    </div>
  )
}
export default Item;