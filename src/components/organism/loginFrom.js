import { InputField } from '../molecules';
import { Button, Icons } from '../atoms';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';




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
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <div className="forms-container content-center">
          <div className="signin-signup ">
            <Form action="#" className="sign-up-form relative top-20 left-15 text-center content-center ">
              <h2 className="title font-bold text-lg " > تسجيل الدخول</h2>
              <div className="input-field mt-4 p-2">
                <InputField iconsProps={{ icon: "text-gray-500 fas fa-user p-3" }}
                  textFieldProps={{ name: 'username', placeholder: "اسم المستخدم", type: "text" }} />

              </div>

              <div className="input-field p-2">
                <InputField iconsProps={{ icon: "text-gray-500 fas fa-lock p-3" }}
                  textFieldProps={{ name: 'password', placeholder: "الرقم السرى", type: "password" }} />
              </div>
              <Button stylee="bg-silver-tree  text-white" type='submit'>
                تسجيل الدخول
              </Button>

              <p className="social-text mt-6">او انشأ حسابك عن طريق مواقع التواصل الاجتماعيه</p>
              <div className="social-media mt-6  mb-10 ">
                <Icons iconLink='fab fa-facebook-f' to='/login' /> &nbsp;
                <Icons iconLink='fab fa-google' to='/login' />
              </div>
            </Form>
          </div>
        </div>

      )}

    </Formik>

  );
}
