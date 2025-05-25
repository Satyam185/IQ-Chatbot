import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span>IQchat is typing</span>
    </div>
  );
};

export default TypingIndicator;