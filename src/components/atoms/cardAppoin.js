import React from 'react';
export const CardAppoinment = ({
  specialistName,
  status,
  appoinemnt,
  meeting,
  color,
}) => {
  return (
    // <div className='mt-5 bg-white  p-2 w-64 rounded-lg md:w-5/6 md:p-2 md:m-10'>
    //   <div className='p-2 w-60 bg-frostee-500 rounded-md md:w-5/6 md:p-4 mt-8 mb-8 mr-10  md:flex '>
    //     <div className=" space-x-10">
    //       <p className='text-xm md:text-xl'>{specialistName}</p>
    //       <p className={`text-xm ${color} md:text-xl`}>{status}</p>
    //     </div>
    //     <div className=" xm:mr-1 sm:text-sm md:mr-14">
    //       <p className='text-xm md:text-xl'> {appoinemnt}</p>
    //       <p className='text-xs text-gunsmoke-500 font-thin md:text-sm'>{meeting}</p>
    //     </div>
    //   </div>
    // </div>

    //  <div className='mt-5 bg-white  p-2 w-1/1 rounded-lg md:p-8'>
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
      {/* </div> */}
    </div>
  );
};

{
  /* <div className='mt-5 bg-white  p-2 w-1/1 rounded-lg md:p-8'>
      <div className='p-3 w-1/1 flex bg-frostee-500 rounded-md md:p-7'>
        <div className=" space-x-20">
          <p className='text-sm md:text-lg'>{specialistName}</p>
          <p className={` text-xs ${color} md:text-lg`}>{status}</p>
        </div>
        <div className="mr-2 sm:mr-1 sm:text-sm md:mr-60">
          <p className='text-sm md:text-lg'> {appoinemnt}</p>
          <p className='text-xs text-gunsmoke-500 font-thin md:text-sm'>{meeting}</p>
        </div>
      </div>
    </div> */
}
