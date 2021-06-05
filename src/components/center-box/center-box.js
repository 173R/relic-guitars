import React from "react";

import {dictionary} from "../../dictionary/dictionary";

import './center-box.scss';

const CenterBox = ({title}) => {

  return (
    <div className='center-box'>
      <div className='center-box__title'>
        <div className='line'/>
        <div className='border'>
          <h2>{dictionary[title]?dictionary[title]:title}</h2>
        </div>
      </div>
    </div>
  );
}

export default CenterBox;