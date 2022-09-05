import React from 'react';
import FormExperienceExtraInfo from './FormExperienceExtraInfo/FormExperienceExtraInfo';
import style from '../Form.module.css';
import CheckBox from '../../Ui/CheckBox';
import { getSelectedObj } from '../../../Utilities';
import { useGlobalContext } from '../../../Context';

function FormProExperienceListItem({ id, type, name, jobSpecifics }) {
  const { removeItemFromLists, onChangeHandler, workXpFormList } =
    useGlobalContext();

  return (
    <div className={style['listItem-form-wrapper']}>
      <form className={[style.form, style.experience].join(' ')}>
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
            <div className={style[`${formItem}`]} key={index}>
              <label htmlFor={formItem}>{formItem}</label>
              <input
                type={inputType}
                name={formItem}
                placeholder={formItem}
                disabled={isActive}
                onChange={(e) => {
                  onChangeHandler(e, id);
                }}
                value={value}
              />
            </div>
          );
        })}
        <CheckBox
          id={id}
          getObj={getSelectedObj}
          list={workXpFormList}
          onChange={onChangeHandler}
        />
      </form>
      <FormExperienceExtraInfo id={id} jobSpecifics={jobSpecifics} />
      <button
        className={[style['delete-experience-btn'], 'btn-style-1'].join(' ')}
        onClick={() => {
          removeItemFromLists(id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default FormProExperienceListItem;
