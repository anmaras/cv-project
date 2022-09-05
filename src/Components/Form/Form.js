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
      <button
        className={[style['reset-form-btn'], 'btn-style-2'].join(' ')}
        onClick={resetForms}
      >
        reset forms
      </button>
    </article>
  );
}

export default Form;
