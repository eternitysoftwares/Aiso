import { ncertData } from '../data/ncertData';
import { NCERTBook, NCERTChapter } from '../types/ncert';

export const fetchNCERTBooks = async (classNumber: number, subject: string): Promise<NCERTBook[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  try {
    const classData = ncertData[classNumber.toString()];
    if (!classData) {
      console.error(`No data found for class ${classNumber}`);
      return [];
    }
    
    const subjectData = classData.subjects[subject];
    if (!subjectData) {
      console.error(`No data found for subject ${subject} in class ${classNumber}`);
      return [];
    }
    
    return subjectData.books;
  } catch (error) {
    console.error('Error fetching NCERT books:', error);
    throw new Error('Failed to fetch books');
  }
};

export const fetchNCERTChapters = async (bookId: string): Promise<NCERTChapter[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  try {
    // Find the book in our data
    for (const classData of Object.values(ncertData)) {
      for (const subject of Object.values(classData.subjects)) {
        const book = subject.books.find(b => b.id === bookId);
        if (book) {
          return book.chapters;
        }
      }
    }
    console.error(`No chapters found for book ${bookId}`);
    return [];
  } catch (error) {
    console.error('Error fetching chapters:', error);
    throw new Error('Failed to fetch chapters');
  }
};