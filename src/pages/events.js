import React from 'react';
import {
  HeaderEvents,
  WeekBroadcast,
  CardsBroadcast,
  EventConsult,
  NextBroadcast,
  Footer


} from '../components/organism';

import NavBar from '../components/organism/NavBar';

const Events = () => {
  return (
    <>
      <div className='bg-alabaster-500 '>
         
        <NavBar />
        <HeaderEvents />
        <WeekBroadcast/>
        <CardsBroadcast/>
        <EventConsult/>
        <NextBroadcast/>
        
      </div>
      
      {/* <Footer /> */}
    </>
  );
};

export default Events;
