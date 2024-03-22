import React, { useEffect } from 'react'
import {
    Layout,
    Menu,
    Breadcrumb,
    Input,
    Avatar,
    Badge,
    List,
    Card
} from 'antd'
import {
    MessageOutlined,
    BellOutlined,
    UserOutlined,
    SearchOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header, Content, Sider } = Layout
const { Search } = Input
const data = [
    {
        title: 'ldelong1',
        description: '这是一段描述',
        content:
            '这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容',
        time: '2023-12-11 18:11',
        likes: 345,
        comments: 5,
        reposts: 7
    }
    // ... other list items
]

const App = () => {
    useEffect(() => {
        console.log('useEffect')
    }, [])
    return (
        <Layout>
            <Header
                className="header"
                style={{ background: '#fff', padding: 0 }}
            >
                <div
                    style={{ float: 'left', margin: '16px 24px', color: 'red' }}
                >
                    LOGO
                </div>
                <Search
                    placeholder="请输入搜索内容"
                    onSearch={(value) => console.log(value)}
                    style={{ width: 200, margin: '16px 24px' }}
                    enterButton
                />
                <div style={{ float: 'right', margin: '16px 24px' }}>
                    <Badge count={5}>
                        <MessageOutlined
                            style={{ fontSize: '16px', color: '#08c' }}
                        />
                    </Badge>
                    <Badge count={10} style={{ marginLeft: '24px' }}>
                        <BellOutlined
                            style={{ fontSize: '16px', color: '#08c' }}
                        />
                    </Badge>
                    <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                            marginLeft: '24px'
                        }}
                    >
                        U
                    </Avatar>
                </div>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item
                            key="1"
                            onClick={() => {
                                console.log('click')
                            }}
                        >
                            <Link to="/chat">Go to Chat</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/pdf">Go to PDF</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/react-pdf">Go to React-PDF</Link>
                        </Menu.Item>
                        <Menu.Item key="4">菜单项4</Menu.Item>
                        {/* ... other menu items */}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>列表</Breadcrumb.Item>
                        <Breadcrumb.Item>应用</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <span>{item.likes} 赞</span>,
                                        <span>{item.comments} 评论</span>,
                                        <span>{item.reposts} 转发</span>
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src="https://img10.360buyimg.com/xxx.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar src="https://img10.360buyimg.com/xxx.png" />
                                        }
                                        title={<a href="#">{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default App
