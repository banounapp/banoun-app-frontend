import React from 'react'
import {ErrorMessage, useField} from 'formik'


export const TextField = ({...props}) => {
    const [field,meta]=useField(props);
    return (
        <div>
            <input type='text'
                className=
                {`bg-gray-100 text-gray p-3 block outline-none rounded-full 
            ${meta.touched && meta.error && 'is-invalid'}
            `}
                style={{ width: "200%" }}
                {...field} {...props}
            />
            <ErrorMessage name={field.name}>{msg => <div className='text-red'>{msg}</div>}</ErrorMessage>
        </div>
    )
}
