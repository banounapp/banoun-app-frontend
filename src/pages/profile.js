import React from 'react';
import { Appointment } from '../components/organism';
import EditProfile from '../components/organism/secEditProfile'
import NavBar from '../components/organism/NavBar';

const Profile = () => {
  return (
    <div className='bg-alabaster-500 space-y-8'>
      <NavBar />
      <div className="lg:flex">
        <EditProfile />
        <Appointment className="mt-8" />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Profile;
