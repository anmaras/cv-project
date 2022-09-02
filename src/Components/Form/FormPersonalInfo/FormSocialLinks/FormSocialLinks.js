import React from 'react';
import { useGlobalContext } from '../../../../Context';
import { BsPlusLg } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

import style from './FormSocialLinks.module.css';

function FormSocialLinks() {
  const {
    isLinksOpen,
    setIsLinksOpen,
    linkList,
    onChangeHandler,
    deleteFromLinkList,
    isLinkListMaxed,
    addToLinkListHandler,
  } = useGlobalContext();

  return (
    <div className={style['links-section']}>
      <button
        className={style['add-social-btn']}
        onClick={() => setIsLinksOpen(!isLinksOpen)}
      >
        <BsPlusLg /> Add Social Links
      </button>
      {isLinksOpen && (
        <div>
          <ul className={style['socialLinks-list']}>
            {linkList.map((linkItem) => {
              const { socialLink, id, socialLinkUrl } = linkItem;
              return (
                <li key={id} className={style['socialLinks-listItem']}>
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
                  <button
                    className={style['socialList-del-btn']}
                    onClick={() => deleteFromLinkList(id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </li>
              );
            })}
          </ul>
          {!isLinkListMaxed && (
            <button onClick={addToLinkListHandler}>Add more links</button>
          )}
        </div>
      )}
    </div>
  );
}

export default FormSocialLinks;
