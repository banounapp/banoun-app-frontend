import React from 'react';
import { Btn } from '../atoms';

import InputEdit from '../molecules/inputEdit';

const FormEdit = () => {
  return (
    <div>
      <p className='text-sm mt-4 ml-10 md:text-lg'>تعديل الملف الشخصى</p>
      <div className='border border-red bg-gunsmoke-100 border border-silver-tree rounded-full w-28 h-28 py-1 mt-8 py-3  m-auto flex  flex-row-reverse md:w-40 md:h-40 mt-10'>
        <img src='./images/pro.png' className='w-20 m-auto rounded-full mr-2 md:w-28 md:mr-3 md:mt-2' />
        <i className='  fas fa-edit cursor-pointer absolute my-20 rounded-lg w-10 text-lg text-silver-tree md:w-14 md:my-32' />
      </div>
      <div className='py-3 md:mt-4'>
        <div className=' flex  justify-around md:px-10  lg:px-1 lg:ml-24  xl:flex-wrap lg:px-10'>
          <InputEdit
            name='الاسم الاول'
            value='ريم'
            style='w-20 border border-silver-tree border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2    xl:w-56 2xl:w-56 sm:w-28 sm:mr-1  md:w-40 lg:w-56 '
          />
          <InputEdit
            name='الاسم الثانى'
            value='محمد'
            style=' w-20 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-1 lg:px-4  2xl:w-56 sm:w-28 sm:mr-1  md:w-40 lg:w-56  '
          />
        </div>
        <div className=' md:mt-4 md:px-2    2xl:px-10 xs:px-10 lg:px-4 '>
          <InputEdit
            name='العنوان'
            value='الاسماعيلية'
            style='w-44 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 md:mt-4 md:w-full lg:w-full xl:w-5/6 2xl:w-5/6 sm:w-72'
          />
          <InputEdit
            name='التليفون'
            value='939 64 218 010 '
            style='border border-silver-tree rounded bg-gunsmoke-100 py-1 px-1 md:mt-4 md:w-full lg:w-full xl:w-5/6 2xl:w-5/6 sm:w-72'
          />
        </div>

        <Btn stylee='sm:px-11 sm:mr-10 py-1  bg-silver-tree text-white rounded  md:px-10 md:mr-20 md:mt-4 lg:mr-56 lg:my-10 sm:mr-14'>
          {' '}
          حفظ التغيرات
        </Btn>
      </div>
    </div>
  );
};

export default FormEdit;

{
  /* <InputEdit
name='الاسم الاول'
value='ريم'
style='border border-silver-tree rounded bg-gunsmoke-100 xl:px-1 xl:py-1'
/>
<InputEdit
name='الاسم الثانى'
value='محمد'
style='border border-silver-tree rounded bg-gunsmoke-100 xl:px-1 xl:py-1'
/>
</div>
<div className='xl:px-10 mt-2 w-full md:w-44'>
<InputEdit
name='العنوان'
value='الاسماعيلية'
style='border border-silver-tree rounded bg-gunsmoke-100 xl:px-1 xl:py-1 w-96 mb-1 lg:w-72 xl:w-96 '
/>
<InputEdit
name='التليفون'
value='939 64 218 010 '
style='border border-silver-tree rounded bg-gunsmoke-100 px-1 py-1 w-96 mt-1 lg:w-72 xl:w-96'
/>
</div>

<Btn stylee=' py-1  bg-silver-tree text-white px-10 mt-10 rounded mr-32 w-44 '>
{' '}
حفظ التغيرات
</Btn> */
}
