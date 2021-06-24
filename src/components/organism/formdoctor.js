import React, { useState } from 'react';
import { Btn } from '../atoms';
import InputEdit from '../molecules/inputEdit';
import { connect } from 'react-redux';
import { Get_Edit_Specialist } from './../../redux/actions/specialist';
const FormEditDoctor = ({ Get_Edit_Specialist, specialist, togglePopup }) => {

  const [formData, setFormData] = useState({

    price: specialist?.price ? specialist.price : "",
    job: specialist?.job ? specialist.job : "",
    city: specialist?.city ? specialist.city : "",
    bio: specialist?.bio ? specialist.bio : "",
    phone: specialist?.phone ? specialist.phone : "",
    username: specialist?.username ? specialist.username : "",
    Specialization: specialist?.Specialization ? specialist.Specialization : "",
  })

  const { username, price, job, city, bio, phone, Specialization } = formData;
  const onChangeMethod = e => {
    console.dir(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData)
    await Get_Edit_Specialist(formData);
    togglePopup()

  }


  return (
    <div>
      <div class='grid grid-cols-1 divide-y divide-sazerac-500 w-full'>
        <p className='text-sm mt-4 ml-10 md:text-lg lg:text-2xl xl:mr-28 lg:mr-10 '>تعديل الملف الشخصى</p>
        <div>{''}</div>
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="xl:flex xl:mt-14 lg:flex 2xl:mr-28">
          <div className='border border-red bg-gunsmoke-100 border border-silver-tree rounded-full w-28 h-28 py-1 mt-8 py-3  m-auto flex  flex-row-reverse md:w-40 md:h-40 md:mt-10  '>
            <img
              src={`https://banoun-app.herokuapp.com/api/upload/show/${specialist?.image.filename}`}
              className='w-20 m-auto rounded-full mr-2 md:w-28 md:mr-3 md:mt-2'
            />
            <i className='  fas fa-edit cursor-pointer absolute my-20 rounded-lg w-10 text-md w-10 mt-20 ml-0  text-silver-tree md:w-14 md:my-32' />
          </div>

          <InputEdit
            name='نبذة عنك'
            FormName="bio"
            value={bio}
            sdiv="mr-14 md:mt-4 md:mr-28 lg:ml-24 xl:ml-16 xl:w-2/3"
            stylep='py-2 text-sm   md:text-xl lg:text-2xl 2xl:mr-14'
            style='w-44 p-2 rounded border border-silver-tree border bg-gunsmoke-100  xs:w-32 h-16 text-xs py-4 text-cape-cod-500 md:w-96 md:p-14 md:text-lg lg:text-xl  md:p-20 xl:w-1/1 xl:p-24 2xl:p-24 2xl:w-11/12 2xl:mr-14  xl:p-8 xl:px-8 xl:mr-14 '
            onChangeMethod={onChangeMethod}
          />
        </div>
        <div className='py-5 md:mt-4 px-14 md:px-28'>
          <div className="md:flex">
            <InputEdit
              name='الاسم '
              FormName="username"
              value={username}
              sdiv="ml-4 md:ml-16 md:mt-4 lg:ml-12 xl:ml-40 lg:ml-12"
              stylep='py-2 text-sm  md:text-xl lg:text-2xl'
              style='w-36 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 md:text-lg md:w-40 lg:text-xl lg:w-60 xl:w-60 2xl:w-96'
              onChangeMethod={onChangeMethod}
            />
            <InputEdit
              name='التخصص '
              FormName="Specialization"
              value={Specialization}
              sdiv=" md:mt-4"
              stylep='py-2 text-sm  md:text-xl lg:text-2xl'
              style='w-36 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 md:text-lg md:w-40 lg:text-xl lg:w-60 xl:w-60 2xl:w-96'
              onChangeMethod={onChangeMethod}
            />
          </div>
          <div className="md:flex">
            <InputEdit
              name='الوظيفة '
              FormName="job"
              value={job}
              sdiv="ml-4 md:ml-16 md:mt-4 lg:ml-12 xl:ml-40"
              stylep='py-2 text-sm   md:text-xl lg:text-2xl '
              style='w-36 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 md:text-lg md:w-40 lg:text-xl lg:w-60 xl:w-60 2xl:w-96'
              onChangeMethod={onChangeMethod}
            />
            <InputEdit
              name='العنوان '
              FormName="city"
              value={city}
              sdiv=" md:mt-4 "
              stylep='py-2 text-sm   md:text-xl lg:text-2xl'
              style='w-36 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 md:text-lg md:w-40 lg:text-xl lg:w-60  xl:w-60 2xl:w-96'
              onChangeMethod={onChangeMethod}
            />
          </div>
          <div className="md:flex">
            <InputEdit
              name='التليفون'
              value={phone}
              FormName="phone"
              sdiv="ml-4 md:ml-16 md:mt-4 lg:ml-12 xl:ml-40"
              stylep='py-2 text-sm   md:text-xl lg:text-2xl '
              style=' rounded w-36 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 md:text-lg  md:w-40 lg:text-xl lg:w-60 xl:w-60 2xl:w-96'
              onChangeMethod={onChangeMethod}
            />
            <InputEdit
              name='سعر الجلسة'
              FormName="price"
              value={price}
              stylep='py-2 text-sm   md:text-xl lg:text-2xl '
              sdiv=" md:mt-4"
              style=' rounded w-36 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 md:text-lg  md:w-40 lg:text-xl lg:w-60 xl:w-60 2xl:w-96'
              onChangeMethod={onChangeMethod}
            />
          </div>


          {/* <div className="md:flex"> */}

          {/* <div  className="ml-4 md:ml-16 md:mt-4 lg:ml-12 xl:ml-40 ">
          <p className='py-2 text-sm md:text-lg lg:text-2xl' >بطاقة الرقم القومى</p>
          <div className='rounded w-40 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 lg:w-60 lg:p-4 xl:p-6 xl:w-60 2xl:w-96'>
            <span class='mt-2 text-base leading-normal text-sm text-silver-tree lg:text-xl'>
            <i class="fas fa-image text-xs"></i> reem.png 
              <input type='file' className='text-xs lg:text-lg' />
            </span>
          </div>
        </div> */}

          {/* <div className="md:mt-4">
          <p className='py-2 text-sm md:text-lg lg:text-2xl'>  سيرة الذاتية</p>
          <div className='rounded w-40 border border-silver-tree rounded bg-gunsmoke-100 py-2 px-2  text-xs text-cape-cod-500 lg:w-60 lg:p-4 xl:p-6 xl:w-60 2xl:w-96'>
            <span class='mt-2 text-base leading-normal text-sm text-silver-tree lg:text-lg lg:text-xl'>
            <i class="fas fa-image text-xs lg:text-sm "></i> reem.png 
              <input type='file' className='text-xs lg:text-lg' />
            </span>
          </div>
        </div>
        </div> */}

          <Btn stylee='sm:px-11 sm:mr-10 py-1  bg-silver-tree text-white rounded md:text-lg md:mt-8 md:mr-28 lg:w-56 lg:p-2 lg:mr-32 lg:text-lg xl:text-xl xl:mr-60 lg:w-96 2xl:w-56 2xl:mr-72' >
            {' '}
            حفظ التغيرات

          </Btn>

        </div>
      </form>


    </div>
  );
};

const mapStateToProps = (state) => ({
  specialist: state.specialist.specialist_auth,
});

export default connect(mapStateToProps, { Get_Edit_Specialist })(FormEditDoctor);
























