import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {setSelectedFilters} from "../../redux/actions";
import {dictionary} from "../../dictionary/dictionary";

import './filters.scss';

const Filters = () => {

  const dispatch = useDispatch();

  const {items, category} = useSelector(({itemsReducer}) => ({
    items: itemsReducer.items,
    category: itemsReducer.category,
  }), shallowEqual);

  const [itemsDescription, setItemsDescription] = useState({});
  const [checkBoxStates, setCheckBoxStates] = useState({})


  useEffect(()=>{
    const temp_filters = {};

    if(items.length) {
      for(let item of items) {
        for(let [key,value] of Object.entries(item.description)){
          if(!temp_filters[key]) temp_filters[key] = new Set();
          temp_filters[key].add(value);
        }
      }
      setItemsDescription(temp_filters);
    }
  }, [items]);

  useEffect(() => {

    setCheckBoxStates({});

  }, [category])

  const handleSelectFilter= (e) => {
      const newFilter = {};
      newFilter[e.target.name] = e.target.checked;

      setCheckBoxStates((state) => {

        const newState = {...state, ...newFilter}

        const result = [];
        for(const [key, value] of Object.entries(newState)) {
          if(value) {
            result.push(key);
          }
        }
        dispatch(setSelectedFilters(result))
        return newState;
      });
  }
  const filtersRender = () => {
    const elements = [];

    for(let [title, variants] of Object.entries(itemsDescription)) {
      variants = [...variants];
      elements.push(
        <div key={title} className='filters-item'>
          <span className='filters-item__title'>{dictionary[title]}</span>
          {variants.map((elem) => {
            const queryString = `description.${title}=${elem}&`;
            return (
              <label key={elem} className='filters-item-radio'>
                <input  checked={Boolean(checkBoxStates[queryString])} onChange={handleSelectFilter} name={queryString}
                       className="filters-item-radio__input" type="checkbox"/>
                <span className = {checkBoxStates[queryString]?"filters-item-radio__name active":'filters-item-radio__name'} >{elem}</span>
              </label>
            );
          })}
        </div>
      )
    }
    return elements;
  }
  return (
    <div className='filters'>
      {filtersRender()}
    </div>
  );
};

export default Filters;