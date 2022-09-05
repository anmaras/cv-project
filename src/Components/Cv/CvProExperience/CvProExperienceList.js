import React from 'react';
import CvProExperienceItem from './CvProExperienceItem';
import style from './CvProExperience.module.css';
import { useGlobalContext } from '../../../Context';

function CvProExperienceList() {
  const { workXpFormList } = useGlobalContext();

  return (
    <section className={style['pro-section']}>
      <h4 className={style['pro-title']}>Professional Experience</h4>
      <ul className={style['pro-list']}>
        {workXpFormList.map((item) => {
          return (
            <li className={style['pro-list-item']} key={item.id}>
              <CvProExperienceItem {...item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CvProExperienceList;
