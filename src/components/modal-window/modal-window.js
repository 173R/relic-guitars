import React from 'react';

import styles from './modal-window.module.scss';

const ModalWindow = ({active, setActive,children}) => {

  return (
    <div onClick={() => setActive(false)} className={active? styles.modal +' '+ styles.active: styles.modal}>
      <div className={active? styles.content +' '+ styles.active: styles.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;