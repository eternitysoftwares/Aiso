import React from 'react';
import { Brain, BookOpen, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface Props {
  currentPage: 'generate' | 'bank';
  onPageChange: (page: 'generate' | 'bank') => void;
}

export const Header: React.FC<Props> = ({ currentPage, onPageChange }) => {
  return (
    <header className="w-full py-4 px-6 bg-white dark:bg-black/80 border-b border-gray-200 dark:border-white/10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center justify-between md:justify-start md:space-x-8">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-black dark:text-white" />
            <h1 className="text-2xl font-bold text-black dark:text-white">AISO</h1>
          </div>
          <nav className="flex space-x-6">
            <button
              onClick={() => onPageChange('generate')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'generate'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate</span>
            </button>
            <button
              onClick={() => onPageChange('bank')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'bank'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Question Bank</span>
            </button>
          </nav>
        </div>
        <div className="flex items-center justify-between md:justify-end space-x-4">
          <ThemeToggle />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            ADVANCE INTELLIGENT SYSTEM FOR OPTIMISATION
          </p>
        </div>
      </div>
    </header>
  );
};