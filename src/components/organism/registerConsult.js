import InputField from '../molecules/inputField';
import { Button } from '../atoms';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormSpecialist } from '../../services/formSpecialist';


import './registerConsult.css'


export const RegisterConsult = () => {
    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'لابد ان تكون 15 حرف على الاقل')
            .required('مطلوب'),

        email: Yup.string()
            .email('البريد الالكترونى غير صحيح')
            .required('مطلوب'),
        password: Yup.string()
            .min(6, 'لابد ان يكون 6 احرف على الاقل')
            .required('مطلوب'),
        bio: Yup.string()
            .min(7, 'لابد ان تكون 7 حرف على الاقل')
            .required('مطلوب'),
        gender: Yup.string()
            .max(7, 'لابد ان تكون 7 حرف على الاقل')
            .required('مطلوب'),
        phone: Yup.number()
            .min(8)
            .required('مطلوب'),
        job: Yup.string()
            .max(7, 'لابد ان تكون 7 حرف على الاقل')
            .required('مطلوب'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'لابد ان يكون متشابه')
            .required('مطلوب'),
        NationalID: Yup.string()
            .required('مطلوب'),
        address: Yup.string()
            .required('مطلوب'),
        Specialization: Yup.string()
            .required('مطلوب'),
        city: Yup.string()
            .required('مطلوب'),

    })
    const onSubmit = async (values) => {
        const res = await FormSpecialist(values);
        console.log(values);
        console.log(res);

    };
    console.log(FormSpecialist());

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                bio: '',
                gender: '',
                phone: '',
                job: '',
                image: '',
                NationalID: '',
                certification: '',
                confirmPassword: '',
                address: '',
                Specialization: '',
                city: '',




            }}
            // validationSchema={validate}
            // onSubmit={async (values, { setSubmitting }) => {
            //     await formSpecialist(values)
            //     setSubmitting(false);

            // }}
            validationSchema={validate}
            onSubmit={(values) => {
                console.log(values);
                onSubmit(values)

            }

            }


        >


            {formik => (
                <Form action="#"
                    className="text-center content-center justify-center md:mx-10 lg:mr-30 " >
                    <h2 className=" my-10 lg:my-7 text-lg md:text-xl lg:text-2xl lg:ml-40" >انشاء حساب كمتخصص</h2>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:gris-cols-2 -mr-80'>
                        <InputField
                            iconsProps={{ icon: "text-gray-500 fas fa-user " }}
                            textFieldProps={{ name: 'username', placeholder: "الاسم بالكامل", type: "text" }} />

                        {/* <InputField
                            iconsProps={{ icon: " fas fa-camera " }}
                            textFieldProps={{ name: 'camera', placeholder: "", type: "file" }} /> */}

                        <InputField
                            iconsProps={{ icon: "text-gray-500 fas fa-phone " }}
                            textFieldProps={{ name: 'phone', placeholder: "رقم التليفون", type: "number" }} />

                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-envelope " }}
                            textFieldProps={{ name: 'email', placeholder: "البريد الالكترونى", type: "email" }} />

                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-key " }}
                            textFieldProps={{ name: 'password', placeholder: "الرقم السرى", type: "password" }} />

                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-key " }}
                            textFieldProps={{ name: 'confirmPassword', placeholder: "تأكيد الرقم السرى", type: "password" }} />
                        {/* <InputField iconsProps={{ icon: "text-gray-500 fas fa-id-card-alt" }}
                            textFieldProps={{ name: 'id', placeholder: "الرقم القومى ", type: "number" }} /> */}
                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-map-marker-alt" }}
                            textFieldProps={{ name: 'address', placeholder: "العنوان  ", type: "text" }} />
                        <InputField
                            iconsProps={{ icon: "text-gray-500 fas fa-map-marker-alt " }}
                            textFieldProps={{ name: 'city', placeholder: "المحافظه ", type: "text" }} />

                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-briefcase " }}
                            textFieldProps={{ name: 'job', placeholder: "وظيفتك ", type: "text" }} />

                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-venus-mars" }}
                            textFieldProps={{ name: 'gender', placeholder: "النوع", type: "text" }} />
                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-venus-mars" }}
                            textFieldProps={{ name: 'Specialization', placeholder: "التخصص", type: "text" }} />

                        <InputField iconsProps={{ icon: "text-gray-500 fas fa-edit " }}
                            textFieldProps={{ name: 'bio', placeholder: " نبذه عنك ", type: "text" }} />
                        <div className="file-input">
                            <input type="file" id="file" className="file" name='certification' />
                            <label htmlFor="file">
                                Select file
                                <p className="file-name"></p>
                            </label>
                        </div>
                        {/* <div class="wrapper">
                            <div class="file-upload">
                                <input type="file" />
                                <i class="fa fa-arrow-up"></i>
                            </div>
                        </div> */}

                    </div>




                    <Button stylee="bg-silver-tree lg:ml-40 text-white my-4 content-center" type='submit'>
                        دخول
                    </Button>

                </Form>

            )}

        </Formik>

    );
}


