import React from 'react';

function ResetBtn({ className, onClick, content }) {
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}

export default ResetBtn;
