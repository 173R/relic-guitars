import React, {useEffect, useState} from "react";
import {useSelector, shallowEqual} from "react-redux";

import {LoadItem} from "../loading-backs";
import Item from "../item";

import styles from './catalog-items.module.scss';

const itemsOnPage = 12;

const CatalogItems = () => {

  const ref = React.useRef(null)
  const executeScroll = () => ref.current.scrollIntoView({behavior: 'smooth'})

  const [currentPage, setCurrentPage] = useState(0);

  const {items, loading} = useSelector(({itemsReducer}) => (
    {
      items : itemsReducer.filteredItems,
      loading: itemsReducer.loading,
    }
  ), shallowEqual);

  useEffect(() => {
    setCurrentPage(0)
  }, [items]);

  const catalogRender = () => {

    if(!items.length && !loading) {
      return (<span>Соответствующих товаров не найдено</span>);
    }

    if(loading || !items.length) {
      return Array(itemsOnPage).fill(0).map((elem, index) => <LoadItem key = {index} />);
    }

    const loadedItems = [];
    const itemsForPage = items.slice(itemsOnPage*currentPage, itemsOnPage*(currentPage+1));
    for(let i = 0; i < itemsForPage.length; i++) {
      loadedItems.push(
        <li key = {i} className={styles.catalogGridItem} >
          <Item item = {itemsForPage[i]}/>
        </li>);
    }
    return loadedItems;
  };

  return (
    <div ref={ref} className={styles.catalog}>
      <ul className={styles.catalogGrid}>
        {catalogRender()}
      </ul>
      <div onClick={executeScroll} className={styles.numbersOfPage}>
        {Array(Math.ceil(items.length/itemsOnPage)).fill(0).map((_,index) =>
          (<span key = {'key'+index} className={(index === currentPage)?styles.active:_} onClick={(e) => setCurrentPage(Number(e.target.innerText) - 1)}>{++index}</span>)
        )}
      </div>
    </div>
  )
};

export default CatalogItems;