import React from 'react';
import { useGlobalContext } from '../../../../Context';
import { RiDeleteBin6Line } from 'react-icons/ri';
import style from './FormExperienceExtraInfo.module.css';

function FormExperienceExtraInfo({ id, jobSpecifics }) {
  const {
    setIsJobInfoActive,
    isJobInfoActive,
    jobInfoOnChangeHandler,
    removeJobInfoList,
    addToMoreAboutJobInfoList,
  } = useGlobalContext();

  return (
    <div className={style['extraInfo-container']}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsJobInfoActive(!isJobInfoActive);
        }}
      >
        open MORE about job
      </button>
      <div>
        {isJobInfoActive && (
          <>
            <ul className={style['expJobExtraInfo-list']}>
              {jobSpecifics.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={style['expJobExtraInfo-listItem']}
                  >
                    <textarea
                      placeholder="textArea"
                      name="jobSpecifics"
                      onChange={(e) => {
                        jobInfoOnChangeHandler(e, item.id, id);
                      }}
                      value={item.info}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeJobInfoList(item.id);
                      }}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToMoreAboutJobInfoList(id);
              }}
            >
              add extra info
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default FormExperienceExtraInfo;
