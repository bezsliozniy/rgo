import { Flex, Input } from "antd";
import styles from './index.module.scss';

const LoginCredentials = ({items}: any) => {
  return (
    <Flex vertical className={styles.wrapper}>
      {items.map((item: any, index: number) => <div key={index}>
        <Input
          size="large" 
          placeholder={item.placeholder}
          prefix={item.icon} 
          style={{
            borderRadius: '35px',
            height: '56px',
            color: '#637381',
            fontSize: '16px'
          }}
          name={item.name}
          value={item.value}
          onChange={item.handleChange}
          onBlur={item.handleBlur}
          type={item.type}
        />
        {item.touched && item.errors ? (
          <div 
          style={{
            width: '100%', 
            paddingLeft: '20px', 
            margin: 0
          }}>
            {item.errors}
          </div>
        ) : null}
      </div>)}
    </Flex>    
  )
}

export default LoginCredentials;