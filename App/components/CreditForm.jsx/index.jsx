import {Formik, Form, useField} from 'formik';
import {View, Text, TextInput} from 'react-native';
import * as Yup from 'yup';

import StyledButton from '../StyledButton';

const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Text>{label}</Text>
      <TextInput className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <Text>{meta.error}</Text> : null}
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
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Form>
            <View>
              <MyTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Javier Hernandez"
              />
            </View>
            <View>
              <MyTextInput
                label="Correo"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
              />
            </View>

            <StyledButton title="Submit" type="submit" />
          </Form>
        </View>
      )}
    </Formik>
  );
};
