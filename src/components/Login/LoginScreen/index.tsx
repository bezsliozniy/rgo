import styles from './index.module.scss';
import { Button, Divider, Flex, Input, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import GoogleButton from '@/components/UI/GoogleButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoginCredentials from '../LoginCredentials';

const LoginScreen = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('Form submitted with values:', values);
    }
  });
  

  return (
  <Flex justify="center" className={styles.screen}>
    <Flex vertical className={styles.wrapper} justify="space-between" align="center">
      <form
      className={styles.form} 
      onSubmit={formik.handleSubmit}>
        <div>
          <Flex justify="center">
            <Typography.Title level={3} className={styles.headline}>
              Welcome Back 👋🏼
            </Typography.Title>
          </Flex>
          <LoginCredentials items={[
            {
              icon: <MailOutlined style={{ margin: '0px 3px' }} />,
              value: formik.values.email,
              name: 'email',
              handleChange: formik.handleChange,
              handleBlur: formik.handleBlur,
              touched: formik.touched.email,
              errors: formik.errors.email,
              placeholder: 'Email',
              type: 'email'
            },
            {
              icon: <MailOutlined style={{ margin: '0px 3px' }} />,
              value: formik.values.password,
              name: 'password',
              handleChange: formik.handleChange,
              handleBlur: formik.handleBlur,
              touched: formik.touched.password,
              errors: formik.errors.password,
              placeholder: 'Password',
              type: 'password'
            }
          ]}/>
          <Flex justify="center">
            <Typography.Link className={styles.fgPass}>
              Forgot your password?
            </Typography.Link>
          </Flex>
        </div>
        <div className={styles.buttonBlock}>
          <Button 
          disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
          type='primary' 
          block 
          htmlType="submit"
          >
            Login
          </Button>
          <Divider style={{
            margin: 0,
            height: '50px'
          }}>
            <Typography.Paragraph 
            style={{
              fontSize: '12px',
              paddingTop: '10px'
            }}>
              Or
            </Typography.Paragraph>
          </Divider>
          <GoogleButton />
          <Flex justify="center" style={{
            marginTop: '24px'
          }}>
            <Typography.Paragraph>Dont have an accont?</Typography.Paragraph>
            <Typography.Link style={{marginLeft: '4px', color: 'black', fontWeight: '600'}}>Register</Typography.Link>
          </Flex>
        </div>
      </form>
    </Flex>
  </Flex>
  )
};

export default LoginScreen;