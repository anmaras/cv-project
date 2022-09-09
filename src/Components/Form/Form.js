import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Form.module.css';
import LinkNavBar from '../Ui/LinkNavBar';

function Form() {
  return (
    <article className={style['forms-section']}>
      <LinkNavBar />
      <div className={style['forms-container']}>
        <Outlet className={style['forms-container']} />
      </div>
    </article>
  );
}

export default Form;
