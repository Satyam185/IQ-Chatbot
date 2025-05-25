export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isRead?: boolean;
}

export interface ChatContextType {
  messages: Message[];
  isTyping: boolean;
  addMessage: (content: string, sender: 'user' | 'bot') => void;
  clearMessages: () => void;
}