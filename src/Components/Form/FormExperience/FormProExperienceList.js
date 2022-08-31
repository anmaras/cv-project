import React from 'react';
import FormProExperienceListItem from './FormProExperienceListItem';
import { useGlobalContext } from '../../../Context';
import style from '../Form.module.css';

function FormProExperienceList() {
  const { addToWorkXpList, workXpFormList } = useGlobalContext();

  return (
    <div className={style['form-wrapper']}>
      <h3>Experience</h3>
      {workXpFormList.map((item) => {
        return <FormProExperienceListItem key={item.id} {...item} />;
      })}
      <button onClick={addToWorkXpList}>add work exp</button>
    </div>
  );
}

export default FormProExperienceList;
