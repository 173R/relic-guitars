import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {fetchItem, addToCart} from "../../redux/actions";
import {dictionary} from "../../dictionary/dictionary";
import CenterBox from "../center-box";
import Compilation from "../compilation";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination,Navigation } from 'swiper/core';

import styles from './item-description.module.scss';
import './swiper-styles.scss';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

SwiperCore.use([Pagination,Navigation]);

const ItemDescription = ({selectedItemId}) => {

  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const item = useSelector(({itemReducer}) => itemReducer.item);

  useEffect(() => {
      dispatch(fetchItem(pathname))
  }, [])

  return (
    <>
      <div className={styles.grid} >
        <div className={styles.leftElement}>
          {/*<img className={styles.cover} src={item.imgUrl} alt="item_image"/>*/}
          <Swiper pagination={true} navigation={true} className="mySwiper">
            <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
            <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
            <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
            <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
            <SwiperSlide><img className={styles.cover} src={item.imgUrl} alt="item_image"/></SwiperSlide>
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
                return <li>{dictionary[elem]}: {item.description[elem]}</li>
              })
            }
          </ul>
          <p className={styles.price}>Цена: {item.price}руб.</p>
          <button onClick={() => dispatch(addToCart(item))} className={styles.buyButton}>Добавить в корзину</button>
        </div>
      </div>
      <CenterBox title="Популярные товары"/>
      <Compilation />
    </>
  );
}
export default ItemDescription