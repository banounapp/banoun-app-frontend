import React from 'react';
import {CardProfile} from '../molecules'
import { CardClient } from '../molecules/cardclients';


export const RightDocProfile = () => {
  return (
   <>
  <div className=" md:mr-44 lg:mr-16" >
  <CardProfile/>
   <CardClient/>
  </div>
   </>
  );
};

