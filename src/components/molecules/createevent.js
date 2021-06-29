import React, { useState } from 'react';
import { CalenderDoc } from '../atoms/calenderdoc';
import { connect } from 'react-redux';
import { CreateEventSpecialist } from './../../redux/actions/specialist';

import { Calendar } from 'react-calendar';
import { Btn } from './../atoms/btn';

const CreateEvent = ({ CreateEventSpecialist }) => {
  const [value, setValueDate] = useState(null)
  const onChange = e => {
    setValueDate(e)
    console.log(value);
  }
  const [formData, setFormData] = useState({
    Specialization: "",
    Topic: "",
    description: "",
  })
  const { Specialization, Topic, description } = formData;
  const onChangeMethod = e => {
    console.dir(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const onSubmit = async e => {
    e.preventDefault();

    console.log(formData, value)
    await CreateEventSpecialist(formData.Specialization, formData.Topic, formData.description, value);
    // console.log(formData.Specialization)

  }
  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <label htmlFor="Specialization" className="md:text-xl lg:text-xl"> موضوع الحدث</label>
        <input
          type="text"
          value={Specialization}
          name="Specialization"
          onChange={e => onChangeMethod(e)}
          className=" block bg-white border-2 border-gray-200 rounded-lg shadow-lg  mt-5 mb-5 w-full h-10 md:w-10/12 md:h-12 lg:w-11/12 lg:h-12" />
        <label htmlFor="Topic" className="md:text-xl lg:text-xl" > عنوان الحدث</label>
        <input
          type="text"
          value={Topic}
          name="Topic"
          onChange={e => onChangeMethod(e)}
          className=" block bg-white border-2 border-gray-200 rounded-lg shadow-lg  mt-5 mb-5 w-full h-10 md:w-10/12 md:h-12 lg:w-11/12 lg:h-12" />
        <label htmlFor="description" className="md:text-xl lg:text-xl"> وصف الحدث</label>
        <input
          type="text"
          value={description}
          name="description"
          onChange={e => onChangeMethod(e)}
          className=" block bg-white border-2 border-gray-200 rounded-lg shadow-lg  mt-5 mb-5 w-full h-20 md:w-10/12 md:h-24 lg:w-11/12 lg:h-24" />

        <Calendar value={value} onChange={onChange} />


        <Btn stylee='px-4 mr-10 py-1  bg-silver-tree text-white rounded text-sm md:w-44 md:mt-10 md:mr-20 lg:p-2'>
          {' '}
          حفظ التغيرات
        </Btn>
      </form>
    </>
  );
};


export default connect(null, { CreateEventSpecialist })(CreateEvent);