import React from 'react';
import FormProExperienceListItem from './FormProExperienceListItem';
import { BsPlusLg } from 'react-icons/bs';
import { useGlobalContext } from '../../../Context';
import style from '../Form.module.css';

function FormProExperienceList() {
  const { addToWorkXpList, workXpFormList } = useGlobalContext();

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
    </section>
  );
}

export default FormProExperienceList;
