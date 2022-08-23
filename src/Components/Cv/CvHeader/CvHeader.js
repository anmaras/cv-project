import React from 'react';
import { FaPhone, FaHome, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import style from './CvHeader.module.css';

function CvHeader() {
  return (
    <section className={style['cv-header']}>
      <section className={style['info-primary__section']}>
        <div className={style['name-job__wrapper']}>
          <h3 className={style.name}>Anthony Maras</h3>
          <p className={style.job}>Junior Web Developer</p>
        </div>
        <ul className={style['link-list']}>
          <li>
            <p>
              <span>
                <FaPhone />
              </span>
              6947429136
            </p>
          </li>
          <li>
            <a href=".">
              <span>
                <MdEmail />
              </span>
              marasantonis@gmail.com
            </a>
          </li>
          <li>
            <p>
              <span>
                <FaHome />
              </span>
              Athens/Greece
            </p>
          </li>
          <li>
            <a href=".">
              <span>
                <FaLinkedin />
              </span>
              linkedin
            </a>
          </li>
        </ul>
      </section>
      <section className={style['info-secondary__section']}>
        <div className={style['description__wrapper']}>
          <h4 className={style.title}>Description</h4>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            dignissimos accusamus magni quis libero consectetur cupiditate.
            Veniam maiores sit.
          </p>
        </div>
      </section>
    </section>
  );
}

export default CvHeader;
