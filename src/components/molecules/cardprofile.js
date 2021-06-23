import React ,{useEffect,useState}from 'react';
import { ModalEditDoc } from "../atoms";
import { connect } from 'react-redux';
import {  Get_Profile_Specialist } from './../../redux/actions/specialist';
const CardProfile = ({    Get_Profile_Specialist , specialist_auth}) => {

 const specialist = specialist_auth
  
  useEffect(() => {
    
        Get_Profile_Specialist()

  },[specialist_auth])
  return (
   <>

   <div className=" bg-white border-2 border-gray-200 w-60 h-96 md:w-96 md:h-11/12 lg:w-60 lg:h-96 mr-10 lg:mr-0 rounded-lg shadow-lg mt-28  ">
        
       <div className="rounded-full h-32 w-32  bg-silver-tree-200 border-2 border-gray-200 m-auto  relative -top-16">
       <img src="images/1-business-woman-removebg-preview 2.png" alt="profile pic" className=" w-24 h-28 mr-3 mt-3 rounded-full"/>
       </div>

       <h2  className=" text-center relative -top-10 text-2xl"> {specialist && specialist[0]?.username}</h2>
       <div className="relative -top-10 text-center"> 
       <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         
        
       </div>
       <ul className=" relative -top-9 right-3 md:text-lg lg:text-sm text-gray-700">
           <ModalEditDoc/>
           <li><i class="fas fa-shopping-bag px-3 py-1"></i>   {specialist && specialist[0]?.job} </li>
         
           <li> <i class="fas fa-map-marker-alt px-3 py-1"></i> {specialist && specialist[0]?.address} </li>
           <li> <i class="fas fa-venus-mars px-3 py-1"></i>{specialist && specialist[0]?.gender}</li>
           <li><i class="fas fa-dollar-sign px-3 py-1"></i>{specialist && specialist[0]?.price}</li>
           <li><i class="fas fa-phone-square-alt px-3 py-1"></i> {specialist && specialist[0]?.phone}</li>
           {/* <li><i class="far fa-address-card px-3 py-1"></i> 2652569847694</li> */}

           <li><span className="px-3 text-2xl xl:text-xl xl:px-1">@</span> {specialist && specialist[0]?.email} </li>
       </ul>
       

   </div>

   </>
  );
};
const mapStateToProps = (state) => ({

 specialist_auth: state.specialist.specialist_auth
});

export default connect(mapStateToProps, {  Get_Profile_Specialist } )(CardProfile);