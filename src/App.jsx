// App.tsx
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './App.css'; // Create this file for custom styles

export const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: import.meta.env.VITE_CHAT_URL,
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window', // Use 'window' or 'embedded'
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: true,
      defaultLanguage: 'en',
      initialMessages: [
        'My name is John Paul. How can I assist you today?'
      ],
      i18n: {
        en: {
          title: 'Hi!👋',
          subtitle: "If it takes too long to respond or gives an incorrect answer, refresh the page and try again.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question..',
        },
      },
    });
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
      <img src="/cat.png" alt="cat image" width={60} />
        <h1>JP Chatbot</h1>
        <p>Your 24/7 AI Assistant</p>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <section className="app-description">
          <h2>Welcome to JP Chatbot!</h2>
          <p>
            JP Chatbot is here to help you with any questions or issues you might have.
            Whether you need assistance, information, or just want to chat, JP is always ready!
          </p>
        </section>

        {/* Chat Container */}
        <div className="chat-container">
          <div id="n8n-chat"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2023 JP Chatbot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;