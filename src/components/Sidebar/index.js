import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { FileAddOutlined, CodepenOutlined, AreaChartOutlined, CloudUploadOutlined } from '@ant-design/icons';
import './styles.scss'

const { Sider } = Layout;

const Sidebar = () => {
    return (

        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => { console.log(broken) }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
            style={{
                height: "100vh"
            }}
        >

            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<CodepenOutlined />} ><Link to="/">GROUPS</Link></Menu.Item>
                <Menu.Item key="2" icon={<AreaChartOutlined />}><Link to="/engagement">ENGAGEMENT</Link></Menu.Item>
                <Menu.Item key="3" icon={<CloudUploadOutlined />}><Link to="/upload">UPLOAD</Link></Menu.Item>
                <Menu.Item key="4" icon={<FileAddOutlined />}><Link to="/new_group">ADD NEW GROUP</Link></Menu.Item>
            </Menu>
        </Sider>

    )
}

export default Sidebar