import React from 'react';
import FormEducationList from './FormEducation/FormEducationList';
import FormProExperienceList from './FormExperience/FormProExperienceList';
import { BsPlusLg } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import style from './Form.module.css';
import { useGlobalContext } from '../../Context';

function Form() {
  const {
    personalInfo,
    personalInfoOnChangeHandler,
    resetForms,
    isLinksOpen,
    isLinkListMaxed,
    linkList,
    addToLinkListHandler,
    deleteFromLinkList,
    setIsLinksOpen,
    onChangeHandler,
  } = useGlobalContext();
  const { name, title, email, phone, city, profile } = personalInfo;

  return (
    <article className={style['forms-container']}>
      <div className={style['form-wrapper']}>
        <h3>Personal info</h3>
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
              id="description"
              name="profile"
              placeholder="description"
              onChange={personalInfoOnChangeHandler}
              value={profile}
            />
          </div>
        </form>

        <div className={style['links-section']}>
          <button onClick={() => setIsLinksOpen(!isLinksOpen)}>
            <BsPlusLg /> Add Social Links
          </button>
          {isLinksOpen && (
            <ul className={style['socialLinks-wrapper']}>
              {linkList.map((linkItem) => {
                const { socialLink, id, socialLinkUrl } = linkItem;
                return (
                  <li key={id}>
                    <div>
                      <label htmlFor="selectLinks">Social Website</label>
                      <select
                        name="socialLink"
                        id="selectLinks"
                        onChange={(e) => onChangeHandler(e, id)}
                        value={socialLink}
                      >
                        <option value="twitter">Twitter</option>
                        <option value="website">Website</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="github">Github</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="linkUrl">Social Link</label>
                      <input
                        type="text"
                        name="socialLinkUrl"
                        onChange={(e) => onChangeHandler(e, id)}
                        value={socialLinkUrl}
                      />
                    </div>
                    <button onClick={() => deleteFromLinkList(id)}>
                      <RiDeleteBin6Line />
                    </button>
                  </li>
                );
              })}

              {!isLinkListMaxed && (
                <button onClick={addToLinkListHandler}>Add more links</button>
              )}
            </ul>
          )}
        </div>
      </div>
      <FormEducationList />
      <FormProExperienceList />
      <button style={{ width: '200px', height: '50px' }} onClick={resetForms}>
        {' '}
        resetForms
      </button>
    </article>
  );
}

export default Form;
