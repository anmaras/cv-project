import React from 'react';

function CheckBox({ id, list, getObj, onChange }) {
  return (
    <div>
      <label htmlFor={id}>currently attending </label>
      <input
        type="checkbox"
        id={id}
        name="checkbox"
        checked={getObj(list, id)['checkbox']}
        onChange={(e) => onChange(e, id)}
      />
    </div>
  );
}

export default CheckBox;
