import React from 'react';
import { QuestionBankSearch } from './QuestionBankSearch';
import { QuestionBankFilters } from './QuestionBankFilters';
import { QuestionBankList } from './QuestionBankList';
import { useQuestionBank } from '../../hooks/useQuestionBank';

export const QuestionBankPage = () => {
  const {
    questions,
    filters,
    searchQuery,
    setSearchQuery,
    setFilters,
    filteredQuestions,
  } = useQuestionBank();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Question Bank</h2>
        
        <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
          <div className="space-y-6">
            <QuestionBankSearch 
              value={searchQuery}
              onChange={setSearchQuery}
            />
            <QuestionBankFilters 
              filters={filters}
              onChange={setFilters}
            />
          </div>
          
          <div className="min-h-[500px]">
            {filteredQuestions.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
                <BookOpen className="w-12 h-12 mb-4" />
                <p className="text-lg">No questions found</p>
                <p className="text-sm">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <QuestionBankList questions={filteredQuestions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};