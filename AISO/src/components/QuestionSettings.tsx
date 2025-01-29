import React from 'react';
import { FormData } from '../types';

interface Props {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

export const QuestionSettings: React.FC<Props> = ({ formData, onChange }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Question Type</label>
          <select 
            className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-900 dark:text-gray-100"
            value={formData.questionType}
            onChange={(e) => onChange({ questionType: e.target.value as any })}
          >
            <option value="mcq">Multiple Choice</option>
            <option value="short">Short Answer</option>
            <option value="long">Long Answer</option>
            <option value="true-false">True/False</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Number of Questions</label>
          <input 
            type="number"
            min="1"
            max="50"
            className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-900 dark:text-gray-100"
            value={formData.numberOfQuestions}
            onChange={(e) => onChange({ numberOfQuestions: parseInt(e.target.value) })}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Difficulty Level</label>
        <div className="flex space-x-4">
          {['easy', 'medium', 'hard'].map(level => (
            <label key={level} className="flex items-center space-x-2">
              <input
                type="radio"
                name="difficulty"
                value={level}
                checked={formData.difficulty === level}
                onChange={(e) => onChange({ difficulty: e.target.value as any })}
                className="text-black dark:text-gray-100"
              />
              <span className="text-gray-700 dark:text-gray-300 capitalize">{level}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};