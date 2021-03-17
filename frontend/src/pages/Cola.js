import { Typography, Col, Row, List, Card, Tag, Divider } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/SocketContext';
import getLastTickets from '../helpers/getLastTickets';
import useHideMenu from '../hooks/useHideMenu';

const { Title, Text } = Typography

function Cola() {
  useHideMenu(true)
  const { socket } = useContext(SocketContext)
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    socket.on('ticket_assign', assign => {
      setTickets(assign)
    })
    return () => socket.off('ticket_assign')
  }, [socket])

  useEffect(() => {
    getLastTickets().then(setTickets)
  }, [])

  return (
    <>
      <Title style={{textAlign: 'center'}} level={1}>Atendiendo Cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0,3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{width: 300, marginTop: 16}}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Escritorio: {item.desk}</Tag>
                  ]}
                >
                  <Title style={{textAlign: 'center'}}>{item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3, 13)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta">{item.number}</Tag>
                      <Text type="secondary"> Agente: </Text>
                      <Tag color="magenta">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}

export default Cola
