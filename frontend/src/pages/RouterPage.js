import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
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


const { Content, Sider } = Layout;

function RouterPage() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/ingresar">Ingresar</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/cola">Cola Ticket</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
          <Link to="/ticket">Crear Ticket</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
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
