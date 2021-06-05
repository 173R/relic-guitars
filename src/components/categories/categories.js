import React from "react";
import {Link} from "react-router-dom";

import guitarsImg from '../../img/categories/guitars.jpg'
import ampsImg from '../../img/categories/amps.jpg'
import agingImg from '../../img/categories/aging.jpg'
import repairImg from '../../img/categories/repair.jpg'
import pedalsImg from '../../img/categories/pedals.jpg'

import './categories.scss';

const Categories = () => {

  return (
      <div className='categories-grid'>
        <div className='categories-grid__left'>
          <div className='grid-item'>
            <Link to="/guitars/">
              <span className="description">Гитары</span>
              <div className='shadow'>
                <img src={guitarsImg} alt="guitarsImg"/>
              </div>
            </Link>
          </div>
        </div>
        <div className='categories-grid__right'>
          <div className='grid-item'>
            <a href="/">
              <span className="description">Ремонт</span>
              <div className='shadow'>
                <img src={repairImg} alt="repairImg"/>
              </div>
            </a>
          </div>
          <div className='grid-item'>
            <Link to="/amps/">
              <span className="description">Усилители</span>
              <div className='shadow'>
                <img src={ampsImg} alt="ampsImg"/>
              </div>
            </Link>
          </div>
          <div className='grid-item'>
            <a href="/">
              <span className="description">Custom Shop</span>
              <div className='shadow'>
                <img src={agingImg} alt="agingImg"/>
              </div>
            </a>
          </div>
          <div className='grid-item'>
            <Link to="/pedals/">
              <span className="description">Эффекты</span>
              <div className='shadow'>
                <img src={pedalsImg} alt="pedalsImg"/>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Categories;