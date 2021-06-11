import React from 'react';

import styles from "./reg-log-form.module.scss";

const RegForm = ({setActive}) => {

  return (
    <div className={styles.grid}>
      <form className={styles.logForm}>
        <span className={styles.title}>Регистрация</span>

        <input name='email' placeholder="Ваша почта" type="text"/>
        <input name='password' placeholder="Пароль" type="password"/>
        <input name='password' placeholder="Повторите пароль" type="password"/>
        <div className={styles.formBottom}>
          <button type='submit' >Зарегистрироваться</button>
        </div>
      </form>
      <div className={styles.anotherOption}>
        <span className={styles.title}>Войти</span>
        <p>Если вы уже регистрировались, войдите с паролем.</p>
        <button onClick={() => setActive((state)=>!state)}>Войти</button>
      </div>
    </div>
  );
};

export default RegForm;