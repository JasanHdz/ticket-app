import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Row, Col, Typography, Button, Divider } from 'antd'
import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import { getUserStorage } from '../helpers/getUserStorage'
import useHideMenu from '../hooks/useHideMenu'

const { Title, Text } = Typography

function Dashboard() {
  useHideMenu(false)
  const [user] = useState(getUserStorage())
  const { socket } = useContext(SocketContext)
  const [ticket, setTicket] = useState(null)
  const history = useHistory()

  const handleClick = () => {
    localStorage.clear()
    history.replace('/ingresar')
  }

  const nextTicket = () => {
    socket.emit('next_assign_ticket', user, ticket => {
      setTicket(ticket)
    })
  }
  
  if (!user.agent || !user.desk) {
    return <Redirect to="/ingresar" />
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title>{user.agent}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success">{user.desk}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={handleClick}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text>Está atendiendo el ticket número: </Text>
            <Text style={{ fontSize: 30 }} type="danger">{ticket.number}</Text>
          </Col>
        </Row>
      )}

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
