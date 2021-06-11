import React from 'react';
import styles from "./reg-log-form.module.scss";

const LogForm = ({setActive}) => {
  return (
    <div className={styles.grid}>
      <form className={styles.logForm}>
        <span className={styles.title}>Вход</span>
        <input placeholder="Ваш логин или почта" type="text"/>
        <input placeholder="Пароль" type="password"/>
        <div className={styles.formBottom}>
          <button type="submit">Войти</button>
          <a href="/">Забыли пароль?</a>
        </div>
      </form>
      <div className={styles.anotherOption}>
        <span className={styles.title}>Регистрация</span>
        <p>Если вы впервые у нас, то зарегистрируйтесь!</p>
        <button onClick={() => setActive((state)=>!state)}>Регистрация</button>
      </div>
    </div>
  );
};

export default LogForm;