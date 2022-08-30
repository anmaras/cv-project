import React from 'react';
import FormEducationList from './FormEducation/FormEducationList';
import FormProExperienceList from './FormExperience/FormProExperienceList';
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
          <textarea
            name="profile"
            placeholder="description"
            onChange={personalInfoOnChangeHandler}
            value={profile}
          />
        </form>

        <div className={style['links-section']}>
          <button onClick={() => setIsLinksOpen(!isLinksOpen)}>
            Add links
          </button>
          {isLinksOpen && (
            <div>
              {linkList.map((linkItem) => {
                const { socialLink, id, socialLinkUrl } = linkItem;
                return (
                  <div key={id}>
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
                    <label htmlFor="linkUrl">Social Link</label>
                    <input
                      type="text"
                      name="socialLinkUrl"
                      onChange={(e) => onChangeHandler(e, id)}
                      value={socialLinkUrl}
                    ></input>
                    <button onClick={() => deleteFromLinkList(id)}>del</button>
                  </div>
                );
              })}

              {!isLinkListMaxed && (
                <button onClick={addToLinkListHandler}>Add more links</button>
              )}
            </div>
          )}
        </div>
      </div>
      <FormEducationList />
      <FormProExperienceList />
      <button onClick={resetForms}> resetForms</button>
    </article>
  );
}

export default Form;
