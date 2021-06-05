import React from "react";

import './main-back.scss';

const MainBack = ({background}) => {
  return (
    <div className='main-screen'>
      <img src={background} alt="background"/>
      <div className='border-box' >
        <h1>Relic Guitars</h1>
      </div>
    </div>
  );
}

export default MainBack;
