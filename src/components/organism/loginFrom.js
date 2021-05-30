
import InputField from './../molecules/inputField';
import { Button, Icons } from './../atoms';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { login } from '../../services/auth'
import { Link } from 'react-router-dom';

export const FormFieldLogin = () => {


  const validate = Yup.object({
    username: Yup.string()
      .max(15, 'لابد ان تكون 15 حرف على الاقل')
      .required('مطلوب'),
    password: Yup.string()
      .min(6, 'لابد ان يكون 6 ارقام على الاقل')
      .required('مطلوب'),

  })

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',

      }}
      validationSchema={validate}
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting(false);
      }
      }
    >
      {formik => (

        <Form action="#"

          className="text-center content-center justify-center md:mx-10 " >

          <h2 className="my-10 lg:my-7 text-lg md:text-xl lg:text-2xl  " > تسجيل الدخول</h2>

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-user " }}
            textFieldProps={{ name: 'username', placeholder: "اسم المستخدم", type: "text" }} />

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-lock " }}
            textFieldProps={{ name: 'password', placeholder: "الرقم السرى", type: "password" }} />

          <Button stylee="bg-silver-tree  text-white my-4" type='submit'>
            تسجيل الدخول
       </Button>

          <p className="social-text text-base mt-6 ">او  سجل دخول عن طريق مواقع التواصل الاجتماعيه</p>

          <Button stylee="bg-gray-100 border-2 border-gray-200 text-gray-600 my-3  " type='submit'>
            Facebook  <Icons iconLink='fab fa-facebook-f' to='/login' />
          </Button>
          <Button stylee="bg-gray-100 border-2 border-gray-200 text-gray-600 mx-3 my-3" type='submit'>
            Google  <Icons iconLink='fab fa-google' to='/login' />
          </Button><br></br>

          <p className=" mx-2 my-5  inline-block lg:hidden ">ليس لديك جساب؟  </p>
          <Link to='/' className="text-silver-tree  inline-block  lg:hidden">
            انشاء حساب
             </Link>

        </Form>

      )}

    </Formik>

  );
}
