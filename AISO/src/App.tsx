import React from 'react';
import { Header } from './components/Header';
import { QuestionForm } from './components/QuestionForm';
import { QuestionList } from './components/QuestionList';
import { QuestionBankPage } from './components/QuestionBank/QuestionBankPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { FormData, Question } from './types';
import { generateQuestions } from './api/geminiApi';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'generate' | 'bank'>('generate');
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [currentFormData, setCurrentFormData] = React.useState<FormData | null>(null);

  const handleFormSubmit = async (formData: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const generatedQuestions = await generateQuestions(formData);
      setQuestions(generatedQuestions);
      setCurrentFormData(formData);
    } catch (error) {
      setError('Failed to generate questions. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="container mx-auto px-4 py-8">
          {currentPage === 'generate' ? (
            <>
              <QuestionForm onSubmit={handleFormSubmit} loading={loading} />
              
              {error && (
                <div className="text-red-600 dark:text-red-400 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-center mt-4">
                  {error}
                </div>
              )}
              
              {questions.length > 0 && !loading && (
                <QuestionList 
                  questions={questions} 
                  currentFormData={currentFormData || undefined}
                />
              )}
            </>
          ) : (
            <QuestionBankPage />
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}