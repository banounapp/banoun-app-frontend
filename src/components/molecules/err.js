import React from 'react';
const Err = () => {
  return (
    <>
      <div className='flex h-screen'>
        <div className=' mt-32 m-auto'>
          <img src='images/Banoun1.png' className='w-2/3 m-auto' />
          <h1 className='text-silver-tree text-2xl  text-center mt-12 md:text-3xl lg:text-3xl xl:text-6xl'>
            {' '}
            4<span className='text-sun-500 ml-2 mr-3'>0</span>4
          </h1>{' '}
          {/* <h1 className='text-silver-tree text-2xl text-center mt-12 md:text-3xl lg:text-3xl xl:text-4xl'>
            عذرا!, لا توجد الصفحة حدث خطأ
          </h1> */}
          <h1 className='text-silver-tree text-2xl text-center mt-12 md:text-3xl lg:text-3xl xl:text-4xl'>
      لم يتم العثور على الصفحة{' '}
    </h1>
        </div>
      </div>
    </>
  );
};

export default Err;
