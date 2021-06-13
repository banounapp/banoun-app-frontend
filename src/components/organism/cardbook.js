import React from 'react';
import { Card } from '../atoms';

export const CardsBook = () => {
  return (
    <>
      <div className='flex mt-8 p-4 md:flex justify-around'>
        <h2>كتب الموصى بها</h2>
        <h2 className='absolute left-12 '>عرض المزيد</h2>
        <div className="flex  lg:w-1/2  mt-16 ">
          <div>
            <img
              alt=''
              className='h-16 w-44 md:h-24  md:w-30 lg:h-52'
              src='images/book.png'
            ></img>
            <h3 className='mt-1 text-lg'>رفاهية التربية</h3>
            <div className='text-text-tahuna-sands-800 mt-2 sm:mt-0  md:ml-10 '>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <span className='mr-2 text-gray-500 text-lg mr-3'> 90 صوت </span>
              <h2 className='text-lg'>السعر : 50 جنيه</h2>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////// */}

          <div>
            <img
              alt=''
              className='h-16 w-44 md:h-24  md:w-30 lg:h-52'
              src='images/book.png'
            ></img>
            <h3 className='mt-1 text-lg'>رفاهية التربية</h3>
            <div className='text-text-tahuna-sands-800 mt-2 sm:mt-0  md:ml-10 '>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <span className='mr-2 text-gray-500 text-lg mr-3'> 90 صوت </span>
              <h2 className='text-lg'>السعر : 50 جنيه</h2>
            </div>
          </div>

          <div>
            <img
              alt=''
              className='h-16 w-44 md:h-24  md:w-30 lg:h-52'
              src='images/book.png'
            ></img>
            <h3 className='mt-1 text-lg'>رفاهية التربية</h3>
            <div className='text-text-tahuna-sands-800 mt-2 sm:mt-0  md:ml-10 '>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <span className='mr-2 text-gray-500 text-lg mr-3'> 90 صوت </span>
              <h2 className='text-lg'>السعر : 50 جنيه</h2>
            </div>
          </div>

          <div>
            <img
              alt=''
              className='h-16 w-44 md:h-24  md:w-30 lg:h-52'
              src='images/book.png'
            ></img>
            <h3 className='mt-1 text-lg'>رفاهية التربية</h3>
            <div className='text-text-tahuna-sands-800 mt-2 sm:mt-0  md:ml-10 '>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <i className='fas fa-star text-tahuna-sands-800  fa-xs '></i>
              <span className='mr-2 text-gray-500 text-lg mr-3'> 90 صوت </span>
              <h2 className='text-lg'>السعر : 50 جنيه</h2>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
