import { ConfigProvider, Flex } from 'antd'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import style from './index.module.scss'

const Header = () => {
  return (
    <div className={style.wrapper}>
      <Image src={logo} alt="Logo" width={97} height={28}/>
    </div>
  )
}

export default Header;