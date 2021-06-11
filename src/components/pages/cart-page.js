import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {quantityInc, quantityDec, removeFromCart} from "../../redux/actions";

import emptyCart from '../../img/icons/empty-cart.png';
import styles from './cart-page.module.scss';


const CartPage = () => {

  const dispatch = useDispatch()
  const {cart: itemsInCart} = useSelector(({cartReducer}) => ({
    cart: cartReducer.cart,
  }), shallowEqual);

  const priceCalculation = () => {
    let keys = Object.keys(itemsInCart);
    if(keys.length) {
      return keys.reduce((acc,cur) => {
        return acc + itemsInCart[cur][0].price * itemsInCart[cur][1] ;
      }, 0)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

  const quantity = (item) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.quantity}>
          <button onClick={() => dispatch(quantityInc(item))} className={styles.changeQuantity}>+</button>
          <span className={styles.count} >{item[1]}</span>
          <button disabled = {!item[1]} onClick={() => dispatch(quantityDec(item))} className={styles.changeQuantity}>-</button>
        </div>
        <button onClick={() => dispatch(removeFromCart(item[0]))} className={styles.delete}>Удалить</button>
      </div>

    )
  }

  const cartRender = () => {
    return (
      <>
        <div className={styles.counter}>
          {`Товаров в корзине: ${Object.keys(itemsInCart).reduce((acc,cur)=> acc + itemsInCart[cur][1],0)}`}
        </div>
        <ul className={styles.items} >
          {
            Object.keys(itemsInCart).map(id=> {
            return (
              <li key = {id} className={styles.item}>
                <img src={itemsInCart[id][0].imgUrl} alt="cartItem"/>
                <span className={styles.title}>{itemsInCart[id][0].title}</span>
                {quantity(itemsInCart[id])}
                <span className={styles.price}>{`${Number(itemsInCart[id][0].price).toLocaleString()}₽`}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  return (
    !Object.keys(itemsInCart).length?(
      <>
        <div className={styles.emptyCart}>
          <img src={emptyCart} alt="empty cart"/>
          <p>Ваша корзина пуста</p>
        </div>
      </>
      ):
    <div className={styles.grid}>
      <div className={styles.cart}>
        {cartRender()}
      </div>
      <div className={styles.result}>
        <span>
          {`Итого: ${priceCalculation().toLocaleString()}₽`}
        </span>
        <Link className = {styles.orangeBtn} to={'/making-an-order/'}>Оформить заказ</Link>
      </div>
    </div>
  );
};

export default CartPage;