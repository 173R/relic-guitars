import React from 'react';
import {shallowEqual, useSelector} from "react-redux";

import LoadItem from "../loading-item";
import Item from "../item";

import styles from './compilation.module.scss';

const itemsInCompilation = 5;

const Compilation = () => {

  const {items,category}= useSelector(({itemsReducer}) => (
    {
      items : itemsReducer.filteredItems,
      category: itemsReducer.category,
    }
  ), shallowEqual);

  console.log(category);

  /*useEffect(() => {
    if(!items.length) {
      dispatch(fetchItems(category))
    }
  }, [])*/


  const renderItems = () => {
    if(!items.length) {
      return Array(itemsInCompilation).fill(0).map((item, index) => <LoadItem key={item + '' + index}/>)
    }
    return Array(itemsInCompilation).fill(0).map((_, index) => <Item item={items[index]}/>);
  }

  return (
    <div className={styles.grid}>
      {
        renderItems()
      }
    </div>
  );
};

export default Compilation;