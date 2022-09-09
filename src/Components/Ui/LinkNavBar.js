import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Form/Form.module.css';

function LinkNavBar() {
  return (
    <div className={style['form-page-links-container']}>
      <NavLink
        className={({ isActive }) =>
          isActive ? style['active-form-page-link'] : style['form-page-link']
        }
        to="/"
      >
        Personal
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? style['active-form-page-link'] : style['form-page-link']
        }
        to="/education"
      >
        education
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? style['active-form-page-link'] : style['form-page-link']
        }
        to="/experience"
      >
        experience
      </NavLink>
    </div>
  );
}

export default LinkNavBar;
