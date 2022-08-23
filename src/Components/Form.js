import React from 'react';
import FormEducationList from './FormEducationList';
import FormProExperienceList from './FormProExperienceList';

function Form() {
  return (
    <article className="form-container">
      <section className="form__personal-info__section">
        <div>
          <h3>Personal info</h3>
          <form className="personal-info form">
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
      </section>
      <section className="form__education-info__section">
        <FormEducationList />
      </section>
      <section className="form__experience-info__section">
        <FormProExperienceList />
      </section>
    </article>
  );
}

export default Form;
