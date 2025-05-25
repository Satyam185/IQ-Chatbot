import React from 'react';
import { Message as MessageType } from '../types';
import { Check } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isBot
            ? 'bg-gray-100 text-gray-800'
            : 'bg-blue-600 text-white'
        }`}
      >
        <p className="text-sm md:text-base">{message.content}</p>
        <div className={`flex items-center gap-1 mt-1 text-xs ${
          isBot ? 'text-gray-500' : 'text-blue-200'
        }`}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
          {!isBot && <Check className="w-3 h-3" />}
        </div>
      </div>
    </div>
  );
};

export default Message;