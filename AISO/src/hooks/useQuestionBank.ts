import { useState, useEffect } from 'react';
import { SavedQuestion, QuestionBankFiltersType } from '../types';
import { getQuestions, saveQuestion } from '../utils/questionBankStorage';

export const useQuestionBank = () => {
  const [questions, setQuestions] = useState<SavedQuestion[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<QuestionBankFiltersType>({
    class: '',
    subject: '',
    book: '',
    chapter: ''
  });

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = searchQuery === '' || 
      question.text.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = 
      (!filters.class || question.class === filters.class) &&
      (!filters.subject || question.subject === filters.subject) &&
      (!filters.book || question.book === filters.book) &&
      (!filters.chapter || question.chapter === filters.chapter);

    return matchesSearch && matchesFilters;
  });

  return {
    questions,
    searchQuery,
    filters,
    setSearchQuery,
    setFilters,
    filteredQuestions,
    saveQuestion: (question: SavedQuestion) => {
      const updatedQuestions = saveQuestion(question);
      setQuestions(updatedQuestions);
    }
  };
};