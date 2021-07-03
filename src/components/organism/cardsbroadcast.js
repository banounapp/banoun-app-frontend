
import React from 'react';
import { CardBroadcast } from '../molecules';

export const CardsBroadcast = () => {
  return (
    <>
    
        <div className="flex mt-10 md:mt-24  lg:-mt-10 lg:px-20">
          <div class="w-7  overflow-hidden inline-block">
            <div class=" h-7  bg-spring-rain-700 -rotate-45 transform origin-top-right"></div>
          </div>
          <p className=" text-lg lg:text-2xl py-1">بث اليوم </p>
        </div>
   
    
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-3 md:px-20 lg:px-20">
        <CardBroadcast
         
       title="كيف تربي ابنك بدون عنف؟"
       desc=" الجمعه السادسه مساءا"
       link=" انضم الان"
          imageURL='images/image 50.png'
        />
         <CardBroadcast
         
         title="كيف تربي ابنك بدون عنف؟"
         desc=" الجمعه السادسه مساءا"
         link=" انضم الان"
            imageURL='images/image 50.png'
          />
           <CardBroadcast
         
         title="كيف تربي ابنك بدون عنف؟"
         desc=" الجمعه السادسه مساءا"
         link=" انضم الان"
            imageURL='images/image 50.png'
          />
        
       
          
         
         
      </div>
      
    </>
  );
};

