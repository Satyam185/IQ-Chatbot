import React from 'react';
import { ChatProvider } from './context/ChatContext';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto bg-white shadow-lg">
          <ChatInterface />
        </main>
      </div>
    </ChatProvider>
  );
}

export default App;