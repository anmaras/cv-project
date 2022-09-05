import React from 'react';
import FormSocialLinks from './FormSocialLinks/FormSocialLinks';
import { useGlobalContext } from '../../../Context';

import style from '../Form.module.css';

function FormPersonalInfo() {
  const { personalInfoOnChangeHandler, personalInfo } = useGlobalContext();
  const { name, title, email, phone, city, profile } = personalInfo;

  return (
    <section className={style['form-wrapper']}>
      <h3 className={style['form-title']}>Personal info</h3>
      <form className={style.form}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="e.g. Anthony "
            onChange={personalInfoOnChangeHandler}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="e.g. Maras"
            onChange={personalInfoOnChangeHandler}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="jobTitle">Profession</label>
          <input
            id="jobTitle"
            type="text"
            name="title"
            placeholder="e.g. Web Developer"
            onChange={personalInfoOnChangeHandler}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            onChange={personalInfoOnChangeHandler}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="phone number"
            onChange={personalInfoOnChangeHandler}
            value={phone}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="city"
            onChange={personalInfoOnChangeHandler}
            value={city}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            maxLength="200"
            id="description"
            name="profile"
            placeholder="description"
            onChange={personalInfoOnChangeHandler}
            value={profile}
          />
        </div>
      </form>
      <FormSocialLinks />
    </section>
  );
}

export default FormPersonalInfo;
