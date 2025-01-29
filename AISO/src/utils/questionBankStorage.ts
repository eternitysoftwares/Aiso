import { SavedQuestion } from '../types';

const STORAGE_KEY = 'question_bank';

export const getQuestions = (): SavedQuestion[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveQuestion = (question: SavedQuestion): SavedQuestion[] => {
  const questions = getQuestions();
  const updatedQuestions = [...questions, { ...question, id: crypto.randomUUID() }];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedQuestions));
  return updatedQuestions;
};