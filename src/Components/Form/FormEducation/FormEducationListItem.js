import CheckBox from '../../Ui/CheckBox';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { getSelectedObj } from '../../../Utilities';
import { useGlobalContext } from '../../../Context';
import style from '../Form.module.css';

function FormEducationListItem({ id, type, name }) {
  const { removeItemFromLists, onChangeHandler, educationFormList } =
    useGlobalContext();

  return (
    <div className={style['listItem-form-wrapper']}>
      <form className={[style.form, style.education].join(' ')}>
        {name.map((formItem, index) => {
          const inputType =
            formItem === 'yearFrom' || formItem === 'yearTo' ? 'month' : type;
          const isActive =
            formItem === 'yearTo' &&
            getSelectedObj(educationFormList, id)['checkbox'];
          const value = getSelectedObj(educationFormList, id)[formItem];
          return (
            <div key={index} className={style[`${formItem}`]}>
              <label htmlFor={formItem}>{formItem}</label>
              <input
                id={formItem}
                key={index}
                type={inputType}
                name={formItem}
                disabled={isActive}
                placeholder={formItem}
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
          list={educationFormList}
          onChange={onChangeHandler}
        />
      </form>
      <button
        className={style['delete-education-btn']}
        onClick={() => {
          removeItemFromLists(id);
        }}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}

export default FormEducationListItem;
