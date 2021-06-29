import React from 'react';
const Load = () => {
  return (
    <>
      <div className='flex h-screen'>
        <div className='m-auto'>
          <img src='images/logo1.png' className=' w-2/3 m-auto' />
          {/* <h1 className='text-silver-tree text-2xl text-center mt-12 md:text-3xl lg:text-3xl xl:text-2xl'>
            {' '}
            جاري التحميل ...
          </h1> */}
          <img
            src='images/ball.gif '
            className='w-16 mt-20 m-auto mt-8 md:w-32 lg:w-16 xl:w-16 '
          />
        </div>
      </div>
    </>
  );
};

export default Load;
