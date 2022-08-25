import React from 'react';
import style from '../Form.module.css';
import { useGlobalContext } from '../../../Context';

function FormEducationListItem() {
  const { state, year, onChangeHandler } = useGlobalContext();

  const { university, degree, subject, yearFrom, yearTo } = state;
  return (
    <form className={style.form}>
      <input
        type="text"
        name="university"
        placeholder="university"
        onChange={onChangeHandler}
        value={university}
      />
      <input
        type="text"
        name="degree"
        placeholder="degree"
        onChange={onChangeHandler}
        value={degree}
      />
      <input
        type="text"
        name="subject"
        placeholder="subject"
        onChange={onChangeHandler}
        value={subject}
      />
      <input
        type="number"
        name="yearFrom"
        placeholder="from"
        min="1950"
        onChange={onChangeHandler}
        value={yearFrom}
      />
      <input
        type="number"
        name="yearTo"
        placeholder="to"
        max={year}
        onChange={onChangeHandler}
        value={yearTo}
      />
      <button>add</button>
      <button>delete</button>
    </form>
  );
}

export default FormEducationListItem;
