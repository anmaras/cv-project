import React, { useState } from 'react';
import FormEducationList from './FormEducation/FormEducationList';
import FormProExperienceList from './FormExperience/FormProExperienceList';
import style from './Form.module.css';
import { useGlobalContext } from '../../Context';
import uuid from 'react-uuid';

const linkListData = [
  {
    socialLink: 'twitter',
    socialLinkUrl: '',
    id: uuid(),
  },
];

function Form() {
  const { personalInfo, personalInfoOnChangeHandler, resetForms } =
    useGlobalContext();
  const { name, title, email, phone, city, linkedin, portfolio, profile } =
    personalInfo;
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isLinkListMaxed, setIsLinkListMaxed] = useState(false);
  const [linkList, setLinkList] = useState(linkListData);

  const addToLinkListHandler = () => {
    const { id, ...linksListData } = linkListData[0];
    if (linkList.length > 1) {
      setIsLinkListMaxed(true);
    }

    const newLinkItem = {
      id: uuid(),
      ...linksListData,
    };
    setLinkList([...linkList, newLinkItem]);
  };

  const deleteFromLinkList = (id) => {
    const newLinkList = linkList.filter((item) => item.id !== id);
    setLinkList(newLinkList);
    if (newLinkList.length < 3) {
      setIsLinkListMaxed(false);
    }
    if (!newLinkList.length) {
      setIsLinksOpen(false);
      setLinkList(linkList);
    }
  };

  console.log(linkList.length);
  console.log(linkList);

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
        <div className={style['links-section']}>
          <button onClick={() => setIsLinksOpen(!isLinksOpen)}>
            Add links
          </button>
          {isLinksOpen && (
            <div>
              {linkList.map((linkItem) => {
                return (
                  <div key={linkItem.id}>
                    <label htmlFor="selectLinks">Social Website</label>
                    <select name="links" id="selectLinks">
                      <option value="twitter">Twitter</option>
                      <option value="website">Website</option>
                      <option value="linkedin">Linkedin</option>
                    </select>
                    <label htmlFor="linkUrl">Social Link</label>
                    <input type="text"></input>
                    <button onClick={() => deleteFromLinkList(linkItem.id)}>
                      del
                    </button>
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
