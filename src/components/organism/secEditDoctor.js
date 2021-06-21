import React, { useState } from 'react';
import { connect } from 'react-redux';
import PopupD from '../atoms/popD';
import FormEditDoctor from './formdoctor';

import { GetUer } from './../../redux/actions/userProfile';
import { useEffect } from 'react';

const EditProfileDoc = ({ GetUer, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    GetUer();
  }, [GetUer]);

  return (
    <div className='bg-white w-60 pt-4 pb-4 md:w-96 m-auto pt-5 lg:w-1/4 lg:mt-14 lg:sticky lg:top-0 '>
      <div className=''>
        {user && user.image ? (
          <img
            src={`https://banoun-app.herokuapp.com/api/upload/show/${user.image}`}
            className='m-auto rounded-full w-32 md:w-44 mb-5 lg:w-60'
          />
        ) : (
          <img
            src='https://freepikpsd.com/media/2019/10/avtar-png-9.png'
            className='m-auto rounded-full w-32 md:w-44 mb-5 lg:w-60'
          />
        )}

        <p className='text-center text-silver-tree-500 md:text-lg lg:text-xl'>
          تعديل الصفحة الشخصية{' '}
          <i
            className='p-2  fas fa-edit cursor-pointer'
            onClick={togglePopup}
          ></i>
        </p>
        {isOpen && (
          <PopupD
            content={
              <>
                <FormEditDoctor />
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
            <p className='text-silver-tree-500 mt-10 md:text-lg lg:text-xl'>
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

export default connect(mapStateToProps, { GetUer })(EditProfileDoc);
