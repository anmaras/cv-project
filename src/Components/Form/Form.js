import React from 'react';
import FormEducationList from './FormEducation/FormEducationList';
import FormProExperienceList from './FormExperience/FormProExperienceList';
import FormPersonalInfo from './FormPersonalInfo/FormPersonalInfo';
import style from './Form.module.css';
import { useGlobalContext } from '../../Context';

function Form() {
  const { resetForms } = useGlobalContext();

  return (
    <article className={style['forms-container']}>
      <FormPersonalInfo />
      <FormEducationList />
      <FormProExperienceList />
      <button onClick={resetForms}>resetForms</button>
    </article>
  );
}

export default Form;
