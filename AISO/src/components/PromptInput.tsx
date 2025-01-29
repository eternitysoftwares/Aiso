import React from 'react';

interface Props {
  prompt: string;
  onChange: (prompt: string) => void;
}

export const PromptInput: React.FC<Props> = ({ prompt, onChange }) => {
  return (
    <div className="col-span-2">
      <label className="block text-gray-700 dark:text-gray-300 mb-2">Enter Your Prompt</label>
      <textarea
        className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-gray-100 min-h-[100px] dark:backdrop-blur-sm"
        placeholder="Enter your prompt to generate questions (e.g., 'Generate questions about the solar system focusing on planets and their characteristics')"
        value={prompt}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};