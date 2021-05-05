import React from 'react';
import styles from './styles.module.scss'
function Quote(props) {
  return <div className={styles.quote}>
    {props.children}
  </div>;
}

export default Quote;