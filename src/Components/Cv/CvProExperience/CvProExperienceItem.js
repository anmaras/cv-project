import React from 'react';
import style from './CvProExperience.module.css';

function CvProExperienceItem() {
  return (
    <div className={style['company-wrapper']}>
      <p className={style['company-name']}>post faust</p>
      <p className={style.location}>athens</p>
      <p className={style.period}>
        <span>2016 - 2021</span>
      </p>
      <p className={style['job-position']}>3D/Lighting Artist</p>
      <p className={style['job-description']}>
        I was responsible for the look development, lighting and rendering
        multiple sequences for various TV commercials.
      </p>
    </div>
  );
}

export default CvProExperienceItem;
