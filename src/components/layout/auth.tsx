import { FC, useCallback, useState } from 'react';
import { Layout, Menu, Row, Space, Badge, Avatar, Popover } from 'antd';
import { DashboardFilled, CalendarFilled, IdcardOutlined, MailOutlined } from '@ant-design/icons';
import { IoNotifications, IoChatbubbles } from 'react-icons/io5';
import './layout.less';
import TopbarNotificationDropdown from './topbar-notification-dropdown';
import TopbarProfileDropdown from './topbar-profile-dropdown';
import Dashboard from '../dashboard';

const { Header, Content, Footer, Sider } = Layout;

const LayoutAuth: FC = () => {
    const [ isBroken, setBroken ] = useState<boolean>(false);
    
    const handleBreakpoint = useCallback((broken: boolean) => {
        setBroken(broken)
    }, []);
    
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={ handleBreakpoint }
                className={ `layout-sider ${ isBroken ? 'is-broken' : '' }` }
                width={ 240 }
            >
                <div className="layout-logo">
                    <h3>MORPHIC</h3>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['4'] } className="layout-menu">
                    <Menu.Item key="1" icon={ <DashboardFilled /> }>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={ <CalendarFilled /> }>
                        Nav 1
                    </Menu.Item>
                    <Menu.Item key="3" icon={ <IdcardOutlined /> }>
                        Nav 2
                    </Menu.Item>
                    <Menu.Item key="4" icon={ <CalendarFilled /> }>
                        Nav 3
                    </Menu.Item>
                    <Menu.SubMenu key="sub1" icon={ <MailOutlined /> } title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="9" icon={ <CalendarFilled /> }>
                        Nav 4
                    </Menu.Item>
                    <Menu.Item key="10" icon={ <CalendarFilled /> }>
                        Nav 5
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className={ `layout-wrap-content ${ isBroken ? 'is-broken' : '' }` }>
                <Header className={ `layout-header ${ isBroken ? 'is-broken' : '' }` }>
                    <Row justify="end" align="middle">
                        <Space size={ 32 } align="center">
                            <Popover
                                placement="bottomRight"
                                content={ <TopbarNotificationDropdown /> }
                                trigger="click"
                            >
                                <Badge count={ 5 } className="layout-header-badge">
                                    <IoNotifications size="1.5rem" />
                                </Badge>`
                            </Popover>
                            <Badge count={ 10 } className="layout-header-badge">
                                <IoChatbubbles size="1.5rem" />
                            </Badge>
                            <Popover
                                placement="bottomRight"
                                content={ <TopbarProfileDropdown /> }
                                trigger="click"
                            >
                                <Avatar size="large" className="layout-header-avatar">
                                    U
                                </Avatar>
                            </Popover>
                        </Space>
                    </Row>
                </Header>
                <Content className="layout-content">
                    <div className="layout-content-background">
                        <Dashboard />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>©2021</Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutAuth;
