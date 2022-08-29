import style from '../Form.module.css';
import { useGlobalContext } from '../../../Context';

function FormEducationListItem({ id, type, name }) {
  const { removeItemFromLists, onChangeHandler, educationFormList } =
    useGlobalContext();

  return (
    <>
      <form className={style.form}>
        {name.map((formItem, index) => {
          const formObject = educationFormList.find((item) => item.id === id);
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
    </>
  );
}

export default FormEducationListItem;
