import React, { useState } from 'react';
import Popup from '../components/atoms/popup';
const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type='button' value='Click to Open Popup' onClick={togglePopup} />
      {isOpen && (
        <Popup
          content={
            <>
              <b>Design your Popup</b>
              <button>edit</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default EditProfile;

// import React from 'react';
// import { Appointment } from '../components/organism';
// import EditProfile from '../components/organism/secEditProfile'
// import NavBar from '../components/organism/NavBar';

// const Profile = () => {
//   return (
//     <div className='bg-alabaster-500 space-y-8'>
//       <NavBar />
//       <div className="lg:flex">
//         <EditProfile />
//         <Appointment className="mt-8" />
//       </div>
//       {/* <Footer/> */}
//     </div>
//   );
// };

// export default Profile;

