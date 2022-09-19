import React from 'react';
import { forwardRef } from 'react';
import CvHeader from './CvHeader/CvHeader';
import CvProExperienceList from './CvProExperience/CvProExperienceList';
import CvEducationList from './CvEducation/CvEducationList';
import style from './Cv.module.css';

const Cv = forwardRef((props, ref) => {
  return (
    <article ref={ref} className={style.cv}>
      <CvHeader />
      <section className={style['cv-main']}>
        <CvProExperienceList />
        <CvEducationList />
      </section>
    </article>
  );
});

export default Cv;
