import InputField from '../molecules/inputField';
import { Button, Icons } from '../atoms';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../services/auth';
import { Link } from 'react-router-dom';




export const FormField = () => {
  const validate = Yup.object({
    username: Yup.string()
      .max(15, 'لابد ان تكون 15 حرف على الاقل')
      .required('مطلوب'),
    firstname: Yup.string()
      .max(7, 'لابد ان تكون 7 حرف على الاقل')
      .required('مطلوب'),
    lastname: Yup.string()
      .max(7, 'لابد ان تكون 7 حرف على الاقل')
      .required('مطلوب'),
    email: Yup.string()
      .email('البريد الالكترونى غير صحيح')
      .required('مطلوب'),
    password: Yup.string()
      .min(6, 'لابد ان يكون 6 احرف على الاقل')
      .required('مطلوب'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'لابد ان يكون متشابه')
      .required('مطلوب')
  })

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={async (values, { setSubmitting }) => {
        await signup(values)
        setSubmitting(false);

      }}
    >

      {formik => (
        <Form action="#"
          className="text-center content-center justify-center md:mx-10 " >
          <h2 className="my-10 lg:my-7 text-lg md:text-xl lg:text-2xl " >انشاء الحساب</h2>

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-user " }}
            textFieldProps={{ name: 'firstname', placeholder: "الاسم الاول", type: "text" }} />

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-user " }}
            textFieldProps={{ name: 'lastname', placeholder: "الاسم التانى", type: "text" }} />

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-user " }}
            textFieldProps={{ name: 'username', placeholder: "اسم المستخدم", type: "text" }} />

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-envelope " }}
            textFieldProps={{ name: 'email', placeholder: "البريد الالكترونى", type: "email" }} />

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-lock " }}
            textFieldProps={{ name: 'password', placeholder: "الرقم السرى", type: "password" }} />

          <InputField iconsProps={{ icon: "text-gray-500 fas fa-lock " }}
            textFieldProps={{ name: 'confirmPassword', placeholder: "تأكيد الرقم السرى", type: "password" }} />


          <Button stylee="bg-silver-tree  text-white my-4" type='submit'>
            انشاء الحساب
                </Button>

          <p className="social-text text-base mt-6 ">او انشأ حسابك عن طريق مواقع التواصل الاجتماعيه</p>

          <Button stylee="bg-gray-100 border-2 border-gray-200 text-gray-600 my-3  " type='submit'>
            Facebook  <Icons iconLink='fab fa-facebook-f' to='/login' />
          </Button>
          <Button stylee="bg-gray-100 border-2 border-gray-200 text-gray-600 mx-3 my-3" type='submit'>
            Google  <Icons iconLink='fab fa-google' to='/login' />
          </Button><br></br>

          <p className=" mx-2 my-5  inline-block lg:hidden">لديك حساب؟</p>
          <Link to='/login' className="text-silver-tree inline-block lg:hidden ">
            تسجيل الدخول
                      </Link>

        </Form>

      )}

    </Formik>

  );
}

