import React from 'react';

function CheckBox({ id, list, getObj, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name="checkbox"
        checked={getObj(list, id)['checkbox']}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={id}>currently attending </label>
    </div>
  );
}

export default CheckBox;
