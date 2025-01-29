import React from 'react';
import { QuestionBankFiltersType } from '../../types';

interface Props {
  filters: QuestionBankFiltersType;
  onChange: (filters: QuestionBankFiltersType) => void;
}

export const QuestionBankFilters: React.FC<Props> = ({ filters, onChange }) => {
  return (
    <div className="space-y-4 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 dark:text-white">Filters</h3>
      
      <div className="space-y-3">
        <select
          value={filters.class}
          onChange={(e) => onChange({ ...filters, class: e.target.value })}
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 text-gray-900 dark:text-white"
        >
          <option value="">Select Class</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>Class {i + 1}</option>
          ))}
        </select>

        <select
          value={filters.subject}
          onChange={(e) => onChange({ ...filters, subject: e.target.value })}
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 text-gray-900 dark:text-white"
        >
          <option value="">Select Subject</option>
          {['Mathematics', 'Science', 'English', 'Hindi', 'Social Science'].map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>

        <select
          value={filters.book}
          onChange={(e) => onChange({ ...filters, book: e.target.value })}
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 text-gray-900 dark:text-white"
        >
          <option value="">Select Book</option>
          {/* Books will be populated based on class and subject */}
        </select>

        <select
          value={filters.chapter}
          onChange={(e) => onChange({ ...filters, chapter: e.target.value })}
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 text-gray-900 dark:text-white"
        >
          <option value="">Select Chapter</option>
          {/* Chapters will be populated based on book */}
        </select>
      </div>
    </div>
  );
};