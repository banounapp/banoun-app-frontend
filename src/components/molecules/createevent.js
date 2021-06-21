import React from 'react';
import { CalenderDoc } from '../atoms/calenderdoc';


export const CreateEvent = () => {
  return (
   <>
    <div>
    <label for="topic" className="md:text-xl lg:text-xl"> موضوع الحدث</label>
     <input type="text" name="topic" className=" block bg-white border-2 border-gray-200 rounded-lg shadow-lg  mt-5 mb-5 w-full h-10 md:w-10/12 md:h-12 lg:w-11/12 lg:h-12"/>
     <label for="topic" className="md:text-xl lg:text-xl "> عنوان الحدث</label>
     <input type="text" name="topic" className=" block bg-white border-2 border-gray-200 rounded-lg shadow-lg  mt-5 mb-5 w-full h-10 md:w-10/12 md:h-12 lg:w-11/12 lg:h-12"/>
     <label for="topic" className="md:text-xl lg:text-xl"> وصف الحدث</label>
     <input type="text" name="topic" className=" block bg-white border-2 border-gray-200 rounded-lg shadow-lg  mt-5 mb-5 w-full h-20 md:w-10/12 md:h-24 lg:w-11/12 lg:h-24"/>
    </div>
    <CalenderDoc/>
   </>
  );
};