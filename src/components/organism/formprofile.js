
import React, { useState } from 'react';
import { Btn } from '../atoms';

import InputEdit from '../molecules/inputEdit';
import { GetEditUer } from './../../redux/actions/userProfile';
import { connect } from 'react-redux';

const FormEdit = ({ GetEditUer, user, togglePopup }) => {
  console.log(user)
  const [formData, setFormData] = useState({
    lastname: user?.lastName ? user.lastName : "",
    firstname: user?.firstName ? user.firstName : "",
    phone: user?.phone ? user.phone : "",
    username: user?.username ? user.username : "",
  })
  const { lastname, firstname, phone, username } = formData;
  const onChangeMethod = e => {
    console.dir(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData)
    const IS_DATA_CHANGED = await GetEditUer(formData);

    IS_DATA_CHANGED && togglePopup()
  }
  


  return (
    <div>
      <p className='text-sm mt-4 ml-10 md:text-lg lg:text-xl'>تعديل الملف الشخصى</p>

      <div className=' bg-gunsmoke-100 border border-silver-tree rounded-full w-28 h-28 py-1 py-3  mt-2 m-auto flex  flex-row-reverse  md:w-40 md:h-40'>
        <img
          src={(user?.image?.filename)? `https://banoun-app.herokuapp.com/api/upload/show/${user.image.filename}`:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
          className='w-20 m-auto rounded-full mr-2 md:w-28 md:mr-3 md:mt-2'
        />
        <i className='  fas fa-edit cursor-pointer absolute top-24 mt-14 ml-2 rounded-lg w-10 text-xs text-silver-tree md:text-lg md:mt-28 md:px-12 lg:text-xl xl:mt-28 xl:ml-1 md:top-20 lg:top-20 xl:top-20 xl:text-md' />
      </div>
      {/* inputs //////////////////////////////////////////////////////////////////////////////////////////*/}

      <form className='py-3 px-7  md:px-24 lg:px-56  xl:px-72 2xl:px-96 ' onSubmit={e => onSubmit(e)} >
        <div className=' flex ml-14'>
          <InputEdit
            name='الاسم الاول'
            FormName="firstName"
            value={firstname}
            stylep=' py-3 text-sm   md:text-xl '
            sdiv="ml-4 md:ml-16"
            style='w-20  border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500 text-sm md:w-40'
            onChangeMethod={onChangeMethod}
          />

          <InputEdit
            name='الاسم الثانى'
            FormName="lastName"
            value={lastname}
            stylep='py-3 text-sm md:text-lg md:text-xl'
            style=' w-20 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500  text-sm md:w-40'
            onChangeMethod={onChangeMethod}

          />
        </div>

        <div className=' '>
          <InputEdit
            name='اسم المستخدم'
            FormName="username"
            value={username}
            stylep='py-3 text-sm md:text-lg md:text-xl'
            style='w-44 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500  text-sm md:w-96'
            onChangeMethod={onChangeMethod}

          />
          <InputEdit
            name='التليفون'
            FormName="phone"
            value={phone}
            stylep='py-3 text-sm md:text-lg md:text-xl'
            style='w-44 border border-silver-tree rounded bg-gunsmoke-100 py-1 px-2 text-cape-cod-500  text-sm md:w-96'
            onChangeMethod={onChangeMethod}

          />
        </div>

        <Btn stylee='px-4 mr-10 py-1  bg-silver-tree text-white rounded text-sm md:w-44 md:mt-10 md:mr-20 lg:p-2'>
          {' '}
          حفظ التغيرات
        </Btn>
      </form>


    </div>
  );
};


const mapStateToProps = (state) => ({
  user: state.userProfile.user,
});

export default connect(mapStateToProps, { GetEditUer })(FormEdit);


