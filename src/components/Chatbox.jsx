import React, { useEffect, useState } from 'react';
import { useChannel } from "ably/react";

export default function ChatBox() {

    let inputBox = null;
    let messageEnd = null;
    const [messageText, setMessageText] = useState("");
    const [receivedMessages, setMessages] = useState([]);
    const messageTextIsEmpty = messageText.trim().length === 0;

    const { channel, ably } = useChannel("chat-demo", (message) => {
        const history = receivedMessages.slice(-199);
        setMessages([...history, message]);
    });

    const sendChatMessage = (messageText) => {
        channel.publish({ name: "chat-message", data: messageText });
        setMessageText("");
        inputBox.focus();
    }


    const handleFormSubmission = (event) => {
        event.preventDefault();
        sendChatMessage(messageText);
    }

    const handleKeyPress = (event) => {
        if (e.charCode !== 13 || messageTextIsEmpty) {
            return;
        }
        if (e.charCode === 13) {
            sendChatMessage(messageText);
            event.preventDefault();
          }
    }


    const messages = receivedMessages.map((message, index) => {
        const author = message.connectionId === ably.connection.id ? "me" : "other";
        return <div className={`message-div-${author}`}><span key={index} className="chat-messages" data-author={author}>{message.data}</span></div>;
    });

    useEffect(() => {
        messageEnd.scrollIntoView({ behaviour: "smooth" });
    });

    return (
        <div className="chat-holder">
            <div className="chat-text">
                {messages}
                <div ref={(element) => { messageEnd = element; }}></div>
            </div>
            <div className="chat-form">
            <form onSubmit={handleFormSubmission} className="form" id="chatForm">
                <input
                    type="text"
                    ref={(element) => { inputBox = element; }}
                    value={messageText}
                    placeholder="Type a message..."
                    onChange={e => setMessageText(e.target.value)}
                    onkeyPress={handleKeyPress}
                    className="form-textarea"
                />
            </form>
            </div>
        </div>
    )
}