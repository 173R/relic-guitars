import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {removeFromCart} from "../../redux/actions";

import styles from './cart-page.module.scss';

const CartPage = () => {

  const itemsInCart = useSelector(({cartReducer}) => cartReducer.cart);
  const dispatch = useDispatch()

  const cartRender = () => {
    return (
      <>
        <div className={styles.counter}>
          {`Товаров в корзине: ${itemsInCart.length}`}
        </div>
        <ul className={styles.items} >
          {
            Array(itemsInCart.length).fill(0).map((_,index) => {
            return (
              <li key = {itemsInCart[index].title} className={styles.item}>
                <img src={itemsInCart[index].imgUrl} alt="cartItem"/>
                <span className={styles.title}>{itemsInCart[index].title}</span>
                <span className={styles.price}>{itemsInCart[index].price+' руб.'}</span>
                <button onClick={() => dispatch(removeFromCart(itemsInCart[index]))} className={styles.delete}>Удалить</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  return (
    !itemsInCart.length?(
      <>
        <div className={styles.emptyCart}>
          <img src="https://static.reverb-assets.com/assets/icons/empty-states/empty-basket@2x-c13a691ddec1300ef6b06de9bd02471a99fae3ecaeaa181076b11ef2ceea078d.png" alt="cartImage"/>
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
          {`Итого: ${
          itemsInCart.reduce((acc,item) => {
            return acc+=+item.price;
          }, 0)}
          руб.`}
        </span>
        <Link to={'/making-an-order/'}>Оформить заказ</Link>
      </div>
    </div>
  );
};

export default CartPage;