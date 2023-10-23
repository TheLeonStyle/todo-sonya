import React, { useState } from 'react';
import styles from './Aside.module.scss';

import iconAll from '../../assets/img/aside/icon_all.svg';
import iconDay from '../../assets/img/aside/icon_day.svg';
import iconWeek from '../../assets/img/aside/icon_week.svg';
import iconMonth from '../../assets/img/aside/icon_month.svg';

const menuList = [
  { icon: iconAll, name: 'Все' },
  { icon: iconDay, name: 'День' },
  { icon: iconWeek, name: 'Неделя' },
  { icon: iconMonth, name: 'Месяц' },
];

const Aside = ({ setOpenBurger, activeIndex, setActiveIndex }) => {
  const onClickLink = (index) => {
    setActiveIndex(index);
    setOpenBurger(false);
  };

  return (
    <aside className={styles.aside}>
      <ul className={styles.items}>
        {menuList.map((obj, index) => (
          <li key={obj.icon + index}>
            <a
              onClick={() => onClickLink(index)}
              className={activeIndex == index ? styles.active : ''}
              href="#no-scroll">
              <img src={obj.icon} alt="" />
              {obj.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
