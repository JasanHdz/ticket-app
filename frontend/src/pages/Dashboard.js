import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Row, Col, Typography, Button, Divider } from 'antd'
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { getUserStorage } from '../helpers/getUserStorage'
import useHideMenu from '../hooks/useHideMenu'

const { Title, Text } = Typography

function Dashboard() {
  useHideMenu(false)
  const [user] = useState(getUserStorage())
  const history = useHistory()
  const handleClick = () => {
    localStorage.clear()
    history.replace('/ingresar')
  }
  const nextTicket = () => { }
  
  if (!user.agente || !user.escritorio) {
    return <Redirect to="/ingresar" />
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title>{user.agente}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success">{user.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={handleClick}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text style={{fontSize: 30}} type="danger">55</Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            shape="round"
            type="primary"
            onClick={nextTicket}
          >
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
