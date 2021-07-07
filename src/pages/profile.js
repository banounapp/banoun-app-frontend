import React from 'react';
import { Appointment } from '../components/organism';
import EditProfile from '../components/organism/secEditProfile'
import NavBar from '../components/organism/NavBar';
import Login from './Login';

const Profile = () => {
  if((localStorage.token == "null"|| !localStorage.token)){
    alert("you are not authorized please login")
    return (
      <Login></Login>
    )
  }
  return (
    <div className='bg-alabaster-500 space-y-8' style={{minHeight:"100vh"}} >
      <div className="lg:flex">
        <EditProfile />
        <Appointment className="mt-8" />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Profile;
