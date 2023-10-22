import { GoogleOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd"

const GoogleButton = () => {
  return (
    <ConfigProvider theme={{
        token: {
          colorPrimary: '1E293B',
        },
      }}>
      <Button block type='primary'>
        <GoogleOutlined />
        Sign in with google
      </Button>
    </ConfigProvider> 
  )
}

export default GoogleButton;