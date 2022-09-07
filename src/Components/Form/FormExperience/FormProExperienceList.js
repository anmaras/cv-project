import React from 'react';
import FormProExperienceListItem from './FormProExperienceListItem';
import { BsPlusLg } from 'react-icons/bs';
import { useGlobalContext } from '../../../Context';
import style from '../Form.module.css';
import { Link } from 'react-router-dom';
import ResetBtn from '../../Ui/ResetBtn';

function FormProExperienceList() {
  const { addToWorkXpList, workXpFormList, resetExperienceForm } =
    useGlobalContext();

  return (
    <section className={style['form-wrapper']}>
      <h3 className={style['form-title']}>Experience</h3>
      <ul>
        {workXpFormList.map((item) => {
          return (
            <li key={item.id} className={style.listItem}>
              <FormProExperienceListItem {...item} />
            </li>
          );
        })}
      </ul>
      <button
        className={[style['add-exp-btn'], 'btn-style-1'].join(' ')}
        onClick={addToWorkXpList}
      >
        <BsPlusLg />
        add work experience
      </button>
      <ResetBtn
        className={[style['reset-form-btn'], 'btn-style-2'].join(' ')}
        onClick={resetExperienceForm}
        content="reset form"
      />
    </section>
  );
}

export default FormProExperienceList;
