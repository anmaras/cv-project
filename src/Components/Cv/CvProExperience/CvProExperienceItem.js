import React from 'react';
import style from './CvProExperience.module.css';
import { useGlobalContext } from '../../../Context';

function CvProExperienceItem({
  position,
  company,
  companyCity,
  workDescription,
  workingFrom,
  workingTo,
}) {
  return (
    <div className={style['company-wrapper']}>
      <p className={style['company-name']}>
        {company ? company : 'Company Name'}
      </p>
      <p className={style.location}>{companyCity ? companyCity : 'City'}</p>
      <p className={style.period}>
        <span>
          {workingFrom ? workingFrom : 'YYYY'} -{' '}
          {workingTo ? workingTo : 'YYYY'}
        </span>
      </p>
      <p className={style['job-position']}>
        {position ? position : 'Your position in that company'}
      </p>
      <p className={style['job-description']}>
        {workDescription
          ? workDescription
          : 'A few words about your work on that company'}
      </p>
    </div>
  );
}

export default CvProExperienceItem;
