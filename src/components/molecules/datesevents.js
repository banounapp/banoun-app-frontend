import React from 'react';
import { DateOffline, DateOnline,Calender, CalenderDoc} from '../atoms'


export const DatesEvents = () => {
  return (
   <>
   <div>
   <CalenderDoc />
   <h1 className=" lg:text-2xl">حجوزات قادمه</h1>
   <DateOffline
    clientname="حنان مصطفي"
    caseattend="الحضور بالعياده"
    date="الأحد، ١٤ مارس ٢٠٢١ ٠٥:٣٢ ص"
    linkdate=""

   />
    <DateOnline
    clientname="حنان مصطفي"
    caseattend="الحضور اونلاين"
    date="الأحد، ١٤ مارس ٢٠٢١ ٠٥:٣٢ ص"
    linkdate="https://meet.google.com/wrb-ddre-oeq"
    // className=" mt-10"

   />
   </div>
   </>
  );
};