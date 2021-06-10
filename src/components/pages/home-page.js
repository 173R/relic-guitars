import React from "react";

import MainBack from "../main-back";
import Categories from "../categories";
import Contacts from "../contacts";

import background from '../../img/background/Main_back.jpg';
import CenterBox from "../center-box";

const HomePage = () => {
  return (
    <>
      <MainBack background = {background}/>
      <Categories/>
      <Contacts/>
    </>
  );
};

export default HomePage;