import React from 'react';
import { Btn } from './../atoms';
export const HeaderArtcles = () => {
  return (
    <div className=' bg-green block items-center content-center px-20 my-14' style={{textAlign: 'center'}}>
      {/* <div className=' bg-green space-y-6 lg:w-1/3 content-center  md:mx-20  md:text-right  ' style={{textAlign: 'center'}}> */}
        <h2 className=' text-lg  lg:text-lg content-center  md:text-2xl '>
          !?تفضل الاستمتاع والتحدث مع الاخرين{' '}
        </h2>

        <p className='text-lg lg:text-lg md:text-lg  '>
          توفر لك بنون مجموعة متميزة من المختصين لمساعدتك فى حل مشكلاتك لتقديم .
        </p>
        <Btn stylee='text-center py-1 lg:w-1/4 md:w-60 text-white text-lg mx-0 px-0 bg-silver-tree-500 sm:w-1/2'>
          انضم الان{' '}
        </Btn>
      </div>
    // </div>
  );
};
