import style from '../Form.module.css';
import CheckBox from '../../Ui/CheckBox';
import { getSelectedObj } from '../../../Utilities';
import { useGlobalContext } from '../../../Context';

function FormEducationListItem({ id, type, name }) {
  const { removeItemFromLists, onChangeHandler, educationFormList } =
    useGlobalContext();

  const getObject = (array) => {
    return array.find((item) => item.id === id);
  };

  return (
    <>
      <form className={style.form}>
        {name.map((formItem, index) => {
          const inputType =
            formItem === 'yearFrom' || formItem === 'yearTo' ? 'month' : type;
          const isActive =
            formItem === 'yearTo' &&
            getSelectedObj(educationFormList, id)['checkbox'];
          const value = getSelectedObj(educationFormList, id)[formItem];
          return (
            <input
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
          );
        })}
        <CheckBox
          id={id}
          getObj={getSelectedObj}
          list={educationFormList}
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
    </>
  );
}

export default FormEducationListItem;
