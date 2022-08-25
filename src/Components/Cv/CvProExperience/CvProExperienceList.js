import React from 'react';
import CvProExperienceItem from './CvProExperienceItem';
import style from './CvProExperience.module.css';

function CvProExperienceList() {
  return (
    <section className={style['pro-section']}>
      <h4>Professional Experience</h4>
      <div>
        <CvProExperienceItem />
      </div>
    </section>
  );
}

export default CvProExperienceList;
