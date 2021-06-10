import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {fetchItem, addToCart} from "../../redux/actions";
import {dictionary} from "../../dictionary/dictionary";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination,Navigation } from 'swiper/core';

import styles from './item-description.module.scss';
import './swiper-styles.scss';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import {LoadingWindow} from "../loading-backs";

SwiperCore.use([Pagination,Navigation]);

const ItemDescription = () => {

  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const item = useSelector(({itemReducer}) => itemReducer.item);
  const loading = useSelector(({itemReducer}) => itemReducer.loading);

  useEffect(() => {
      dispatch(fetchItem(pathname))
      window.scrollTo(0, 0);
  }, [dispatch, pathname])


  return (
    <div className={styles.itemDescription}>
      {loading? (
          <LoadingWindow/>
      ):(
        <div className={styles.grid}>
          <div className={styles.leftElement}>
            <Swiper pagination={true} navigation={true} className="mySwiper">
              <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
              <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
              <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
              <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.rightElement}>
            <p className={styles.title}>{item.title}</p>
            <ul className={styles.description}>
              {
                item.description && Object.keys(item.description).map(elem => {
                  return <li key = {elem}>{dictionary[elem]}: {item.description[elem]}</li>
                })
              }
            </ul>
            <p className={styles.price}>{`Цена: ${Number(item.price).toLocaleString()}руб.`}</p>
            <button onClick={() => dispatch(addToCart(item))} className={styles.buyButton}>Добавить в корзину</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ItemDescription