import React from 'react';
import FormEducationList from './FormEducation/FormEducationList';
import FormProExperienceList from './FormExperience/FormProExperienceList';
import style from './Form.module.css';
import { useGlobalContext } from '../../Context';

function Form() {
  const { personalInfo, personalInfoOnChangeHandler, resetForms } =
    useGlobalContext();
  const { name, title, email, phone, city, linkedin, portfolio, profile } =
    personalInfo;

  return (
    <article className={style['forms-container']}>
      <div className={style['form-wrapper']}>
        <h3>Personal info</h3>
        <form className={style.form}>
          <input
            type="text"
            name="name"
            placeholder="Type your name..."
            onChange={personalInfoOnChangeHandler}
            value={name}
          />
          <input
            type="text"
            name="title"
            placeholder="job title"
            onChange={personalInfoOnChangeHandler}
            value={title}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={personalInfoOnChangeHandler}
            value={email}
          />
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="phone number"
            onChange={personalInfoOnChangeHandler}
            value={phone}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            onChange={personalInfoOnChangeHandler}
            value={city}
          />
          <input
            type="url"
            name="linkedin"
            placeholder="linkedin url"
            onChange={personalInfoOnChangeHandler}
            value={linkedin}
          />
          <input
            type="url"
            name="portfolio"
            placeholder="portfolio url"
            onChange={personalInfoOnChangeHandler}
            value={portfolio}
          />
          <textarea
            name="profile"
            placeholder="description"
            onChange={personalInfoOnChangeHandler}
            value={profile}
          />
        </form>
      </div>
      <FormEducationList />
      <FormProExperienceList />
      <button onClick={resetForms}> resetForms</button>
    </article>
  );
}

export default Form;
