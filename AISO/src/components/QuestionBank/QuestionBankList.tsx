import React from 'react';
import { SavedQuestion } from '../../types';

interface Props {
  questions: SavedQuestion[];
}

export const QuestionBankList: React.FC<Props> = ({ questions }) => {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div 
          key={question.id}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-900 dark:text-white mb-2">{question.text}</p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <span>Class: {question.class}</span>
                <span>Subject: {question.subject}</span>
                <span>Chapter: {question.chapter}</span>
              </div>
            </div>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300">
              {question.difficulty}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};