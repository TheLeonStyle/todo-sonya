import React, { useState } from 'react';
import styles from './App.module.scss';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';

function App() {
  const [openBurger, setOpenBurger] = useState(false);
  const [asideIndex, setAsideIndex] = useState(0);

  return (
    <div className={styles.app}>
      <Header openBurger={openBurger} setOpenBurger={setOpenBurger} />
      {openBurger && (
        <Aside
          setOpenBurger={setOpenBurger}
          activeIndex={asideIndex}
          setActiveIndex={setAsideIndex}
        />
      )}
    </div>
  );
}

export default App;
