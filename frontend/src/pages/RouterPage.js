import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Login from './Login';
import Cola from './Cola';
import Ticket from './Ticket';
import Dashboard from './Dashboard';
import { useContext } from 'react';
import { UIContext } from '../context/UIContext';

const { Content, Sider } = Layout;

function RouterPage() {
  const { menuIsActive } = useContext(UIContext)
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsedWidth="0" breakpoint="md" hidden={menuIsActive}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/ingresar">Ingresar</Link>
          </Menu.Item>
          <Menu.Item icon={<DesktopOutlined />}>
            <Link to="/cola">Cola Ticket</Link>
          </Menu.Item>
          <Menu.Item icon={<FileOutlined />}>
          <Link to="/ticket">Crear Ticket</Link>
          </Menu.Item>
          <Menu.Item icon={<DashboardOutlined />}>
          <Link to="/dashboard">dashboard</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}>
          <Switch>
            <Route path="/ingresar" component={Login} />  
            <Route path="/cola" component={Cola} />  
            <Route path="/ticket" component={Ticket} />  
            <Route path="/dashboard" component={Dashboard} />  
            <Redirect to="/ingresar" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
    </Router>
  )
}

export default RouterPage
