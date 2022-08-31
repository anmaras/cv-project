import React from 'react';
import FormEducationListItem from './FormEducationListItem';
import { useGlobalContext } from '../../../Context';
import style from '../Form.module.css';

function FormEducationList() {
  const { educationFormList, addToEducationList } = useGlobalContext();
  return (
    <div className={style['form-wrapper']}>
      <h3>Education</h3>
      {educationFormList.map((formItem) => {
        return <FormEducationListItem key={formItem.id} {...formItem} />;
      })}
      <button onClick={addToEducationList}>add education</button>
    </div>
  );
}

export default FormEducationList;
