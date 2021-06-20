import React from 'react';
const InputEdit = ({ name, value, style }) => {
  return (
    <>
      <div>
        <p className='py-3 text-sm md:text-lg'>{name}</p>
        <input type='text' value={value} className={style} />
      </div>
    </>
  );
};

export default InputEdit;
