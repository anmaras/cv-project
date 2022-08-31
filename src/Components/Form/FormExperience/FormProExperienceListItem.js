import React from 'react';
import style from '../Form.module.css';
import CheckBox from '../../Ui/CheckBox';
import { getSelectedObj } from '../../../Utilities';
import { useGlobalContext } from '../../../Context';

function FormProExperienceListItem({ id, type, name, jobSpecifics }) {
  const {
    removeItemFromLists,
    onChangeHandler,
    workXpFormList,
    isJobInfoActive,
    setIsJobInfoActive,
    addToMoreAboutJobInfoList,
    jobInfoOnChangeHandler,
    removeJobInfoList,
  } = useGlobalContext();

  return (
    <form className={style.form}>
      {name.map((formItem, index) => {
        const inputType =
          formItem === 'workingFrom' || formItem === 'workingTo'
            ? 'month'
            : type;
        const isActive =
          formItem === 'workingTo' &&
          getSelectedObj(workXpFormList, id)['checkbox'];
        const value = getSelectedObj(workXpFormList, id)[formItem];

        return (
          <input
            key={index}
            type={inputType}
            name={formItem}
            placeholder={formItem}
            disabled={isActive}
            onChange={(e) => {
              onChangeHandler(e, id);
            }}
            value={value}
          />
        );
      })}
      <CheckBox
        id={id}
        getObj={getSelectedObj}
        list={workXpFormList}
        onChange={onChangeHandler}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsJobInfoActive(!isJobInfoActive);
        }}
      >
        open MORE about job
      </button>
      {isJobInfoActive && (
        <section>
          <ul>
            {jobSpecifics.map((item) => {
              const mainListId = id;
              return (
                <li key={item.id}>
                  <textarea
                    placeholder="textArea"
                    name="jobSpecifics"
                    onChange={(e) => {
                      jobInfoOnChangeHandler(e, item.id, mainListId);
                    }}
                    value={item.info}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeJobInfoList(item.id);
                    }}
                  >
                    Delete TextArea
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
            add
          </button>
        </section>
      )}
      <button
        onClick={(e) => {
          removeItemFromLists(e, id);
        }}
      >
        delete
      </button>
    </form>
  );
}

export default FormProExperienceListItem;
