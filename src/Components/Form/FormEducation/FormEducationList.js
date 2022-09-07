import React from 'react';
import FormEducationListItem from './FormEducationListItem';
import { BsPlusLg } from 'react-icons/bs';
import { useGlobalContext } from '../../../Context';
import style from '../Form.module.css';
import ResetBtn from '../../Ui/ResetBtn';

function FormEducationList() {
  const { educationFormList, addToEducationList, resetEducationForm } =
    useGlobalContext();
  return (
    <section>
      <h3 className={style['form-title']}>Education</h3>
      <ul>
        {educationFormList.map((formItem) => {
          return (
            <li className={style.listItem} key={formItem.id}>
              <FormEducationListItem {...formItem} />
            </li>
          );
        })}
      </ul>
      <button
        className={[style['add-education-btn'], 'btn-style-1'].join(' ')}
        onClick={addToEducationList}
      >
        <BsPlusLg />
        add education
      </button>
      <ResetBtn
        className={[style['reset-form-btn'], 'btn-style-2'].join(' ')}
        onClick={resetEducationForm}
        content="reset form"
      />
    </section>
  );
}

export default FormEducationList;
