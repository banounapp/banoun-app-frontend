import React ,{useEffect,useState}from 'react';

import { connect } from 'react-redux';
import {  Get_Profile_Specialist } from './../../redux/actions/specialist';


const VideoEvent = ({ Get_Profile_Specialist , specialist_auth}) => {

  const specialist = specialist_auth
  
  useEffect(() => {
    
        Get_Profile_Specialist()

  },[specialist_auth])
  return (
   <>
  <div >
  <div className="bg-silver-tree-600 w-full lg:w-full h-20 lg:h-20 rounded-lg mt-6">
<div className="flex justify-between">
<div className="flex">
  <div className="rounded-full  lg:h-12 lg:w-12 lg:bg-silver-tree-200 lg:border-2 lg:border-gray-200  m-auto mt-4 mr-5 ">
       <img src="images/1-business-woman-removebg-preview 2.png" alt="profile pic" className=" w-7 h:9 lg:w-8 lg:h-10 mr-1 mt-1  rounded-full"/>
       </div>
       <div className=" mr-5 mt-4 text-white">
           <p className=" text-xs md:text-lg lg:text-lg">{specialist && specialist[0]?.username}</p>
           <p className=" text-xs md:text-lg lg:text-lg">14 يونيو الساعه12:20 م</p>
       </div>
  </div>
    <div className=" text-3xl text-white ml-2 mt-5 lg:ml-10 lg:mt-5"><a href="#">...</a></div>
</div>

      </div>

      
      <video className="lg:w-full md:w-full h-44 md:h-48 lg:h-56  mx-auto " controls>
            <source src="../../assets/test.mkv" type="video/mkv" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>

     
    
  
  </div>
   </>
  );
};


const mapStateToProps = (state) => ({

  specialist_auth: state.specialist.specialist_auth
 });
 
 export default connect(mapStateToProps, {  Get_Profile_Specialist } )(VideoEvent);
