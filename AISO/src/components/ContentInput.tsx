import React from 'react';

interface Props {
  content: string;
  onChange: (content: string) => void;
  disabled?: boolean;
}

export const ContentInput: React.FC<Props> = ({ content, onChange, disabled }) => {
  return (
    <div className="col-span-2">
      <label className="block text-gray-300 mb-2">Custom Content (Optional)</label>
      <textarea
        className="w-full bg-black/30 border border-gray-700 rounded-lg p-3 text-gray-100 min-h-[100px] backdrop-blur-sm"
        placeholder="Enter your content here to generate questions from custom text instead of NCERT chapters..."
        value={content}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};