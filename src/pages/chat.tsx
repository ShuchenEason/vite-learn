import React from 'react'
import ChatWindow from '../components/chatbox'
import { Link } from 'react-router-dom'
import { Button, Card, Layout, Switch } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'

const chatMessages = [
    { sender: 'left', text: '你好！' },
    { sender: 'right', text: '嗨，你好！' },
    { sender: 'left', text: '你好！' },
    { sender: 'right', text: '嗨，你好！' },
    { sender: 'left', text: '你好！' },
    { sender: 'right', text: '嗨，你好！' },
    { sender: 'left', text: '你好！' },
    { sender: 'right', text: '嗨，你好！' },
    { sender: 'left', text: '你好！' },
    { sender: 'right', text: '嗨，你好！' },
    { sender: 'left', text: '你好！' },
    { sender: 'right', text: '嗨，你好！' },
    { sender: 'left', text: '你好！' },
    { sender: 'right', text: '嗨，你好！' }
]
export default function Chat() {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Sider
                width={200}
                className="site-layout-background"
                style={{ backgroundColor: '#FAEBD7' }}
            >
                <Card
                    style={{ width: '100%', marginTop: '16px' }}
                    bodyStyle={{ padding: '12px' }}
                >
                    <div style={{ padding: '24px 0' }}>Switch Item</div>
                </Card>
            </Sider>
            <Layout style={{ padding: '24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        backgroundColor: 'white',
                        border: '1px solid #d9d9d9'
                    }}
                >
                    {/* chat
                    <Button>
                        <Link to="/">Go back</Link>
                    </Button>
                    <ChatWindow messages={chatMessages} /> */}
                </Content>
                <Sider width={200} style={{ backgroundColor: '#FAEBD7' }}>
                    {/* Right sidebar content */}
                </Sider>
            </Layout>
        </div>
    )
}
