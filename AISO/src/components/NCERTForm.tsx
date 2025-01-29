import React from 'react';
import { FormData } from '../types';
import { useNCERTData } from '../hooks/useNCERTData';

interface Props {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

export const NCERTForm: React.FC<Props> = ({ formData, onChange }) => {
  const {
    books,
    chapters,
    loading,
    error,
    setSelectedBook
  } = useNCERTData(formData.class, formData.subject);

  const handleBookChange = (bookId: string) => {
    onChange({ book: bookId, chapter: '' });
    setSelectedBook(bookId);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Class</label>
        <select 
          className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-900 dark:text-gray-100"
          value={formData.class}
          onChange={(e) => onChange({ class: e.target.value, subject: '', book: '', chapter: '' })}
        >
          <option value="">Select Class</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>Class {i + 1}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
        <select 
          className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-900 dark:text-gray-100"
          value={formData.subject}
          onChange={(e) => onChange({ subject: e.target.value, book: '', chapter: '' })}
          disabled={!formData.class}
        >
          <option value="">Select Subject</option>
          {['Mathematics', 'Science', 'English', 'Hindi', 'Social Science'].map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Book</label>
        <select 
          className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-900 dark:text-gray-100"
          value={formData.book}
          onChange={(e) => handleBookChange(e.target.value)}
          disabled={!formData.subject || !formData.class}
        >
          <option value="">Select Book</option>
          {books.map(book => (
            <option key={book.id} value={book.id}>{book.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Chapter</label>
        <select 
          className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-gray-900 dark:text-gray-100"
          value={formData.chapter}
          onChange={(e) => onChange({ chapter: e.target.value })}
          disabled={!formData.book}
        >
          <option value="">Select Chapter</option>
          {chapters.map(chapter => (
            <option key={chapter.id} value={chapter.title}>
              {chapter.chapterNumber}. {chapter.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};