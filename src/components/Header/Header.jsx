import React from 'react';
import styles from './Header.module.scss';

const Header = ({ openBurger, setOpenBurger }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <button className={styles.search}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
            </svg>
          </button>

          <h1 className={styles.title}>Ежедневник</h1>

          <button
            onClick={() => setOpenBurger(!openBurger)}
            className={`${styles.burger} ${openBurger ? styles.active : ''}`}>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;