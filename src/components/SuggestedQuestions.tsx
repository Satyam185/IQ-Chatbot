import React from 'react';
import { useChat } from '../context/ChatContext';

const questions = [
  "What can you help me with?",
  "Tell me about your capabilities",
  "How do you process information?",
  "What makes you unique?"
];

const SuggestedQuestions: React.FC = () => {
  const { addMessage } = useChat();

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {questions.map((question) => (
        <button
          key={question}
          onClick={() => addMessage(question, 'user')}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm rounded-full px-4 py-2 transition-colors"
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;