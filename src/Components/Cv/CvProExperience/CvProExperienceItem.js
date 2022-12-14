import React from 'react';
import style from './CvProExperience.module.css';
import { getSelectedObj } from '../../../Utilities';
import { useGlobalContext } from '../../../Context';

function CvProExperienceItem({
  position,
  company,
  companyCity,
  workDescription,
  workingFrom,
  workingTo,
  id,
  jobSpecifics,
  isSelected,
}) {
  const { workXpFormList } = useGlobalContext();
  const checkbox = getSelectedObj(workXpFormList, id)['checkbox'];

  const from = workingFrom ? workingFrom : 'YYYY';
  const to = workingTo ? workingTo : 'YYYY';
  const companyName = company ? company : 'Company Name';
  const companyLocation = companyCity ? companyCity : 'City';
  const jobPosition = position ? position : 'Your position in that company';
  const workInfo = workDescription
    ? workDescription
    : 'A few words about your work on that company';

  return (
    <div className={style['company-wrapper']}>
      <p className={style['company-name']}>{companyName}</p>
      <p className={style.location}>{companyLocation}</p>
      <p className={style.period}>
        <span>
          {from} - {checkbox ? 'Present' : to}
        </span>
      </p>
      <p className={style['job-position']}>{jobPosition}</p>
      <p className={style['job-description']}>{workInfo}</p>
      <ul className={style['extra-info-list']}>
        {isSelected &&
          jobSpecifics.map((item) => {
            return (
              <li className={style['extra-info-list-item']} key={item.id}>
                {item.info}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CvProExperienceItem;
