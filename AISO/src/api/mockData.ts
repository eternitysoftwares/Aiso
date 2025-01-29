export const mockBooks = {
  'Mathematics': {
    1: [
      { id: 'math1_1', title: 'Math Magic Class 1', subject: 'Mathematics', class: 1, language: 'English' },
    ],
    6: [
      { id: 'math6_1', title: 'Mathematics Class 6', subject: 'Mathematics', class: 6, language: 'English' },
    ],
    // Add more classes as needed
  },
  'Science': {
    6: [
      { id: 'sci6_1', title: 'Science Class 6', subject: 'Science', class: 6, language: 'English' },
    ],
    // Add more classes as needed
  },
};

export const mockChapters = {
  'math1_1': [
    { id: 'ch1_1', title: 'Shapes and Space', bookId: 'math1_1', chapterNumber: 1 },
    { id: 'ch1_2', title: 'Numbers from One to Nine', bookId: 'math1_1', chapterNumber: 2 },
  ],
  'math6_1': [
    { id: 'ch6_1', title: 'Knowing Our Numbers', bookId: 'math6_1', chapterNumber: 1 },
    { id: 'ch6_2', title: 'Whole Numbers', bookId: 'math6_1', chapterNumber: 2 },
  ],
  'sci6_1': [
    { id: 'ch6_sci_1', title: 'Food: Where Does it Come From?', bookId: 'sci6_1', chapterNumber: 1 },
    { id: 'ch6_sci_2', title: 'Components of Food', bookId: 'sci6_1', chapterNumber: 2 },
  ],
};