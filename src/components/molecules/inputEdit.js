import React from 'react';
const InputEdit = ({ name, value, style, stylep, sdiv, FormName, onChangeMethod }) => {
  return (
    <>
      <div className={sdiv}>
        <p className={stylep}>{name}</p>
        <input type='text' defaultValue={value} name={FormName} className={style} onChange={e => onChangeMethod(e)} />
      </div>
    </>
  );
};

export default InputEdit;