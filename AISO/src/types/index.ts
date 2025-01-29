// Update existing types file
export interface Question {
  id: string;
  text: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'mcq' | 'short' | 'long' | 'true-false';
}

export interface SavedQuestion extends Question {
  class: string;
  subject: string;
  book: string;
  chapter: string;
  dateAdded: string;
}

export interface QuestionBankFiltersType {
  class: string;
  subject: string;
  book: string;
  chapter: string;
}

export interface FormData {
  content?: string;
  prompt?: string;
  class: string;
  subject: string;
  book: string;
  chapter: string;
  questionType: 'mcq' | 'short' | 'long' | 'true-false';
  numberOfQuestions: number;
  difficulty: 'easy' | 'medium' | 'hard';
}