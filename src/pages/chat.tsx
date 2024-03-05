import React from 'react'
import ChatWindow from '../components/chatbox'

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
            <ChatWindow messages={chatMessages} />
        </div>
    )
}
