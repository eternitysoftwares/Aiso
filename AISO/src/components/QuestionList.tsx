import React from 'react';
import { Download, Copy, FileText, BookmarkPlus } from 'lucide-react';
import { Question } from '../types';
import { generatePDF, generateDOCX, generatePPTX, generateTXT } from '../utils/exportUtils';
import { useQuestionBank } from '../hooks/useQuestionBank';

interface Props {
  questions: Question[];
  currentFormData?: {
    class: string;
    subject: string;
    book: string;
    chapter: string;
  };
}

export const QuestionList: React.FC<Props> = ({ questions, currentFormData }) => {
  const { saveQuestion } = useQuestionBank();

  const handleCopy = () => {
    const text = questions.map((q, i) => `${i + 1}. ${q.text}`).join('\n\n');
    navigator.clipboard.writeText(text);
  };

  const handleAddToQuestionBank = (question: Question) => {
    if (!currentFormData) return;

    saveQuestion({
      ...question,
      class: currentFormData.class,
      subject: currentFormData.subject,
      book: currentFormData.book,
      chapter: currentFormData.chapter,
      dateAdded: new Date().toISOString()
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex justify-end space-x-4 mb-6">
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-4 py-2 bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 rounded-lg text-white transition-colors"
        >
          <Copy className="w-4 h-4" />
          <span>Copy All</span>
        </button>
        <button
          onClick={() => generatePDF(questions)}
          className="flex items-center space-x-2 px-4 py-2 bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 rounded-lg text-white transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>PDF</span>
        </button>
        <button
          onClick={() => generateDOCX(questions)}
          className="flex items-center space-x-2 px-4 py-2 bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 rounded-lg text-white transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>DOCX</span>
        </button>
        <button
          onClick={() => generatePPTX(questions)}
          className="flex items-center space-x-2 px-4 py-2 bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 rounded-lg text-white transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>PPTX</span>
        </button>
        <button
          onClick={() => generateTXT(questions)}
          className="flex items-center space-x-2 px-4 py-2 bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 rounded-lg text-white transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>TXT</span>
        </button>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <div 
            key={question.id}
            className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-gray-900 dark:text-gray-100">
                  <span className="font-bold">{index + 1}. </span>
                  {question.text}
                </p>
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <span className="px-2 py-1 text-xs rounded-full bg-black dark:bg-blue-600 text-white">
                  {question.difficulty}
                </span>
                {currentFormData && (
                  <button
                    onClick={() => handleAddToQuestionBank(question)}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                    title="Add to Question Bank"
                  >
                    <BookmarkPlus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};