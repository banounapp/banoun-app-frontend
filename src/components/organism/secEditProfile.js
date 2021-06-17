import React from 'react';


export const EditProfile = () => {
  return (
    <div className='bg-white w-60 pt-4 pb-4 md:w-96 m-auto pt-5 lg:w-1/4 lg:mt-14 lg:sticky lg:top-0'>
      <div className=''>
        <img src='images/profile.png' className='m-auto rounded-full w-32 md:w-44 mb-5 lg:w-60' />
        <p className='text-center text-silver-tree-500 md:text-lg lg:text-xl'>
          تعديل الصفحة الشخصية <i className='p-2  fas fa-edit'></i>
        </p>
      </div>
      <div className='text-center mt-3 sm:w-56 md:text-lg m-auto lg:text-xl'>
        <p>صفية سعيد</p>
        <p>العمر 34 سنة</p>
        <p>Safial1002@gmail.com</p>
        <p>2000 365 012 +2</p>
        <p  className='text-silver-tree-500 mt-10 md:text-lg lg:text-xl'> <i class=" p-2 fas fa-sign-out-alt"></i>تسجيل الخروج </p>
      </div>
      
    </div>
  );
};
