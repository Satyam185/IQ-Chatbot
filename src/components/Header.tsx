import React from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <Brain className="w-8 h-8 text-white" />
        <h1 className="text-2xl font-bold text-white">IQchat</h1>
      </div>
    </header>
  );
};

export default Header;