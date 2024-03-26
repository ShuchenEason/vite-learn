import React from 'react'
import { Layout, Menu, Button, Card } from 'antd'
import { BookOutlined } from '@ant-design/icons'

const App: React.FC = () => {
    return (
        <div
            style={{
                background: '#fff',
                padding: '24px',
                minHeight: '280px'
            }}
        >
            <Card style={{ width: '300px', marginBottom: '20px' }}>
                <BookOutlined style={{ fontSize: '24px', color: '#1E90FF' }} />
                <p>Item 1</p>
            </Card>
            <Card style={{ width: '300px', marginBottom: '20px' }}>
                <BookOutlined style={{ fontSize: '24px', color: '#1E90FF' }} />
                <p>Item 2</p>
            </Card>
            <Card style={{ width: '300px', marginBottom: '20px' }}>
                <BookOutlined style={{ fontSize: '24px', color: '#1E90FF' }} />
                <p>Item 3</p>
            </Card>
            <Card style={{ width: '300px', marginBottom: '20px' }}>
                <BookOutlined style={{ fontSize: '24px', color: '#1E90FF' }} />
                <p>Item 4</p>
            </Card>
            <Card style={{ width: '300px', marginBottom: '20px' }}>
                <BookOutlined style={{ fontSize: '24px', color: '#1E90FF' }} />
                <p>Item 5</p>
            </Card>
            {/* Repeat for the rest of the items */}
        </div>
    )
}

export default App
