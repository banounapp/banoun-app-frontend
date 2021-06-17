import React from 'react';
import { NavBar, Footer, EditProfile , Appointment} from '../components/organism';

const Profile = () => {
  return (
    <div className='bg-alabaster-500 space-y-8'>
      <NavBar />
      <div className="lg:flex">
      <EditProfile />
      <Appointment className="mt-8"/>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
