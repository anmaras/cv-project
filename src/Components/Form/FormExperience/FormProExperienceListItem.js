import React from 'react';
import style from '../Form.module.css';
import { useGlobalContext } from '../../../Context';

function FormProExperienceListItem() {
  const { state, onChangeHandler } = useGlobalContext();
  const {
    position,
    company,
    companyCity,
    workDescription,
    workingFrom,
    workingTo,
  } = state;

  return (
    <form className={style.form}>
      <input
        type="text"
        name="position"
        placeholder="position"
        onChange={onChangeHandler}
        value={position}
      />
      <input
        type="text"
        name="company"
        placeholder="company"
        onChange={onChangeHandler}
        value={company}
      />
      <input
        type="text"
        name="companyCity"
        placeholder="city"
        onChange={onChangeHandler}
        value={companyCity}
      />
      <input
        type="text"
        name="workingFrom"
        placeholder="from"
        onChange={onChangeHandler}
        value={workingFrom}
      />
      <input
        type="text"
        name="workingTo"
        placeholder="to"
        onChange={onChangeHandler}
        value={workingTo}
      />
      <input
        type="text"
        name="workDescription"
        placeholder="job description"
        onChange={onChangeHandler}
        value={workDescription}
      />
      <button>add</button>
      <button>delete</button>
    </form>
  );
}

export default FormProExperienceListItem;
