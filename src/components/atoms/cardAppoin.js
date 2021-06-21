import React from 'react';
export const CardAppoinment = ({
  specialistName,
  status,
  appoinemnt,
  meeting,
  color,
}) => {
  return (
 
    <div className='p-3 w-60 mt-5 mr-4 mb-5 bg-frostee-500 rounded-md md:p-6 md:w-4/5 md:mr-16 md:flex lg:w-5/6  lg:p-10'>
      <div className=' space-x-20'>
        <p className='text-sm md:text-lg lg:text-xl'>{specialistName}</p>
        <p className={` text-xs ${color} md:text-lg lg:text-xl`}>{status}</p>
      </div>
      <div className='mr-2 sm:mr-1 sm:text-sm md:mr-32'>
        <p className='text-sm md:text-lg lg:text-xl lg:mr-8'> {appoinemnt}</p>
        <p className='text-xs text-gunsmoke-500 md:text-sm lg:text-lg'>
          {meeting}
        </p>
      </div>
    </div>
  );
};


