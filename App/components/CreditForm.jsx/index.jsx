import {Formik, Form, useField} from 'formik';
import {Text, Input} from 'react-native';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
export const CreditForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email addresss`')
          .required('Required'),
      })}
      onSubmit={async (values, {setSubmitting}) => {
        await new Promise(r => setTimeout(r, 500));
        setSubmitting(false);
      }}>
      <Form>
        <MyTextInput
          label="Name"
          name="name"
          type="text"
          placeholder="Javier Hernandez"
        />
        <MyTextInput
          label="Correo"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
        />

        <button type="submit">
          <Text>Submit</Text>
        </button>
      </Form>
    </Formik>
  );
};
