import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setSortType} from "../../redux/actions/filter";

import style from './sort.module.scss';

const Sort = React.memo(function Sort() {

  const dispatch = useDispatch();
  const sortType = useSelector(({itemsReducer}) => itemsReducer.sortType)
  const [open, setOpen] = useState(false);
  const sortTypes = ['сначала дорогие', 'сначала недорогие', 'по наименованию']

  const dropMenuRender = () => {
    return (
      <ul onClick={(e) => dispatch(setSortType(sortTypes.indexOf(e.target.innerHTML)))} className={style.dropdownMenu}>
        {
          sortTypes.map(elem => <li className={style.dropdownItem} key = {elem} >{elem}</li>)
        }
      </ul>
    )
  }
  return (
    <div onClick={() => setOpen(!open)} className={style.wrapper}>
      <span className={style.label}>Сортировка:</span>
      <span  className={style.selected}>{sortTypes[sortType]}</span>
      {open && dropMenuRender()}
    </div>
  );
})

export default Sort;