import React from 'react';
import FormEducationList from './FormEducation/FormEducationList';
import FormProExperienceList from './FormExperience/FormProExperienceList';
import style from './Form.module.css';

function Form() {
  return (
    <article className={style['forms-container']}>
      <div className={style['form-wrapper']}>
        <h3>Personal info</h3>
        <form className={style.form}>
          <input type="text" name="firstName" placeholder="firstName" />
          <input type="text" name="lastName" placeholder="lastName" />
          <input type="text" name="title" placeholder="job title" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="phone" placeholder="phone number" />
          <input type="text" name="city" placeholder="city" />
          <input type="text" name="linkedin" placeholder="linkedin url" />
          <textarea name="description" placeholder="description"></textarea>
        </form>
      </div>
      <FormEducationList />
      <FormProExperienceList />
    </article>
  );
}

export default Form;
