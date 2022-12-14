import React from 'react';
import { useGlobalContext } from '../../../../Context';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import style from './FormExperienceExtraInfo.module.css';

function FormExperienceExtraInfo({ id, jobSpecifics, isSelected }) {
  const {
    jobInfoOnChangeHandler,
    removeJobInfoList,
    addToMoreAboutJobInfoList,
    getExtraInfoId,
  } = useGlobalContext();

  console.log(isSelected);

  return (
    <div className={style['extraInfo-container']}>
      <button
        className={[style['add-extraInfo-btn'], 'btn-style-1'].join(' ')}
        onClick={() => {
          getExtraInfoId(id);
        }}
      >
        {isSelected ? <FaMinus /> : <BsPlusLg />}
        add extra info
      </button>
      {isSelected && (
        <fieldset>
          <legend>Extra Info</legend>
          <div>
            <ul className={style['expJobExtraInfo-list']}>
              {jobSpecifics.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={style['expJobExtraInfo-listItem']}
                  >
                    <div>
                      <label htmlFor="textArea">Add</label>
                      <textarea
                        id="textArea"
                        placeholder="e.g. Say something about your role in that job..."
                        name="jobSpecifics"
                        onChange={(e) => {
                          jobInfoOnChangeHandler(e, item.id, id);
                        }}
                        value={item.info}
                      />
                    </div>
                    <button
                      className={[style['remove-info-btn'], 'btn-style-1'].join(
                        ' '
                      )}
                      onClick={() => {
                        removeJobInfoList(item.id);
                      }}
                    >
                      remove
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              className={[style['add-more-btn'], 'btn-style-1'].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                addToMoreAboutJobInfoList(id);
              }}
            >
              <BsPlusLg /> add more
            </button>
          </div>
        </fieldset>
      )}
    </div>
  );
}

export default FormExperienceExtraInfo;
