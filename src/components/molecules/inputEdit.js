import React from 'react';
const InputEdit = ({ name, value, style, stylep, sdiv }) => {
  return (
    <>
      <div className={sdiv}>
        <p className={stylep}>{name}</p>
        <input type='text' value={value} className={style} />
      </div>
    </>
  );
};

export default InputEdit;
