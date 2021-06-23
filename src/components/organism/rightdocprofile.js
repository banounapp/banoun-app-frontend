import React, {useEffect} from 'react';
import CardProfile from '../molecules/cardprofile'
import { CardClient } from '../molecules/cardclients';
import {connect} from 'react-redux'
import {  Get_Profile_Specialist } from './../../redux/actions/specialist';


 const RightDocProfile = ({Get_Profile_Specialist}) => {

  
  return (
   <>
  <div className=" md:mr-44 lg:mr-16" >
  <CardProfile />
   <CardClient/>
  </div>
   </>
  );
};

export default connect(null, { Get_Profile_Specialist })(RightDocProfile)

