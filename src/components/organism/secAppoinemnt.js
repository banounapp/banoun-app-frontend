import React from 'react';
import { CardAppoinment } from '../atoms';

export const Appointment = () => {
  return (
    <>
    <div className="lg:mt-4 lg:ml-4 lg:ml-28">
        <p className="md:text-xl m-10 lg:text-2xl">مواعيد محجوزة</p>
        <div className='mt-5 mb-5 bg-white mr-8 p-2 w-72 rounded-lg md:p-1 md:pt-5 md:pb-5 md:w-5/6 lg:block lg:w-max'>
        <CardAppoinment
            specialistName='اخصائى دكتور رامى ياسر'
            status='الحضوربالعيادة'
            color='text-my-sin-500'
            appoinemnt='الاحد,14 مارس 2021 9.00 ص'
            meeting='http://meet.google.com/pef-wzvg-pgm'
            />
          </div>
        <p className="md:text-xl m-10 lg:text-2xl">مواعيد سابقة</p>
        {/* <div className='mt-5 bg-white p-5 w-64 rounded-lg md:w-1/1'> */}
         <div className='mt-5 mb-5 bg-white mr-8 p-2 w-72 rounded-lg  md:pt-5 md:pb-5 md:w-5/6 lg:block lg:w-max'>
          <CardAppoinment
            specialistName='اخصائى دكتور رامى ياسر'
            status='الحضوربالعيادة'
            color='text-my-sin-500'
            appoinemnt='الاحد,14 مارس 2021 9.00 ص'
            meeting='http://meet.google.com/pef-wzvg-pgm'
            />
          <CardAppoinment
            specialistName='اخصائى دكتور رامى ياسر'
            status='الحضوراونلاين'
            color='text-forest-green-500'
            appoinemnt='الاحد,14 مارس 2021 9.00 ص'
            meeting='http://meet.google.com/pef-wzvg-pgm'
            />
          <CardAppoinment
            specialistName='اخصائى دكتور رامى ياسر'
            status='الحضوربالعيادة'
            color='text-my-sin-500'
            appoinemnt='الاحد,14 مارس 2021 9.00 ص'
            meeting='http://meet.google.com/pef-wzvg-pgm'
          />
          <CardAppoinment
            specialistName='اخصائى دكتور رامى ياسر'
            status='الحضوراونلاين'
            color='text-forest-green-500'
            appoinemnt='الاحد,14 مارس 2021 9.00 ص'
            meeting='http://meet.google.com/pef-wzvg-pgm'
            /> 
        </div>
        </div>
    </>
  );
};

