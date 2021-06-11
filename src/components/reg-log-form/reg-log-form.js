import React, { useState} from 'react';

import LogForm from "./log-form";
import RegForm from "./reg-form";

const RegLogForm = () => {

  const [isLogged, setIsLogged] = useState(true);

  return (
    isLogged ? <LogForm setActive={setIsLogged} /> : <RegForm setActive={setIsLogged}/>
  );
};

export default RegLogForm;