import React from 'react';
import CardProfile from '../molecules/cardprofile'
import { CardClient } from '../molecules/cardclients';



 const RightDocProfile = ({usersArr}) => {

  
  return (
   <>
  <div className=" md:mr-44 lg:mr-16" >
  <CardProfile />
   <CardClient usersArr={usersArr}/>
  </div>
   </>
  );
};

export default RightDocProfile

