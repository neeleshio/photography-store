import React, { useState, useEffect } from 'react'
import axios from '../../constants/axios/axios'
import Sidebar from '../../components/Sidebar/index'
import { Layout } from 'antd';

const { Content, Footer } = Layout

const NewGroups = () => {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        axios.get('/groups/')
            .then(response => {
                setGroups(response.data)
            })
    }, [])

    return (
        <Layout>
            <Sidebar />
            <Layout >
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default NewGroups