import React, {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";

import CatalogItems from "../catalog-items";
import CenterBox from "../center-box";
import Filters from "../filters";
import MainBack from "../main-back";
import Sort from "../sort";
import {fetchItems, setCategory, fetchFilteredItems} from "../../redux/actions";

import './catalog-page.scss';

const CatalogPage = () => {

  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const path = pathname.substring(1,pathname.length-1);

  const {category, selectedFilters,sortType,typesOfSorting } = useSelector(({itemsReducer}) => ({
    category: itemsReducer.category,
    selectedFilters: itemsReducer.selectedFilters,
    sortType: itemsReducer.sortType,
    typesOfSorting: itemsReducer.typesOfSorting,
  }), shallowEqual);

  useEffect(() => {
    if(category!==path) {
      dispatch(setCategory(path));
    }
    dispatch(fetchItems(path));
  }, [pathname]);

  useEffect(() => {
      dispatch(fetchFilteredItems(path,selectedFilters,typesOfSorting[sortType]))
  }, [selectedFilters, sortType]);

  return (
    <>
      <MainBack/>
      <CenterBox  title={category}/>
      <div className="top-wrapper">
        <Sort/>
      </div>
      <div className="middle-wrapper">
        <Filters />
        <CatalogItems />
      </div>
    </>
  );
};

export default CatalogPage;
