import React from 'react';
import style from '../Form.module.css';

function FormProExperienceListItem() {
  return (
    <form className={style.form}>
      <input type="text" name="position" placeholder="position" />
      <input type="text" name="company" placeholder="company" />
      <input type="text" name="city" placeholder="city" />
      <input type="text" name="from" placeholder="from" />
      <input type="text" name="to" placeholder="to" />
      <input type="text" name="description" placeholder="job description" />
      <button>add</button>
      <button>delete</button>
    </form>
  );
}

export default FormProExperienceListItem;
