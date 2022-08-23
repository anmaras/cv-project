import React from 'react';
import CvHeader from './CvHeader/CvHeader';
import CvProExperienceList from './CvProExperience/CvProExperienceList';
import CvEducationList from './CvEducation/CvEducationList';
import style from './Cv.module.css';

function Cv() {
  return (
    <article className={style.cv}>
      <CvHeader />
      <section className={style['cv-main']}>
        <CvProExperienceList />
        <CvEducationList />
      </section>
    </article>
  );
}

export default Cv;
