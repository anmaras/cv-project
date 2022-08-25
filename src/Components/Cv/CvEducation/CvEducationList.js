import React from 'react';
import CvEducationItem from './CvEducationItem';
import style from './CvEducation.module.css';

function CvEducationList() {
  return (
    <section className={style['education-section']}>
      <h4>Education</h4>
      <div className={style['education-list-wrapper']}>
        <CvEducationItem />
        <CvEducationItem />
        <CvEducationItem />
        <CvEducationItem />
      </div>
    </section>
  );
}

export default CvEducationList;
