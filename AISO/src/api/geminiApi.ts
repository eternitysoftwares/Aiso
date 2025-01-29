import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('Your api key');

export async function generateQuestions(params: {
  content?: string;
  chapter?: string;
  subject?: string;
  questionType: string;
  numberOfQuestions: number;
  difficulty: string;
}) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = params.content
    ? `Generate ${params.numberOfQuestions} ${params.difficulty} ${params.questionType} questions about: ${params.content}`
    : `Generate ${params.numberOfQuestions} ${params.difficulty} ${params.questionType} questions about ${params.subject} chapter: ${params.chapter}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the response into individual questions
    const questions = text
      .split('\n\n')
      .filter((q) => q.trim())
      .map((q, i) => ({
        id: `q${i}`,
        text: q.trim(),
        difficulty: params.difficulty,
        type: params.questionType,
      }));

    return questions;
  } catch (error) {
    console.error('Error generating questions:', error);
    throw new Error('Failed to generate questions');
  }
}
