import React, { useEffect, useRef, useState } from 'react'
import './chatbox.css' // 假设你的样式文件名为ChatWindow.css

const ChatWindow = ({ messages }) => {
    const [displayedMessages, setDisplayedMessages] = useState([])
    const messagesEndRef = useRef(null)

    useEffect(() => {
        if (messages.length > 20) {
            setDisplayedMessages(messages.slice(-10))
        } else {
            setDisplayedMessages(messages)
        }
    }, [messages])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [displayedMessages])

    return (
        <div className="chat-window">
            <div className="messages">
                {displayedMessages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${
                            message.sender === 'left' ? 'left' : 'right'
                        }`}
                    >
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}

export default ChatWindow
