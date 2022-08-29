import React from 'react';
import CvProExperienceItem from './CvProExperienceItem';
import style from './CvProExperience.module.css';
import { useGlobalContext } from '../../../Context';

function CvProExperienceList() {
  const { workXpFormList } = useGlobalContext();

  return (
    <section className={style['pro-section']}>
      <h4>Professional Experience</h4>
      <div>
        {workXpFormList.map((item) => {
          return <CvProExperienceItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CvProExperienceList;
