import React from 'react';
import { Card } from '../atoms';

export const CardsArticles = () => {
  return (
    <>
      <div className='block m-8 p-4 md:flex  justify-around flex-wrap '>
        <Card
          stylee='w-full  md:w-1/3  lg:w-1/4'
          category='الاسبوع الاول'
          des='اسبوع بعد اسبوع'
          imageSource='images/articlee.jpeg'
        />
      </div>
    </>
  );
};
