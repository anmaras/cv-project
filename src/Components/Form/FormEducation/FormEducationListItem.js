import React from 'react';
import style from '../Form.module.css';

function FormEducationListItem() {
  return (
    <form className={style.form}>
      <input type="text" name="university" placeholder="university" />
      <input type="text" name="degree" placeholder="degree" />
      <input type="text" name="subject" placeholder="subject" />
      <input type="text" name="from" placeholder="from" />
      <input type="text" name="to" placeholder="to" />
      <button>add</button>
      <button>delete</button>
    </form>
  );
}

export default FormEducationListItem;
