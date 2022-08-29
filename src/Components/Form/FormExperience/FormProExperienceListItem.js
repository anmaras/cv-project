import React from 'react';
import style from '../Form.module.css';
import { useGlobalContext } from '../../../Context';

function FormProExperienceListItem({ id, type, name }) {
  const { removeItemFromLists, onChangeHandler, workXpFormList } =
    useGlobalContext();

  return (
    <form className={style.form}>
      {name.map((formItem, index) => {
        const formObject = workXpFormList.find((item) => item.id === id);
        return (
          <input
            key={index}
            type={type}
            name={formItem}
            placeholder={formItem}
            onChange={(e) => {
              onChangeHandler(e, id);
            }}
            value={formObject[formItem]}
          />
        );
      })}

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
