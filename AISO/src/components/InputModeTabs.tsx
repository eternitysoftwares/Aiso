import React from 'react';
import { Book, FileText, Sparkles } from 'lucide-react';

interface Props {
  activeMode: 'ncert' | 'custom' | 'prompt';
  onModeChange: (mode: 'ncert' | 'custom' | 'prompt') => void;
}

export const InputModeTabs: React.FC<Props> = ({ activeMode, onModeChange }) => {
  return (
    <div className="flex space-x-2 mb-6">
      <button
        onClick={() => onModeChange('ncert')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          activeMode === 'ncert'
            ? 'bg-black text-white dark:bg-white/10 dark:text-white'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5'
        }`}
      >
        <Book className="w-4 h-4" />
        <span>NCERT Books</span>
      </button>
      
      <button
        onClick={() => onModeChange('custom')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          activeMode === 'custom'
            ? 'bg-black text-white dark:bg-white/10 dark:text-white'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5'
        }`}
      >
        <FileText className="w-4 h-4" />
        <span>Custom Content</span>
      </button>

      <button
        onClick={() => onModeChange('prompt')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          activeMode === 'prompt'
            ? 'bg-black text-white dark:bg-white/10 dark:text-white'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5'
        }`}
      >
        <Sparkles className="w-4 h-4" />
        <span>Prompt Generation</span>
      </button>
    </div>
  );
};