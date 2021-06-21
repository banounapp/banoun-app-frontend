import React from 'react';
import { Appointment } from '../components/organism';
import EditProfileDoc from '../components/organism/secEditDoctor'
import NavBar from '../components/organism/NavBar';

const ProfileDoc = () => {
  return (
    <div className='bg-alabaster-500 space-y-8'>
      <NavBar />
      <div className="lg:flex">
        <EditProfileDoc />
        <Appointment className="mt-8" />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default ProfileDoc;
