import React, { createContext, useContext, useState, useCallback } from 'react';
import { Message, ChatContextType } from '../types';
import { generateResponse } from '../utils/generateResponse';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback(async (content: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
      isRead: false,
    };

    setMessages(prev => [...prev, newMessage]);

    if (sender === 'user') {
      setIsTyping(true);
      const response = await generateResponse(content);
      setIsTyping(false);
      
      addMessage(response, 'bot');
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, isTyping, addMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};