import React from 'react';
import style from '../Form.module.css';
import CheckBox from '../../Ui/CheckBox';
import { getSelectedObj } from '../../../Utilities';
import { useGlobalContext } from '../../../Context';

function FormProExperienceListItem({ id, type, name }) {
  const { removeItemFromLists, onChangeHandler, workXpFormList } =
    useGlobalContext();

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
          removeItemFromLists(e, id);
        }}
      >
        delete
      </button>
    </form>
  );
}

export default FormProExperienceListItem;
