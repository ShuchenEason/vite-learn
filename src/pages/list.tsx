import React from 'react'
import { Layout, Menu, Button, Card, Pagination } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Header, Content } = Layout

const App: React.FC = () => {
    const cardContent = (
        <>
            <div
                style={{
                    marginBottom: '20px',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white'
                }}
            ></div>
            <p>职称</p>
            <p>学校/专业</p>
            <p>擅长领域</p>
            <p>研究经历</p>
            <p>完成案例简述</p>
            <Button
                type="primary"
                style={{ backgroundColor: '#FFA500', borderColor: '#FFA500' }}
            >
                立即咨询
            </Button>
        </>
    )
    return (
        <div
            style={{
                background: '#fff',
                padding: '24px',
                minHeight: '280px'
            }}
        >
            <Content style={{ padding: '50px', backgroundColor: '#E6F7FF' }}>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        justifyContent: 'center'
                    }}
                >
                    <Card
                        style={{
                            width: '300px',
                            textAlign: 'center',
                            backgroundColor: '#B0E0E6'
                        }}
                    >
                        {cardContent}
                    </Card>
                    <Card
                        style={{
                            width: '300px',
                            textAlign: 'center',
                            backgroundColor: '#B0E0E6'
                        }}
                    >
                        {cardContent}
                    </Card>
                    <Card
                        style={{
                            width: '300px',
                            textAlign: 'center',
                            backgroundColor: '#B0E0E6'
                        }}
                    >
                        {cardContent}
                    </Card>
                    <Card
                        style={{
                            width: '300px',
                            textAlign: 'center',
                            backgroundColor: '#B0E0E6'
                        }}
                    >
                        {cardContent}
                    </Card>
                </div>
                <Pagination
                    style={{ textAlign: 'center', marginTop: '20px' }}
                    total={50}
                    showTotal={(total) => `Total ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1}
                />
            </Content>
        </div>
    )
}

export default App
