import React from 'react';
import FormEducationList from './FormEducation/FormEducationList';
import FormProExperienceList from './FormExperience/FormProExperienceList';
import style from './Form.module.css';
import { useGlobalContext } from '../../Context';

function Form() {
  const { state, onChangeHandler, resetForms } = useGlobalContext();
  const { name, title, email, phone, city, linkedin, portfolio, profile } =
    state;

  console.log(state);

  return (
    <article className={style['forms-container']}>
      <div className={style['form-wrapper']}>
        <h3>Personal info</h3>
        <form className={style.form}>
          <input
            type="text"
            name="name"
            placeholder="Type your name..."
            onChange={onChangeHandler}
            value={name}
          />
          <input
            type="text"
            name="title"
            placeholder="job title"
            onChange={onChangeHandler}
            value={title}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={onChangeHandler}
            value={email}
          />
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="phone number"
            onChange={onChangeHandler}
            value={phone}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            onChange={onChangeHandler}
            value={city}
          />
          <input
            type="url"
            name="linkedin"
            placeholder="linkedin url"
            onChange={onChangeHandler}
            value={linkedin}
          />
          <input
            type="url"
            name="portfolio"
            placeholder="portfolio url"
            onChange={onChangeHandler}
            value={portfolio}
          />
          <textarea
            name="profile"
            placeholder="description"
            onChange={onChangeHandler}
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
