import React from "react";
import {Link} from "react-router-dom";

import guitarsImg from '../../img/categories/guitars.jpg'
import ampsImg from '../../img/categories/amps.jpg'
import pedalsImg from '../../img/categories/pedals.jpg'
import accessories from  '../../img/categories/accessories.jpg'
import bass from '../../img/categories/bass.jpg'

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
            <Link to='/bass/'>
              <span className="description">Бас-гитары</span>
              <div className='shadow'>
                <img src={bass} alt="bass"/>
              </div>
            </Link>
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
            <Link to="/accessories/">
              <span className="description">Аксессуары</span>
              <div className='shadow'>
                <img src={accessories} alt="agingImg"/>
              </div>
            </Link>
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