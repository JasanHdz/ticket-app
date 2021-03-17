import React, { useState } from 'react'
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd'
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router-dom';
import useHideMenu from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

const { Title, Text } = Typography

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

function Login() {
  useHideMenu(false)
  const history = useHistory()
  const [user] = useState(getUserStorage())

  const onFinish = ({ agente, escritorio }) => {
    console.log('Success:', { agente, escritorio })
    localStorage.setItem('agente', agente)
    localStorage.setItem('escritorio', escritorio)
    history.push('/dashboard')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  if (user.agente && user.escritorio) {
    return <Redirect to="/dashboard" />
  }

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre del agente"
        name="agente"
        rules={[{ required: true, message: 'Por favor ingrese su nombre!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Escritorio"
        name="escritorio"
        rules={[{ required: true, message: 'Por favor ingrese su escritorio!' }]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" shape="round">
        <SaveOutlined />
          Ingresar
        </Button>
      </Form.Item>
    </Form>  
    </>
  )
}

export default Login
