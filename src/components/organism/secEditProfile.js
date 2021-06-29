import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Popup from '../atoms/popD';
import FormEdit from './formprofile';

import { GetUer } from './../../redux/actions/userProfile';
import { useEffect } from 'react';
import { logout } from "./../../services/auth"

const EditProfile = ({ GetUer, user, history,dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    GetUer(dispatch);
  }, [GetUer]);

 
  return (
    <div className='bg-white w-60 pt-4 pb-4 md:w-96 m-auto pt-5 lg:w-1/4 lg:mt-14 lg:sticky lg:top-0 '>
      <div className=''>
      
          <img
            src={user?.image?`https://banoun-app.herokuapp.com/api/upload/show/${user.image.filename}`:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
            className='m-auto rounded-full w-32 md:w-44 mb-5 lg:w-60'
            alt=""
          />
        
        

        <p className='text-center text-silver-tree-500 md:text-lg lg:text-xl' onClick={togglePopup} style={{ cursor: "pointer" }}>
          تعديل الصفحة الشخصية{' '}
          <i
            className='p-2  fas fa-edit cursor-pointer'

          ></i>
        </p>
        {isOpen && (
          <Popup
            content={
              <>
                <FormEdit togglePopup={togglePopup} />
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
      <div className='text-center mt-3 sm:w-56 md:text-lg m-auto lg:text-xl'>
        {user && (
          <>
            <p>{user.username}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p className='text-silver-tree-500 mt-10 md:text-lg lg:text-xl' onClick={(e) => logout(history,dispatch)} style={{ cursor: "pointer" }}>
              {' '}
              <i class=' p-2 fas fa-sign-out-alt'></i>تسجيل الخروج{' '}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userProfile.user,
});
const mapDispatchToProps = (dispatch) =>{return {dispatch,GetUer}};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditProfile));