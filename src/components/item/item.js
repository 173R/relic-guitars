import React from "react";
import { useHistory } from "react-router-dom";

import './item.scss';

const Item = ({item}) => {

  const history = useHistory();
  return (
    <div className='item' onClick={() => history.push(item.id.toString())}>
        <div className='item__cover'>
          <div>
            <img src={item.imgUrl} alt=""/>
          </div>
        </div>
      <div className='item__details'>
          <p className='item__title'>{item.title}</p>
          <p className='item__price'>{`${Number(item.price).toLocaleString()} руб.`}</p>
      </div>
    </div>
  )
}
export default Item;