import React from 'react';
import CardProfile from '../molecules/cardprofile'
import { CardClient } from '../molecules/cardclients';



 const RightDocProfile = () => {

  
  return (
   <>
  <div className=" md:mr-44 lg:mr-16" >
  <CardProfile />
   <CardClient/>
  </div>
   </>
  );
};

export default RightDocProfile

