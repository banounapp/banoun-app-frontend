import React from 'react';
import { Btn } from '../atoms';

import InputEdit from '../molecules/inputEdit';

const FormEdit = () => {
  return (
    <div>
      <p className='text-sm mt-4 ml-10 md:text-lg lg:text-xl'>تعديل الملف الشخصى</p>

      <div className=' bg-gunsmoke-100 border border-silver-tree rounded-full w-28 h-28 py-1 py-3  mt-2 m-auto flex  flex-row-reverse  md:w-40 md:h-40'>
        <img
          src='./images/pro.png'
          className='w-20 m-auto rounded-full mr-2 md:w-28 md:mr-3 md:mt-2'
        />
        <i className='  fas fa-edit cursor-pointer absolute top-24 mt-14 ml-2 rounded-lg w-10 text-xs text-silver-tree md:text-lg md:mt-28 md:px-12 lg:text-xl xl:mt-28 xl:ml-1 md:top-20 lg:top-20 xl:top-20 xl:text-md' />
      </div>
      {/* inputs //////////////////////////////////////////////////////////////////////////////////////////*/}

      <div className='py-3 px-7  md:px-24 lg:px-56  xl:px-72 2xl:px-96 ' >
        <div className=' flex ml-14'>
          <InputEdit
            name='الاسم الاول'
            value='ريم'
            stylep=' py-3 text-sm   md:text-xl '
            sdiv="ml-4 md:ml-16"
            style='w-20  border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500 text-sm md:w-40'
          />
          <InputEdit
            name='الاسم الثانى'
            value='محمد'
            stylep='py-3 text-sm md:text-lg md:text-xl'
            style=' w-20 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500  text-sm md:w-40'
          />
        </div>

        <div className=' '>
          <InputEdit
            name='العنوان'
            value='الاسماعيلية'
            stylep='py-3 text-sm md:text-lg md:text-xl'
            style='w-44 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500  text-sm md:w-96'
          />
          <InputEdit
            name='التليفون'
            value='939 64 218 010 '
            stylep='py-3 text-sm md:text-lg md:text-xl'
            style='w-44 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500  text-sm md:w-96'
          />
        </div>

         <Btn stylee='px-4 mr-10 py-1  bg-silver-tree text-white rounded text-sm md:w-44 md:mt-10 md:mr-20 lg:p-2'>
          {' '}
          حفظ التغيرات
        </Btn>
      </div>

  
    </div>
  );
};

export default FormEdit;


  