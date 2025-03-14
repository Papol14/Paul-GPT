// App.tsx
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './App.css'; // Create this file for custom styles

export const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://papolskie.app.n8n.cloud/webhook/2ad6ead1-9b98-46d7-a84b-c18ba428a58c/chat',
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
        'Hi there! 👋',
        'My name is John Paul. How can I assist you today?'
      ],
      i18n: {
        en: {
          title: 'Hi po! 👋',
          subtitle: "Start a chat. I'm here to help you 24/7.",
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