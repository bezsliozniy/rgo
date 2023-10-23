'use client'
import { LeftOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Flex, Typography } from 'antd'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import styles from './index.module.scss'

const  Header = ({isLogin = false}: any) => {
  if(isLogin)
    return (
      <div className={styles.wrapper}>
        <Image src={logo} alt="Logo" width={97} height={28}/>
      </div>
    )


  return (
    <Flex 
        align="center" 
        justify="center"
        className={styles.dashboardWrap} 
        style={{

        }}>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" width={97} height={28}/>
          </div>
          <div className={styles.tenancy}>
            {["Tenancy Information", "Tenancy Agreement", "Recipient Bank Details"].map((item: any) => 
              <div className={styles.item}>
                {item}
              </div>
            )}
          </div>
      </Flex> 
  )
}

export default Header;