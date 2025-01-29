import React from 'react';
import { FormData } from '../types';
import { ContentInput } from './ContentInput';
import { PromptInput } from './PromptInput';
import { InputModeTabs } from './InputModeTabs';
import { NCERTForm } from './NCERTForm';
import { QuestionSettings } from './QuestionSettings';

interface Props {
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

export const QuestionForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const [inputMode, setInputMode] = React.useState<'ncert' | 'custom' | 'prompt'>('ncert');
  const [formData, setFormData] = React.useState<FormData>({
    content: '',
    prompt: '',
    class: '',
    subject: '',
    book: '',
    chapter: '',
    questionType: 'mcq',
    numberOfQuestions: 5,
    difficulty: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const renderInputSection = () => {
    switch (inputMode) {
      case 'prompt':
        return (
          <PromptInput 
            prompt={formData.prompt || ''}
            onChange={(prompt) => updateFormData({ prompt })}
          />
        );
      case 'custom':
        return (
          <ContentInput 
            content={formData.content || ''}
            onChange={(content) => updateFormData({ content })}
          />
        );
      case 'ncert':
        return <NCERTForm formData={formData} onChange={updateFormData} />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <InputModeTabs activeMode={inputMode} onModeChange={setInputMode} />
      
      <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        {renderInputSection()}
        
        <QuestionSettings 
          formData={formData}
          onChange={updateFormData}
        />

        <button 
          type="submit"
          disabled={loading || (inputMode === 'ncert' ? !formData.chapter : inputMode === 'custom' ? !formData.content : !formData.prompt)}
          className="w-full bg-black dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-600 hover:bg-gray-800 dark:hover:from-blue-700 dark:hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        >
          {loading ? 'Generating Questions...' : 'Generate Questions'}
        </button>
      </form>
    </div>
  );
};