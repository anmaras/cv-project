import React from 'react';
import style from './CvEducation.module.css';

function CvEducationItem() {
  return (
    <div className={style['education-list-item']}>
      <p className={style.period}>
        <span>2004</span> - <span>2008</span>
      </p>
      <div className={style['list-item-detail']}>
        <p className={style.subject}>furniture design</p>
        <p className={style.uni}>
          Technological Educational Institute of Larissa lor
        </p>
        <p className={style.degree}>bachelor</p>
      </div>
    </div>
  );
}

export default CvEducationItem;
