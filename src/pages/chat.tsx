import React from 'react'
import ChatWindow from '../components/chatbox'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

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
        <div>
            chat
            <Button>
                <Link to="/">Go back</Link>
            </Button>
            <ChatWindow messages={chatMessages} />
        </div>
    )
}
