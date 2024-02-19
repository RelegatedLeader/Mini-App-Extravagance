import React, { useState } from 'react';
import '../css/ChatApp.css';

//the idea of this is to resemble a chat system , but in a way make it quite therapeutic, that only focuses
//on helping someone mentally
function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [your_messages, setYour_messages] = useState([]);

  const predefinedResponses = [
    'Hello, how can I assist you today? Please feel free to ask me anything.',
    "I'm here to help. Let me know what you need assistance with.",
    "Welcome! How may I support you today? Don't hesitate to reach out.",
    'Hi there! What can I do for you? Let me know how I can be of service.',
    'Howdy! How can I assist you? Feel free to ask me any questions.',
    'Greetings! How may I be of service? Let me know how I can help you.',
    "Hey! I'm here to help. What do you need assistance with?",
    'Good day! Let me know how I can assist you.',
    "Hi! How can I help you today? Don't hesitate to ask me anything.",
    'Hello there! What brings you here today? Let me know how I can assist you.',
    'Welcome! How may I assist you today? Please let me know your inquiries.',
    "Greetings and salutations! I'm here to assist you. What do you need help with?",
    'Hey there! How can I assist you today? Feel free to ask me anything.',
    "Hi! I'm here to help. Let me know what you need assistance with.",
    "Hello! How can I assist you today? Don't hesitate to reach out to me.",
    'Greetings! How may I support you today? Let me know your questions.',
  ];

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Add the user's message to the chat
      setMessages([...messages, { text: inputMessage, sender: 'Me' }]);

      // Simulate AI response with a predefined message
      const randomIndex = Math.floor(
        Math.random() * predefinedResponses.length
      );
      const aiResponse = predefinedResponses[randomIndex];
      setMessages([...messages, { text: aiResponse, sender: 'AI' }]);

      // Clear the input field
      setInputMessage('');
    }
  };

  return (
    <div className='ChatApp'>
      <figure>
        <img src='/imgs/chat-app.jpg' alt='logo' id='chat-app-logo' />
      </figure>
      <h3>
        This chat app is meant for you to discuss yourself and learn from
        yourself, with the idea of aiding yourself only.
      </h3>
      <h3>Feel FREE to give it a try...</h3>

      <div className='message-container'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === 'Me' ? 'message me' : 'message friend'
            }
          >
            <p>{message.text}</p>
            <span>{message.sender}</span>
          </div>
        ))}
      </div>
      <div className='input-container'>
        <input
          type='text'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder='Enter your text here'
        />

        <br />
        <br />
        <br />
      </div>

      <button onClick={sendMessage} id='send_button'>
        Send
      </button>
    </div>
  );
}

export default ChatApp;
