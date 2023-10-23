import styles from './index.module.scss';
import { Button, DatePicker, Flex, Input, Typography } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import loupe from '../../../../public/loupe.svg'
import Image from 'next/image';
import { ArrowRightOutlined, LeftOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const DashboardScreen = () => {
  const router = useRouter()

  const validationSchema = Yup.object({
    address: Yup.string()
      .required('Address is required'),
    dateFrom: Yup.string()
      .required('Date from is required'),
    dateTo: Yup.string()
      .required('Date to is required'),
    rent: Yup.string()
      .required('Rent is required'),
  });
  const formik = useFormik({
    initialValues: {
      address: '',
      dateFrom: '',
      dateTo: '',
      rent: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      router.push('./')
    }
  });

  return (
    <Flex justify="center" className={styles.screen}>
      <Flex vertical className={styles.wrapper} align="center">
        <Flex 
          align="center" 
          justify="center" 
          style={{
            width: "100%", 
            position: 'relative',
            height: '40px'
          }}>
            <Button
              className={styles.headlineButton}
              type="primary"
              icon={<LeftOutlined style={{
                width: '20px', 
                height: '20px'
              }}/>}
            />
            <Typography.Title level={4} style={{margin: 0}}>
              Tenancy Information
            </Typography.Title>
        </Flex> 
        <form
        className={styles.form} 
        onSubmit={formik.handleSubmit}>
          <Input
            size="large" 
            placeholder='Address'
            prefix={<Image src={loupe} alt="loupe"/>} 
            className={styles.input}
            name='address'
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className={styles.error}>
              {formik.errors.address}
            </div>
          ) : null}
          <Flex gap={10} align="center" justify="space-between">
            <div>
              <DatePicker
              defaultValue={dayjs('01/01/2015', 'MM.DD.YYYY')} 
              format='MM.DD.YYYY'
              placeholder='MM.DD.YYYY' 
              suffixIcon={null}
              className={styles.input}
              style={{width: '157px'}}
              />
            </div>
            <ArrowRightOutlined />
            <div>
              <DatePicker
                defaultValue={dayjs('01/01/2015', 'MM.DD.YYYY')} 
                format='MM.DD.YYYY'
                placeholder='MM.DD.YYYY' 
                suffixIcon={null}
                className={styles.input}
                style={{width: '157px'}}
              />
            </div>
          </Flex>
          <Input
            size="large" 
            placeholder='Rental Amount (Monthly)'
            suffix={
              <>GBP</>
            }
            className={styles.input}
            name='rent'
            value={formik.values.rent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.rent && formik.errors.rent ? (
            <div className={styles.error}>
              {formik.errors.rent}
            </div>
          ) : null}
        </form>
      </Flex>
    </Flex>
  )
};

export default DashboardScreen;